import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint (Impressum)",
  description: "Legal notice and student project disclaimer.",
  alternates: {
    canonical: "/imprint",
  },
};

export default function ImprintPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Impressum</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Studentisches Projekt
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-gray-600 text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wichtiger Hinweis</h2>
            
            <p className="mb-6">
              Bei der vorliegenden Website handelt es sich um ein ausschließlich zu Lehr- und Übungszwecken im Rahmen eines Hochschullabors zum Thema Online Marketing erstelltes studentisches Projekt. Die Inhalte dieser Website, einschließlich der dargestellten Firma, des Firmennamens, der Produkte, Dienstleistungen, Preise, Adressen, Kundendaten und weiterer Informationen, sind vollständig fiktiv.
            </p>

            <p className="mb-6">
              Ein tatsächlicher Geschäftsbetrieb findet nicht statt. Insbesondere können über diese Website keine rechtsverbindlichen Bestellungen getätigt oder sonstige Verträge abgeschlossen werden. Die Darstellung erfolgt rein zu didaktischen Zwecken ohne kommerzielle Absicht.
            </p>

            <p className="mb-6">
              Der verwendete Firmenname wurde exemplarisch und unabhängig von bestehenden Unternehmen gewählt. Sollte ein reales Unternehmen mit identischer oder ähnlicher Firma existieren, besteht keinerlei rechtlicher, wirtschaftlicher oder inhaltlicher Zusammenhang. Es liegt weder eine wettbewerbsrechtlich relevante Nutzung (§§ 3, 4 Nr. 1 UWG) noch eine markenmäßige Verwendung im Sinne des § 14 MarkenG vor. Die Nutzung erfolgt ohne die Absicht, bestehende Namens-, Marken- oder Kennzeichenrechte Dritter zu verletzen.
            </p>

            <p className="mb-6">
              Diese Website ist nur temporär öffentlich zugänglich und dient ausschließlich der Lehre im Hochschulkontext.
            </p>

            <p className="mb-6">
              Für Rückfragen oder Hinweise wenden Sie sich bitte an den verantwortlichen Hochschullehrenden gemäß § 5 Abs. 1 Nr. 2 TMG: <a href="mailto:manuel.kern@hs-heilbronn.de" className="text-blue-600 hover:text-blue-800 transition-colors">manuel.kern@hs-heilbronn.de</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
