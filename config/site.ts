// Single source of truth for identity, contact details, and metadata.
// Edit this file to rebrand the entire site.

export const siteConfig = {
  name: "Avinash Nandipati",
  role: "Software Developer",
  studioName: "Avinash Nandipati",
  phone: "+91 8074763113",
  phoneFormatted: "+91 8074763113",
  tel: "tel:+918074763113",
  whatsapp: "https://wa.me/918074763113?text=Hi%20Avinash,%20I'd%20like%20to%20discuss%20a%20project.",
  bookCallWhatsapp: "https://wa.me/918074763113?text=Hi%20Avinash,%20I'd%20like%20to%20book%20a%20call%20to%20discuss%20a%20project.",
  tagline: "High-Converting Landing Pages, User Experience & Customized Software Solutions.",
  description:
    "Avinash Nandipati is a software developer based in Hyderabad, serving clients across India (including Guntur, Vizag) and globally (including the US, UK, Germany). He focuses on understanding clients' operational challenges and engineering customized, tailored software solutions and landing pages that drive business efficiency.",
  url: "https://avinashnandipati.com",
  email: "nandipatiavinash05@gmail.com",
  location: "Hyderabad, India (Serving Clients in Guntur, Vizag, US, UK, Germany & Globally)",
  availability: "Currently accepting customized software & high-converting landing page engagements",
  contactChannels: {
    phone: "tel:+918074763113",
    whatsapp: "https://wa.me/918074763113?text=Hi%20Avinash,%20I'd%20like%20to%20discuss%20a%20project.",
    email: "mailto:nandipatiavinash05@gmail.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
