export type Service = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: string;
};

export const servicesPageCopy = {
  headline: "Cloud Solutions Built for the Automotive Industry",
  subheadline:
    "We don't offer generic cloud consulting. Every engagement is designed around the unique demands of automotive production systems, supply chains, and connected platforms.",
  services: [
    {
      id: "cloud-migration",
      title: "Cloud Migration & Modernization",
      tagline: "Move fast. Break nothing.",
      description:
        "We plan and execute end-to-end cloud migrations for legacy on-premise environments — from initial assessment and business case through cutover and hypercare. Our structured lift-and-shift, re-platform, and re-architect methodologies minimize disruption to production-critical systems.",
      benefits: [
        "Zero-downtime migration strategies for 24/7 manufacturing environments",
        "Legacy ERP and MES modernization pathways",
        "Multi-cloud and hybrid-cloud architecture design",
      ],
      icon: "cloud-upload",
    },
    {
      id: "devops-cicd",
      title: "DevOps & CI/CD Transformation",
      tagline: "Ship software faster. Ship it reliably.",
      description:
        "We embed DevOps culture and tooling across your engineering teams — automating build, test, security scanning, and deployment pipelines so your teams spend time on innovation, not operations.",
      benefits: [
        "Infrastructure as Code (Terraform, Pulumi, AWS CDK)",
        "CI/CD pipeline design for embedded and cloud-native software",
        "GitOps and release automation for OTA update platforms",
      ],
      icon: "git-branch",
    },
    {
      id: "data-analytics",
      title: "Data & Analytics Platforms",
      tagline: "Turn vehicle data into decisions.",
      description:
        "From telematics ingestion to real-time quality dashboards, we design and build data platforms that give automotive engineers and executives the insight they need — when they need it.",
      benefits: [
        "Scalable data lakes and lakehouses on AWS, Azure, or GCP",
        "Real-time streaming architectures for vehicle telemetry",
        "Self-service BI and analytics tooling rollouts",
      ],
      icon: "bar-chart",
    },
    {
      id: "connected-car",
      title: "Connected Car Platform Engineering",
      tagline: "The vehicle is a cloud node. We build the bridge.",
      description:
        "We architect and implement the backend services powering connected vehicle features — remote diagnostics, OTA updates, digital services, and vehicle-to-cloud data pipelines — with the scalability and security automotive demands.",
      benefits: [
        "MQTT/AMQP broker design and scaling",
        "OTA update backend infrastructure",
        "GDPR-compliant vehicle data handling frameworks",
      ],
      icon: "car",
    },
    {
      id: "sap-on-cloud",
      title: "SAP on Cloud",
      tagline: "Your ERP, reborn in the cloud.",
      description:
        "SAP is the operational backbone of most automotive enterprises. We specialize in SAP S/4HANA migrations to hyperscaler platforms, ensuring performance, compliance, and seamless integration with surrounding cloud-native systems.",
      benefits: [
        "SAP RISE and Sovereign Cloud assessments",
        "BTP integration and extension architecture",
        "Migration from ECC to S/4HANA with zero business downtime",
      ],
      icon: "server",
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      tagline: "Certifiable. Auditable. Resilient.",
      description:
        "We help automotive organizations meet the security and compliance requirements of operating in regulated global markets — from ISO 27001 and TISAX to UNECE WP.29 cybersecurity regulations.",
      benefits: [
        "Cloud security posture management (CSPM) implementation",
        "TISAX readiness assessments and remediation",
        "Zero-trust network architecture for automotive cloud environments",
      ],
      icon: "shield",
    },
  ] satisfies Service[],
  cta: {
    label: "Discuss Your Requirements",
    href: "/contact",
  },
} as const;
