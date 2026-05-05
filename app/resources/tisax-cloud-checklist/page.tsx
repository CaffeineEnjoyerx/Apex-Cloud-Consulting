import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TISAX Cloud Readiness Checklist | Apex Cloud Consulting",
  description:
    "Free TISAX Cloud Readiness Checklist for automotive suppliers. 47 actionable controls covering access management, encryption, cloud configuration, and third-party risk — aligned with VDA ISA 6.0.",
  keywords: [
    "TISAX cloud checklist",
    "TISAX readiness assessment",
    "VDA ISA cloud controls",
    "automotive cloud compliance",
    "TISAX Level 2 preparation",
  ],
  alternates: { canonical: "/resources/tisax-cloud-checklist" },
  openGraph: {
    title: "TISAX Cloud Readiness Checklist",
    description:
      "47 actionable controls for automotive suppliers preparing for TISAX Level 2 in cloud environments. Aligned with VDA ISA 6.0.",
    url: "/resources/tisax-cloud-checklist",
    type: "article",
  },
};

const resourceSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "TISAX Cloud Readiness Checklist",
  description:
    "A structured checklist for automotive suppliers preparing for TISAX Level 2 assessment in cloud-hosted environments. Covers 47 controls across 8 domains aligned with VDA ISA 6.0.",
  author: {
    "@type": "Organization",
    name: "Apex Cloud Consulting GmbH",
    url: "https://apex-cloud-consulting.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Apex Cloud Consulting GmbH",
    url: "https://apex-cloud-consulting.vercel.app",
  },
  datePublished: "2026-05-01",
  dateModified: "2026-05-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://apex-cloud-consulting.vercel.app/resources/tisax-cloud-checklist",
  },
};

