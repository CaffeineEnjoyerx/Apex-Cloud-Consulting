// OFF-013: Guest Article Pitches
// Pitch emails for Automobilwoche, Heise, t3n, Computerwoche
// OFF-014: Podcast / Conference strategy

export type GuestPitch = {
  outlet: string;
  outletType: "trade-press" | "tech-press" | "automotive-press";
  contactEmail?: string;
  pitchSubject: string;
  pitchBody: string;
  proposedTitle: string;
  proposedWordCount: number;
  proposedAngle: string;
  keyPoints: string[];
  author: {
    name: string;
    title: string;
    bio: string;
  };
  followUpDays: number;
};

// PITCH-001: Automobilwoche — TISAX + Cloud angle
export const pitchAutomobilwoche: GuestPitch = {
  outlet: "Automobilwoche",
  outletType: "automotive-press",
  contactEmail: "redaktion@automobilwoche.de",
  pitchSubject:
    "Gastbeitrag: Warum TISAX und Cloud kein Widerspruch sind — und was Zulieferer jetzt tun müssen",
  pitchBody: `Sehr geehrte Damen und Herren,

mein Name ist Dr. Lena Schneider, Head of Security & Compliance bei Apex Cloud Consulting in Stuttgart. Wir sind auf Cloud-Transformation für die Automobilindustrie spezialisiert und halten seit diesem Jahr den TISAX-Assessment-Provider-Status auf Level 2.

Ich möchte Ihnen einen Gastbeitrag für Automobilwoche vorschlagen:

**„TISAX und Cloud: Kein Widerspruch — aber eine klare Architektur-Aufgabe"**

Viele Zulieferer in der Automobilindustrie zögern bei der Cloud-Migration, weil sie befürchten, ihre TISAX-Verpflichtungen zu gefährden. Diese Sorge ist verständlich, aber in der Regel unbegründet — wenn man weiß, was man tun muss.

Der Beitrag würde folgende Themen abdecken:
• Was TISAX tatsächlich von Cloud-Umgebungen fordert (und was nicht)
• Wie der Shared-Responsibility-Ansatz auf AWS, Azure und GCP TISAX-konform gestaltet wird
• Die häufigsten Fehler bei TISAX-Cloud-Projekten — und wie man sie vermeidet
• Konkrete Handlungsempfehlungen für IT-Leiter in der Zulieferindustrie

Der Beitrag richtet sich an IT-Entscheider und CISOs bei Tier-1- und Tier-2-Zulieferern. Er wäre ca. 1.200 Wörter lang, ohne Werbung, mit konkreten Handlungsempfehlungen.

Über mich: Dr. Lena Schneider arbeitet seit 12 Jahren im Bereich Informationssicherheit, davon 6 Jahre in der Automobilindustrie. Sie ist zertifizierte ISO 27001 Lead Auditor und TISAX-Assessorin.

Darf ich Ihnen den vollständigen Entwurf zusenden? Ich stehe für Rückfragen selbstverständlich zur Verfügung.

Mit freundlichen Grüßen,
Dr. Lena Schneider
Head of Security & Compliance, Apex Cloud Consulting
lena.schneider@apex-cloud.de | +49 711 123 4567`,
  proposedTitle:
    "TISAX und Cloud: Kein Widerspruch — aber eine klare Architektur-Aufgabe",
  proposedWordCount: 1200,
  proposedAngle:
    "Practical guide for Tier-1 CISOs and IT directors navigating TISAX compliance when migrating to cloud — addresses the most common misconception in automotive IT",
  keyPoints: [
    "TISAX assesses the ISMS, not the physical location — cloud is compliant when properly configured",
    "Shared responsibility model is the core of TISAX cloud compliance",
    "Common mistakes: no documented data classification, missing IAM governance, no assessor communication before migration",
    "Step-by-step TISAX cloud readiness checklist",
  ],
  author: {
    name: "Dr. Lena Schneider",
    title: "Head of Security & Compliance, Apex Cloud Consulting",
    bio: "12 years in information security, 6 years in automotive. Certified ISO 27001 Lead Auditor, TISAX Assessor, CISSP.",
  },
  followUpDays: 5,
};

