Write-Host "🏗️ Building..." -ForegroundColor Yellow
npm run build

Write-Host "📦 Uploading to S3..." -ForegroundColor Cyan
aws s3 sync out/ s3://karolleszczynski-portfolio --delete

Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Magenta
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

Write-Host "✅ Deploy complete!" -ForegroundColor Green
Write-Host "🌐 View at: https://karol-leszczynski.pl" -ForegroundColor Blue