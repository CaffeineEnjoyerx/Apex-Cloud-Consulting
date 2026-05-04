"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "apex-cookie-consent";

export type ConsentValue = "all" | "essential" | null;

export default function CookieBanner() {
  const [consent, setConsent] = useState<ConsentValue | "loading">("loading");

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentValue | null;
    setConsent(stored);
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "all");
    setConsent("all");
    window.dispatchEvent(new CustomEvent("cookieConsent", { detail: "all" }));
  }

  function rejectNonEssential() {
    localStorage.setItem(CONSENT_KEY, "essential");
    setConsent("essential");
    window.dispatchEvent(new CustomEvent("cookieConsent", { detail: "essential" }));
  }

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie-Einstellungen"
      className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-700 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-300 flex-1 leading-relaxed">
          Wir verwenden Cookies und ähnliche Technologien. Notwendige Cookies sind immer aktiv.
          Analyse-Cookies (z.B. Google Analytics) setzen wir nur mit Ihrer Einwilligung gemäß
          TTDSG / DSGVO ein.{" "}
          <Link href="/datenschutz" className="text-blue-400 hover:underline">
            Datenschutzerklärung
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={rejectNonEssential}
            className="px-4 py-2 text-sm font-medium text-gray-300 border border-gray-600 rounded-lg hover:border-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            Nur notwendige
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors whitespace-nowrap"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
