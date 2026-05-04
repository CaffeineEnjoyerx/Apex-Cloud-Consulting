import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description:
    "Datenschutzerklärung der Apex Cloud Consulting GmbH gemäß DSGVO / TTDSG.",
  alternates: { canonical: "/datenschutz" },
  robots: { index: false, follow: false },
};

export default function DatenschutzPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
            <p className="text-lg text-blue-100">Gemäß DSGVO &amp; TTDSG – Stand: Mai 2026</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">1. Verantwortlicher</h2>
            <p className="leading-relaxed">
              Apex Cloud Consulting GmbH<br />
              [Straße und Hausnummer]<br />
              [PLZ] [Ort]<br />
              Deutschland<br />
              E-Mail: info@apexcloudconsulting.de<br />
              Telefon: [+49 XXX XXXXXXX]
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">2. Allgemeine Hinweise</h2>
            <p className="leading-relaxed">
              Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten
              Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO,
              TTDSG). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte
              der Datenverarbeitung im Rahmen unserer Website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">3. Hosting &amp; Server-Logfiles</h2>
            <p className="leading-relaxed mb-3">
              Unsere Website wird bei Vercel Inc., 340 Pine Street, Suite 701, San Francisco, CA
              94104, USA, gehostet. Beim Besuch unserer Website speichert der Webserver automatisch
              folgende Daten in sogenannten Server-Logfiles:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>IP-Adresse des anfragenden Rechners (anonymisiert)</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. Betriebssystem</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              Sicherstellung des Betriebs der Website). Die Daten werden nach spätestens 7 Tagen
              gelöscht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">4. Kontaktformular</h2>
            <p className="leading-relaxed">
              Wenn Sie uns über das Kontaktformular eine Nachricht zukommen lassen, werden Ihre
              Angaben (Name, E-Mail-Adresse, Nachricht) bei uns gespeichert, um Ihre Anfrage zu
              bearbeiten. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1
              lit. f DSGVO (berechtigtes Interesse). Die Daten werden gelöscht, sobald Ihre Anfrage
              abschließend bearbeitet wurde und keine gesetzliche Aufbewahrungspflicht entgegensteht.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">5. Cookies</h2>
            <p className="leading-relaxed mb-3">
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät
              gespeichert werden. Wir unterscheiden:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">Technisch notwendige Cookies</h3>
                <p className="text-sm">
                  Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie können
                  nicht abgelehnt werden. Rechtsgrundlage: § 25 Abs. 2 TTDSG.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">Analyse-Cookies (optional)</h3>
                <p className="text-sm">
                  Mit Ihrer Einwilligung verwenden wir Google Analytics 4 (GA4), um die Nutzung
                  unserer Website statistisch auszuwerten. GA4 setzt Cookies, die eine Analyse Ihres
                  Nutzungsverhaltens ermöglichen. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO i.V.m.
                  § 25 Abs. 1 TTDSG. Ihre Einwilligung können Sie jederzeit widerrufen.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">6. Google Analytics 4 (GA4)</h2>
            <p className="leading-relaxed mb-3">
              Mit Ihrer Einwilligung setzen wir Google Analytics 4 ein, einen Webanalysedienst der
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA (innerhalb der EU
              betrieben durch Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland).
            </p>
            <p className="leading-relaxed mb-3">
              GA4 verwendet Cookies und ähnliche Technologien, um Informationen über die Nutzung
              unserer Website zu sammeln und auszuwerten. Die erzeugten Daten werden auf Servern von
              Google gespeichert. Wir haben IP-Anonymisierung aktiviert.
            </p>
            <p className="leading-relaxed">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 Abs. 1 TTDSG. Ihre
              Einwilligung erteilen Sie über unser Cookie-Banner und können sie jederzeit mit Wirkung
              für die Zukunft widerrufen. Weitere Informationen:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://policies.google.com/privacy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">7. Eingebettete Inhalte</h2>
            <p className="leading-relaxed">
              Auf unserer Website können Inhalte von Drittanbietern eingebettet sein (z.B.
              Google-Schriftarten). Beim Aufruf solcher Inhalte wird eine Verbindung zu den Servern
              des jeweiligen Anbieters hergestellt, wodurch Ihre IP-Adresse übertragen werden kann.
              Google Fonts werden lokal vorgehalten, soweit technisch möglich, um Drittübertragungen
              zu minimieren.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">8. Ihre Rechte</h2>
            <p className="leading-relaxed mb-3">
              Sie haben gemäß DSGVO folgende Rechte gegenüber uns hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm">
              <li><strong>Auskunftsrecht</strong> (Art. 15 DSGVO)</li>
              <li><strong>Recht auf Berichtigung</strong> (Art. 16 DSGVO)</li>
              <li><strong>Recht auf Löschung</strong> (Art. 17 DSGVO)</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)</li>
              <li><strong>Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO)</li>
              <li><strong>Widerspruchsrecht</strong> (Art. 21 DSGVO)</li>
              <li><strong>Recht auf Widerruf von Einwilligungen</strong> (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p className="leading-relaxed mt-3">
              Außerdem haben Sie das Recht, bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung Ihrer personenbezogenen Daten durch uns Beschwerde einzulegen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">9. Datensicherheit</h2>
            <p className="leading-relaxed">
              Unsere Website wird ausschließlich über HTTPS ausgeliefert. Wir setzen technische und
              organisatorische Maßnahmen (TOMs) ein, um Ihre Daten gegen unbeabsichtigte oder
              unrechtmäßige Vernichtung, Verlust, Veränderung, unbefugte Weitergabe oder unbefugten
              Zugang zu schützen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">10. Aktualität dieser Erklärung</h2>
            <p className="leading-relaxed">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2026. Durch die
              Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw. behördlicher
              Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
