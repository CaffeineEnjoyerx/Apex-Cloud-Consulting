// OFF-016: Press Releases
// Two distribution-ready press releases for Apex Cloud Consulting
// Target outlets: Automobilwoche, Heise Online, t3n, Computerwoche, VDA press channels

export type PressRelease = {
  id: string;
  title: string;
  subtitle: string;
  dateline: string;
  body: string[];
  boilerplate: string;
  contact: {
    name: string;
    title: string;
    email: string;
    phone: string;
  };
  keywords: string[];
  targetOutlets: string[];
  embargo?: string;
};

// PR-001: TISAX Assessment Provider announcement / expansion
export const pressRelease1: PressRelease = {
  id: "PR-001",
  title:
    "Apex Cloud Consulting Achieves TISAX Assessment Provider Status Level 2 — Enabling Automotive Clients to Accelerate Cloud Compliance",
  subtitle:
    "Stuttgart-based cloud consultancy becomes one of the first in Germany to combine hyperscaler partner status (AWS, Azure, GCP) with TISAX Assessment Provider accreditation",
  dateline: "STUTTGART, Germany — May 2026",
  body: [
    "Apex Cloud Consulting, a specialist cloud consultancy serving automotive OEMs and Tier-1 suppliers, today announced it has achieved TISAX (Trusted Information Security Assessment Exchange) Assessment Provider status at Level 2 — a milestone that enables the company to conduct TISAX-scoped information security assessments for its automotive clients as an integrated component of cloud transformation engagements.",

    "The accreditation, awarded by the ENX Association, positions Apex Cloud as one of only a handful of cloud consultancies in Europe holding simultaneous TISAX Assessment Provider status and premier partner status with all three major hyperscalers: AWS, Microsoft Azure, and Google Cloud Platform.",

    "\"The combination of TISAX assessment capability and deep cloud delivery expertise is something our automotive clients have been asking for,\" said Dr. Klaus Mayer, CEO of Apex Cloud Consulting. \"Until now, clients faced a coordination overhead — engaging a separate TISAX assessor while working with a cloud partner. We can now deliver the compliance assessment and the cloud architecture as a single integrated workstream, which substantially reduces the time and cost of reaching a TISAX-valid cloud deployment.\"",

    "TISAX is the automotive industry's primary information security assessment and exchange mechanism, required by most major European OEMs as a condition of supplier onboarding and data exchange. As automotive workloads migrate to public cloud environments, TISAX compliance in cloud-hosted configurations has become an increasingly critical challenge for suppliers and platform providers.",

    "The Apex Cloud TISAX + Cloud offering combines an initial information security gap assessment aligned to the VDA ISA questionnaire, cloud architecture design that embeds TISAX controls at the infrastructure level, and documentation support for the assessor-facing evidence package. The integrated approach has reduced TISAX readiness timelines by an average of 30% in pilot engagements.",

    "Apex Cloud Consulting currently serves automotive clients across Germany, Austria, Switzerland, France, the United Kingdom, and North America. The company's 120+ consultants hold certifications across AWS, Azure, GCP, and SAP, and have collectively delivered more than 200 cloud migrations in automotive and manufacturing environments.",

    "For more information about Apex Cloud Consulting's TISAX and cloud compliance services, visit apex-cloud.de/services/security-compliance or contact hello@apex-cloud.de.",
  ],
  boilerplate:
    "About Apex Cloud Consulting\nApex Cloud Consulting is a Stuttgart-based cloud consultancy founded in 2018, specializing exclusively in cloud transformation for automotive OEMs, Tier-1 suppliers, and connected car platform teams. With 120+ consultants and 200+ cloud migrations delivered, Apex Cloud is the automotive industry's most specialized cloud partner in the DACH region. The company holds AWS Premier Consulting Partner, Microsoft Solutions Partner (Digital & App Innovation), Google Cloud Partner, SAP Gold Partner, and TISAX Assessment Provider (Level 2) status. For more information, visit apex-cloud.de.",
  contact: {
    name: "Sophie Richter",
    title: "Head of Marketing & Communications",
    email: "press@apex-cloud.de",
    phone: "+49 711 123 4567",
  },
  keywords: [
    "TISAX",
    "cloud compliance",
    "automotive cloud",
    "information security",
    "VDA ISA",
    "AWS partner",
    "Azure partner",
    "cloud migration",
    "Apex Cloud Consulting",
    "Stuttgart",
  ],
  targetOutlets: [
    "Automobilwoche",
    "Automobil Industrie",
    "Heise Online",
    "Computerwoche",
    "CIO.de",
    "VDA press channel",
    "ENX Association press",
    "IT-Matchmaker News",
  ],
};

