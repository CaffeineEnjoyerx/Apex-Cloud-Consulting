export const contactPageCopyDe = {
  headline: "Lassen Sie uns über Ihre Cloud-Strategie sprechen.",
  subheadline:
    "Ob Sie eine groß angelegte Migration planen, Ihre Cloud-Reife evaluieren oder einen Partner suchen, um eine bestimmte Initiative zu beschleunigen – wir freuen uns, von Ihnen zu hören. Unsere Berater antworten in der Regel innerhalb eines Werktags.",

  form: {
    title: "Schreiben Sie uns",
    description:
      "Füllen Sie das Formular aus und einer unserer Senior-Berater wird sich mit Ihnen in Verbindung setzen, um ein unverbindliches Erstgespräch zu vereinbaren.",
    fields: {
      name: { label: "Vollständiger Name", placeholder: "Max Mustermann" },
      company: { label: "Unternehmen", placeholder: "Ihr Unternehmen" },
      role: { label: "Position", placeholder: "z. B. IT-Leiter, Cloud-Architekt" },
      email: { label: "Geschäftliche E-Mail", placeholder: "max.mustermann@unternehmen.de" },
      phone: { label: "Telefon (optional)", placeholder: "+49 89 123456" },
      topic: {
        label: "Thema",
        placeholder: "Wie können wir helfen?",
        options: [
          "Cloud-Migration",
          "DevOps & CI/CD",
          "Daten & Analytics",
          "Connected Car Platform",
          "SAP in der Cloud",
          "Sicherheit & Compliance",
          "Sonstiges",
        ],
      },
      message: {
        label: "Nachricht",
        placeholder:
          "Beschreiben Sie kurz Ihre Herausforderung oder Initiative. Je mehr Kontext Sie teilen, desto besser können wir uns auf unser Gespräch vorbereiten.",
      },
    },
    submitLabel: "Nachricht senden",
    privacyNote:
      "Mit dem Absenden dieses Formulars stimmen Sie unserer Datenschutzerklärung zu. Wir geben Ihre Daten niemals an Dritte weiter.",
    successTitle: "Nachricht gesendet!",
    successMessage:
      "Vielen Dank für Ihre Anfrage. Einer unserer Senior-Berater wird sich innerhalb eines Werktags bei Ihnen melden.",
    loadingLabel: "Wird gesendet…",
  },

  office: {
    title: "Unsere Büros besuchen",
    locations: [
      {
        city: "München",
        address: "Leopoldstraße 180\n80804 München\nDeutschland",
        phone: "+49 89 2430 8800",
        email: "munich@apexcloudconsulting.com",
        hours: "Montag–Freitag, 08:00–18:00 Uhr MEZ",
        isPrimary: true,
      },
      {
        city: "Detroit",
        address: "1234 Woodward Ave, Suite 900\nDetroit, MI 48226\nUSA",
        phone: "+1 313 555 0192",
        email: "detroit@apexcloudconsulting.com",
        hours: "Montag–Freitag, 09:00–17:00 Uhr EST",
        isPrimary: false,
      },
    ],
  },

  social: {
    title: "Folgen Sie uns",
    links: [
      { platform: "LinkedIn", href: "https://linkedin.com/company/apexcloudconsulting" },
      { platform: "GitHub", href: "https://github.com/apexcloudconsulting" },
      { platform: "X / Twitter", href: "https://x.com/apexcloudco" },
    ],
  },
} as const;
