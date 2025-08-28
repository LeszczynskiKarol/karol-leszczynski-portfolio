/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.eu-north-1.amazonaws.com",
        pathname: "/piszemy.com.pl/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.worldvectorlogo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.anthropic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "python.langchain.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.citypng.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.sanity.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.gstatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.semrush.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "digitalx.pl",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "axiom.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "quarto.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "entangled.github.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bookdown.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.prisma.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "download.logo.wine",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vectorseek.com",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
