import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Apex Cloud Consulting GmbH gemäß § 5 TMG.",
  alternates: { canonical: "/impressum" },
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Impressum</h1>
            <p className="text-lg text-blue-100">Pflichtangaben gemäß § 5 TMG</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="leading-relaxed">
              Apex Cloud Consulting GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Handelsregister</h2>
            <p className="leading-relaxed">
              Registergericht: Amtsgericht [Ort]<br />
              Registernummer: HRB [Nummer]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Vertreten durch</h2>
            <p className="leading-relaxed">
              Geschäftsführer: [Name]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: [+49 XXX XXXXXXX]<br />
              E-Mail: info@apexcloudconsulting.de
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              DE [Nummer]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="leading-relaxed">
              [Name]<br />
              [Anschrift]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">EU-Streitschlichtung</h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
            <em>
              Hinweis: Einige Angaben sind Platzhalter und werden nach Gründungsabschluss durch die
              endgültigen Daten ersetzt.
            </em>
          </p>
        </div>
      </section>
    </>
  );
}
