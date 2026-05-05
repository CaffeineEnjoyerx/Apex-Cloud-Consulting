// OFF-010: Reddit Strategy
// OFF-011: Quora Answers
// Community and thought leadership distribution playbook

export const redditStrategy = {
  overview:
    "Authentic community participation in automotive and cloud subreddits. No direct promotion — only genuine expert contribution that organically builds brand awareness.",
  persona: {
    accountName: "ApexCloudCTO (or team member personal accounts)",
    bio: "Cloud architect at Apex Cloud Consulting — specialized in automotive cloud, TISAX, and connected car platforms. Opinions my own.",
    rule: "Never post promotional content. Only contribute when we have genuinely useful information to add. Downvotes from perceived spamming are worse than zero posts.",
  },
  subreddits: [
    {
      subreddit: "r/devops",
      subscribers: "~200K",
      bestTopics: [
        "CI/CD for embedded + cloud mixed pipelines",
        "GitOps patterns for automotive software",
        "IaC patterns in regulated environments",
        "OTA update pipeline design",
      ],
      postingFrequency: "2-3 times per month max",
      bestFormat: "Detailed technical answer to existing question; occasional AMA-style 'I build CI/CD for automotive OEMs, AMA'",
      exampleContribution:
        "Reply to thread asking about CI/CD for embedded systems: share our experience with managing AUTOSAR middleware pipelines alongside cloud backend pipelines, including how we handle different release cadences without letting the slow side block the fast side",
    },
    {
      subreddit: "r/aws",
      subscribers: "~200K",
      bestTopics: [
        "AWS IoT Core for fleet-scale connected vehicles",
        "Kinesis for high-volume telemetry ingestion",
        "AWS Landing Zone for automotive compliance",
        "SAP on AWS patterns",
      ],
      postingFrequency: "2-3 times per month max",
      bestFormat: "Technical answers to IoT, migration, or compliance questions; share architecture patterns without selling",
      exampleContribution:
        "Reply to thread about AWS IoT Core at scale: share lessons from 1M+ vehicle fleet — sharding strategy, consumer group design, back-pressure handling",
    },
    {
      subreddit: "r/azure",
      subscribers: "~100K",
      bestTopics: [
        "Azure IoT Hub vs AWS IoT Core",
        "SAP on Azure patterns",
        "Azure Policy for compliance-heavy environments",
        "Defender for Cloud in manufacturing",
      ],
      postingFrequency: "1-2 times per month",
      bestFormat: "Technical comparisons and architecture guidance",
      exampleContribution:
        "Thread about Azure IoT Hub for automotive: share hands-on comparison of routing rules, device provisioning service, and message enrichment patterns for connected vehicle use cases",
    },
    {
      subreddit: "r/automotive",
      subscribers: "~500K",
      bestTopics: [
        "OTA update reliability and how it works",
        "What's actually behind connected car features",
        "TISAX explained for non-technical readers",
        "How OEMs are handling software-defined vehicle transition",
      ],
      postingFrequency: "1-2 times per month",
      bestFormat: "Accessible explainers for enthusiast audience; 'How does X actually work' explanations",
      exampleContribution:
        "Thread asking how OTA updates work: clear technical explanation of the full pipeline from code commit to vehicle — staging, signing, rollout control, rollback — at a level that's accurate but accessible to an automotive enthusiast",
    },
    {
      subreddit: "r/sysadmin",
      subscribers: "~600K",
      bestTopics: [
        "TISAX — what is it and how does it compare to ISO 27001",
        "Compliance in cloud environments",
        "Zero-downtime migration strategies",
      ],
      postingFrequency: "1 time per month max",
      bestFormat: "Expertise sharing on compliance and migration topics",
      exampleContribution:
        "Reply to TISAX question: clear explanation of what TISAX actually requires vs. ISO 27001, why automotive companies need it, and how it applies to cloud environments",
    },
  ],
  rules: [
    "Read subreddit rules before posting. Respect them absolutely.",
    "Never post links to apex-cloud.de in comments unless directly asked for resources.",
    "Profile bio can mention Apex Cloud; do not repeat it in every post.",
    "If a post would be equally useful without mentioning Apex Cloud, don't mention it.",
    "Engage authentically — reply to replies, follow threads, build subreddit reputation over time.",
    "One mistake (perceived spam) can result in shadow ban. One account per subreddit, one style per community.",
  ],
};