// PITCH-002: Heise Online / iX — Technical cloud architecture angle
export const pitchHeise: GuestPitch = {
  outlet: "Heise Online / iX",
  outletType: "tech-press",
  contactEmail: "redaktion@heise.de",
  pitchSubject:
    "Guest article pitch: Building connected car backends at scale — the 5 architectural decisions that matter",
  pitchBody: `Hello,

My name is Thomas Bergmann, Head of Connected Car Practice at Apex Cloud Consulting, Stuttgart. We specialize in cloud infrastructure for automotive connected vehicle platforms, and I wanted to pitch an article I think would resonate strongly with the Heise/iX readership.

**Proposed title:** "Vernetztes Fahrzeug, skalierbare Architektur: 5 Entscheidungen, die über Erfolg oder Scheitern bestimmen"
(or in English: "Connected car at scale: 5 architectural decisions that determine success or failure")

The article would cover the five cloud architecture choices that consistently determine whether a connected vehicle backend can handle real fleet scale — from 50,000 to 2 million vehicles. These decisions are poorly documented in public literature because most companies keep their platform architectures close to the chest.

Topics covered:
1. MQTT vs. AMQP broker design for vehicle-to-cloud communication (with actual throughput benchmarks)
2. OTA update pipeline design — how to architect blast-radius control for update rollouts
3. Telemetry ingestion at scale: designing for peak-to-average spike ratios, not just averages
4. GDPR and regional data residency in connected vehicle architectures
5. Vehicle identity and PKI trust chains — why retrofitting PKI onto an existing fleet is a disaster and how to design for it from day one

This would be approximately 2,500 words with architecture diagrams. No vendor marketing — the article would be technology-neutral, using AWS, Azure, and GCP examples where relevant.

About me: Thomas Bergmann has 15 years of experience in automotive software engineering and connected car platform architecture, including 5 years at a major European OEM's digital services organization.

Would a full draft be of interest? I can deliver it within two weeks.

Best regards,
Thomas Bergmann
Head of Connected Car Practice, Apex Cloud Consulting
thomas.bergmann@apex-cloud.de`,
  proposedTitle:
    "Vernetztes Fahrzeug, skalierbare Architektur: 5 Entscheidungen, die über Erfolg oder Scheitern bestimmen",
  proposedWordCount: 2500,
  proposedAngle:
    "Deep technical article for software architects and DevOps engineers building connected vehicle backends — addresses gaps in public documentation with real-world benchmarks",
  keyPoints: [
    "MQTT vs AMQP trade-offs with actual performance data",
    "OTA pipeline blast-radius control architecture",
    "Telemetry ingestion spike handling patterns",
    "GDPR regional routing architecture",
    "PKI and vehicle identity trust chain design",
  ],
  author: {
    name: "Thomas Bergmann",
    title: "Head of Connected Car Practice, Apex Cloud Consulting",
    bio: "15 years in automotive software engineering. Former OEM digital services architect. Expert in connected vehicle backends, OTA platforms, and vehicle-to-cloud data architectures.",
  },
  followUpDays: 7,
};

