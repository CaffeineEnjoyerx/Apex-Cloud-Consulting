// OFF-001 to OFF-009: Directory Profile Content
// Ready-to-submit copy for all major B2B and partner directories

export type DirectoryProfile = {
  platform: string;
  category: "b2b-review" | "cloud-partner" | "business-data";
  submissionUrl?: string;
  headline: string;
  tagline: string;
  shortDescription: string; // 150–200 chars
  longDescription: string; // 500–800 chars
  services: string[];
  industries: string[];
  specializations: string[];
  keyStats: { label: string; value: string }[];
  clientTypes: string[];
  geographies: string[];
  certifications: string[];
  awards?: string[];
  contact: {
    website: string;
    email: string;
    phone?: string;
    headquarters: string;
    founded: number;
    employees: string;
  };
  reviewAsk?: string; // Message to send to clients asking for reviews
};

// OFF-001: Clutch Profile
export const clutchProfile: DirectoryProfile = {
  platform: "Clutch",
  category: "b2b-review",
  submissionUrl: "https://clutch.co/profile/apex-cloud-consulting",
  headline: "Apex Cloud Consulting — Automotive Cloud Transformation Specialists",
  tagline: "Drive the Future of Mobility — in the Cloud.",
  shortDescription:
    "Apex Cloud Consulting specializes in cloud migration, DevOps, and connected car platform engineering for automotive OEMs, Tier-1 suppliers, and mobility startups across Europe and North America.",
  longDescription:
    "Apex Cloud Consulting is the go-to cloud partner for the automotive industry. Founded in 2018 by cloud architects and automotive IT veterans, we bring together deep hyperscaler expertise and hands-on automotive domain knowledge that generalist consultancies simply cannot match.\n\nWe work with OEMs, Tier-1 suppliers, and connected car platforms to deliver cloud migrations that respect the realities of automotive production environments — 24/7 uptime requirements, TISAX compliance, SAP integration complexity, and safety-critical system constraints.\n\nOur core service areas include:\n• Cloud Migration & Modernization (AWS, Azure, GCP)\n• DevOps & CI/CD Transformation for automotive software teams\n• Data & Analytics Platforms (telematics, quality, production data)\n• Connected Car Platform Engineering (OTA, remote diagnostics, vehicle-to-cloud)\n• SAP on Cloud (S/4HANA migrations, RISE, BTP)\n• TISAX & Compliance Advisory\n\nWith 200+ cloud migrations delivered across Europe and North America, a 98% client satisfaction rate, and average cost reductions of 40% post-migration, Apex Cloud has earned its reputation as the automotive industry's most trusted cloud partner.\n\nWe are an AWS Premier Consulting Partner, Microsoft Solutions Partner, Google Cloud Partner, and SAP Gold Partner — and we hold TISAX Assessment Provider status at Level 2.",
  services: [
    "Cloud Migration & Modernization",
    "DevOps & CI/CD Transformation",
    "Data & Analytics Platform Engineering",
    "Connected Car Platform Engineering",
    "SAP S/4HANA on Cloud",
    "TISAX & Compliance Advisory",
    "Cloud Security & Governance",
    "FinOps & Cloud Cost Optimization",
  ],
  industries: [
    "Automotive",
    "Manufacturing",
    "Mobility & Transportation",
    "Supply Chain & Logistics",
  ],
  specializations: [
    "Automotive Cloud Transformation",
    "TISAX Compliance",
    "OEM & Tier-1 Supplier IT",
    "Connected Vehicle Backends",
    "SAP on Hyperscalers",
    "Industrial IoT",
  ],
  keyStats: [
    { label: "Cloud migrations delivered", value: "200+" },
    { label: "Client satisfaction rate", value: "98%" },
    { label: "Average cost reduction", value: "40%" },
    { label: "Consultants", value: "120+" },
    { label: "Founded", value: "2018" },
  ],
  clientTypes: [
    "Automotive OEMs",
    "Tier-1 Automotive Suppliers",
    "Connected Car Platform Teams",
    "Mobility Startups",
    "Automotive Software Vendors",
  ],
  geographies: ["Germany", "Europe", "North America", "DACH Region"],
  certifications: [
    "AWS Premier Consulting Partner",
    "Microsoft Solutions Partner — Digital & App Innovation",
    "Google Cloud Partner",
    "SAP Gold Partner",
    "TISAX Assessment Provider (Level 2)",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "hello@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
  reviewAsk:
    "Dear [Client Name],\n\nThank you for our collaboration on [project]. Your feedback means a great deal to us and helps other automotive companies find the right cloud partner.\n\nWould you be willing to leave us a brief review on Clutch? It takes about 5 minutes and covers your experience working with us.\n\n[Clutch review link]\n\nWe appreciate your continued trust in Apex Cloud.\n\nBest regards,\n[Consultant Name]",
};

// OFF-002: GoodFirms Profile
export const goodFirmsProfile: DirectoryProfile = {
  platform: "GoodFirms",
  category: "b2b-review",
  submissionUrl: "https://www.goodfirms.co/company/apex-cloud-consulting",
  headline: "Apex Cloud Consulting — Cloud Services for Automotive & Manufacturing",
  tagline: "Where automotive expertise meets hyperscale cloud delivery.",
  shortDescription:
    "Apex Cloud Consulting delivers cloud migration, DevOps automation, and connected car platform engineering exclusively for the automotive industry. AWS Premier Partner, Microsoft Solutions Partner, Google Cloud Partner.",
  longDescription:
    "Apex Cloud Consulting is a specialist cloud consultancy serving automotive OEMs, Tier-1 suppliers, and connected car teams since 2018. Unlike generalist IT firms, we focus exclusively on the automotive sector — meaning every engagement benefits from domain knowledge built across hundreds of automotive cloud projects.\n\nOur Stuttgart-based team of 120+ consultants has delivered cloud transformations for manufacturers across the DACH region, Western Europe, and North America. We are certified partners with all major hyperscalers (AWS, Azure, GCP) and maintain deep SAP delivery capability including S/4HANA cloud migrations.\n\nIndustry compliance is built into everything we do. We are a TISAX Assessment Provider at Level 2, and our consultants are trained in automotive-specific standards including IATF 16949, VDA guidelines, and WP.29 cybersecurity regulations.\n\nKey service offerings:\n• End-to-end cloud migrations for production-critical automotive environments\n• DevOps and CI/CD platform transformation\n• Real-time data and analytics platforms for telematics, quality, and production\n• Connected vehicle backend engineering (OTA updates, remote diagnostics)\n• SAP on Cloud — S/4HANA RISE migrations and BTP architecture\n• Cloud security, TISAX readiness, and FinOps optimization\n\nWe pride ourselves on technical depth over slide decks — our consultants architect solutions and write production code alongside your teams.",
  services: [
    "Cloud Consulting",
    "Cloud Migration",
    "DevOps Consulting",
    "IoT Development",
    "Big Data & Analytics",
    "SAP Consulting",
    "Cybersecurity",
    "IT Strategy & Consulting",
  ],
  industries: ["Automotive", "Manufacturing", "Mobility", "Industrial Technology"],
  specializations: [
    "Automotive Cloud Migration",
    "TISAX Advisory",
    "Connected Vehicle Platforms",
    "SAP S/4HANA Cloud",
  ],
  keyStats: [
    { label: "Projects completed", value: "200+" },
    { label: "Satisfaction score", value: "98%" },
    { label: "Cost savings delivered", value: "40% avg." },
    { label: "Team size", value: "120+" },
  ],
  clientTypes: ["OEMs", "Tier-1 Suppliers", "Automotive Software Vendors"],
  geographies: ["Germany", "DACH", "Europe", "North America"],
  certifications: [
    "AWS Premier Consulting Partner",
    "Microsoft Solutions Partner",
    "Google Cloud Partner",
    "SAP Gold Partner",
    "TISAX Level 2 Provider",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "hello@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-003: The Manifest Profile
export const manifestProfile: DirectoryProfile = {
  platform: "The Manifest",
  category: "b2b-review",
  headline: "Apex Cloud Consulting",
  tagline: "Cloud transformation specialists for the automotive industry.",
  shortDescription:
    "Stuttgart-based cloud consultancy delivering end-to-end migration, DevOps, and connected car platform engineering for automotive OEMs and Tier-1 suppliers. 200+ migrations, 98% satisfaction.",
  longDescription:
    "Apex Cloud Consulting is a specialist cloud consultancy that serves one industry: automotive. Founded in 2018 by a team of cloud architects and automotive IT veterans, we exist to help OEMs, Tier-1 suppliers, and connected car teams transform their technology foundations without disrupting the production operations that keep vehicles moving off assembly lines.\n\nOur work spans the full cloud transformation lifecycle — from initial cloud readiness assessment and business case development, through architecture design, migration execution, and post-cutover hypercare. We operate as an embedded partner, not a distant advisor.\n\nWe are one of only a handful of consultancies in Europe to hold partner status with AWS, Microsoft, Google Cloud, and SAP simultaneously — and we are a TISAX Assessment Provider at Level 2, which means we can assess our own clients' information security posture during an engagement, accelerating compliance timelines significantly.\n\nNoteworthy capabilities: zero-downtime migration strategies for 24/7 manufacturing environments; connected vehicle backend engineering including OTA update platforms, remote diagnostics backends, and vehicle-to-cloud data pipelines; and FinOps programs that have delivered average cost reductions of 40% within 12 months of initial cloud deployment.",
  services: [
    "Cloud Migration",
    "DevOps Automation",
    "Connected Car Engineering",
    "Data Platforms",
    "SAP Cloud",
    "TISAX Compliance",
  ],
  industries: ["Automotive", "Manufacturing", "Mobility"],
  specializations: ["Automotive Cloud", "Connected Vehicles", "TISAX"],
  keyStats: [
    { label: "Migrations", value: "200+" },
    { label: "Satisfaction", value: "98%" },
    { label: "Cost reduction", value: "40% avg." },
  ],
  clientTypes: ["OEMs", "Tier-1 Suppliers", "Mobility Startups"],
  geographies: ["Germany", "Europe", "North America"],
  certifications: [
    "AWS Premier Consulting Partner",
    "Microsoft Solutions Partner",
    "Google Cloud Partner",
    "SAP Gold Partner",
    "TISAX Level 2",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "hello@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-004: AWS Partner Finder
export const awsPartnerProfile: DirectoryProfile = {
  platform: "AWS Partner Finder",
  category: "cloud-partner",
  submissionUrl: "https://partners.amazonaws.com/partners/apex-cloud-consulting",
  headline: "Apex Cloud Consulting — AWS Premier Partner for Automotive",
  tagline: "The automotive cloud migration specialist in the AWS Partner Network.",
  shortDescription:
    "Apex Cloud Consulting is an AWS Premier Consulting Partner specializing in automotive cloud migrations, DevOps transformation, data platforms, and connected vehicle backends for OEMs and Tier-1 suppliers.",
  longDescription:
    "Apex Cloud Consulting is a Stuttgart-based AWS Premier Consulting Partner with deep specialization in automotive and manufacturing cloud transformation. Since 2018, we have delivered 200+ cloud migrations on AWS for automotive customers across Europe and North America.\n\nOur AWS capabilities span:\n• Migration Competency (lift-and-shift, re-platform, re-architect for production manufacturing environments)\n• DevOps Competency (CI/CD pipelines, infrastructure as code with AWS CDK and Terraform)\n• Data & Analytics Competency (AWS data lakes, Kinesis real-time streaming for telematics, Redshift)\n• IoT Competency (AWS IoT Core integration for connected vehicle platforms, Greengrass for edge)\n• SAP on AWS (S/4HANA RISE migrations, BTP on AWS, SAP data tiering)\n• Security & Compliance (TISAX-aligned architectures, AWS Security Hub, automated compliance monitoring)\n\nOur automotive domain expertise is unmatched in the AWS Partner Network — we speak IATF 16949, VDA, TISAX, AUTOSAR, and WP.29 natively, enabling us to translate compliance requirements into AWS architecture decisions that hold up to auditor scrutiny.\n\nWe are a TISAX Assessment Provider at Level 2 and can conduct TISAX-scoped information security assessments as part of cloud engagement workstreams.",
  services: [
    "AWS Cloud Migration",
    "AWS DevOps & CI/CD",
    "AWS Data & Analytics",
    "AWS IoT for Automotive",
    "SAP on AWS",
    "AWS Security & Compliance",
    "AWS FinOps",
    "AWS Well-Architected Reviews",
  ],
  industries: ["Automotive", "Manufacturing", "Connected Vehicle", "Supply Chain"],
  specializations: [
    "AWS Migration Competency",
    "AWS DevOps Competency",
    "AWS Data & Analytics",
    "AWS IoT Competency",
    "Automotive Cloud",
    "TISAX on AWS",
  ],
  keyStats: [
    { label: "AWS migrations delivered", value: "200+" },
    { label: "AWS certifications held (team)", value: "60+" },
    { label: "Customer satisfaction", value: "98%" },
  ],
  clientTypes: ["Automotive OEMs", "Tier-1 Suppliers", "Automotive ISVs"],
  geographies: ["DACH", "Europe", "North America"],
  certifications: [
    "AWS Premier Consulting Partner",
    "AWS Migration Competency",
    "AWS DevOps Competency",
    "TISAX Level 2 Provider",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "aws@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-005: Azure Marketplace / Microsoft Partner
export const azurePartnerProfile: DirectoryProfile = {
  platform: "Azure Marketplace & Microsoft Partner",
  category: "cloud-partner",
  headline: "Apex Cloud Consulting — Microsoft Solutions Partner for Automotive Cloud",
  tagline: "Automotive-grade Azure deployments by a Microsoft Solutions Partner.",
  shortDescription:
    "Microsoft Solutions Partner (Digital & App Innovation) with deep Azure specialization for automotive OEMs and manufacturers. Expert in Azure Migrate, Azure IoT Hub, SAP on Azure, and TISAX-aligned cloud architectures.",
  longDescription:
    "Apex Cloud Consulting holds Microsoft Solutions Partner status in Digital & App Innovation, reflecting our depth of Azure delivery capability across 120+ certified consultants and 200+ completed cloud projects.\n\nWe specialize in Azure deployments for automotive clients who need to balance cloud agility with the reliability and compliance standards their industry demands.\n\nAzure service specializations:\n• Azure Migrate for legacy manufacturing and ERP workloads\n• Azure IoT Hub and Digital Twins for connected vehicle platforms\n• Azure Data Factory, Synapse Analytics, and Databricks for automotive data platforms\n• SAP on Azure — HANA Large Instance, RISE on Azure, BTP\n• Azure DevOps and GitHub Actions for CI/CD pipeline transformation\n• Azure Security Center, Defender for Cloud, and Microsoft Sentinel for TISAX-aligned security posture\n• Azure Landing Zone design and governance frameworks for enterprise automotive IT\n\nWe are experienced in TISAX compliance projects on Azure, including designing shared responsibility models that satisfy VDA ISA assessors and implementing Azure Policy sets aligned to automotive data classification requirements.",
  services: [
    "Azure Migration",
    "Azure IoT Solutions",
    "Azure Data Platform",
    "SAP on Azure",
    "Azure DevOps",
    "Azure Security & Compliance",
    "Azure Landing Zone Design",
  ],
  industries: ["Automotive", "Manufacturing", "Connected Vehicle"],
  specializations: [
    "Azure for Automotive",
    "Azure IoT Hub",
    "SAP on Azure",
    "TISAX on Azure",
    "Microsoft Solutions Partner",
  ],
  keyStats: [
    { label: "Azure projects", value: "80+" },
    { label: "Azure certified consultants", value: "45+" },
    { label: "Industries served", value: "Automotive & Manufacturing" },
  ],
  clientTypes: ["OEMs", "Tier-1 Suppliers", "Automotive Manufacturers"],
  geographies: ["DACH", "Europe", "North America"],
  certifications: [
    "Microsoft Solutions Partner — Digital & App Innovation",
    "TISAX Level 2 Provider",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "azure@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-006: GCP Partner Directory
export const gcpPartnerProfile: DirectoryProfile = {
  platform: "Google Cloud Partner Directory",
  category: "cloud-partner",
  headline: "Apex Cloud Consulting — Google Cloud Partner for Automotive & Manufacturing",
  tagline: "Bringing Google Cloud's data and AI capabilities to the automotive industry.",
  shortDescription:
    "Google Cloud Partner delivering data analytics, IoT, and cloud migration services for automotive OEMs and suppliers. Expert in BigQuery, Pub/Sub for telematics, Vertex AI, and Anthos for hybrid automotive environments.",
  longDescription:
    "Apex Cloud Consulting is a certified Google Cloud Partner with a focus on automotive and manufacturing clients who want to leverage Google Cloud's industry-leading data, analytics, and AI capabilities.\n\nAutomotive-specific GCP capabilities:\n• BigQuery data warehousing for production quality, telematics, and supply chain analytics\n• Pub/Sub and Dataflow for real-time vehicle telemetry ingestion and processing\n• Vertex AI for predictive maintenance, defect detection, and demand forecasting models\n• Cloud IoT Core for connected vehicle fleet management\n• Anthos for hybrid cloud deployments bridging on-premise manufacturing systems with GCP\n• GKE and Cloud Run for containerized automotive backend services\n• Cloud Security Command Center and VPC Service Controls for TISAX-aligned security architectures\n\nWe help automotive clients build the data foundations that enable next-generation connected car services, digital manufacturing, and AI-powered quality management — on Google Cloud's globally distributed, low-latency infrastructure.",
  services: [
    "GCP Data & Analytics",
    "GCP IoT for Automotive",
    "GCP Machine Learning & AI",
    "GCP Migration",
    "GCP Security",
    "Anthos Hybrid Cloud",
  ],
  industries: ["Automotive", "Manufacturing", "Connected Vehicle"],
  specializations: [
    "BigQuery for Automotive",
    "GCP IoT & Telemetry",
    "Vertex AI",
    "Anthos Hybrid Cloud",
  ],
  keyStats: [
    { label: "GCP projects", value: "60+" },
    { label: "GCP certified consultants", value: "30+" },
  ],
  clientTypes: ["Automotive OEMs", "Tier-1 Suppliers", "Mobility Platforms"],
  geographies: ["DACH", "Europe"],
  certifications: [
    "Google Cloud Partner",
    "TISAX Level 2 Provider",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "gcp@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-007: SAP Partner Finder
export const sapPartnerProfile: DirectoryProfile = {
  platform: "SAP Partner Finder",
  category: "cloud-partner",
  headline: "Apex Cloud Consulting — SAP Gold Partner, Cloud Migration Specialist",
  tagline: "Your automotive SAP estate, reborn in the cloud.",
  shortDescription:
    "SAP Gold Partner specializing in S/4HANA cloud migrations for automotive manufacturers. Expert in SAP RISE, SAP BTP, and seamless SAP-to-cloud integrations for IATF 16949 environments.",
  longDescription:
    "Apex Cloud Consulting is an SAP Gold Partner with proven delivery capability in S/4HANA cloud migrations for the automotive and manufacturing sector. We combine SAP expertise with hyperscaler delivery on AWS, Azure, and GCP to give our clients the full picture — not just an SAP roadmap or just a cloud migration plan.\n\nSAP service specializations:\n• SAP S/4HANA migration from ECC — business case, technical assessment, migration execution\n• SAP RISE with S/4HANA — evaluation, contracting support, and technical implementation\n• SAP Business Technology Platform (BTP) — integration architecture, extension development, and API management\n• SAP on AWS, SAP on Azure, SAP on GCP — all three hyperscaler pathways\n• SAP data tiering and archiving strategies for cost optimization\n• Integration of SAP with surrounding cloud-native systems (IoT, analytics, CRM)\n\nFor automotive clients, SAP migration decisions carry additional complexity: IATF 16949 production data traceability, integration with MES and SCADA systems, and the need for zero-downtime migration strategies in 24/7 manufacturing environments. We have designed migration blueprints for all of these scenarios and delivered multiple successful go-lives.\n\nOur TISAX Assessment Provider status (Level 2) means we can advise on the compliance implications of SAP hosting changes and help document the shared responsibility model for your TISAX auditor.",
  services: [
    "SAP S/4HANA Migration",
    "SAP RISE Advisory",
    "SAP BTP Architecture",
    "SAP on Hyperscalers (AWS/Azure/GCP)",
    "SAP Data Optimization",
    "SAP-Cloud Integration",
  ],
  industries: ["Automotive", "Manufacturing", "Supply Chain"],
  specializations: [
    "S/4HANA Cloud Migration",
    "SAP RISE for Automotive",
    "SAP BTP",
    "SAP + TISAX Compliance",
  ],
  keyStats: [
    { label: "SAP migrations delivered", value: "50+" },
    { label: "SAP certified consultants", value: "40+" },
  ],
  clientTypes: ["Automotive OEMs", "Tier-1 Suppliers", "Automotive Manufacturers"],
  geographies: ["DACH", "Europe"],
  certifications: [
    "SAP Gold Partner",
    "AWS Premier Consulting Partner",
    "Microsoft Solutions Partner",
    "TISAX Level 2 Provider",
  ],
  contact: {
    website: "https://apex-cloud.de",
    email: "sap@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-008: Crunchbase
export const crunchbaseProfile: DirectoryProfile = {
  platform: "Crunchbase",
  category: "business-data",
  headline: "Apex Cloud Consulting",
  tagline: "Drive the Future of Mobility — in the Cloud.",
  shortDescription:
    "Apex Cloud Consulting is a Stuttgart-based IT consultancy specializing in cloud migration, DevOps, and connected car platform engineering for automotive OEMs, Tier-1 suppliers, and mobility startups.",
  longDescription:
    "Apex Cloud Consulting was founded in 2018 by cloud architects and automotive IT veterans with a single conviction: the automotive industry deserves a cloud partner that truly understands it.\n\nThe company delivers end-to-end cloud transformation services — cloud migration, DevOps automation, data & analytics platforms, connected vehicle backend engineering, SAP on cloud, and TISAX & compliance advisory — to automotive OEMs, Tier-1 suppliers, and mobility companies across Europe and North America.\n\nWith 120+ consultants, 200+ cloud migrations delivered, and certified partner status with AWS, Microsoft, Google Cloud, and SAP, Apex Cloud is the automotive industry's most specialized cloud consultancy in the DACH region and beyond.",
  services: [
    "IT Services & Consulting",
    "Cloud Computing",
    "Automotive Technology",
    "B2B",
  ],
  industries: ["Automotive", "Cloud Computing", "Information Technology"],
  specializations: ["Automotive Cloud", "Connected Car", "TISAX"],
  keyStats: [
    { label: "Founded", value: "2018" },
    { label: "Employees", value: "51–200" },
    { label: "HQ", value: "Stuttgart, Germany" },
  ],
  clientTypes: ["Enterprise", "B2B", "Automotive"],
  geographies: ["Germany", "Europe", "North America"],
  certifications: [],
  contact: {
    website: "https://apex-cloud.de",
    email: "hello@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
    founded: 2018,
    employees: "51–200",
  },
};

// OFF-009: kununu / Glassdoor (Employer Branding)
export const kununuProfile = {
  platform: "kununu / Glassdoor",
  category: "employer-branding",
  companyName: "Apex Cloud Consulting",
  headline: "Apex Cloud Consulting — Work at the Intersection of Automotive and Cloud",
  shortDescription:
    "Join a 120-strong team of cloud architects and automotive IT experts on a mission to accelerate the automotive industry's transition to cloud-native operations. Stuttgart HQ with remote-first culture.",
  fullDescription:
    "At Apex Cloud Consulting, you work on challenging projects that genuinely matter — helping the companies that build cars transition to the cloud platforms that will define mobility for the next decade.\n\nWe are a team of cloud architects, DevOps engineers, data engineers, and automotive IT veterans united by technical depth and a genuine passion for complex transformation challenges. We write production code alongside clients, not just slide decks.\n\nWhat makes Apex Cloud different:\n• Deep industry specialization — you will become an expert in automotive cloud, not a generalist\n• Technical autonomy — senior consultants lead architectures from day one\n• Flat hierarchy — your ideas are heard regardless of your title\n• Remote-first with Stuttgart HQ — we trust you to get the job done\n• Continuous learning — AWS, Azure, GCP, and SAP training & certification budget\n• International exposure — projects across DACH, Europe, and occasionally North America\n\nWe are looking for cloud architects, DevOps engineers, data engineers, SAP consultants, and automotive IT specialists who want to build their careers at the leading automotive cloud consultancy in Europe.",
  benefits: [
    "Competitive market-rate compensation",
    "Annual cloud certification training budget (€2,000+)",
    "Remote-first working model",
    "Company MacBook or equivalent hardware",
    "30 days PTO",
    "Access to co-working spaces across Germany",
    "Team offsites twice per year",
    "Direct mentorship from senior cloud architects",
  ],
  openRoles: [
    "Senior Cloud Architect (AWS / Azure / GCP)",
    "DevOps Engineer",
    "Data Engineer — Automotive Analytics",
    "SAP Basis / S/4HANA Consultant",
    "TISAX & Compliance Advisor",
    "Technical Account Manager — Automotive",
  ],
  cultureKeywords: [
    "Technical depth",
    "Flat hierarchy",
    "Remote-friendly",
    "Learning culture",
    "Automotive passion",
    "Engineer-led",
  ],
  contact: {
    website: "https://apex-cloud.de/careers",
    email: "careers@apex-cloud.de",
    headquarters: "Stuttgart, Germany",
  },
};

export const allDirectoryProfiles = {
  clutch: clutchProfile,
  goodFirms: goodFirmsProfile,
  manifest: manifestProfile,
  aws: awsPartnerProfile,
  azure: azurePartnerProfile,
  gcp: gcpPartnerProfile,
  sap: sapPartnerProfile,
  crunchbase: crunchbaseProfile,
  kununu: kununuProfile,
};