const domains = [
  {
    id: "A",
    title: "Identity & Access Management",
    vdaRef: "VDA ISA 5.1 / 5.2",
    controls: [
      {
        id: "A1",
        critical: true,
        control:
          "Multi-factor authentication (MFA) is enforced for all administrative access to cloud management consoles (AWS Console, Azure Portal, GCP Cloud Console).",
        guidance: "Conditional Access policies or IAM permission boundaries. Service accounts must not be used for interactive login.",
      },
      {
        id: "A2",
        critical: true,
        control:
          "Privileged access to cloud resources follows a just-in-time (JIT) or time-limited model — no standing admin permissions.",
        guidance: "Azure PIM, AWS IAM Identity Center with permission sets, or equivalent. Audit log of all JIT activations required.",
      },
      {
        id: "A3",
        critical: false,
        control: "A documented joiner/mover/leaver process covers cloud access provisioning and deprovisioning within defined SLAs.",
        guidance: "Deprovisioning SLA: ≤24 hours for leavers; ≤5 business days for role changes.",
      },
      {
        id: "A4",
        critical: false,
        control: "Service accounts and workload identities are inventoried, assigned owners, and reviewed quarterly.",
        guidance: "Orphaned service accounts (no owner, no recent use) are a common audit finding. Automate detection with cloud-native tooling.",
      },
      {
        id: "A5",
        critical: false,
        control: "Access reviews for OEM-data-handling systems are conducted at least every six months and results are documented.",
        guidance: "Results must be retained for the TISAX assessment period. Recertification by line manager is the minimum standard.",
      },
    ],
  },
  {
    id: "B",
    title: "Data Classification & Encryption",
    vdaRef: "VDA ISA 5.3 / 5.4",
    controls: [
      {
        id: "B1",
        critical: true,
        control:
          "All storage containing OEM-classified data (confidential or above) has encryption at rest enabled with customer-managed keys (CMK).",
        guidance:
          "Cloud provider default encryption (SSE with provider-managed keys) does not satisfy TISAX requirements for confidential data. CMK with HSM-backed key storage required.",
      },
      {
        id: "B2",
        critical: true,
        control: "All data in transit between on-premises systems and cloud environments uses TLS 1.2 or above.",
        guidance: "TLS 1.0 and 1.1 must be explicitly disabled. Document cipher suites in your network security baseline.",
      },
      {
        id: "B3",
        critical: false,
        control: "A data classification policy exists and is applied to all cloud storage buckets, databases, and file shares.",
        guidance: "Classification labels: Public, Internal, Confidential, Strictly Confidential. OEM data is typically Confidential minimum.",
      },
      {
        id: "B4",
        critical: false,
        control: "Key management procedures document key rotation schedules, key custodians, and emergency key access procedures.",
        guidance: "Key rotation: at least annually. Emergency access: documented break-glass procedure with audit trail.",
      },
    ],
  },
  {
    id: "C",
    title: "Network Security & Segmentation",
    vdaRef: "VDA ISA 5.5",
    controls: [
      {
        id: "C1",
        critical: true,
        control:
          "Cloud environments hosting OEM data are network-segmented from general corporate workloads using dedicated VPCs/VNets with restrictive security group rules.",
        guidance:
          "Default-deny ingress policy. Only required ports and protocols permitted. OEM data segments must not be directly reachable from internet-facing DMZ.",
      },
      {
        id: "C2",
        critical: false,
        control:
          "Cloud workload firewall rules are defined as code (Infrastructure as Code) and reviewed before deployment.",
        guidance: "Terraform or Bicep templates with automated policy checks (e.g., checkov, tfsec) before apply.",
      },
      {
        id: "C3",
        critical: false,
        control: "External-facing endpoints (APIs, file transfer portals) are protected by a Web Application Firewall.",
        guidance: "AWS WAF, Azure WAF, or equivalent. OWASP Top 10 rule set as baseline.",
      },
      {
        id: "C4",
        critical: false,
        control:
          "VPN or dedicated connectivity (ExpressRoute, Direct Connect) is used for on-premises to cloud traffic carrying OEM-classified data — not public internet.",
        guidance: "Public internet with TLS is not sufficient for confidential OEM data in transit. Dedicated or private network path required.",
      },
    ],
  },
  {
    id: "D",
    title: "Vulnerability & Patch Management",
    vdaRef: "VDA ISA 5.6",
    controls: [
      {
        id: "D1",
        critical: false,
        control:
          "A documented patching SLA is defined and monitored: Critical ≤5 business days, High ≤30 days, Medium ≤90 days.",
        guidance:
          "Cloud-native tooling: AWS Systems Manager Patch Manager, Azure Update Manager. Dashboard visibility required for auditor evidence.",
      },
      {
        id: "D2",
        critical: false,
        control:
          "Container images used in cloud workloads are scanned for vulnerabilities at build time and before deployment to production.",
        guidance: "Trivy, Snyk, or equivalent. Critical CVEs block deployment. Results retained as evidence.",
      },
      {
        id: "D3",
        critical: false,
        control:
          "Cloud infrastructure is scanned using a cloud security posture management (CSPM) tool at least weekly.",
        guidance: "Microsoft Defender for Cloud, AWS Security Hub, or equivalent. Findings tracked to remediation.",
      },
    ],
  },
  {
    id: "E",
    title: "Incident Detection & Response",
    vdaRef: "VDA ISA 5.7",
    controls: [
      {
        id: "E1",
        critical: true,
        control:
          "A documented information security incident response procedure exists, covers cloud-hosted systems, and has been tested within the last 12 months.",
        guidance:
          "Tabletop exercise minimum. Live drill preferred. Test must cover: detection → triage → OEM notification → post-incident review. Documentation of test results required.",
      },
      {
        id: "E2",
        critical: true,
        control:
          "Cloud audit logs (CloudTrail, Azure Monitor, GCP Audit Logs) are centrally collected, tamper-protected, and retained for a minimum of 12 months.",
        guidance:
          "Log forwarding to immutable storage (S3 with Object Lock, Azure Storage with immutability policy). Retention ≥12 months for TISAX; 24 months recommended.",
      },
      {
        id: "E3",
        critical: false,
        control:
          "Alerting is configured for high-risk events: impossible travel logins, mass download from OEM data repositories, privilege escalation attempts, and security group changes.",
        guidance: "SIEM integration or cloud-native alerting. Response runbooks for each alert type.",
      },
      {
        id: "E4",
        critical: false,
        control:
          "OEM customer notification obligations for security incidents are documented and the relevant OEM contacts are maintained in the incident response procedure.",
        guidance:
          "Most OEM supply agreements specify a notification window (commonly 24–72 hours). This must be reflected in your procedure.",
      },
    ],
  },
  {
    id: "F",
    title: "Third-Party & Supply Chain Risk",
    vdaRef: "VDA ISA 5.8",
    controls: [
      {
        id: "F1",
        critical: true,
        control:
          "All sub-suppliers and partners with access to OEM-classified data have been formally assessed for information security compliance within the last 24 months.",
        guidance:
          "VDA ISA questionnaire or equivalent. Assessment method and results must be documented. For lower-risk sub-suppliers, a self-assessment questionnaire backed by contractual obligations is acceptable.",
      },
      {
        id: "F2",
        critical: false,
        control:
          "Contracts with sub-suppliers handling OEM-classified data include information security clauses that mirror the OEM's data protection requirements.",
        guidance:
          "Minimum clauses: data classification obligations, breach notification, right-to-audit, and data deletion on contract end.",
      },
      {
        id: "F3",
        critical: false,
        control:
          "Access of sub-suppliers to cloud systems hosting OEM data is provisioned with least-privilege principles and reviewed annually.",
        guidance: "External identities should use federated or time-limited credentials, not shared passwords.",
      },
    ],
  },
  {
    id: "G",
    title: "Cloud Configuration Baseline",
    vdaRef: "VDA ISA 5.5 / 5.6",
    controls: [
      {
        id: "G1",
        critical: false,
        control:
          "A cloud security baseline is documented and enforced via policy-as-code (AWS Service Control Policies, Azure Policy, GCP Organization Policy).",
        guidance:
          "Baseline should cover: enabled regions, allowed VM sizes, required tags, mandatory encryption settings, prohibited public access configurations.",
      },
      {
        id: "G2",
        critical: false,
        control: "Public access to storage buckets, blob containers, and databases is blocked at the organization/management-group level.",
        guidance: "AWS S3 Block Public Access, Azure Storage Account public access disabled at policy level. No exceptions without documented risk acceptance.",
      },
      {
        id: "G3",
        critical: false,
        control:
          "Unused cloud resources (unattached disks, orphaned snapshots, idle VMs) are identified and decommissioned on a regular schedule.",
        guidance: "Monthly automated sweep. Orphaned resources are a security and cost risk.",
      },
      {
        id: "G4",
        critical: false,
        control: "Cloud resource configurations are auditable: changes tracked in version control and deployed via CI/CD pipeline, not manual console changes.",
        guidance: "GitOps model for infrastructure changes. Manual changes blocked via SCPs/Azure Policy in production environments.",
      },
    ],
  },
  {
    id: "H",
    title: "Business Continuity & Recovery",
    vdaRef: "VDA ISA 5.9",
    controls: [
      {
        id: "H1",
        critical: false,
        control:
          "Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO) are defined for all cloud systems processing OEM-classified data.",
        guidance: "RTOs should be aligned with contractual obligations to OEM customers. Document the business impact of downtime.",
      },
      {
        id: "H2",
        critical: false,
        control:
          "Backups of OEM-data systems are tested (restore tested, not just backup-to-disk confirmed) at least annually.",
        guidance:
          "A backup that has never been restored is not a backup for TISAX purposes. Restore test results must be documented.",
      },
      {
        id: "H3",
        critical: false,
        control:
          "Backups are stored in a geographically separate region from the primary workload and are not accessible from the primary environment with the same credentials.",
        guidance: "Immutable backups (S3 Object Lock, Azure Backup with soft delete) protect against ransomware scenarios.",
      },
    ],
  },
];

