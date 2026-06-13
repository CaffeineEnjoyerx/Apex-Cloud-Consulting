import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Services: [
    { label: "Cloud Migration", href: "/services/cloud-migration" },
    { label: "Connected Car Platforms", href: "/services/connected-car" },
    { label: "SAP on Cloud", href: "/services/sap-on-cloud" },
    { label: "DevOps & CI/CD", href: "/services/devops-cicd" },
    { label: "Data & Analytics", href: "/services/data-analytics" },
    { label: "Security & Compliance", href: "/services/security-compliance" },
  ],
  Industries: [
    { label: "OEM Solutions", href: "/industries/oem" },
    { label: "Tier-1 Suppliers", href: "/industries/tier-1" },
    { label: "Mobility Startups", href: "/industries/mobility-startups" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Glossary", href: "/glossary" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <div className="bg-white/95 p-2 rounded-xl inline-block">
                <Image 
                  src="/logo.png" 
                  alt="Apex Cloud Consulting Logo" 
                  width={240} 
                  height={96} 
                  className="h-24 w-auto object-contain -my-2"
                />
              </div>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              Your trusted partner for cloud transformation in the automotive industry.
              We help OEMs, Tier-1 suppliers, and Connected Car platforms leverage the power of the cloud.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-400 hover:text-blue-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; {currentYear} Apex Cloud Consulting GmbH. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/datenschutz" className="hover:text-gray-300 transition-colors">Datenschutz</Link>
            <Link href="/agb" className="hover:text-gray-300 transition-colors">AGB</Link>
            <Link href="/impressum" className="hover:text-gray-300 transition-colors">Impressum</Link>
            <Link href="/imprint" className="hover:text-gray-300 transition-colors">Imprint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
