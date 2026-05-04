export type FaqItem = {
  question: string;
  answer: string;
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type ServiceDetail = {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  tldr: string;
  body: {
    intro: string;
    sections: { heading: string; content: string }[];
  };
  process: ProcessStep[];
  benefits: string[];
  faqs: FaqItem[];
  cta: { headline: string; subline: string };
  publishedAt: string;
  updatedAt: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "cloud-migration",
    slug: "cloud-migration",
    title: "Cloud Migration & Modernization",
    tagline: "Move fast. Break nothing.",
    metaDescription:
      "End-to-end cloud migration for automotive OEMs and Tier-1 suppliers. Zero-downtime strategies for manufacturing, MES, and ERP environments. Apex Cloud Consulting.",
    keywords: [
      "cloud migration automotive",
      "OEM cloud migration",
      "MES modernization",
      "ERP cloud migration",
      "lift and shift automotive",
    ],
    heroDescription:
      "Legacy infrastructure is slowing automotive enterprises down. We plan and execute cloud migrations that protect production-critical systems while unlocking the speed, scalability, and cost efficiency the cloud delivers.",
    tldr: "We migrate automotive on-premise environments to cloud — AWS, Azure, or GCP — using zero-downtime strategies tailored for 24/7 manufacturing, MES, and ERP workloads. Typical engagements run 3–9 months and deliver 30–50% infrastructure cost reduction.",
    body: {
      intro:
        "Cloud migration in the automotive sector is not like migrating a retail app. Production systems run around the clock. ERP platforms touch every business process. MES solutions are wired directly into factory floors. A migration failure doesn't mean a website goes down — it can halt a production line. That's why our cloud migration methodology was built specifically for automotive environments.",
      sections: [
        {
          heading: "Assessment & Business Case",
          content:
            "Every migration begins with a rigorous discovery phase. We inventory your application portfolio, map dependencies, assess TISAX and compliance constraints, and model the total cost of ownership for the target cloud architecture. You receive a documented migration business case — with risk analysis, cost projections, and a prioritized migration backlog — before a single workload moves.",
        },
        {
          heading: "Migration Strategy: Lift-and-Shift, Re-platform, or Re-architect",
          content:
            "Not every workload should be treated the same. We apply the 6R framework (rehost, replatform, repurchase, refactor, retire, retain) to determine the optimal migration path for each application. Time-sensitive production systems may be rehosted first for speed, while legacy monoliths are re-architected in parallel for long-term agility.",
        },
        {
          heading: "Zero-Downtime Execution for 24/7 Environments",
          content:
            "Automotive manufacturing doesn't pause for IT projects. Our migration playbooks include blue/green cutover patterns, database replication with sub-second lag, and rollback procedures tested before go-live. For IATF 16949-certified environments, we document all changes in compliance with your quality management system requirements.",
        },
        {
          heading: "Hypercare & Optimization",
          content:
            "Migration is not the end. We operate a structured hypercare period post-cutover, monitoring performance, cost, and reliability against agreed SLOs. We then hand over to your operations team with runbooks, architecture documentation, and — if needed — an ongoing managed services arrangement.",
        },
      ],
    },
    process: [
      { step: 1, title: "Discovery & Assessment", description: "Application inventory, dependency mapping, TCO modeling, compliance review (TISAX, ISO 27001)." },
      { step: 2, title: "Migration Architecture", description: "Target state design, landing zone setup, security baseline, network topology." },
      { step: 3, title: "Wave Planning", description: "Workload prioritization, migration wave design, team alignment, cutover scheduling." },
      { step: 4, title: "Migration Execution", description: "Automated migration tooling, data replication, zero-downtime cutover, rollback testing." },
      { step: 5, title: "Hypercare & Handover", description: "Post-go-live monitoring, performance tuning, runbook delivery, team enablement." },
    ],
    benefits: [
      "30–50% infrastructure cost reduction in year one",
      "Zero production downtime during migration",
      "TISAX and ISO 27001 compliance maintained throughout",
      "Multi-cloud and hybrid-cloud architecture flexibility",
      "Legacy ERP and MES modernization pathways",
      "Dedicated migration architects with automotive domain experience",
    ],
    faqs: [
      {
        question: "How long does a typical cloud migration take for an automotive OEM?",
        answer:
          "Scope varies significantly by portfolio size and complexity. A focused migration of 20–50 workloads typically runs 3–6 months. Large enterprise migrations covering ERP, MES, and connected vehicle backends can run 12–24 months in structured waves. Our assessment phase, usually 4–6 weeks, produces a detailed timeline before any migration begins.",
      },
      {
        question: "Can you migrate SAP environments as part of the engagement?",
        answer:
          "Yes. SAP on Cloud is a core Apex competency. We handle both SAP RISE (SAP-managed cloud) and hyperscaler-hosted SAP S/4HANA migrations, including BTP integration work. We coordinate closely with SAP basis teams and hyperscaler migration programs (AWS MAP, Azure Migrate, Google CAF).",
      },
      {
        question: "How do you handle TISAX compliance during a migration?",
        answer:
          "TISAX requirements are mapped into the migration architecture from day one. We design landing zones and data handling procedures that maintain your existing TISAX assessment level, document all changes in your ISMS, and can coordinate with your TISAX assessment provider for scope verification.",
      },
      {
        question: "What cloud providers do you work with?",
        answer:
          "We are cloud-agnostic and hold partner status with AWS (Premier Consulting Partner), Microsoft Azure (Solutions Partner), and Google Cloud. Most automotive enterprises run multi-cloud environments and we design architectures that avoid hard lock-in where possible.",
      },
      {
        question: "What happens if a cutover goes wrong?",
        answer:
          "Every migration cutover includes a tested rollback procedure with defined decision points. We maintain the source environment in a stable, revertible state for a defined hypercare window — typically 2–4 weeks — before decommissioning. A rollback has never required more than 4 hours in our project history.",
      },
    ],
    cta: {
      headline: "Ready to Move Your Workloads to the Cloud?",
      subline: "Tell us about your environment. Our migration architects will map a path in your first call.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    id: "devops-cicd",
    slug: "devops-cicd",
    title: "DevOps & CI/CD Transformation",
    tagline: "Ship software faster. Ship it reliably.",
    metaDescription:
      "DevOps and CI/CD consulting for automotive software teams. Infrastructure as Code, GitOps, OTA update pipelines. Apex Cloud Consulting.",
    keywords: [
      "DevOps automotive",
      "CI/CD automotive software",
      "GitOps OTA",
      "Infrastructure as Code automotive",
      "automotive software delivery",
    ],
    heroDescription:
      "The automotive industry is becoming a software industry. Whether you're shipping vehicle firmware, cloud backend services, or factory automation code, your delivery pipeline determines how fast you can innovate. We transform it.",
    tldr: "We embed DevOps culture and tooling across automotive engineering teams — automating builds, tests, security scans, and deployments so teams ship faster without sacrificing quality or compliance. Typical outcomes: 70% reduction in deployment lead time, 90%+ pipeline automation.",
    body: {
      intro:
        "Automotive software releases used to be annual events. Today, leading OEMs push OTA updates weekly. Tier-1 suppliers run agile sprints against AUTOSAR and embedded targets. The gap between software-first manufacturers and the rest is widening — and CI/CD is the engine behind the leaders.",
      sections: [
        {
          heading: "DevOps Assessment & Roadmap",
          content:
            "We begin with a DevOps maturity assessment against the DORA (DevOps Research and Assessment) metrics: deployment frequency, lead time for changes, change failure rate, and mean time to recovery. You receive a benchmarked baseline and a prioritized transformation roadmap — not a generic playbook but one calibrated to automotive software delivery constraints.",
        },
        {
          heading: "Pipeline Design for Automotive Software",
          content:
            "Automotive CI/CD has unique requirements: MISRA C compliance checks, AUTOSAR toolchain integration, hardware-in-the-loop (HiL) test stages, and UNECE WP.29 cybersecurity validation gates. We design pipelines on GitHub Actions, GitLab CI, Jenkins, or Azure DevOps that encode these checks as automated stages — not manual sign-off steps.",
        },
        {
          heading: "Infrastructure as Code",
          content:
            "We implement IaC using Terraform, Pulumi, or AWS CDK — eliminating configuration drift, enabling environment reproducibility, and giving teams a versioned, auditable record of every infrastructure change. IaC is foundational to TISAX and ISO 27001 change management requirements.",
        },
        {
          heading: "OTA Update Pipeline Architecture",
          content:
            "Over-the-air software updates require a specialized delivery pipeline: signing infrastructure, staged rollout control, rollback triggers, and vehicle fleet telemetry integration. We architect and build OTA backends that comply with UNECE WP.29 R156 software update management requirements.",
        },
      ],
    },
    process: [
      { step: 1, title: "DORA Baseline Assessment", description: "Measure deployment frequency, lead time, change failure rate, and MTTR against industry benchmarks." },
      { step: 2, title: "Toolchain & Pipeline Audit", description: "Inventory existing tools, identify gaps, design target CI/CD architecture." },
      { step: 3, title: "Pipeline Implementation", description: "Build automated pipelines with quality gates, security scans, and compliance checks." },
      { step: 4, title: "IaC & Environment Automation", description: "Implement Terraform/Pulumi, automate environment provisioning, enforce drift detection." },
      { step: 5, title: "Team Enablement", description: "Hands-on training, pair programming, runbooks, and 90-day follow-up coaching." },
    ],
    benefits: [
      "70%+ reduction in deployment lead time",
      "Automated MISRA, AUTOSAR, and security compliance checks in pipeline",
      "UNECE WP.29 R156-compliant OTA update pipelines",
      "IaC-driven environment reproducibility and audit trails",
      "DORA metrics baseline and improvement tracking",
      "GitOps workflows for both cloud and embedded targets",
    ],
    faqs: [
      {
        question: "Can you build CI/CD pipelines for embedded/AUTOSAR projects, not just cloud software?",
        answer:
          "Yes. We have engineers with AUTOSAR, MISRA C, and embedded Linux experience. We design pipelines that integrate with AUTOSAR toolchains (Vector CANoe, ETAS ASCET, Elektrobit Tresos) and hardware-in-the-loop (HiL) test environments — not just cloud-native software.",
      },
      {
        question: "What CI/CD tools do you recommend for automotive?",
        answer:
          "Our recommendation depends on your existing ecosystem. For cloud-centric teams, GitHub Actions or GitLab CI offer the best developer experience. For enterprises with on-premise constraints, Jenkins or Azure DevOps remain strong choices. We don't advocate for tool lock-in — we design pipelines that can migrate between platforms.",
      },
      {
        question: "How do you address software signing requirements for OTA updates?",
        answer:
          "UNECE WP.29 R156 requires cryptographic signing of all software packages pushed OTA. We implement signing infrastructure using AWS KMS, Azure Key Vault, or HSM-backed signing services, integrated into the CI/CD pipeline so no unsigned artifact can reach the deployment stage.",
      },
      {
        question: "What is GitOps and why does it matter for automotive?",
        answer:
          "GitOps is an operational model where the Git repository is the single source of truth for infrastructure and application state. Changes are made via pull requests, and automated agents reconcile the live environment to match the declared state. For automotive, this provides the audit trail, change approval workflow, and rollback capability that compliance frameworks require.",
      },
    ],
    cta: {
      headline: "Accelerate Your Software Delivery Pipeline",
      subline: "Book a DevOps assessment. We'll benchmark your team and show you where the biggest gains are.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data & Analytics Platforms",
    tagline: "Turn vehicle data into decisions.",
    metaDescription:
      "Automotive data platform consulting — vehicle telemetry, quality analytics, real-time streaming. AWS, Azure, GCP data lakes. Apex Cloud Consulting.",
    keywords: [
      "automotive data platform",
      "vehicle telemetry analytics",
      "connected car data lake",
      "real-time streaming automotive",
      "manufacturing analytics cloud",
    ],
    heroDescription:
      "Modern vehicles generate terabytes of telemetry data per day. Factory floors produce quality signals at millisecond intervals. The automotive enterprises that win are the ones that turn this data into actionable insight — in real time, at scale.",
    tldr: "We design and build automotive data platforms on AWS, Azure, or GCP — from vehicle telemetry ingestion to executive dashboards. Core capabilities: real-time streaming (Kafka, Kinesis), data lakehouse architecture, and self-service BI rollouts. Typical time to first insights: 6–10 weeks.",
    body: {
      intro:
        "Data is the fuel of the modern automotive enterprise — but raw data has no value until it reaches the people who need it, in the form they can act on. Most automotive organizations are sitting on enormous data assets in siloed systems: telematics platforms, MES historians, quality management tools, and ERP systems. We build the platforms that unify, process, and expose this data.",
      sections: [
        {
          heading: "Data Platform Architecture",
          content:
            "We design cloud-native data platforms using the lakehouse pattern: raw data stored in cost-efficient object storage (S3, ADLS, GCS), processed through transformation pipelines (dbt, Spark, Databricks), and served via high-performance query engines (Athena, Synapse, BigQuery). The architecture scales from startup-scale ingestion to OEM-scale telematics volumes.",
        },
        {
          heading: "Vehicle Telemetry & Connected Car Data",
          content:
            "Connected vehicle data requires specialized ingestion: high-throughput MQTT or AMQP ingest, schema management for diverse ECU data formats, and GDPR-compliant data handling with consent management. We build vehicle data pipelines that comply with GDPR Article 9 requirements for sensitive personal data and integrate with existing fleet management platforms.",
        },
        {
          heading: "Manufacturing Quality Analytics",
          content:
            "Factory floor data from PLCs, SCADA systems, and MES historians is often inaccessible to analytics users. We implement OPC-UA and MQTT-based edge data collection, aggregate it in cloud data platforms, and build quality dashboards that give production engineers real-time SPC (Statistical Process Control) views — replacing slow, manual Excel-based reporting.",
        },
        {
          heading: "Self-Service BI & Analytics Tooling",
          content:
            "A data platform that only data engineers can use is a half-finished project. We deploy and configure self-service BI tools (Power BI, Looker, Tableau, Apache Superset) with governed data catalogs, semantic layers, and role-based access controls — so analysts, engineers, and executives can answer their own questions without IT tickets.",
        },
      ],
    },
    process: [
      { step: 1, title: "Data Discovery", description: "Inventory data sources, assess data quality, map use cases to business value." },
      { step: 2, title: "Platform Architecture", description: "Design lakehouse architecture, select tooling, define governance and access model." },
      { step: 3, title: "Ingestion & Pipelines", description: "Build streaming and batch ingestion, implement transformation pipelines (dbt/Spark)." },
      { step: 4, title: "BI & Analytics Layer", description: "Deploy BI tools, build semantic layer, create initial dashboards and data products." },
      { step: 5, title: "Enablement & Self-Service", description: "Train analyst and engineering users, document data catalog, establish data governance processes." },
    ],
    benefits: [
      "Unified view of vehicle, manufacturing, and business data",
      "Real-time streaming for vehicle telemetry and factory SPC",
      "GDPR-compliant vehicle data handling with consent management",
      "Self-service analytics reducing IT dependency",
      "30–60% reduction in data infrastructure costs vs. legacy DWH",
      "6–10 weeks to first production insights",
    ],
    faqs: [
      {
        question: "How do you handle GDPR compliance for vehicle telemetry data?",
        answer:
          "Vehicle telemetry can constitute personal data under GDPR when it can be linked to an identifiable driver. Our platform architectures implement consent management at ingestion, pseudonymization pipelines, data retention policies enforced at the storage layer, and data subject request workflows. We design these controls to be auditable for GDPR Article 30 record-keeping requirements.",
      },
      {
        question: "Can you integrate with our existing MES or ERP systems?",
        answer:
          "Yes. We have integration experience with SAP (ECC, S/4HANA, BTP), Siemens MindSphere, PTC ThingWorx, Rockwell FactoryTalk, and standard OPC-UA/MQTT-based factory systems. We use event-driven integration patterns where possible to avoid tight coupling between operational and analytics systems.",
      },
      {
        question: "What is a data lakehouse and why is it better than a traditional data warehouse?",
        answer:
          "A data lakehouse combines the low-cost, schema-flexible storage of a data lake with the ACID transaction support and query performance of a data warehouse. For automotive, this means you can store raw telemetry cheaply, apply transformations without data movement, and serve both BI dashboards and ML model training from the same platform — reducing data duplication and infrastructure cost.",
      },
      {
        question: "How do you handle data from hundreds of ECU types with different formats?",
        answer:
          "We implement schema registries (Confluent Schema Registry or AWS Glue Schema Registry) to manage the diversity of ECU data formats, and build normalization pipelines that transform raw signals into canonical data models. We also maintain compatibility with AUTOSAR signal databases and CAN/LIN/FlexRay DBC format parsers.",
      },
    ],
    cta: {
      headline: "Turn Your Vehicle and Manufacturing Data into Decisions",
      subline: "Let's scope your data platform in a free 60-minute architecture workshop.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    id: "connected-car",
    slug: "connected-car",
    title: "Connected Car Platform Engineering",
    tagline: "The vehicle is a cloud node. We build the bridge.",
    metaDescription:
      "Connected car backend platform engineering for OEMs and Tier-1 suppliers. OTA update infrastructure, MQTT brokers, GDPR-compliant vehicle data — Apex Cloud Consulting.",
    keywords: [
      "connected car platform",
      "OTA update backend",
      "vehicle cloud platform",
      "MQTT automotive",
      "connected vehicle backend",
    ],
    heroDescription:
      "Every modern vehicle is a connected device — and the cloud backend powering it determines the quality of every digital service, from remote diagnostics to over-the-air updates. We architect and build the backends that make connected vehicle features reliable, scalable, and compliant.",
    tldr: "We design and build connected car backend platforms: MQTT/AMQP brokers, OTA update infrastructure, vehicle data pipelines, and digital service APIs. Our platforms handle millions of vehicle connections, comply with UNECE WP.29 cybersecurity regulations, and integrate with existing OEM backend systems.",
    body: {
      intro:
        "The connected car ecosystem is one of the most demanding environments in cloud engineering. Millions of vehicles connected simultaneously. Sub-second latency requirements for remote commands. Zero tolerance for OTA update failures. UNECE WP.29 cybersecurity obligations. GDPR constraints on vehicle and driver data. Building this right requires deep expertise in both cloud-native architecture and automotive domain knowledge.",
      sections: [
        {
          heading: "Vehicle Connectivity & Messaging Infrastructure",
          content:
            "The foundation of any connected car platform is the messaging layer. We design and operate MQTT/AMQP broker infrastructure capable of handling millions of persistent vehicle connections — using AWS IoT Core, Azure IoT Hub, Eclipse Mosquitto, or HiveMQ depending on your requirements. We implement authentication using X.509 certificates, message authorization policies, and connection state management at scale.",
        },
        {
          heading: "OTA Update Backend Architecture",
          content:
            "Over-the-air software updates are the highest-risk operation in the connected car stack. Our OTA backend architecture includes: cryptographic package signing (UNECE WP.29 R156-compliant), staged rollout control with health monitoring, automatic rollback triggers on failure metrics, and full audit logging of every update campaign. We integrate with existing vehicle software stacks and support delta update strategies to minimize bandwidth usage.",
        },
        {
          heading: "Vehicle Digital Services Platform",
          content:
            "Remote lock/unlock, climate pre-conditioning, vehicle status APIs, and companion app backends — digital services require low-latency command routing, reliable state synchronization, and GDPR-compliant data handling. We build these service layers using event-driven architectures (AWS EventBridge, Azure Event Grid, Apache Kafka) that decouple vehicle-side and cloud-side concerns and scale elastically with fleet size.",
        },
        {
          heading: "Compliance: UNECE WP.29 & GDPR",
          content:
            "UNECE WP.29 Regulation 155 (cybersecurity management) and Regulation 156 (software updates) are now mandatory type approval requirements across major markets. We design platform architectures that satisfy both regulations: CSMS documentation, penetration testing integration in CI/CD pipelines, and software update audit trails. GDPR vehicle data handling is implemented at the ingestion layer with consent management and data subject request workflows.",
        },
      ],
    },
    process: [
      { step: 1, title: "Platform Architecture Design", description: "Connectivity topology, messaging protocol selection, scalability modeling, compliance mapping." },
      { step: 2, title: "Core Infrastructure Setup", description: "MQTT/AMQP broker deployment, certificate authority setup, vehicle provisioning pipeline." },
      { step: 3, title: "OTA Backend Implementation", description: "Update campaign management, signing infrastructure, staged rollout, rollback mechanisms." },
      { step: 4, title: "Digital Services Layer", description: "Remote command APIs, vehicle state synchronization, companion app backend, analytics integration." },
      { step: 5, title: "Compliance & Security Hardening", description: "WP.29 documentation, penetration testing, GDPR data handling, CSMS integration." },
    ],
    benefits: [
      "Handles millions of concurrent vehicle connections",
      "UNECE WP.29 R155 and R156 compliant architecture",
      "OTA update campaigns with staged rollout and automatic rollback",
      "Sub-100ms command latency for remote vehicle operations",
      "GDPR-compliant vehicle and driver data handling",
      "Integration with existing OEM backend systems and digital services",
    ],
    faqs: [
      {
        question: "What is UNECE WP.29 and how does it affect our connected car platform?",
        answer:
          "UNECE WP.29 is the United Nations Working Party for vehicle regulations. Regulation 155 mandates a Cybersecurity Management System (CSMS) for vehicle type approval, and Regulation 156 mandates a Software Update Management System (SUMS). Both are now required for new vehicle type approvals in the EU, Japan, South Korea, and other signatory markets. Your connected car platform's OTA infrastructure and cybersecurity architecture directly determine whether you can meet these requirements.",
      },
      {
        question: "How do you scale MQTT infrastructure to millions of vehicles?",
        answer:
          "We use managed MQTT services (AWS IoT Core, Azure IoT Hub) for most projects — these scale automatically without cluster management overhead. For projects requiring on-premise or sovereign cloud deployment, we operate HiveMQ or EMQX clusters with horizontal scaling and load balancing. Connection state is externalized to Redis or DynamoDB for broker statelessness.",
      },
      {
        question: "Can you integrate with our existing vehicle software stack (e.g., AUTOSAR, GENIVI)?",
        answer:
          "Yes. We design backend APIs and connectivity protocols that are agnostic to the in-vehicle stack. Our cloud APIs can be consumed by AUTOSAR-based telematics control units, Android Automotive OS applications, or custom RTOS-based connectivity modules. We provide reference client SDKs and integration documentation for in-vehicle software teams.",
      },
      {
        question: "What happens if an OTA update fails mid-deployment on a vehicle?",
        answer:
          "Our OTA architecture implements multiple failure safety mechanisms: atomic partition switching (A/B update), automatic rollback on boot failure, health beacon monitoring post-update, and campaign-level rollback triggers if a failure rate threshold is exceeded. Update state is persisted in the cloud backend, so interrupted updates can be resumed. We design these mechanisms to satisfy WP.29 R156 requirements.",
      },
    ],
    cta: {
      headline: "Build a Connected Car Backend That Scales",
      subline: "Our platform architects will review your connectivity requirements and propose an architecture in your first session.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    id: "sap-on-cloud",
    slug: "sap-on-cloud",
    title: "SAP on Cloud",
    tagline: "Your ERP, reborn in the cloud.",
    metaDescription:
      "SAP S/4HANA cloud migration for automotive OEMs and Tier-1 suppliers. RISE with SAP, BTP integration, zero-downtime ECC to S/4 migration. Apex Cloud Consulting.",
    keywords: [
      "SAP S/4HANA migration automotive",
      "RISE with SAP",
      "SAP cloud migration OEM",
      "SAP BTP automotive",
      "ECC to S/4HANA migration",
    ],
    heroDescription:
      "SAP is the operational backbone of most automotive enterprises — connecting procurement, production, logistics, and finance. Moving SAP to the cloud is one of the most complex and consequential IT decisions a company can make. We specialize in making it successful.",
    tldr: "We migrate SAP ECC and S/4HANA landscapes to hyperscaler cloud or SAP RISE, handling technical migration, BTP integration, and cutover with zero business downtime. Average ECC-to-S/4HANA migration: 12–18 months. SAP RISE assessments take 4–6 weeks.",
    body: {
      intro:
        "SAP's 2027 end-of-mainstream-maintenance deadline for ECC is driving one of the largest enterprise IT migrations in history. For automotive enterprises, this is not just an IT refresh — it's an opportunity to re-examine business processes, eliminate customizations that have accumulated over decades, and build a clean, cloud-native ERP foundation. The risk of getting it wrong is enormous. So is the opportunity.",
      sections: [
        {
          heading: "SAP RISE Assessment",
          content:
            "RISE with SAP is SAP's managed cloud ERP offering — a subscription model that shifts infrastructure management to SAP. It sounds simple, but the commercial, technical, and contractual implications are significant. We conduct independent RISE assessments covering: total cost of ownership vs. hyperscaler-hosted alternatives, contractual flexibility and lock-in analysis, integration complexity with surrounding cloud-native systems, and TISAX compliance implications for your SAP landscape.",
        },
        {
          heading: "ECC to S/4HANA Migration",
          content:
            "We execute ECC-to-S/4HANA migrations using SAP's approved migration paths: system conversion (brownfield), selective data transition, or new implementation (greenfield). For most automotive enterprises, a hybrid approach — preserving proven processes while eliminating technical debt — delivers the best outcome. We use SAP's Readiness Check and custom analysis tools to quantify the custom code impact and scope the migration effort accurately.",
        },
        {
          heading: "SAP BTP Integration Architecture",
          content:
            "SAP Business Technology Platform (BTP) is increasingly central to SAP's cloud strategy — providing integration, extension, and analytics capabilities. We design BTP integration architectures that connect SAP with surrounding cloud-native systems: IoT platforms, connected car backends, manufacturing execution systems, and third-party SaaS tools. This avoids core SAP customizations while enabling the flexibility the business needs.",
        },
        {
          heading: "Zero-Downtime Cutover",
          content:
            "An ERP cutover that requires a multi-day production shutdown is not acceptable for automotive manufacturers. We use SAP's Near-Zero Downtime (nZDT) approach and our own automotive-specific cutover playbooks to minimize business interruption. Our record for a complex ECC-to-S/4HANA cutover involving an automotive Tier-1 is 4 hours of planned downtime across a full weekend.",
        },
      ],
    },
    process: [
      { step: 1, title: "RISE / Hyperscaler Assessment", description: "TCO modeling, contract analysis, integration complexity assessment, TISAX review." },
      { step: 2, title: "Readiness & Fit-Gap Analysis", description: "SAP Readiness Check, custom code impact analysis, business process fit-gap, migration path selection." },
      { step: 3, title: "Migration Architecture", description: "Target landscape design, BTP integration architecture, cutover strategy, security and compliance design." },
      { step: 4, title: "Migration Execution", description: "System conversion or selective data transition, cutover rehearsals, parallel run validation." },
      { step: 5, title: "BTP Extension & Optimization", description: "BTP integration build-out, performance optimization, user enablement, hypercare." },
    ],
    benefits: [
      "Independent RISE with SAP assessment — commercial and technical",
      "Automotive industry-specific SAP process expertise (PP, MM, QM, PM)",
      "Zero-business-downtime cutover strategies",
      "BTP integration architecture for surrounding cloud-native systems",
      "Custom code reduction roadmap (target: 80%+ reduction)",
      "TISAX-compliant SAP cloud landscape design",
    ],
    faqs: [
      {
        question: "Should we choose RISE with SAP or host SAP ourselves on a hyperscaler?",
        answer:
          "This depends on your organization's IT strategy, existing hyperscaler investments, and operational capabilities. RISE simplifies infrastructure management but reduces flexibility and can be more expensive at scale. Hyperscaler-hosted SAP gives more control and often lower TCO for large landscapes but requires more operational expertise. We conduct independent assessments — we have no financial incentive to recommend either path.",
      },
      {
        question: "What is the typical timeline for an ECC to S/4HANA migration?",
        answer:
          "For automotive enterprises, system conversion projects typically run 12–18 months for mid-size landscapes (500–2000 users, 10–30 million line items). Large, complex migrations with significant custom code or multiple company codes can extend to 24–36 months. Our readiness assessment gives you a calibrated estimate based on your specific landscape characteristics.",
      },
      {
        question: "What happens to our custom SAP developments (Z-code)?",
        answer:
          "Custom ABAP code is one of the biggest migration risks. SAP's Readiness Check identifies incompatible objects, but doesn't prioritize remediation. We perform a custom code impact analysis using SAP ATC and our own classification tools to categorize custom developments by business criticality, remediation effort, and migration risk. High-risk, low-value custom developments are candidates for elimination or replacement with standard S/4 functionality.",
      },
      {
        question: "Can you integrate S/4HANA with our connected car and IoT platforms?",
        answer:
          "Yes. This is a specific strength of our practice. We design integration architectures using SAP BTP Integration Suite that connect S/4HANA with cloud-native vehicle platforms, IoT sensor data streams, and production quality systems — without touching the S/4 core. This gives the business the flexibility it needs while preserving the clean-core principle for long-term upgrade agility.",
      },
    ],
    cta: {
      headline: "Prepare Your SAP Landscape for the Cloud Era",
      subline: "Start with a RISE assessment or readiness check. Our SAP architects will scope it in your first call.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
  {
    id: "security-compliance",
    slug: "security-compliance",
    title: "Security & Compliance",
    tagline: "Certifiable. Auditable. Resilient.",
    metaDescription:
      "Cloud security and compliance consulting for automotive: TISAX, UNECE WP.29, ISO 27001, zero-trust. Apex Cloud Consulting.",
    keywords: [
      "TISAX cloud security",
      "automotive cybersecurity WP.29",
      "ISO 27001 automotive",
      "zero trust automotive",
      "cloud security posture management automotive",
    ],
    heroDescription:
      "Automotive organizations operate under some of the most demanding security and compliance frameworks in any industry — TISAX, UNECE WP.29, ISO 27001, and NIS2. We help you meet these requirements without slowing down your cloud transformation.",
    tldr: "We implement cloud security architectures for automotive enterprises: CSPM, zero-trust network design, TISAX readiness, and UNECE WP.29 Regulation 155 compliance. Typical TISAX readiness engagement: 8–12 weeks. CSPM implementation: 4–6 weeks.",
    body: {
      intro:
        "Security in automotive cloud environments is not optional — it's a type approval requirement, a customer contractual obligation, and a board-level risk. TISAX Level 2 is a baseline expectation for any supplier handling OEM data. UNECE WP.29 Regulation 155 mandates a Cybersecurity Management System for vehicle type approval. ISO 27001 is required by a growing number of OEM supplier agreements. We help you navigate all of these — pragmatically, not bureaucratically.",
      sections: [
        {
          heading: "TISAX Readiness Assessment & Remediation",
          content:
            "TISAX (Trusted Information Security Assessment Exchange) is the automotive industry's information security assessment framework, governed by the VDA. A TISAX assessment covers 73 controls across organization, physical, technical, and supplier management domains. We conduct pre-assessment gap analyses, build remediation roadmaps, and support your team through the formal assessment process — including liaison with approved TISAX auditors.",
        },
        {
          heading: "UNECE WP.29 Cybersecurity Management System",
          content:
            "Regulation 155 requires OEMs to implement a CSMS covering the full vehicle lifecycle: development, production, post-production, and decommissioning. We help OEMs and Tier-1 suppliers design and document their CSMS, implement supporting processes (threat analysis, vulnerability monitoring, incident response), and build the technical controls required for type approval.",
        },
        {
          heading: "Cloud Security Posture Management",
          content:
            "Cloud environments drift from secure baselines faster than most teams realize. We implement CSPM solutions (Prisma Cloud, AWS Security Hub, Microsoft Defender for Cloud) that continuously monitor your cloud estate against CIS benchmarks and your own security policies — and provide actionable remediation guidance rather than endless alerts.",
        },
        {
          heading: "Zero-Trust Network Architecture",
          content:
            "Automotive cloud environments often connect factory networks, vehicle backends, supplier systems, and corporate IT — a perimeter-based security model cannot handle this complexity. We design zero-trust architectures using software-defined perimeters, mutual TLS, microsegmentation, and identity-based access policies that enforce least-privilege access without impeding legitimate workflows.",
        },
      ],
    },
    process: [
      { step: 1, title: "Security Baseline Assessment", description: "Cloud security posture review, compliance gap analysis (TISAX, WP.29, ISO 27001, NIS2)." },
      { step: 2, title: "Risk & Threat Modeling", description: "TARA (Threat Analysis and Risk Assessment) per ISO 21434, STRIDE analysis for cloud components." },
      { step: 3, title: "Architecture & Controls Design", description: "Zero-trust network design, CSPM implementation, identity and access management hardening." },
      { step: 4, title: "Remediation Execution", description: "Technical control implementation, policy enforcement, ISMS documentation, evidence collection." },
      { step: 5, title: "Assessment Support & Continuous Monitoring", description: "TISAX/ISO 27001 audit support, CSPM tuning, vulnerability management process, ongoing advisory." },
    ],
    benefits: [
      "TISAX Level 2 and Level 3 readiness support",
      "UNECE WP.29 R155 CSMS design and documentation",
      "Continuous cloud security posture monitoring (CSPM)",
      "Zero-trust architecture for hybrid automotive cloud environments",
      "ISO 27001 and NIS2 compliance advisory",
      "Penetration testing integration in CI/CD pipelines",
    ],
    faqs: [
      {
        question: "What is TISAX and do we need it?",
        answer:
          "TISAX (Trusted Information Security Assessment Exchange) is the automotive industry's standard for assessing information security — specifically the protection of sensitive data exchanged between OEMs and suppliers. If your organization handles prototype data, personal data, or production-relevant data for a German or European OEM, you almost certainly need a valid TISAX assessment. The assessment level (1, 2, or 3) depends on the sensitivity of the data you handle.",
      },
      {
        question: "How long does TISAX certification take?",
        answer:
          "A TISAX assessment is not a one-time certification but a periodic assessment (typically every 3 years). The path to a first successful assessment typically takes 4–9 months: gap analysis (4–6 weeks), remediation (8–20 weeks depending on gaps), and the formal assessment process (4–8 weeks). Our pre-assessment work significantly increases first-attempt pass rates.",
      },
      {
        question: "What is the difference between UNECE WP.29 R155 and R156?",
        answer:
          "Regulation 155 covers cybersecurity management — it requires OEMs to implement a CSMS governing how cybersecurity risks are managed throughout the vehicle lifecycle. Regulation 156 covers software updates — it requires a SUMS governing how software updates are managed and rolled out to vehicles. Both are mandatory for new vehicle type approvals in signatory markets (EU, Japan, South Korea, and others). R155 affects both OEMs and their Tier-1 suppliers.",
      },
      {
        question: "Do you offer penetration testing services?",
        answer:
          "We coordinate penetration testing engagements with our network of certified partners (CREST/OSCP-certified testers) and integrate the findings into your remediation roadmap. For automotive-specific testing (in-vehicle network, MQTT broker, OTA infrastructure), we work with specialists in automotive penetration testing. We do not run our own red team — we focus on architecture and remediation.",
      },
    ],
    cta: {
      headline: "Secure Your Automotive Cloud Environment",
      subline: "Start with a security posture assessment. We'll show you where you stand against TISAX, WP.29, and ISO 27001 in four weeks.",
    },
    publishedAt: "2026-05-04",
    updatedAt: "2026-05-04",
  },
];