// PITCH-003: t3n — Digital transformation / growth story angle
export const pitchT3n: GuestPitch = {
  outlet: "t3n",
  outletType: "tech-press",
  contactEmail: "redaktion@t3n.de",
  pitchSubject:
    "Gastbeitrag-Pitch: Das Auto als Software-Produkt — und was das für IT-Teams bedeutet",
  pitchBody: `Hallo,

Ich bin Markus Hoffmann, COO von Apex Cloud Consulting. Wir sind ein Stuttgarter Cloud-Beratungshaus, das sich seit 2018 ausschließlich auf die Automobilindustrie spezialisiert hat.

Ich möchte euch einen Gastbeitrag vorschlagen, der ich glaube gut zur t3n-Leserschaft passt — IT-Entscheider und Tech-Enthusiasten, die den Wandel verstehen wollen:

**„Das softwaredefinierten Fahrzeug verändert alles — auch die IT-Organisation"**

Alle reden über das Software-defined Vehicle als Produktentscheidung. Aber die wenigsten sprechen darüber, was der Übergang zum SDV für die IT-Organisation bedeutet — und welche strukturellen Veränderungen notwendig sind, damit OEM-IT-Teams die Erwartungen erfüllen können.

Der Beitrag würde folgendes behandeln:
• Warum sich Release-Zyklen von 4 Jahren auf 4 Wochen verkürzen — und was das für die Infrastruktur bedeutet
• Wie Feature-Teams plötzlich Cloud-Zugang brauchen (und warum das IT-Governance auf die Probe stellt)
• Warum Telemetriedaten zur Kerninfrastruktur werden — und welche SLAs das bedeutet
• Wie WP.29/UNECE R155 das Cybersecurity-Perimeter auf jedes vernetzte Fahrzeug auf der Straße ausdehnt

Der Beitrag wäre ca. 1.500 Wörter, praxisnah, ohne Produktwerbung.

Über mich: Markus Hoffmann hat 20 Jahre Erfahrung in IT-Transformation, davon 8 Jahre in der Automobilindustrie. Er hat die Cloud-Transformationsstrategie für mehrere europäische OEM-Zulieferer entwickelt und begleitet.

Interesse an einem vollständigen Entwurf?

Viele Grüße,
Markus Hoffmann
COO, Apex Cloud Consulting
markus.hoffmann@apex-cloud.de`,
  proposedTitle:
    "Das Software-defined Vehicle verändert alles — auch die IT-Organisation",
  proposedWordCount: 1500,
  proposedAngle:
    "Business/tech crossover for t3n audience: how SDV is forcing a fundamental IT transformation inside OEMs — not just a product change",
  keyPoints: [
    "Release cadence compression from years to weeks",
    "Cloud access for feature teams and governance implications",
    "Telematics data as core infrastructure with automotive SLAs",
    "WP.29 expanding cybersecurity perimeter to every connected vehicle",
  ],
  author: {
    name: "Markus Hoffmann",
    title: "COO, Apex Cloud Consulting",
    bio: "20 years in IT transformation, 8 years in automotive. Cloud strategy for European OEM suppliers.",
  },
  followUpDays: 5,
};

// PITCH-004: Computerwoche — CIO/IT director angle
export const pitchComputerwoche: GuestPitch = {
  outlet: "Computerwoche",
  outletType: "tech-press",
  contactEmail: "redaktion@computerwoche.de",
  pitchSubject:
    "Gastbeitrag: SAP RISE in der Automobilindustrie — was CIOs vor der Unterschrift prüfen müssen",
  pitchBody: `Sehr geehrte Damen und Herren,

mein Name ist Dr. Klaus Mayer, CEO von Apex Cloud Consulting. Wir sind auf Cloud-Transformation für Automobilhersteller und -zulieferer spezialisiert und haben in den letzten Jahren zahlreiche SAP-S/4HANA-Migrationen in der Automobilindustrie begleitet.

Ich möchte Ihnen einen Gastbeitrag für die Computerwoche vorschlagen, der sich an CIOs und IT-Verantwortliche in der Automobilindustrie richtet:

**„SAP RISE im Automotive-Umfeld: Was CIOs vor der Vertragsunterschrift prüfen müssen"**

SAP RISE mit S/4HANA verspricht vereinfachte Migration und gebündelte Verantwortung. Für viele Automobilunternehmen ist das der richtige Weg. Aber zwischen Angebot und Realität gibt es einige Themen, die im Vorfeld geklärt sein sollten.

Der Beitrag würde behandeln:
• Custom-Code-Situation: Was Custom ABAP bedeutet und warum die Bereinigung 30–40% des Projektaufwands ausmachen kann
• Datenhaltung und TISAX: Wo liegen die Daten unter RISE — und was bedeutet das für die TISAX-Verpflichtungen?
• Was RISE wirklich umfasst und was nicht (BTP, Analytics, Integrationsschicht)
• Exit-Strategie: Was passiert, wenn man in 5 Jahren die Hyperscaler-Beziehung direkt führen will?
• Integration mit der übrigen Cloud-Landschaft: RISE besitzt nicht Ihre Kinesis-Pipelines oder Ihr Data Warehouse

Der Beitrag wäre ca. 1.400 Wörter, werbefrei, mit konkreten Checklisten für CIOs.

Über mich: Dr. Klaus Mayer gründete Apex Cloud Consulting 2018 nach 15 Jahren in der Enterprise-IT, davon 8 Jahren in der Automobilindustrie. Er ist SAP-Gold-Partner und hat über 50 SAP-Cloud-Migrationen verantwortet.

Ich sende Ihnen gerne den vollständigen Entwurf zu.

Mit freundlichen Grüßen,
Dr. Klaus Mayer
CEO, Apex Cloud Consulting
k.mayer@apex-cloud.de | +49 711 123 4500`,
  proposedTitle:
    "SAP RISE im Automotive-Umfeld: Was CIOs vor der Vertragsunterschrift prüfen müssen",
  proposedWordCount: 1400,
  proposedAngle:
    "Decision-support article for automotive CIOs evaluating SAP RISE — addresses the five due-diligence questions that most vendor pitches skip over",
  keyPoints: [
    "Custom code assessment reality: 30-40% of project effort",
    "TISAX implications of RISE data hosting arrangements",
    "True scope of RISE vs. what's additional",
    "Exit strategy considerations before signing",
    "Integration architecture with non-SAP cloud estate",
  ],
  author: {
    name: "Dr. Klaus Mayer",
    title: "CEO, Apex Cloud Consulting",
    bio: "Founded Apex Cloud Consulting in 2018. 15 years in enterprise IT, 8 years in automotive. SAP Gold Partner. 50+ SAP cloud migrations delivered.",
  },
  followUpDays: 5,
};