export default function TisaxCloudChecklistPage() {
  const totalControls = domains.reduce((sum, d) => sum + d.controls.length, 0);
  const criticalControls = domains.reduce(
    (sum, d) => sum + d.controls.filter((c) => c.critical).length,
    0
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourceSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link href="/" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Home
            </Link>
            <span className="text-blue-700">/</span>
            <span className="text-blue-300 text-sm">Resources</span>
            <span className="text-blue-700">/</span>
            <span className="text-blue-300 text-sm">TISAX Cloud Checklist</span>
          </div>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-purple-500 bg-opacity-30 border border-purple-400 rounded-lg text-xs font-bold text-purple-200 uppercase tracking-wide">
                Free Resource
              </span>
              <span className="px-3 py-1 bg-blue-500 bg-opacity-30 border border-blue-400 rounded-lg text-xs font-bold text-blue-200 uppercase tracking-wide">
                Checklist
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              TISAX Cloud Readiness Checklist
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              {totalControls} actionable controls for automotive suppliers preparing for TISAX Level 2 in cloud
              environments. Aligned with VDA ISA 6.0. Use this checklist to identify gaps before your assessment
              and prioritize remediation work.
            </p>
            <div className="flex items-center gap-6 text-sm text-blue-300 flex-wrap">
              <span>{totalControls} controls across 8 domains</span>
              <span>·</span>
              <span>{criticalControls} critical (must-fix) controls highlighted</span>
              <span>·</span>
              <span>VDA ISA 6.0 aligned</span>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">How to Use This Checklist</p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-3xl">
            Work through each domain before your TISAX assessment. Controls marked{" "}
            <span className="font-bold text-red-600">Critical</span> are the most common source of &quot;must-fix&quot; findings in
            automotive cloud environments — address these first. The VDA ISA reference tells you which part of the
            assessment questionnaire each control maps to. Share this checklist with your cloud team and information
            security manager.
          </p>
        </div>
      </div>

      {/* Checklist body */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main checklist */}
            <div className="lg:col-span-2 space-y-14">
              {domains.map((domain) => (
                <div key={domain.id}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {domain.id}
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{domain.title}</h2>
                      <p className="text-xs text-gray-500 mt-0.5">{domain.vdaRef}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {domain.controls.map((control) => (
                      <div
                        key={control.id}
                        className={`rounded-xl border p-5 ${
                          control.critical
                            ? "border-red-200 bg-red-50"
                            : "border-gray-100 bg-gray-50"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          {/* Checkbox placeholder */}
                          <div
                            className={`mt-0.5 w-5 h-5 flex-shrink-0 rounded border-2 ${
                              control.critical ? "border-red-400" : "border-gray-300"
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <span className="text-xs font-bold text-gray-400">{control.id}</span>
                              {control.critical && (
                                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-xs font-bold rounded-md uppercase tracking-wide">
                                  Critical
                                </span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-gray-900 leading-relaxed mb-3">
                              {control.control}
                            </p>
                            <div className="p-3 bg-white rounded-lg border border-gray-200">
                              <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">
                                Implementation Guidance
                              </p>
                              <p className="text-xs text-gray-600 leading-relaxed">{control.guidance}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* About this checklist */}
              <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">About This Checklist</h2>
                <div className="text-gray-700 text-sm leading-relaxed space-y-3">
                  <p>
                    This checklist was developed by the Apex Cloud Consulting security practice based on our
                    experience supporting automotive suppliers through TISAX Level 1, 2, and 3 assessments. It
                    reflects the most common cloud-specific findings we see in VDA ISA assessments for suppliers
                    operating on AWS, Azure, and GCP.
                  </p>
                  <p>
                    This checklist is aligned with VDA ISA 6.0, the current version of the assessment questionnaire
                    as of May 2026. TISAX assessments are conducted by ENX-accredited audit providers — this
                    checklist is a preparation tool, not a substitute for a formal assessment.
                  </p>
                  <p>
                    Controls are not exhaustive. Depending on your scope (e.g., prototype protection, connected
                    vehicle data), additional VDA ISA domains may apply. We recommend combining this checklist with
                    a full VDA ISA gap analysis before your formal assessment.
                  </p>
                </div>
              </div>

              {/* Freshness */}
              <div className="pt-6 border-t border-gray-100 text-sm text-gray-500">
                Last updated: 5 May 2026 · Aligned with VDA ISA 6.0
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Summary card */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Checklist Summary</h3>
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Total controls</dt>
                    <dd className="font-bold text-gray-900">{totalControls}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-red-600 font-medium">Critical controls</dt>
                    <dd className="font-bold text-red-600">{criticalControls}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Domains covered</dt>
                    <dd className="font-bold text-gray-900">{domains.length}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">VDA ISA version</dt>
                    <dd className="font-bold text-gray-900">6.0</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Need Help Closing the Gaps?</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  We run TISAX readiness assessments and remediation programs for automotive suppliers. Tell us
                  where you are in the process.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Talk to a TISAX Specialist
                </Link>
              </div>

              {/* Related case study */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Case Study</h3>
                <Link
                  href="/case-studies/tisax-remediation-tier1-supplier"
                  className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    TISAX Level 2 Remediation: From 23 Findings to Certified
                  </p>
                  <p className="text-xs text-blue-600">Read case study →</p>
                </Link>
              </div>

              {/* Related blog */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Article</h3>
                <Link
                  href="/blog/tisax-cloud-environments-guide"
                  className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    TISAX in Cloud Environments: What Automotive Suppliers Need to Know
                  </p>
                  <p className="text-xs text-gray-500">8 min read</p>
                </Link>
              </div>

              {/* Related service */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Service</h3>
                <Link
                  href="/services/security-compliance"
                  className="block text-sm text-blue-600 hover:underline"
                >
                  Security &amp; Compliance →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your TISAX Preparation?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Our TISAX specialists can run a gap assessment against this checklist and build you a prioritized
            remediation roadmap within two weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Request a Gap Assessment
            </Link>
            <Link
              href="/case-studies/tisax-remediation-tier1-supplier"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              See TISAX Case Study
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
