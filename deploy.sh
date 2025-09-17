#!/bin/bash

# Kolory dla lepszej czytelności
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Konfiguracja
PROJECT_DIR="/d/karol-leszczynski-portfolio"
S3_BUCKET="karolleszczynski-portfolio"
CLOUDFRONT_DISTRIBUTION_ID="E5XFF2KOROL5S"
AWS_REGION="eu-north-1"

echo -e "${YELLOW}🚀 Starting deployment process...${NC}"

# Przejście do katalogu projektu
cd "$PROJECT_DIR" || exit 1

# 1. Clean poprzedni build
echo -e "${YELLOW}📦 Cleaning previous build...${NC}"
rm -rf out/
rm -rf .next/

# 2. Install dependencies (opcjonalne - zakomentuj jeśli nie potrzebujesz)
# echo -e "${YELLOW}📦 Installing dependencies...${NC}"
# npm install

# 3. Build aplikacji
echo -e "${YELLOW}🔨 Building Next.js application...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed!${NC}"
    exit 1
fi

# 4. Sprawdzenie czy folder 'out' istnieje
if [ ! -d "out" ]; then
    echo -e "${RED}❌ Build directory 'out' not found!${NC}"
    exit 1
fi

# 5. Upload do S3 z sync
echo -e "${YELLOW}☁️  Uploading to S3 bucket: $S3_BUCKET${NC}"

# Sync wszystkich plików
aws s3 sync out/ s3://$S3_BUCKET/ \
    --delete \
    --region $AWS_REGION \
    --cache-control "public, max-age=31536000, immutable" \
    --exclude "*.html" \
    --exclude "*.json" \
    --exclude "*.xml"

# Upload HTML z krótszym cache (dla łatwiejszych aktualizacji)
aws s3 sync out/ s3://$S3_BUCKET/ \
    --delete \
    --region $AWS_REGION \
    --cache-control "public, max-age=0, must-revalidate" \
    --exclude "*" \
    --include "*.html" \
    --content-type "text/html; charset=utf-8"

# Upload JSON files
aws s3 sync out/ s3://$S3_BUCKET/ \
    --delete \
    --region $AWS_REGION \
    --cache-control "public, max-age=0, must-revalidate" \
    --exclude "*" \
    --include "*.json" \
    --content-type "application/json"

# Upload sitemap
aws s3 sync out/ s3://$S3_BUCKET/ \
    --delete \
    --region $AWS_REGION \
    --cache-control "public, max-age=86400" \
    --exclude "*" \
    --include "sitemap.xml" \
    --include "robots.txt"

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Upload to S3 failed!${NC}"
    exit 1
fi

# 6. Utworzenie invalidacji CloudFront
echo -e "${YELLOW}🔄 Creating CloudFront invalidation...${NC}"

INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Invalidation created with ID: $INVALIDATION_ID${NC}"
else
    echo -e "${RED}❌ Failed to create invalidation!${NC}"
    exit 1
fi

# 7. Opcjonalnie: Czekaj na zakończenie invalidacji
echo -e "${YELLOW}⏳ Waiting for invalidation to complete...${NC}"
aws cloudfront wait invalidation-completed \
    --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
    --id $INVALIDATION_ID

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Invalidation completed!${NC}"
else
    echo -e "${YELLOW}⚠️  Invalidation is still in progress. Check status later.${NC}"
fi

# 8. Podsumowanie
echo -e "${GREEN}🎉 Deployment completed successfully!${NC}"
echo -e "${GREEN}Your site is available at:${NC}"
echo -e "  - https://www.karol-leszczynski.pl"
echo -e "  - https://dgv6cek7k53q5.cloudfront.net"
echo ""
echo -e "${YELLOW}📊 Deployment details:${NC}"
echo -e "  - S3 Bucket: $S3_BUCKET"
echo -e "  - CloudFront Distribution: $CLOUDFRONT_DISTRIBUTION_ID"
echo -e "  - Invalidation ID: $INVALIDATION_ID"