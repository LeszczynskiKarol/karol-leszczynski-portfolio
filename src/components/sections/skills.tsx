// src/components/sections/skills.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {
  Code2,
  Database,
  Cloud,
  Brain,
  Globe,
  Server,
  ShoppingCart,
  FileText,
} from "lucide-react";

const skillCategories = {
  Frontend: {
    icon: <Code2 className="w-5 h-5" />,
    skills: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      },
      {
        name: "Framer Motion",
        logo: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      },
      {
        name: "Redux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
      },
    ],
  },
  Backend: {
    icon: <Server className="w-5 h-5" />,
    skills: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "PHP",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
      },
      {
        name: "FastAPI",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      },
      {
        name: "GraphQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
      },
    ],
  },
  "Bazy danych": {
    icon: <Database className="w-5 h-5" />,
    skills: [
      {
        name: "MongoDB",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Prisma",
        logo: "https://www.prisma.io/images/favicon-32x32.png",
      },
      {
        name: "TypeORM",
        logo: "https://avatars.githubusercontent.com/u/20165699?v=4",
      },
    ],
  },
  "Cloud & DevOps": {
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Vercel",
        logo: "https://www.svgrepo.com/show/327408/logo-vercel.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Cloudflare",
        logo: "https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg",
      },
      {
        name: "Nginx",
        logo: "https://download.logo.wine/logo/Nginx/Nginx-Logo.wine.png",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
  },
  "AI & Automatyzacja": {
    icon: <Brain className="w-5 h-5" />,
    skills: [
      { name: "Anthropic AI", logo: "https://www.anthropic.com/favicon.ico" },
      {
        name: "OpenAI",
        logo: "https://www.svgrepo.com/show/306500/openai.svg",
      },
      {
        name: "Make.com",
        logo: "https://images.ctfassets.net/un655fb9wln6/11sTQC2LhhAtJyb7ptQvEl/6c2dbec03b3a2830a24e09e913ad46cc/Make-app-icon.png",
      },
      {
        name: "Airtable",
        logo: "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg",
      },
      {
        name: "Zapier",
        logo: "https://vectorseek.com/wp-content/uploads/2025/03/zapier-Logo-PNG-SVG-Vector-1.png",
      },
      {
        name: "LangChain",
        logo: "https://python.langchain.com/img/brand/wordmark.png",
      },
    ],
  },
  "CMS & E-commerce": {
    icon: <ShoppingCart className="w-5 h-5" />,
    skills: [
      {
        name: "WordPress",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      },
      {
        name: "WooCommerce",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/woocommerce/woocommerce-original.svg",
      },
      {
        name: "Strapi",
        logo: "https://cdn.worldvectorlogo.com/logos/strapi-full-logo-dark.svg",
      },
      {
        name: "Stripe",
        logo: "https://www.citypng.com/public/uploads/preview/hd-stripe-official-logo-png-701751694777755j0aa3puxte.png",
      },
      {
        name: "Shopify",
        logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
      },
      {
        name: "Sanity",
        logo: "https://www.sanity.io/static/images/favicons/favicon-32x32.png",
      },
    ],
  },
  "Marketing & SEO": {
    icon: <Globe className="w-5 h-5" />,
    skills: [
      {
        name: "Google Analytics",
        logo: "https://www.svgrepo.com/show/353804/google-analytics.svg",
      },
      {
        name: "Google Search Console",
        logo: "https://www.gstatic.com/images/branding/product/1x/search_console_512dp.png",
      },
      {
        name: "Semrush",
        logo: "https://cdn.semrush.com/kb/static/img/logo.b536aa5942c4.png",
      },
      {
        name: "Mailchimp",
        logo: "https://digitalx.pl/wp-content/uploads/Mailchimp-logo.png",
      },
      {
        name: "Meta Business",
        logo: "https://axiom.ai/automate-images/meta-logo.png",
      },
      {
        name: "Google Ads",
        logo: "https://www.svgrepo.com/show/303108/google-icon-logo.svg",
      },
    ],
  },
  "Publishing & Content": {
    icon: <FileText className="w-5 h-5" />,
    skills: [
      {
        name: "LaTeX",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg",
      },
      { name: "Quarto", logo: "https://quarto.org/quarto.png" },
      {
        name: "Pandoc",
        logo: "https://entangled.github.io/bootstrap/img/pandoc.png",
      },
      {
        name: "R Markdown",
        logo: "https://bookdown.org/yihui/rmarkdown/images/hex-rmarkdown.png",
      },
      {
        name: "BibTeX",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/30/BibTeX_logo.svg",
      },
      {
        name: "Copywriting",
        logo: "https://cdn-icons-png.flaticon.com/512/2799/2799954.png",
      },
    ],
  },
};

export function SkillsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Stack technologiczny</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Narzędzia i technologie, z którymi pracuję
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillCategories).map(
            ([category, data], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-background/50 backdrop-blur-sm border border-primary/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {data.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{category}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {data.skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                      className="flex flex-col items-center gap-2 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 relative group-hover:scale-110 transition-transform">
                        <Image
                          src={skill.logo}
                          alt={skill.name}
                          fill
                          className="object-contain"
                          sizes="40px"
                        />
                      </div>
                      <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>

        {/* Stats 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Lat doświadczenia", value: "15+" },
            { label: "Projektów ukończonych", value: "50+" },
            { label: "Publikacji", value: "11" },
            { label: "Napisanych tekstów", value: "5000+" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>*/}
      </div>
    </section>
  );
}
