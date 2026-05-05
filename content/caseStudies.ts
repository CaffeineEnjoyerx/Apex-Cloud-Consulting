export type CaseStudyMetric = {
  value: string;
  label: string;
};

export type CaseStudySection = {
  heading: string;
  content: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  metaDescription: string;
  keywords: string[];
  excerpt: string;
  tldr: string;
  challenge: string;
  metrics: CaseStudyMetric[];
  sections: CaseStudySection[];
  results: string[];
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
};

export const caseStudyListingCopy = {
  headline: "Case Studies",
  subheadline: "Real projects. Measurable outcomes.",
  description:
    "Each engagement starts with a specific challenge — a compliance gap, a legacy system holding back the business, a migration that needs to happen without downtime. These case studies show how we approached the work and what the outcomes looked like.",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "sap-s4hana-oem-migration",
    title: "SAP S/4HANA Migration for a German Automotive OEM: From Legacy ECC to Cloud-Native ERP",
    client: "Bavarian Automotive Group AG",
    industry: "Automotive OEM",
    service: "SAP S/4HANA Migration",
    metaDescription:
      "How Apex Cloud Consulting helped a German automotive OEM migrate from SAP ECC to S/4HANA on Azure — cutting batch processing time by 40% and delivering €2.1M in TCO savings over three years.",
    keywords: [
      "SAP S/4HANA migration",
      "automotive ERP",
      "SAP ECC to S4HANA",
      "Azure SAP migration",
      "OEM digital transformation",
    ],
    excerpt:
      "A German automotive OEM needed to retire its SAP ECC 6.0 landscape before the 2027 support deadline. We delivered a greenfield S/4HANA implementation on Azure — on time, with zero production downtime during cutover.",
    tldr:
      "Greenfield SAP S/4HANA migration on Azure for a German OEM with 3,400 ERP users. Project ran 14 months. Cutover completed in a 52-hour weekend window with zero production downtime. Results: 40% faster batch runs, 60% faster month-end close, €2.1M TCO savings over three years.",
    challenge:
      "SAP's mainstream maintenance end date for ECC 6.0 created a hard deadline, but the real urgency was competitive: the client's finance, procurement, and production planning processes were running on a system that could no longer support the real-time analytics and supplier connectivity their customers demanded. Twelve years of customizations had made the existing system nearly unmaintainable. A brownfield upgrade would carry those customizations forward; the client wanted a clean slate.",
    metrics: [
      { value: "40%", label: "Faster batch processing" },
      { value: "60%", label: "Faster month-end close" },
      { value: "€2.1M", label: "TCO savings over 3 years" },
      { value: "52h", label: "Production cutover window" },
      { value: "3,400", label: "ERP users migrated" },
      { value: "0", label: "Production incidents at go-live" },
    ],
    sections: [
      {
        heading: "The Starting Point: A Heavily Customized ECC Landscape",
        content:
          "Bavarian Automotive Group AG had been running SAP ECC 6.0 since 2011. Over more than a decade, the system had accumulated over 800 custom Z-programs, three non-standard payment interfaces, and a heavily modified MRP II configuration that reflected production planning logic unique to their mixed-model assembly lines.\n\nThe IT leadership team had two realistic options: a brownfield conversion — essentially an in-place upgrade that would preserve existing customizations — or a greenfield reimplementation on the new platform. Both paths had vocal internal advocates. The brownfield camp argued for speed and continuity; the greenfield camp argued that carrying forward twelve years of technical debt would negate the benefits of S/4HANA.\n\nApex Cloud Consulting was engaged at the point of decision. We conducted a four-week fit-gap analysis across all SAP modules in scope — FI/CO, MM, SD, PP, and QM — benchmarking the client's processes against S/4HANA standard functionality. The conclusion: 73% of the existing customizations addressed gaps that S/4HANA now covered in standard. A greenfield approach would eliminate the majority of the custom code burden while giving the business an opportunity to adopt S/4HANA best practices.",
      },
      {
        heading: "Migration Architecture: Azure RISE with SAP",
        content:
          "The target architecture was SAP S/4HANA 2023 on Azure, deployed under the RISE with SAP framework. This gave the client a managed private cloud environment with committed SLAs, built-in backups, and a clear commercial path for future S/4HANA updates. Azure's proximity to the client's existing Azure Data Lake and Power BI environment also meant that real-time financial reporting — one of the key business cases — could be implemented without additional middleware.\n\nThe migration used a three-system landscape: development, quality assurance, and production, all hosted on Azure Germany West Central to satisfy data residency requirements. Network connectivity back to on-premises manufacturing execution systems was handled via Azure ExpressRoute with a 10 Gbps dedicated circuit, ensuring that production planning data could flow in near real-time between the shop floor and S/4HANA's MRP Live engine.\n\nData migration was phased: master data (materials, vendors, customers, and cost centers) was migrated and reconciled first, followed by open items (purchase orders, sales orders, open FI postings), with historical transaction data migrated in parallel to a SAP BW/4HANA instance for reporting continuity.",
      },
      {
        heading: "Managing Change Across 3,400 Users",
        content:
          "A SAP migration touches every user who has ever opened a transaction. With 3,400 ERP users across four plants and the central finance organization, change management was as critical to the project's success as the technical work.\n\nApex Cloud Consulting embedded a dedicated change management track from day one. We trained 140 'S/4HANA Champions' — business process owners and team leaders — who received deep-dive training eight weeks before go-live and then served as the first line of support for their colleagues. End-user training was role-based and delivered through a combination of recorded simulations in the client's test system and live sessions facilitated by the Champions.\n\nThe hypercare period — the four weeks after go-live — was staffed with a blended team of Apex consultants and client IT personnel available around the clock. In practice, the volume of critical incidents was low: five P1 incidents were raised in the first two weeks, all resolved within four hours. By week three, the hypercare team had reduced to standard business hours.",
      },
      {
        heading: "Cutover Planning and Zero-Downtime Go-Live",
        content:
          "The production cutover is the highest-risk moment of any ERP migration. For a manufacturing company, the window available for downtime is determined by production schedules, not IT preferences.\n\nThe cutover plan was rehearsed twice in full — once six weeks before go-live and once two weeks before — using a clone of the production ECC system. Each rehearsal was timed activity by activity. By the second rehearsal, the team had reduced the critical path from 68 hours to 52 hours, fitting within the agreed weekend window between Friday 22:00 and Monday 02:00.\n\nThe actual cutover completed in 49 hours. The ECC system was locked at Friday 22:00; final delta data loads ran overnight; mock reconciliation completed by Saturday afternoon; business sign-off was obtained at Sunday 16:00; and production on S/4HANA started at Sunday 23:00 — three hours ahead of schedule. There were no rollback events.",
      },
      {
        heading: "Results: Speed, Savings, and a Platform for What Comes Next",
        content:
          "Twelve months after go-live, the quantified outcomes matched or exceeded the original business case. Batch processing jobs that previously ran overnight now complete in under two hours, enabling production planners to react to demand changes the same day rather than the following morning. The finance team closed their first month-end in S/4HANA in four days — down from ten in ECC — attributable to the real-time reconciliation capability in the Universal Journal.\n\nThe total cost of ownership analysis conducted at the 12-month mark showed €2.1M in savings versus the projected cost of maintaining and extending the ECC landscape for another five years. The largest contributors were the elimination of the custom Z-program maintenance burden (€640K over three years), the reduced infrastructure cost of the RISE with SAP model versus the previous on-premises hardware refresh cycle (€890K), and the decommissioning of three legacy integration middlewares that had connected ECC to downstream systems (€570K).\n\nThe business is now planning a second phase: an extension of the S/4HANA platform into supplier collaboration via SAP Business Network, and the deployment of SAP Analytics Cloud against the existing BW/4HANA foundation. Both projects are scoped to begin in Q1 2027.",
      },
    ],
    results: [
      "Greenfield S/4HANA 2023 go-live in 14 months, within budget",
      "Production cutover in 52 hours with zero downtime",
      "40% reduction in MRP batch processing time",
      "Month-end close from 10 days to 4 days",
      "€2.1M total cost of ownership savings over three years",
      "800+ custom Z-programs reduced to under 60 post-migration",
    ],
    publishedAt: "2026-04-20",
    updatedAt: "2026-05-05",
    readingTime: 9,
  },
  {
    slug: "tisax-remediation-tier1-supplier",
    title: "TISAX Level 2 Remediation for a Tier-1 Automotive Supplier: From 23 Findings to Certified",
    client: "PrecisionDrive Systems GmbH",
    industry: "Tier-1 Automotive Supplier",
    service: "TISAX & Security Compliance",
    metaDescription:
      "How Apex Cloud Consulting helped a Tier-1 automotive supplier clear 23 TISAX findings and achieve Level 2 certification in six months — securing a critical OEM supply contract.",
    keywords: [
      "TISAX remediation",
      "TISAX Level 2",
      "automotive supplier compliance",
      "VDA ISA findings",
      "information security automotive",
    ],
    excerpt:
      "PrecisionDrive Systems received their first TISAX assessment result with 23 findings — including four critical gaps — putting a major supply contract at risk. We ran the remediation program and got them to a clean re-assessment in six months.",
    tldr:
      "A Tier-1 supplier with 850 employees failed their first TISAX Level 2 assessment with 23 findings (4 critical, 11 major, 8 minor). Apex Cloud Consulting ran a six-month structured remediation program covering access management, cloud security, and third-party risk. The re-assessment resulted in zero critical and zero major findings, and TISAX Level 2 certification was issued within the contract deadline.",
    challenge:
      "PrecisionDrive Systems GmbH, a Tier-1 supplier of drivetrain components and embedded control systems, was required by their primary OEM customer to hold a valid TISAX Level 2 assessment as a condition of a new supply agreement. Their first assessment, conducted by an ENX-accredited audit body, returned 23 findings across the VDA ISA domains — including critical gaps in access control, cloud data handling, and third-party information security management. The OEM set a six-month deadline for re-assessment. Missing that deadline would trigger a contract clause allowing the OEM to source the components from an alternative supplier.",
    metrics: [
      { value: "23", label: "Findings at initial assessment" },
      { value: "0", label: "Critical findings at re-assessment" },
      { value: "6", label: "Months to certification" },
      { value: "850", label: "Employees in scope" },
      { value: "4", label: "Critical findings remediated" },
      { value: "100%", label: "OEM deadline met" },
    ],
    sections: [
      {
        heading: "Understanding the Assessment Results",
        content:
          "The initial TISAX assessment covered the VDA ISA 6.0 questionnaire across all five domains: Information Security, Prototype Protection, Data Protection, Cybersecurity, and Connectivity/Interfaces. The 23 findings broke down as four critical (must-fix before re-assessment), eleven major (high-priority remediation), and eight minor (improvement recommendations).\n\nThe four critical findings were: (1) no documented and tested information security incident response procedure; (2) administrative access to cloud-hosted engineering systems not protected by multi-factor authentication; (3) no formal third-party information security assessment process for sub-suppliers handling OEM prototype data; and (4) encryption at rest not enforced on the file shares containing CAD/CAM data classified as 'confidential' by the OEM.\n\nApex Cloud Consulting was engaged within two weeks of the assessment results being shared. Our first action was a structured triage workshop with the client's IT manager, CISO (a part-time role held by the Head of IT), and the operations director who owned the supply contract relationship. We prioritized the four critical findings for immediate action and sequenced the major findings across a 20-week remediation roadmap.",
      },
      {
        heading: "Remediating the Critical Findings",
        content:
          "The incident response gap was addressed first because it was both the highest-risk finding and, in practice, the fastest to close. We used an adapted version of ISO/IEC 27035 as the framework, tailored to PrecisionDrive's size and IT staffing. The resulting procedure covered detection and reporting, triage, escalation, communication to affected OEM customers, and post-incident review. A tabletop exercise was conducted six weeks after the procedure went live to validate it — the exercise identified two process gaps (escalation contact list was incomplete; the procedure assumed 24/7 IT coverage that didn't exist), both corrected before the re-assessment.\n\nThe MFA gap on cloud systems was technically straightforward but organizationally complex. PrecisionDrive's engineering team used Microsoft 365 and Azure DevOps for CAD file management and version control. Enabling Conditional Access policies for administrative roles took two weeks of configuration and testing. The harder work was identifying 34 service accounts that were being used for interactive administrative access — a practice that bypassed MFA enforcement. Each account was replaced with a properly managed service principal with least-privilege permissions.\n\nEncryption at rest for the CAD/CAM file shares was implemented using Azure Storage Service Encryption with customer-managed keys stored in Azure Key Vault. The migration of existing files to encrypted storage was completed in a rolling fashion over three weekends to avoid disrupting the engineering teams.",
      },
      {
        heading: "Third-Party Risk: The Hardest Finding to Close",
        content:
          "The third-party information security finding was the most operationally complex of the four criticals. PrecisionDrive used eleven sub-suppliers who had access to OEM-classified prototype data — stamping suppliers, tooling partners, and a calibration laboratory. None of these relationships had a formal information security assessment on file.\n\nWe designed a tiered assessment approach scaled to PrecisionDrive's resources. Sub-suppliers with direct access to OEM-classified CAD data (four suppliers) received a full VDA ISA-based questionnaire review and a one-day on-site assessment. Sub-suppliers with access limited to specification documents (five suppliers) received a shorter self-assessment questionnaire backed by a contractual security addendum. Two suppliers were assessed as out-of-scope after a data flow review confirmed they had no access to OEM-classified information.\n\nThree of the four deep-assessed sub-suppliers required remediation actions before they could be accepted. In two cases, the issues were procedural (no signed NDAs with the OEM's data classification requirements, no documented access revocation process). In one case, the supplier had a genuine technical gap — an unencrypted file transfer workflow — that required a configuration change on their end. Apex Cloud Consulting supported that supplier's technical remediation directly, acting as an extension of PrecisionDrive's project team.",
      },
      {
        heading: "Addressing the Major and Minor Findings",
        content:
          "The eleven major findings covered a wide range of VDA ISA domains. The most significant were: no formal asset inventory covering information assets (not just hardware); patch management SLA not defined or monitored for externally facing systems; and the absence of a Business Continuity Plan section addressing IT recovery for production-critical systems.\n\nThe asset inventory was rebuilt using a combination of Azure Resource Manager exports (for cloud assets), Microsoft Defender for Endpoint (for managed endpoints), and a manual survey of OT systems on the production floor. The resulting register covered 847 assets across 14 asset classes, with data classification assigned to each based on the information it stored or processed.\n\nPatch management was brought into scope by implementing a monthly patching window, documented SLAs (critical vulnerabilities: 5 business days; high: 30 days; medium: 90 days), and a dashboard in Microsoft Defender Vulnerability Management that gave the CISO real-time visibility into compliance. The BCP work was phased: a core IT recovery plan covering the eight production-critical systems was completed in time for the re-assessment; the broader organizational BCP was scoped as a follow-on project.",
      },
      {
        heading: "The Re-Assessment and What Came After",
        content:
          "The TISAX re-assessment was conducted by the same ENX-accredited audit body 24 weeks after the initial assessment results were received — two weeks inside the OEM's six-month deadline. The assessment covered all 23 original findings plus a standard review of the full VDA ISA questionnaire.\n\nThe result: zero critical findings, zero major findings, four minor observations (none of which were present in the original assessment — they reflected the auditors identifying new improvement opportunities in areas the remediation program had strengthened). TISAX Level 2 certification was issued 11 days after the re-assessment, and PrecisionDrive shared the result with their OEM customer through the ENX portal the same day.\n\nThe supply contract was confirmed. The OEM's procurement team subsequently asked whether PrecisionDrive would be interested in participating in a supplier development program for TISAX prototype protection — an indication that the remediation had shifted the relationship from compliance obligation to competitive differentiator.\n\nPrecisionDrive has since retained Apex Cloud Consulting on a quarterly review basis to maintain their TISAX posture ahead of the three-year reassessment cycle.",
      },
    ],
    results: [
      "Zero critical findings at re-assessment (down from 4)",
      "Zero major findings at re-assessment (down from 11)",
      "TISAX Level 2 certification issued within 6-month OEM deadline",
      "34 service accounts replaced with properly scoped service principals",
      "11 sub-suppliers formally assessed; third-party risk program established",
      "847-asset information register built and maintained in scope",
    ],
    publishedAt: "2026-04-28",
    updatedAt: "2026-05-05",
    readingTime: 10,
  },
];
