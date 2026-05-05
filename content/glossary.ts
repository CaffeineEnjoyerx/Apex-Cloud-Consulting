export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDef: string;
  definition: string;
  relatedServices: { label: string; href: string }[];
};

export const glossaryPageCopy = {
  headline: "Automotive Cloud Glossary",
  subheadline:
    "Key terminology across automotive cybersecurity, vehicle connectivity, industrial automation, and cloud architecture — with context for how each concept appears in real-world cloud engagements.",
  terms: [
    {
      slug: "tisax",
      term: "TISAX",
      shortDef: "Trusted Information Security Assessment Exchange",
      definition:
        "TISAX is an automotive-industry standard for information security assessment managed by the ENX Association. It is based on the ISA (Information Security Assessment) questionnaire and allows OEMs and Tier-1 suppliers to share audit results without repeating separate assessments for every customer. A TISAX label is a mandatory prerequisite for handling sensitive vehicle data, prototype information, or confidential project data on behalf of most major German OEMs.",
      relatedServices: [
        { label: "Security & Compliance", href: "/services/security-compliance" },
      ],
    },
    {
      slug: "wp29",
      term: "WP.29",
      shortDef: "UNECE World Forum for Harmonization of Vehicle Regulations",
      definition:
        "WP.29 is the United Nations Economic Commission for Europe forum that develops binding international technical regulations for vehicles. For automotive cloud teams, the most relevant outputs are UN Regulation No. 155 (vehicle cybersecurity management) and UN Regulation No. 156 (software update management), which together mandate that every new vehicle type approved in the EU, Japan, and South Korea from July 2022 onward must demonstrate a certified CSMS and SUMS.",
      relatedServices: [
        { label: "Security & Compliance", href: "/services/security-compliance" },
        { label: "Connected Car Platforms", href: "/services/connected-car" },
      ],
    },
    {
      slug: "ota",
      term: "OTA",
      shortDef: "Over-the-Air Software Update",
      definition:
        "OTA refers to the remote delivery of software, firmware, or configuration changes to a connected vehicle without requiring a physical workshop connection. Modern OTA architectures handle differential package generation, cryptographic signing, staged rollouts, rollback safety, and consent management. Compliance with UNECE WP.29 UN R156 requires a documented Software Update Management System (SUMS) governing the full OTA lifecycle.",
      relatedServices: [
        { label: "Connected Car Platforms", href: "/services/connected-car" },
        { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
      ],
    },
    {
      slug: "iatf-16949",
      term: "IATF 16949",
      shortDef: "International Automotive Quality Management Standard",
      definition:
        "IATF 16949 is the automotive-specific quality management system standard published by the International Automotive Task Force. It extends ISO 9001 with requirements unique to automotive production and service part organisations. Supplier qualification by BMW, Mercedes-Benz, Stellantis, and other OEMs typically requires IATF 16949 certification. Cloud-hosted MES and production data platforms must maintain audit trails and change controls that satisfy IATF 16949 requirements.",
      relatedServices: [
        { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
        { label: "Security & Compliance", href: "/services/security-compliance" },
      ],
    },
    {
      slug: "autosar",
      term: "AUTOSAR",
      shortDef: "AUTomotive Open System ARchitecture",
      definition:
        "AUTOSAR is a global partnership of OEMs, Tier-1 suppliers, and tooling vendors that standardises the software architecture for automotive electronic control units. Classic AUTOSAR targets safety-critical embedded controllers (engine, brakes, airbags); Adaptive AUTOSAR targets high-performance compute platforms running Linux or QNX. Connected Car cloud backends must integrate with AUTOSAR-based ECUs for remote diagnostics, OTA update target management, and digital twin state synchronisation.",
      relatedServices: [
        { label: "Connected Car Platforms", href: "/services/connected-car" },
      ],
    },
    {
      slug: "rise-with-sap",
      term: "RISE with SAP",
      shortDef: "SAP's Cloud ERP Adoption Bundle",
      definition:
        "RISE with SAP is SAP's cloud-centric ERP modernisation offering that bundles SAP S/4HANA Cloud, Business Process Intelligence, SAP Business Technology Platform (BTP), cloud infrastructure services, and embedded support into a single subscription contract. For automotive enterprises, RISE provides a structured path to decommission on-premise SAP ECC landscapes and adopt a scalable, continuously updated cloud ERP with native hyperscaler integration.",
      relatedServices: [
        { label: "SAP on Cloud", href: "/services/sap-on-cloud" },
      ],
    },
    {
      slug: "csms",
      term: "CSMS",
      shortDef: "Cybersecurity Management System",
      definition:
        "A CSMS is the documented, process-driven system an OEM must implement to identify, assess, and mitigate cybersecurity risks throughout the full vehicle lifecycle — from concept through decommissioning. UNECE WP.29 UN Regulation No. 155 makes a certified CSMS a mandatory condition for vehicle type approval in regulated markets. Cloud security operations (threat monitoring, vulnerability management, incident response) are integral CSMS components for connected vehicle backends.",
      relatedServices: [
        { label: "Security & Compliance", href: "/services/security-compliance" },
        { label: "Connected Car Platforms", href: "/services/connected-car" },
      ],
    },
    {
      slug: "sums",
      term: "SUMS",
      shortDef: "Software Update Management System",
      definition:
        "A SUMS is the systematic framework governing how software updates are planned, validated, authorised, deployed, and documented across a vehicle fleet's operational lifetime. UNECE WP.29 UN Regulation No. 156 requires OEMs to operate a certified SUMS for type-approved vehicles. In practice, a SUMS defines the end-to-end OTA update process — from build pipeline signing to vehicle consent handling — and mandates traceability records for every update event.",
      relatedServices: [
        { label: "Connected Car Platforms", href: "/services/connected-car" },
        { label: "Security & Compliance", href: "/services/security-compliance" },
      ],
    },
    {
      slug: "mqtt",
      term: "MQTT",
      shortDef: "Message Queuing Telemetry Transport",
      definition:
        "MQTT is a lightweight publish-subscribe messaging protocol designed for constrained devices and unreliable networks. In automotive cloud architectures, MQTT is the de facto standard for vehicle-to-cloud telemetry: vehicles publish sensor and diagnostic data to a topic hierarchy; cloud subscribers consume the stream for analytics, alerting, and digital twin updates. Brokers such as HiveMQ, AWS IoT Core, or Azure IoT Hub handle millions of concurrent device connections with TLS mutual authentication.",
      relatedServices: [
        { label: "Connected Car Platforms", href: "/services/connected-car" },
        { label: "Data & Analytics", href: "/services/data-analytics" },
      ],
    },
    {
      slug: "opc-ua",
      term: "OPC-UA",
      shortDef: "OPC Unified Architecture",
      definition:
        "OPC-UA is a platform-independent, service-oriented industrial communication protocol developed by the OPC Foundation. In automotive manufacturing, OPC-UA is the standard for real-time, secure data exchange between PLCs, robots, conveyor systems, MES, and cloud platforms. An OPC-UA server exposes a structured information model that cloud connectors can browse and subscribe to, enabling seamless shopfloor-to-cloud data pipelines without proprietary middleware.",
      relatedServices: [
        { label: "Data & Analytics", href: "/services/data-analytics" },
        { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
      ],
    },
    {
      slug: "mes",
      term: "MES",
      shortDef: "Manufacturing Execution System",
      definition:
        "A MES is the software layer that controls, monitors, and documents the transformation of raw materials into finished vehicles on the production floor. It bridges the gap between ERP planning (SAP) and shopfloor automation (SCADA/PLC). In automotive cloud migrations, MES modernisation is a critical and technically complex workstream: legacy MES systems often run on end-of-life servers with undocumented integrations that must be carefully re-architected before lift-and-shift.",
      relatedServices: [
        { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
        { label: "Data & Analytics", href: "/services/data-analytics" },
      ],
    },
    {
      slug: "scada",
      term: "SCADA",
      shortDef: "Supervisory Control and Data Acquisition",
      definition:
        "SCADA is the control-system architecture used to remotely monitor and control industrial equipment across geographically distributed assets — assembly lines, paint shops, press shops, and energy systems in automotive plants. Modernising SCADA to cloud-connected architectures enables centralised fleet monitoring, predictive maintenance analytics, and energy optimisation. Security is paramount: SCADA systems control physical processes and must be isolated from corporate IT networks through industrial DMZ designs.",
      relatedServices: [
        { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
        { label: "Security & Compliance", href: "/services/security-compliance" },
      ],
    },
    {
      slug: "digital-twin",
      term: "Digital Twin",
      shortDef: "Virtual Replica of a Physical Asset or Process",
      definition:
        "A digital twin is a continuously updated virtual representation of a physical object, process, or system, fed by real-world sensor data. In the automotive industry, digital twins span from individual vehicle ECU simulation and in-service monitoring to full factory process modelling and assembly line optimisation. Cloud-hosted digital twins integrate vehicle telemetry (via MQTT), engineering CAD data, and production sensor streams to enable predictive maintenance, remote diagnostics, and production throughput simulation.",
      relatedServices: [
        { label: "Data & Analytics", href: "/services/data-analytics" },
        { label: "Connected Car Platforms", href: "/services/connected-car" },
      ],
    },
    {
      slug: "zero-trust",
      term: "Zero Trust",
      shortDef: "Security Model: Never Trust, Always Verify",
      definition:
        "Zero trust is a security framework built on the principle that no user, device, or network segment is inherently trusted — even those inside the corporate perimeter. Every access request must be authenticated, authorised, and continuously validated based on identity, device posture, location, and behaviour. For automotive cloud environments handling vehicle data, engineering IP, and production systems, zero-trust network architecture (ZTNA) replaces legacy VPNs and flat networks with per-session, least-privilege access controls.",
      relatedServices: [
        { label: "Security & Compliance", href: "/services/security-compliance" },
        { label: "Connected Car Platforms", href: "/services/connected-car" },
      ],
    },
    {
      slug: "data-lakehouse",
      term: "Data Lakehouse",
      shortDef: "Unified Analytics Architecture Combining Lake and Warehouse",
      definition:
        "A data lakehouse is an open data management architecture that combines the cost-effective, schema-flexible storage of a data lake with the data management features (ACID transactions, schema enforcement, time-travel, governance) of a data warehouse — all on the same storage layer using open formats such as Delta Lake, Apache Iceberg, or Apache Hudi. For automotive organisations, a lakehouse enables unified analysis of structured production KPIs, unstructured maintenance records, and high-volume vehicle telemetry in a single platform without costly data duplication.",
      relatedServices: [
        { label: "Data & Analytics", href: "/services/data-analytics" },
        { label: "Cloud Migration & Modernization", href: "/services/cloud-migration" },
      ],
    },
    {
      slug: "sdv",
      term: "SDV",
      shortDef: "Software-Defined Vehicle",
      definition:
        "A software-defined vehicle is a vehicle architecture in which most functions, features, and driver experiences are delivered and updated through software rather than fixed hardware. SDV separates hardware capabilities from software features, enabling continuous feature delivery via OTA updates after vehicle sale. Realising an SDV programme requires cloud backends for OTA update orchestration, remote diagnostics, feature licensing, and continuous integration pipelines for embedded and cloud-native software.",
      relatedServices: [
        { label: "Connected Car Platforms", href: "/services/connected-car" },
        { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
      ],
    },
    {
      slug: "iso-21434",
      term: "ISO 21434",
      shortDef: "Road Vehicles — Cybersecurity Engineering Standard",
      definition:
        "ISO 21434 is the international standard defining cybersecurity engineering requirements across the full lifecycle of electrical and electronic systems in road vehicles — from concept and design through production, operations, maintenance, and decommissioning. It provides the technical framework underpinning compliance with UNECE WP.29 UN R155. Cloud teams play a key role in ISO 21434 implementation: security operations, penetration testing, vulnerability disclosure processes, and incident response are all in scope.",
      relatedServices: [
        { label: "Security & Compliance", href: "/services/security-compliance" },
      ],
    },
  ] satisfies GlossaryTerm[],
  cta: {
    label: "Have Questions About Your Cloud Project?",
    href: "/contact",
  },
} as const;