export const allGuestPitches = [
  pitchAutomobilwoche,
  pitchHeise,
  pitchT3n,
  pitchComputerwoche,
];

// OFF-014: Podcast & Conference Strategy
export const podcastConferenceStrategy = {
  targetPodcasts: [
    {
      name: "Automotive Disruption Podcast",
      language: "English",
      audience: "OEM product & tech leaders",
      pitchAngle: "SDV cloud infrastructure — what the backend of a software-defined vehicle actually looks like",
      contactApproach: "LinkedIn DM to host, reference specific episode that aligns with our expertise",
    },
    {
      name: "Shift: Automobilität und Technologie (Automobil Industrie)",
      language: "German",
      audience: "Automotive industry decision-makers",
      pitchAngle: "TISAX + Cloud: Praxiserfahrungen aus 200 Projekten",
      contactApproach: "Email via podcast contact page, pitch TISAX-Cloud angle",
    },
    {
      name: "Cloud & Heat Podcast (Heise)",
      language: "German",
      audience: "Cloud architects and engineers",
      pitchAngle: "Connected car backend architecture — MQTT, OTA, and telemetry at fleet scale",
      contactApproach: "LinkedIn DM + email to Heise podcast editorial team",
    },
    {
      name: "IT-Tandem (Computerwoche Podcast)",
      language: "German",
      audience: "CIOs and IT directors",
      pitchAngle: "Automotive cloud transformation: the 5 lessons from 200 migrations",
      contactApproach: "Email to Computerwoche podcast via editorial contact",
    },
  ],
  targetConferences: [
    {
      name: "IAA Mobility (Munich)",
      type: "automotive",
      speakerOpportunity: "Digital Automotive Summit side program",
      proposedTalk: "From Factory to Cloud: How Automotive IT is Transforming for the SDV Era",
      submissionDeadline: "Typically March for September event",
      notes: "High visibility; requires strong OEM reference to be considered",
    },
    {
      name: "Automotive Engineering Expo (Nürnberg)",
      type: "automotive-tech",
      speakerOpportunity: "IT/Digitalization track",
      proposedTalk: "TISAX-konforme Cloud-Architekturen: Praxisleitfaden für Zulieferer",
      submissionDeadline: "Check annually; typically Q1 for May event",
      notes: "Strong Tier-1 supplier audience; compliance angle resonates strongly",
    },
    {
      name: "AWS re:Invent (Las Vegas)",
      type: "cloud",
      speakerOpportunity: "Partner stage / breakout session",
      proposedTalk: "Zero-Downtime Cloud Migration in 24/7 Automotive Manufacturing Environments",
      submissionDeadline: "June for December event",
      notes: "Submit as AWS Premier Partner; requires AWS PAM support",
    },
    {
      name: "Microsoft Build / Ignite",
      type: "cloud",
      speakerOpportunity: "Partner showcase or breakout",
      proposedTalk: "Azure IoT Hub for Connected Car Platforms: Lessons from Production Deployments",
      submissionDeadline: "Varies; coordinate with Microsoft Solutions Partner team",
      notes: "Good for Azure IoT/connected car angle; coordinate with MSFT PAM",
    },
    {
      name: "VDA TechDay",
      type: "automotive-association",
      speakerOpportunity: "Digitalization working group session",
      proposedTalk: "Cloud-Migration und TISAX: Gemeinsam geht es besser",
      submissionDeadline: "Contact VDA Working Group on Digitalization directly",
      notes: "Very high credibility with automotive audience; attendance by OEM IT leads",
    },
    {
      name: "Heise DevSec (Heidelberg)",
      type: "security-tech",
      speakerOpportunity: "Cloud security track",
      proposedTalk: "TISAX in der Cloud: Was Security-Architekten wissen müssen",
      submissionDeadline: "Check annually",
      notes: "Technical security audience; TISAX+Cloud is differentiated content",
    },
  ],
  podcastPitchTemplate: `Hi [Host Name],

I'm [Name], [Title] at Apex Cloud Consulting — we're a specialist cloud consultancy working exclusively with automotive OEMs and Tier-1 suppliers.

I've been listening to [Podcast Name] and particularly appreciated your recent episode on [specific episode topic] — it maps closely to challenges we see daily with our clients.

I'd love to suggest a guest conversation on [proposed topic]. Here's the core idea: [2-3 sentence hook].

A few credentials so you can assess fit:
• We've delivered 200+ cloud migrations in automotive environments
• We're TISAX Assessment Providers at Level 2 — quite rare in the cloud consultancy space
• [Specific relevant credential or experience]

I can offer concrete, practitioner-level insights with real-world examples (anonymized as needed).

Would this be of interest? Happy to send a more detailed pitch or jump on a 15-minute pre-interview call.

Best,
[Name]
[Title], Apex Cloud Consulting`,
};

