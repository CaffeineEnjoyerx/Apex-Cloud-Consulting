export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  certifications: string[];
  linkedIn?: string;
  initials: string;
  avatarColor: string;
};

export const teamPageCopy = {
  headline: "The People Behind Apex Cloud",
  subheadline:
    "Our senior consultants combine backgrounds in automotive engineering, hyperscaler architecture, and enterprise IT. They've built production systems at OEMs, led SAP transformations at Tier-1 suppliers, and architected connected vehicle backends from the ground up.",
  publishedAt: "2026-05-04",
  updatedAt: "2026-05-04",
};

export const teamMembers: TeamMember[] = [
  {
    id: "markus-bauer",
    name: "Markus Bauer",
    role: "Managing Director & Cloud Architect",
    bio: "Markus founded Apex Cloud Consulting in 2018 after 12 years at BMW Group, where he led the architecture team responsible for cloud transformation of vehicle logistics and production planning systems. He holds AWS and Azure solution architect certifications and is a regular speaker at the Automotive Cloud Summit. He oversees architecture governance and complex migration engagements.",
    expertise: [
      "Cloud architecture",
      "Cloud migration strategy",
      "Multi-cloud environments",
      "Manufacturing IT",
      "OEM digital transformation",
    ],
    certifications: [
      "AWS Certified Solutions Architect – Professional",
      "Microsoft Azure Solutions Architect Expert",
      "TOGAF 9 Certified",
    ],
    linkedIn: "https://www.linkedin.com/in/markus-bauer-apex",
    initials: "MB",
    avatarColor: "bg-blue-700",
  },
  {
    id: "sarah-hofmann",
    name: "Sarah Hofmann",
    role: "Head of Connected Car Practice",
    bio: "Sarah leads Apex's connected vehicle engineering practice. Before joining Apex, she spent eight years at Continental, designing OTA update infrastructure and vehicle telematics backends for Tier-1 production programs. She architected the connected car backend for a major European OEM's electric vehicle platform, handling two million concurrent vehicle connections at peak. Sarah is Apex's primary author on UNECE WP.29 compliance topics.",
    expertise: [
      "Connected car platforms",
      "OTA update architecture",
      "MQTT/AMQP at scale",
      "UNECE WP.29 compliance",
      "Vehicle data pipelines",
    ],
    certifications: [
      "AWS Certified Solutions Architect – Associate",
      "CAN/FlexRay Network Design (Vector Academy)",
      "UNECE WP.29 Cybersecurity Implementation",
    ],
    linkedIn: "https://www.linkedin.com/in/sarah-hofmann-apex",
    initials: "SH",
    avatarColor: "bg-indigo-600",
  },
  {
    id: "thomas-weber",
    name: "Thomas Weber",
    role: "Senior SAP Practice Lead",
    bio: "Thomas has led SAP transformation projects in the automotive sector for 15 years, including five full ECC-to-S/4HANA migrations for OEMs and Tier-1 suppliers across Germany and Eastern Europe. He is one of a small number of consultants in Germany with delivery experience across all three RISE with SAP deployment options. Thomas holds SAP Certified Application Professional status in PP, MM, and QM modules.",
    expertise: [
      "SAP S/4HANA migration",
      "RISE with SAP",
      "SAP BTP integration",
      "Automotive ERP processes (PP, MM, QM)",
      "Custom code remediation",
    ],
    certifications: [
      "SAP Certified Application Professional – Manufacturing with SAP S/4HANA",
      "SAP Certified Technology Associate – SAP HANA Cloud",
      "SAP Certified Development Associate – SAP BTP",
    ],
    linkedIn: "https://www.linkedin.com/in/thomas-weber-sap",
    initials: "TW",
    avatarColor: "bg-blue-500",
  },
  {
    id: "lena-schneider",
    name: "Lena Schneider",
    role: "Head of Security & Compliance",
    bio: "Lena leads Apex's security and compliance practice, specializing in TISAX assessments, UNECE WP.29 CSMS implementation, and cloud security architecture. She previously worked as a lead information security consultant at a Big Four firm, where she managed TISAX programs for German automotive suppliers. Lena is a certified TISAX auditor and ISO 27001 lead auditor, and regularly contributes to VDA working groups on automotive information security.",
    expertise: [
      "TISAX assessment and remediation",
      "UNECE WP.29 R155 CSMS",
      "ISO 27001 implementation",
      "Cloud security posture management",
      "Zero-trust network architecture",
    ],
    certifications: [
      "CISSP – Certified Information Systems Security Professional",
      "ISO 27001 Lead Auditor (BSI Group)",
      "CISM – Certified Information Security Manager",
      "TISAX Assessor (ENX Association)",
    ],
    linkedIn: "https://www.linkedin.com/in/lena-schneider-security",
    initials: "LS",
    avatarColor: "bg-purple-600",
  },
  {
    id: "jan-mueller",
    name: "Jan Müller",
    role: "Lead DevOps Engineer",
    bio: "Jan leads Apex's DevOps transformation practice, focusing on CI/CD pipeline architecture for automotive embedded and cloud software teams. He previously worked as a platform engineer at Bosch, where he built the internal developer platform used by 3,000 embedded software engineers across six countries. Jan is a contributor to the DORA research community and co-authored Apex's automotive DevOps maturity framework.",
    expertise: [
      "CI/CD pipeline architecture",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Developer platform engineering",
      "AUTOSAR toolchain integration",
      "GitOps and release automation",
    ],
    certifications: [
      "Certified Kubernetes Administrator (CKA)",
      "HashiCorp Certified: Terraform Associate",
      "AWS Certified DevOps Engineer – Professional",
    ],
    linkedIn: "https://www.linkedin.com/in/jan-mueller-devops",
    initials: "JM",
    avatarColor: "bg-teal-600",
  },
  {
    id: "anna-petrov",
    name: "Anna Petrov",
    role: "Data & Analytics Practice Lead",
    bio: "Anna leads Apex's data engineering practice, specializing in automotive data platforms, vehicle telemetry pipelines, and manufacturing analytics. She built her expertise at a mobility startup where she designed the data infrastructure processing telemetry from 500,000 connected vehicles daily. Anna is a dbt Core contributor and the architect behind Apex's automotive data lakehouse reference architecture.",
    expertise: [
      "Data lakehouse architecture",
      "Vehicle telemetry pipelines",
      "Real-time streaming (Kafka, Kinesis)",
      "dbt and Spark data transformation",
      "Manufacturing quality analytics",
    ],
    certifications: [
      "Google Cloud Professional Data Engineer",
      "Databricks Certified Data Engineer Professional",
      "AWS Certified Data Analytics – Specialty",
    ],
    linkedIn: "https://www.linkedin.com/in/anna-petrov-data",
    initials: "AP",
    avatarColor: "bg-emerald-600",
  },
];
