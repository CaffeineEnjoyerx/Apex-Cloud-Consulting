import type { Service } from "@/content/services";

export const servicesPageCopyDe = {
  headline: "Cloud-Lösungen für die Automobilindustrie",
  subheadline:
    "Wir bieten keine generische Cloud-Beratung. Jedes Engagement ist auf die einzigartigen Anforderungen von Automotive-Produktionssystemen, Lieferketten und Connected Platforms ausgerichtet.",
  services: [
    {
      id: "cloud-migration",
      title: "Cloud-Migration & Modernisierung",
      tagline: "Schnell migrieren. Nichts riskieren.",
      description:
        "Wir planen und führen End-to-End-Cloud-Migrationen für Legacy-On-Premise-Umgebungen durch – von der ersten Analyse und dem Business Case bis zum Cutover und Hypercare. Unsere bewährten Lift-and-Shift-, Re-Platform- und Re-Architect-Methoden minimieren Störungen produktionskritischer Systeme.",
      benefits: [
        "Zero-Downtime-Migrationsstrategien für 24/7-Fertigungsumgebungen",
        "Modernisierungspfade für Legacy-ERP und MES",
        "Multi-Cloud- und Hybrid-Cloud-Architekturdesign",
      ],
      icon: "cloud-upload",
    },
    {
      id: "devops-cicd",
      title: "DevOps & CI/CD-Transformation",
      tagline: "Software schneller ausliefern. Zuverlässig.",
      description:
        "Wir verankern DevOps-Kultur und -Werkzeuge in Ihren Engineering-Teams – automatisieren Build-, Test-, Security-Scanning- und Deployment-Pipelines, damit Ihre Teams Zeit für Innovation statt für Betrieb aufwenden.",
      benefits: [
        "Infrastructure as Code (Terraform, Pulumi, AWS CDK)",
        "CI/CD-Pipeline-Design für Embedded- und Cloud-native Software",
        "GitOps und Release-Automatisierung für OTA-Update-Plattformen",
      ],
      icon: "git-branch",
    },
    {
      id: "data-analytics",
      title: "Daten- & Analytics-Plattformen",
      tagline: "Fahrzeugdaten in Entscheidungen verwandeln.",
      description:
        "Von der Telematik-Erfassung bis zu Echtzeit-Qualitätsdashboards – wir entwerfen und bauen Datenplattformen, die Automotive-Ingenieuren und Führungskräften die nötigen Erkenntnisse liefern – wenn sie gebraucht werden.",
      benefits: [
        "Skalierbare Data Lakes und Lakehouses auf AWS, Azure oder GCP",
        "Echtzeit-Streaming-Architekturen für Fahrzeugtelemetrie",
        "Self-Service-BI und Analytics-Rollouts",
      ],
      icon: "bar-chart",
    },
    {
      id: "connected-car",
      title: "Connected Car Platform Engineering",
      tagline: "Das Fahrzeug ist ein Cloud-Knoten. Wir bauen die Brücke.",
      description:
        "Wir entwerfen und implementieren die Backend-Dienste für Connected-Vehicle-Funktionen – Remote-Diagnose, OTA-Updates, digitale Services und Fahrzeug-Cloud-Datenpipelines – mit der Skalierbarkeit und Sicherheit, die die Automobilindustrie fordert.",
      benefits: [
        "MQTT/AMQP-Broker-Design und Skalierung",
        "OTA-Update-Backend-Infrastruktur",
        "DSGVO-konforme Fahrzeugdaten-Frameworks",
      ],
      icon: "car",
    },
    {
      id: "sap-on-cloud",
      title: "SAP in der Cloud",
      tagline: "Ihr ERP, neu geboren in der Cloud.",
      description:
        "SAP ist das operative Rückgrat der meisten Automobilunternehmen. Wir sind spezialisiert auf SAP S/4HANA-Migrationen zu Hyperscaler-Plattformen – mit Fokus auf Performance, Compliance und nahtlose Integration mit cloud-nativen Umsystemen.",
      benefits: [
        "SAP RISE und Sovereign Cloud Assessments",
        "BTP-Integration und Extension-Architektur",
        "Migration von ECC auf S/4HANA ohne Geschäftsunterbrechung",
      ],
      icon: "server",
    },
    {
      id: "security-compliance",
      title: "Sicherheit & Compliance",
      tagline: "Zertifizierbar. Prüfbar. Resilient.",
      description:
        "Wir unterstützen Automobilunternehmen dabei, die Sicherheits- und Compliance-Anforderungen regulierter globaler Märkte zu erfüllen – von ISO 27001 und TISAX bis zu den UNECE WP.29 Cybersecurity-Regularien.",
      benefits: [
        "Implementierung von Cloud Security Posture Management (CSPM)",
        "TISAX-Readiness-Assessments und Maßnahmenplanung",
        "Zero-Trust-Netzwerkarchitektur für Automotive-Cloud-Umgebungen",
      ],
      icon: "shield",
    },
  ] satisfies Service[],
  cta: {
    label: "Anforderungen besprechen",
    href: "/de/contact",
  },
} as const;
