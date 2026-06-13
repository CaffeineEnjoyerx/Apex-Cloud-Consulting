"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

export default function Analytics() {
  const [consentGranted, setConsentGranted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Check initial consent status
    const stored = localStorage.getItem("apex-cookie-consent");
    if (stored === "all") {
      setConsentGranted(true);
    }

    // Listen for consent changes
    const handleConsent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail === "all") {
        setConsentGranted(true);
      }
    };

    window.addEventListener("cookieConsent", handleConsent);
    return () => window.removeEventListener("cookieConsent", handleConsent);
  }, []);

  useEffect(() => {
    if (consentGranted && pathname) {
      // Send pageview when route changes
      window.gtag?.("config", GA_MEASUREMENT_ID, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
      });
    }
  }, [pathname, searchParams, consentGranted]);

  if (!consentGranted) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Add gtag to Window interface
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}
