import { siteConfig } from "@/config/site";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "India",
    },
    knowsAbout: [
      "Landing Page Provider",
      "High-Converting Landing Pages",
      "UI/UX Design & Product Strategy",
      "Custom Software Engineering",
      "Enterprise ERP Systems",
      "Search Engine Optimization (SEO)",
      "Generative Engine Optimization (GEO)",
    ],
  };

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Software Developer`,
    image: `${siteConfig.url}/images/prfoile.png`,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hyderabad",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.3850,
      longitude: 78.4867,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "09:00",
      closes: "20:00",
    },
    areaServed: ["Hyderabad", "Guntur", "Vizag", "India", "United States", "United Kingdom", "Germany", "Worldwide"],
    serviceOfferings: [
      {
        "@type": "Offer",
        name: "High-Converting Landing Page Design & Development",
        description: "Custom high-converting landing pages built to maximize conversion rates and search engine visibility.",
      },
      {
        "@type": "Offer",
        name: "UI/UX Design Studio Services",
        description: "Bespoke user interface and user experience design for web applications, SaaS products, and mobile apps.",
      },
      {
        "@type": "Offer",
        name: "Custom Software & Enterprise ERP Development",
        description: "Purpose-built business software, operational ERP systems, and internal workflow automation.",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How are the landing pages built by Avinash Nandipati optimized?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avinash Nandipati (+91 8074763113) builds custom high-converting, SEO-optimized, and GEO-enhanced landing pages designed to maximize conversion rates and search engine visibility.",
        },
      },
      {
        "@type": "Question",
        name: "What UI/UX design and development services does Avinash Nandipati offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avinash Nandipati offers end-to-end user experience design, Figma wireframing, responsive interface styling, and modern front-end web engineering in React and Next.js.",
        },
      },
      {
        "@type": "Question",
        name: "How to contact Avinash Nandipati for custom software or landing pages?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can reach out directly via Phone call or WhatsApp at +91 8074763113 or email nandipatiavinash05@gmail.com.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