// PR-002: Expansion / 200+ migrations milestone
export const pressRelease2: PressRelease = {
  id: "PR-002",
  title:
    "Apex Cloud Consulting Surpasses 200 Cloud Migrations in Automotive Industry, Expands Presence in North American Market",
  subtitle:
    "Eight-year-old Stuttgart consultancy marks delivery milestone with launch of North American operations hub and new Connected Car Platform practice",
  dateline: "STUTTGART, Germany / DETROIT, Michigan — May 2026",
  body: [
    "Apex Cloud Consulting, the automotive industry's leading specialist cloud consultancy, today announced that it has surpassed 200 completed cloud migrations across its automotive and manufacturing client base — a milestone that coincides with the launch of a dedicated North American operations hub in Detroit, Michigan, and the formal launch of its Connected Car Platform practice.",

    "The 200-migration milestone, reached across eight years of operations since the company's founding in Stuttgart in 2018, spans engagements ranging from factory automation system migrations and SAP S/4HANA cloud deployments to connected vehicle backend platforms supporting fleets of over one million vehicles.",

    "\"Each of those 200 migrations represents a real organization that made a significant bet on cloud transformation in one of the most demanding operating environments in the world,\" said Dr. Klaus Mayer, CEO of Apex Cloud Consulting. \"Automotive manufacturing doesn't offer much margin for downtime, data integrity failures, or compliance gaps. We're proud of the track record our teams have built and the trust our clients place in us.\"",

    "The new North American operations hub in Detroit reflects growing demand from US-based OEMs, transplant manufacturers, and Tier-1 suppliers operating under both European and American regulatory environments. The Detroit office will support clients navigating multi-region cloud architectures, compliance frameworks including SOC 2 and ITAR alongside TISAX, and the unique manufacturing IT landscape of North American automotive production.",

    "The Connected Car Platform practice — led by Thomas Bergmann, formerly of a major European OEM's digital services organization — formalizes Apex Cloud's existing delivery capability in connected vehicle backend engineering. The practice specializes in OTA update platform engineering, vehicle-to-cloud data pipeline architecture, remote diagnostics backend infrastructure, and UNECE R155/WP.29 cybersecurity compliance for cloud-hosted systems.",

    "\"The software-defined vehicle is no longer a future concept — it's the current product roadmap at every major OEM we work with,\" said Bergmann. \"The backend cloud infrastructure supporting those vehicles needs to meet automotive-grade reliability, security, and compliance standards. That's exactly what this practice delivers.\"",

    "Apex Cloud Consulting's expansion comes against the backdrop of accelerating cloud adoption in the automotive industry, driven by software-defined vehicle programs, real-time analytics requirements, and OEM mandates for suppliers to demonstrate cloud-ready data management capability.",

    "The company currently employs 120+ consultants across Europe and North America and holds certified partner status with AWS, Microsoft, Google Cloud, and SAP.",
  ],
  boilerplate:
    "About Apex Cloud Consulting\nApex Cloud Consulting is a Stuttgart-based cloud consultancy founded in 2018, specializing exclusively in cloud transformation for automotive OEMs, Tier-1 suppliers, and connected car platform teams. With 120+ consultants and 200+ cloud migrations delivered, Apex Cloud is the automotive industry's most specialized cloud partner in the DACH region. The company holds AWS Premier Consulting Partner, Microsoft Solutions Partner (Digital & App Innovation), Google Cloud Partner, SAP Gold Partner, and TISAX Assessment Provider (Level 2) status. For more information, visit apex-cloud.de.",
  contact: {
    name: "Sophie Richter",
    title: "Head of Marketing & Communications",
    email: "press@apex-cloud.de",
    phone: "+49 711 123 4567",
  },
  keywords: [
    "automotive cloud",
    "cloud migration",
    "connected car",
    "North America expansion",
    "OTA platform",
    "WP.29",
    "Apex Cloud Consulting",
    "Stuttgart",
    "Detroit",
    "SDV",
  ],
  targetOutlets: [
    "Automobilwoche",
    "Automobil Produktion",
    "Heise Online",
    "t3n",
    "Computerwoche",
    "Automotive News Europe",
    "WardsAuto",
    "CIO.de",
    "IT-Matchmaker News",
    "PR Newswire DACH",
  ],
};

export const allPressReleases = [pressRelease1, pressRelease2];

export const pressDistributionGuide = {
  timing: "Issue press releases on Tuesday or Wednesday mornings (08:00–10:00 CET) for maximum editorial pickup",
  wireServices: [
    { name: "PR Newswire DACH", notes: "Best reach for German automotive trade press" },
    { name: "Presseportal.de", notes: "Primary German-language portal; free basic listing" },
    { name: "Business Wire Europe", notes: "Strong for pan-European distribution" },
  ],
  directOutreach: [
    { outlet: "Automobilwoche", contact: "redaktion@automobilwoche.de", notes: "Pitch digitalization & IT angle" },
    { outlet: "Heise Online / iX Magazine", contact: "redaktion@heise.de", notes: "Technical depth; emphasize cloud architecture angle" },
    { outlet: "t3n", contact: "redaktion@t3n.de", notes: "Startup/growth angle; North America expansion is a good hook" },
    { outlet: "Computerwoche", contact: "redaktion@computerwoche.de", notes: "CIO audience; TISAX compliance angle resonates" },
    { outlet: "CIO.de", contact: "redaktion@cio.de", notes: "Digital transformation angle; milestone story" },
  ],
  followUp: "Follow up 48 hours after initial email if no response. One follow-up maximum per journalist.",
};
