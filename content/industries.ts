export type IndustryChallenge = {
  title: string;
  description: string;
};

export type IndustryService = {
  title: string;
  slug: string;
  description: string;
};

export type Industry = {
  slug: string;
  name: string;
  shortName: string;
  metaDescription: string;
  keywords: string[];
  heroHeadline: string;
  heroDescription: string;
  tldr: string;
  intro: string;
  challenges: IndustryChallenge[];
  services: IndustryService[];
  stats: { value: string; label: string }[];
  cta: { headline: string; subline: string };
  publishedAt: string;
  updatedAt: string;
};

export const industries: Industry[] = [
  {
    slug: "oem",
    name: "Original Equipment Manufacturers (OEMs)",
    shortName: "OEMs",
    metaDescription:
      "Cloud transformation for automotive OEMs. Connected vehicle platforms, SAP S/4HANA migration, TISAX compliance, and DevOps at enterprise scale. Apex Cloud Consulting.",
    keywords: [
      "OEM cloud transformation",
      "automotive OEM cloud",
      "OEM SAP migration",
      "OEM connected car platform",
      "automotive OEM TISAX",
    ],
    heroHeadline: "Cloud Transformation for Automotive OEMs",
    heroDescription:
      "OEMs face the most complex cloud transformation challenge in any industry: enterprise-scale SAP landscapes, millions of connected vehicles, TISAX supplier requirements, and the pressure to ship software faster than ever. We've delivered it.",
    tldr: "Apex Cloud Consulting works with automotive OEMs on three primary challenges: SAP S/4HANA migration at enterprise scale, connected vehicle backend platforms, and TISAX/WP.29 compliance architecture. Typical OEM engagement size: €500k–3M over 12–24 months.",
    intro:
      "Original equipment manufacturers sit at the center of the automotive industry's cloud transformation. They operate the most complex IT landscapes — spanning ERP, connected vehicle backends, manufacturing execution systems, supplier portals, and digital services — and face the most demanding compliance obligations: TISAX, UNECE WP.29, GDPR, and IATF 16949.\n\nApex Cloud Consulting works with OEM IT organizations and digital units across the transformation journey: from initial cloud strategy and vendor selection through to large-scale program execution and hypercare.",
    challenges: [
      {
        title: "SAP Modernization at Enterprise Scale",
        description:
          "OEM SAP landscapes span hundreds of company codes, millions of transactions per day, and thousands of custom ABAP objects accumulated over 20+ years. The path to S/4HANA requires a structured approach to custom code remediation, phased migration waves, and zero-downtime cutover strategies.",
      },
      {
        title: "Connected Vehicle Platform Scalability",
        description:
          "As vehicle fleets grow into the millions, connected car backends must scale accordingly. MQTT broker infrastructure, OTA update campaigns, and digital service APIs all require architecture designed for automotive-grade reliability and the unique security requirements of WP.29 R155 and R156.",
      },
      {
        title: "TISAX and Supplier Data Governance",
        description:
          "OEMs must protect their own sensitive data — prototype specifications, technical drawings, production plans — while also ensuring their supplier network meets TISAX requirements. Cloud data platforms must be designed with TISAX data classification and sharing controls from the outset.",
      },
      {
        title: "DevOps at Scale Across Distributed Teams",
        description:
          "OEM software development spans embedded, cloud, and enterprise software teams across multiple countries. Consistent CI/CD practices, developer platform tooling, and software delivery metrics are essential for managing development velocity and quality at this scale.",
      },
    ],
    services: [
      {
        title: "SAP on Cloud",
        slug: "sap-on-cloud",
        description: "RISE with SAP assessment, ECC to S/4HANA migration, and BTP integration for OEM SAP landscapes.",
      },
      {
        title: "Connected Car Platform Engineering",
        slug: "connected-car",
        description: "MQTT infrastructure, OTA update backends, and WP.29-compliant connected vehicle platform architecture.",
      },
      {
        title: "Security & Compliance",
        slug: "security-compliance",
        description: "TISAX assessment preparation, WP.29 CSMS implementation, and cloud security posture management.",
      },
      {
        title: "Cloud Migration & Modernization",
        slug: "cloud-migration",
        description: "Enterprise-scale cloud migration strategy, landing zone design, and wave execution.",
      },
    ],
    stats: [
      { value: "5+", label: "OEM Programs Delivered" },
      { value: "12–24mo", label: "Typical Engagement" },
      { value: "Zero", label: "Production Downtime Incidents" },
      { value: "R155/R156", label: "WP.29 Compliance Track Record" },
    ],
    cta: {
      headline: "Ready to Accelerate Your OEM Cloud Journey?",
      subline: "Our senior architects have delivered complex OEM programs. Let's discuss your transformation roadmap.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "tier-1",
    name: "Tier-1 Automotive Suppliers",
    shortName: "Tier-1 Suppliers",
    metaDescription:
      "Cloud solutions for Tier-1 automotive suppliers. TISAX compliance, SAP migration, manufacturing analytics, and DevOps for supplier IT. Apex Cloud Consulting.",
    keywords: [
      "Tier-1 supplier cloud",
      "automotive supplier TISAX",
      "Tier-1 SAP migration",
      "supplier manufacturing analytics",
      "automotive supplier DevOps",
    ],
    heroHeadline: "Cloud Solutions for Tier-1 Automotive Suppliers",
    heroDescription:
      "Tier-1 suppliers face the pressure of OEM cloud requirements from above and cost efficiency demands from their own operations. TISAX compliance, SAP modernization, and manufacturing analytics — we deliver all three for the supplier context.",
    tldr: "Tier-1 suppliers typically engage Apex for TISAX readiness (8–12 weeks), SAP S/4HANA migration (12–18 months), or manufacturing analytics platforms (6–10 weeks to first production insights). Engagements are sized for supplier IT budgets — not OEM-scale programs.",
    intro:
      "Tier-1 suppliers occupy a demanding position in the automotive cloud landscape. They face TISAX assessment requirements from OEM customers, SAP modernization pressure from the 2027 ECC deadline, and growing expectation to provide digital visibility into their manufacturing operations.\n\nUnlike OEMs, Tier-1 suppliers typically have smaller IT organizations, tighter budgets, and less tolerance for long, expensive consulting programs. Apex's Tier-1 practice is built around this reality: structured, outcome-focused engagements with defined deliverables and realistic timelines.",
    challenges: [
      {
        title: "TISAX Compliance for OEM Data",
        description:
          "Most Tier-1 suppliers handle prototype data, technical drawings, or production-relevant OEM information that requires TISAX assessment. Cloud adoption — hosting data in AWS, Azure, or GCP — changes how TISAX controls are met but does not reduce the obligation. Many suppliers reach out after failing a pre-assessment gap review.",
      },
      {
        title: "SAP ECC End of Maintenance (2027)",
        description:
          "Tier-1 SAP landscapes are often complex: multiple plants, multiple company codes, and years of custom code for automotive-specific processes (JIT/JIS scheduling, IATF 16949 quality records, EDI/ODETTE). The path to S/4HANA requires a pragmatic approach that fits supplier IT capacity.",
      },
      {
        title: "Manufacturing Data Visibility",
        description:
          "OEM customers are increasingly requesting digital manufacturing transparency: quality data sharing, OEE visibility, and supply chain event feeds. Tier-1 suppliers need manufacturing data platforms that satisfy OEM requirements without exposing sensitive production data.",
      },
      {
        title: "DevOps for Embedded and Cloud Software",
        description:
          "Tier-1 suppliers producing software-intensive vehicle systems — ADAS, powertrain control, connectivity modules — need CI/CD pipelines that handle both embedded and cloud-native software, with compliance gates for AUTOSAR, MISRA C, and cybersecurity validation.",
      },
    ],
    services: [
      {
        title: "Security & Compliance",
        slug: "security-compliance",
        description: "TISAX readiness assessment, gap remediation, and audit preparation for Tier-1 supplier contexts.",
      },
      {
        title: "SAP on Cloud",
        slug: "sap-on-cloud",
        description: "Right-sized S/4HANA migration for Tier-1 landscapes, including IATF 16949 quality process preservation.",
      },
      {
        title: "Data & Analytics Platforms",
        slug: "data-analytics",
        description: "Manufacturing quality analytics, OEE dashboards, and supply chain data platforms for Tier-1 operations.",
      },
      {
        title: "DevOps & CI/CD Transformation",
        slug: "devops-cicd",
        description: "CI/CD pipeline design for embedded and cloud software teams in Tier-1 development environments.",
      },
    ],
    stats: [
      { value: "TISAX L2", label: "Most Common Target Level" },
      { value: "8–12 wks", label: "TISAX Readiness Engagement" },
      { value: "40–60%", label: "Typical Custom Code Reduction" },
      { value: "6", label: "Countries with Tier-1 Projects" },
    ],
    cta: {
      headline: "TISAX Deadline or SAP 2027 Pressure?",
      subline: "We know the Tier-1 supplier context. Let's scope a practical engagement for your situation.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    slug: "mobility-startups",
    name: "Mobility Startups & New Entrants",
    shortName: "Mobility Startups",
    metaDescription:
      "Cloud architecture and platform engineering for mobility startups and EV entrants. Connected car backends, data platforms, DevOps, and GDPR compliance. Apex Cloud Consulting.",
    keywords: [
      "mobility startup cloud",
      "EV startup cloud platform",
      "connected car startup",
      "mobility startup DevOps",
      "new entrant automotive cloud",
    ],
    heroHeadline: "Cloud Engineering for Mobility Startups",
    heroDescription:
      "Mobility startups and EV new entrants are building the automotive industry's future — but they're also operating with startup constraints. We provide senior engineering expertise when you need it, without the overhead of building a large in-house platform team.",
    tldr: "Apex works with mobility startups on connected vehicle backend architecture, data platform design, and DevOps setup. We're often a fractional CTO / staff-augmentation partner for Series A–C companies building their cloud infrastructure for the first time. Engagements start from €50k.",
    intro:
      "Mobility startups face a unique set of cloud challenges: they need to move fast, but the automotive domain has regulatory complexity that punishes shortcuts. GDPR for vehicle data, UNECE WP.29 requirements for OTA updates, and the reliability expectations of automotive customers all apply even to early-stage companies.\n\nApex's startup practice provides senior technical leadership for teams that don't yet have (or can't afford) a full-time cloud architect or platform team. We help startups make smart foundational decisions that avoid expensive rewrites as they scale.",
    challenges: [
      {
        title: "Building the Right Foundation Fast",
        description:
          "Startup engineering teams under pressure to ship features often make cloud architecture decisions that create significant technical debt. A poorly designed connected car backend — wrong MQTT topology, missing certificate management, no multi-tenancy — can cost 10x more to fix at scale than to get right initially.",
      },
      {
        title: "GDPR for Vehicle and User Data",
        description:
          "Mobility startups collect sensitive data: location history, driving behavior, user identity linked to vehicles. GDPR Article 9 applies to this data. Designing GDPR-compliant data collection and storage from the start is far cheaper than retrofitting it — and avoiding a GDPR enforcement action is existential for an early-stage company.",
      },
      {
        title: "WP.29 Compliance for OTA Updates",
        description:
          "EV and connected vehicle startups planning OTA software updates to vehicles in EU markets need a Software Update Management System compliant with UNECE WP.29 R156. Building this into the OTA architecture from the start avoids type approval delays later.",
      },
      {
        title: "Scaling from Pilot to Commercial Fleet",
        description:
          "A platform that works for a 1,000-vehicle pilot often breaks at 100,000 vehicles. MQTT broker capacity, database query patterns, and event streaming throughput all need to be designed for 100x growth — even if you're not there yet. We design systems that scale without rewrites.",
      },
    ],
    services: [
      {
        title: "Connected Car Platform Engineering",
        slug: "connected-car",
        description: "Backend platform design for connected vehicles: MQTT, OTA updates, digital services, and fleet APIs.",
      },
      {
        title: "Data & Analytics Platforms",
        slug: "data-analytics",
        description: "GDPR-compliant vehicle data pipelines, analytics platforms, and self-service BI for mobility data.",
      },
      {
        title: "DevOps & CI/CD Transformation",
        slug: "devops-cicd",
        description: "CI/CD pipeline setup, IaC implementation, and developer platform for fast-moving startup engineering teams.",
      },
      {
        title: "Security & Compliance",
        slug: "security-compliance",
        description: "WP.29 R155/R156 compliance architecture, GDPR data handling design, and cloud security baseline.",
      },
    ],
    stats: [
      { value: "Series A–C", label: "Typical Client Stage" },
      { value: "€50k+", label: "Engagements Start From" },
      { value: "4 wks", label: "Time to Architecture Design" },
      { value: "100x", label: "Scale We Design For" },
    ],
    cta: {
      headline: "Building a Mobility Product? Start With the Right Architecture.",
      subline: "A 90-minute architecture review can save months of technical debt. Book one with our team.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
];
