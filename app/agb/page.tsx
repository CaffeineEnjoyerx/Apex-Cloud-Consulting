import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB",
  description:
    "Allgemeine Geschäftsbedingungen der Apex Cloud Consulting GmbH.",
  alternates: { canonical: "/agb" },
  robots: { index: false, follow: false },
};

export default function AgbPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
            <p className="text-lg text-blue-100">
              AGB der Apex Cloud Consulting GmbH – Stand: Mai 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-gray-700">

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 1 Geltungsbereich</h2>
            <p className="leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der
              Apex Cloud Consulting GmbH (nachfolgend &bdquo;Auftragnehmer&ldquo;) und ihren Auftraggebern
              (nachfolgend &bdquo;Auftraggeber&ldquo;) über Beratungs-, Entwicklungs- und sonstige IT-Dienstleistungen.
              Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der
              Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 2 Vertragsschluss</h2>
            <p className="leading-relaxed">
              Angebote des Auftragnehmers sind freibleibend. Ein Vertrag kommt erst durch schriftliche
              Auftragsbestätigung des Auftragnehmers oder durch Aufnahme der Leistungserbringung
              zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 3 Leistungsumfang</h2>
            <p className="leading-relaxed">
              Der Umfang der zu erbringenden Leistungen ergibt sich aus dem jeweiligen Angebot oder
              Werkvertrag (Statement of Work, SOW). Änderungen oder Erweiterungen des vereinbarten
              Leistungsumfangs bedürfen einer schriftlichen Vereinbarung (Change Request).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
            <p className="leading-relaxed">
              Der Auftraggeber ist verpflichtet, die für die Leistungserbringung erforderlichen
              Informationen, Zugänge und Ressourcen rechtzeitig zur Verfügung zu stellen. Verzögerungen,
              die auf mangelnde Mitwirkung des Auftraggebers zurückzuführen sind, gehen nicht zu
              Lasten des Auftragnehmers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 5 Vergütung &amp; Zahlungsbedingungen</h2>
            <p className="leading-relaxed mb-3">
              Alle Preise verstehen sich in Euro zzgl. der gesetzlichen Umsatzsteuer. Rechnungen
              sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zu begleichen. Bei
              Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in Höhe von 9
              Prozentpunkten über dem jeweiligen Basiszinssatz (§ 288 Abs. 2 BGB) zu verlangen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 6 Geheimhaltung</h2>
            <p className="leading-relaxed">
              Beide Parteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten
              vertraulichen Informationen der jeweils anderen Partei vertraulich zu behandeln und
              nicht an Dritte weiterzugeben. Diese Verpflichtung gilt auch nach Beendigung des
              Vertragsverhältnisses für einen Zeitraum von drei Jahren fort.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 7 Gewährleistung &amp; Haftung</h2>
            <p className="leading-relaxed mb-3">
              Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des
              Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte
              Schäden. Im Übrigen ist die Haftung auf den vorhersehbaren, vertragstypischen Schaden
              begrenzt.
            </p>
            <p className="leading-relaxed">
              Die Haftung für mittelbare Schäden, entgangenen Gewinn und Datenverlust ist –
              soweit gesetzlich zulässig – auf das jeweilige Auftragsvolumen beschränkt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 8 Nutzungsrechte &amp; Urheberrecht</h2>
            <p className="leading-relaxed">
              Mit vollständiger Bezahlung der vereinbarten Vergütung überträgt der Auftragnehmer dem
              Auftraggeber die für den vereinbarten Nutzungszweck erforderlichen Nutzungsrechte an den
              erstellten Arbeitsergebnissen. Soweit Open-Source-Komponenten verwendet werden, gelten
              die jeweiligen Open-Source-Lizenzbedingungen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 9 Datenschutz</h2>
            <p className="leading-relaxed">
              Beide Parteien verpflichten sich zur Einhaltung der anwendbaren
              Datenschutzvorschriften. Soweit der Auftragnehmer im Rahmen der Leistungserbringung
              personenbezogene Daten des Auftraggebers verarbeitet, wird ein gesonderter
              Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">§ 10 Schlussbestimmungen</h2>
            <p className="leading-relaxed">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten ist – soweit gesetzlich
              zulässig – der Sitz des Auftragnehmers. Sollten einzelne Bestimmungen dieser AGB
              unwirksam sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen
              unberührt.
            </p>
          </div>

          <p className="text-sm text-gray-500 border-t border-gray-200 pt-6">
            <em>Stand: Mai 2026. Diese AGB sind Platzhalter und werden durch rechtlich geprüfte
            Bedingungen ersetzt.</em>
          </p>

        </div>
      </section>
    </>
  );
}