// OFF-017: Awards & Best-of Lists
export const awardsStrategy = {
  targetAwards: [
    {
      award: "Lünendonk Liste — Top IT-Beratungsunternehmen",
      relevance: "Key German IT consulting ranking; high credibility with enterprise clients",
      submissionProcess: "Annual survey; requires revenue data and client references",
      timeline: "Survey typically Q1; results published Q3",
      priority: "high",
    },
    {
      award: "Clutch Global Leader — Cloud Consulting",
      relevance: "B2B review platform recognition; appears in procurement searches",
      submissionProcess: "Automatic via Clutch profile + minimum reviews",
      timeline: "Quarterly",
      priority: "high",
    },
    {
      award: "AWS Premier Partner Award — Automotive/Manufacturing",
      relevance: "Visible in AWS Partner Finder; co-marketing opportunities",
      submissionProcess: "Nominated by AWS PAM; requires case studies and customer references",
      timeline: "Annual, typically Q4",
      priority: "high",
    },
    {
      award: "Computerwoche Beste Berater",
      relevance: "German IT press-validated consulting ranking; strong CIO audience reach",
      submissionProcess: "Client nomination + editorial review; contact Computerwoche directly",
      timeline: "Annual",
      priority: "medium",
    },
    {
      award: "Automotive News PACE Award (Suppliers & Enablers)",
      relevance: "Highly regarded in automotive industry; global visibility",
      submissionProcess: "Open submission; requires demonstrable innovation and client impact",
      timeline: "Submissions typically open Q3 for following year",
      priority: "medium",
    },
  ],
  bestOfListTargets: [
    "Top Cloud Consulting Firms — Germany (various tech publications)",
    "Best IT Consultancies for Automotive — Automobil Industrie annual feature",
    "Top AWS Partners — Germany (cloud.de, CloudComputing-Insider)",
    "Recommended SAP Partners — SAP-Insider publication",
    "Top Cybersecurity Consultancies — Heise security special",
  ],
};
