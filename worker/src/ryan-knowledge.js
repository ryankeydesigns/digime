export const RYAN_KNOWLEDGE = {
  version: "2026-08-20",
  lastVerified: "2026-08-20",
  identity: {
    name: "Ryan Key",
    brand: "RyanKey Designs",
    role: "Chief Web Design & Branding Advisor",
    location: "Kuala Lumpur, Malaysia",
    experience: "More than 20 years of web design and brand strategy experience.",
    positioning: [
      "Full-time freelance web designer",
      "Web Design and Digital Marketing Trainer",
      "AI Personal Branding Consultant"
    ],
    approach: "Ryan helps SMEs build professional websites, strengthen brand value and improve business growth through Google SEO, Google Business, digital marketing and AI-ready website architecture."
  },
  contact: {
    website: "https://ryankey.com.my",
    whatsapp: "+6012-7740280",
    whatsappUrl: "https://wa.me/60127740280",
    email: "me@ryankey.com.my",
    base: "Kuala Lumpur, Malaysia"
  },
  coreServices: [
    "Professional corporate website design and development",
    "Brand strategy and digital positioning",
    "Google SEO foundations and search visibility",
    "Google Business Profile creation, updating and optimization",
    "AI-ready websites and AI business solutions",
    "Website management, updates, backup, hosting and company email setup",
    "Website, digital marketing and AI application training"
  ],
  packages: [
    {
      name: "AI Website Package",
      price: "Original RM4,800; special RM2,800",
      suitableFor: "Businesses, research organizations and innovative projects seeking an interactive, bilingual and AI-ready brand experience.",
      includes: [
        "AI-ready website strategy and original custom design",
        "Interactive one-page or multi-section website experience",
        "Chinese and English website, upgradeable to three languages",
        "Dynamic scrolling, micro-interactions and visual storytelling",
        "Clear information architecture and content classification",
        "AI-search and traditional SEO foundations",
        "Responsive mobile, tablet and desktop design",
        "WhatsApp, custom contact form, Google Maps and social buttons",
        "Google Analytics and Google Business setup or update",
        "Optional AI interactive functions depending on project requirements"
      ],
      demo: "https://demo1.ryankeycourse.com/"
    },
    {
      name: "Corporate Website Package",
      price: "RM5,000 / USD1,250",
      suitableFor: "Companies that need a professional online presence and complete presentation of their company, services, products and information.",
      summary: "Generally 6 to 8 independent pages with responsive design, company branding, news or blog, inquiry form, WhatsApp, Maps, Analytics and supporting setup."
    },
    {
      name: "E-commerce Website Package",
      price: "RM6,500 / USD1,625",
      suitableFor: "Businesses preparing for online sales and requiring product, order and payment management.",
      summary: "Includes product categories, cart, checkout, online payment integration, customer accounts, order management, invoices and responsive design."
    },
    {
      name: "Single-page Website Package",
      price: "RM3,200 / USD800",
      suitableFor: "Small businesses, personal brands, startups and campaign promotion.",
      summary: "One scrolling page with key content sections, responsive custom design, WhatsApp, form, Maps, gallery, social buttons and basic analytics setup."
    }
  ],
  packageNotes: [
    "Production estimates shown on Digime are generally 3 to 4 weeks and depend on confirmed requirements and content readiness.",
    "Final scope, availability, delivery date and quotation must be confirmed directly with Ryan.",
    "Do not promise discounts, results or included items that are not in this knowledge file."
  ],
  additionalServices: [
    "Website management, updates and backup — RM500 monthly",
    "Website hosting setup — RM500 monthly",
    "Company email service setup — RM500 monthly",
    "Company training course — RM500 per day",
    "Google Business service — RM500 monthly",
    "AI personal brand website package — RM5,000 one-time"
  ],
  communityRoles: [
    "Kuala Lumpur Jinjang SME — Digital Information",
    "SJK (C) Kepong 3 — Website Management",
    "SUMA College | School of Digital Marketing — Web & Website Instructor",
    "Freelancer Community — Founder"
  ],
  selectedIndustryCollaborations: [
    "Monsolutions Sdn Bhd — Digital Growth Partner",
    "Oh My Training Academy — design training collaboration",
    "Simplified Management Consultancy S/B — website and email support",
    "Dato Wong — website architecture and Google SEO",
    "See Woh Engineering Works S/B — website growth solution",
    "Qarbotech Sdn Bhd — website and email support",
    "Finnlight International School — website support",
    "Initial Group — business digital consulting"
  ],
  selectedClientWebsites: [
    "Berlateh Construction — https://berlateh.com/",
    "Qarbotech — https://qarbotech.com/",
    "Initial Group — https://initialgroup.com.my/",
    "Aiwa Singapore — https://aiwa.com.sg/",
    "See Woh Engineering Works — http://seewoh.com.my/",
    "Interflour — https://interflour.com/",
    "CIPC — https://cipc.com.my/",
    "SJK (C) Kepong 3 — https://kepong3.edu.my/",
    "Finnlight — https://finnlight.com.my/",
    "Freelancer Community / related client portfolio and additional selected work are displayed on Digime."
  ],
  principles: [
    "A website should do more than look attractive; it should strengthen brand trust, improve customer experience, support Google visibility and create business value.",
    "Recommendations should match the client's business stage, goals, content, timeline and budget.",
    "Ryan combines web design, brand strategy, Google visibility and AI-ready architecture."
  ],
  answerRules: [
    "Reply in the visitor's language: Simplified Chinese or English.",
    "Use only facts in this knowledge file and verified conversation context.",
    "Do not confuse Ryan Key with another person who has a similar name.",
    "If information is missing, outdated or uncertain, say that it requires Ryan's confirmation.",
    "Never claim guaranteed SEO rankings, sales results, availability or delivery dates.",
    "Never request passwords, payment-card details, identity documents or sensitive personal information.",
    "When a visitor wants a quotation or is ready to proceed, direct them to WhatsApp +6012-7740280."
  ],
  sources: [
    {
      title: "RyanKey Designs official website",
      url: "https://ryankey.com.my/",
      scope: "Profile, positioning, services, roles, collaborations and contact details"
    },
    {
      title: "RyanKey Designs services page",
      url: "https://ryankey.com.my/services/",
      scope: "Website packages and service descriptions"
    },
    {
      title: "RyanKey Digime",
      url: "https://ryankey.com.my/",
      scope: "Current Digime packages, selected client websites, feedback and contact actions"
    }
  ]
};

export function buildKnowledgeContext() {
  return JSON.stringify(RYAN_KNOWLEDGE, null, 2);
}