export const quoraStrategy = {
  overview:
    "Answer automotive cloud questions on Quora with genuine expertise. Target questions that rank in Google for our core keywords.",
  targetTopics: [
    "TISAX compliance in cloud environments",
    "Automotive cloud migration",
    "Connected car backend architecture",
    "SAP S/4HANA migration for automotive manufacturers",
    "OTA update platform architecture",
    "WP.29 / UNECE R155 cybersecurity requirements",
    "AWS vs Azure vs GCP for automotive workloads",
    "Cloud cost optimization for enterprise manufacturing",
  ],
  answerQuality: "Answers should be 400–800 words. Include diagrams or structured lists when helpful. Cite real experience, not generic advice.",
  sampleAnswers: [
    {
      questionPattern: "Does TISAX apply to cloud-hosted data?",
      headline: "Yes — and here's exactly what it requires",
      outline: [
        "TISAX assesses your ISMS, not the server location",
        "Shared responsibility model is the key document you need",
        "Controls 1.2.4 (outsourcing) and relevant sub-controls",
        "What AWS/Azure/GCP cover vs. what you own",
        "Practical steps to document your cloud environment for a TISAX assessor",
      ],
      estimatedViews: "High — ranks well for 'TISAX cloud' searches",
    },
    {
      questionPattern: "What is the best cloud platform for automotive manufacturing?",
      headline: "It depends on your workload mix — here's the framework we use",
      outline: [
        "No universal answer — different workloads favor different clouds",
        "SAP workloads: AWS, Azure, and GCP all support HANA, but each has different pricing and certification models",
        "IoT / connected car: AWS IoT Core is most mature; Azure has strong enterprise integration; GCP has best analytics stack",
        "Manufacturing analytics: Google BigQuery for ad-hoc; Azure Synapse for SAP integration; AWS Redshift for existing AWS estate",
        "Multi-cloud is common in automotive; address the governance and cost challenge early",
      ],
      estimatedViews: "Medium — competitive but differentiated angle",
    },
    {
      questionPattern: "How do OTA updates work in modern vehicles?",
      headline: "The full pipeline, from code commit to car",
      outline: [
        "Phase 1: Software build and validation in CI/CD pipeline",
        "Phase 2: Cryptographic signing of update packages",
        "Phase 3: Staged rollout — 1% → 10% → 100%",
        "Phase 4: Vehicle download (cellular, WiFi, or dealer)",
        "Phase 5: Pre-installation validation on vehicle",
        "Phase 6: Installation in scheduled maintenance window or background",
        "Safety-critical ECUs have additional authorization requirements",
        "Rollback: what triggers automatic rollback and how fast it must happen",
      ],
      estimatedViews: "High — popular consumer question with few accurate expert answers",
    },
  ],
};

// OFF-015: GitHub TISAX Compliance Checker (Optional)
export const githubOpenSourceStrategy = {
  projectName: "tisax-cloud-checklist",
  description:
    "Open-source TISAX cloud readiness checklist and assessment toolkit. Helps automotive IT teams self-assess their cloud environment against VDA ISA controls relevant to cloud hosting.",
  rationale:
    "High-authority backlink from GitHub; demonstrates technical depth; generates organic search traffic for 'TISAX cloud' queries; builds community goodwill.",
  repositoryUrl: "https://github.com/apex-cloud-consulting/tisax-cloud-checklist",
  deliverables: [
    "README: What TISAX is, why cloud requires specific attention, how to use this tool",
    "checklist.md: Comprehensive control-by-control checklist mapped to cloud shared responsibility model (AWS/Azure/GCP columns)",
    "templates/: Evidence documentation templates for common controls (access management policy, data classification matrix, incident response process)",
    "examples/: Example Terraform/CloudFormation/Bicep configurations demonstrating compliant patterns (encryption, logging, IAM)",
    "CONTRIBUTING.md: Contribution guide for community improvements",
  ],
  promotionChannels: [
    "LinkedIn announcement post (week 3 or 4 of LinkedIn series)",
    "Reddit r/aws, r/azure, r/sysadmin — organic share when relevant threads arise",
    "Heise/iX article pitch: 'We built an open-source TISAX cloud checker — here's what we learned'",
    "Submit to awesome-aws, awesome-azure community lists for additional backlinks",
  ],
  implementationEffort: "2 weeks of senior security consultant time",
  priority: "optional",
};
