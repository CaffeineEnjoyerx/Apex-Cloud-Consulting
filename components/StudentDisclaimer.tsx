import Link from "next/link";

export default function StudentDisclaimer() {
  return (
    <div className="bg-amber-50 border-b border-amber-200 text-amber-900 text-sm py-2.5 px-4 text-center">
      <span className="font-semibold">⚠ Studentisches Projekt:</span>{" "}
      Diese Website ist ein fiktives Hochschulprojekt zu Lehr- und Übungszwecken.
      Es findet kein tatsächlicher Geschäftsbetrieb statt.{" "}
      <Link href="/imprint" className="underline hover:text-amber-700 transition-colors font-medium">
        Mehr erfahren →
      </Link>
    </div>
  );
}
