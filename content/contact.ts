export const contactPageCopy = {
  headline: "Let's Talk Cloud Strategy.",
  subheadline:
    "Whether you're planning a large-scale migration, evaluating your cloud maturity, or looking for a partner to accelerate a specific initiative — we'd love to hear from you. Our consultants typically respond within one business day.",

  form: {
    title: "Send Us a Message",
    description:
      "Fill in the form below and one of our senior consultants will reach out to schedule a no-obligation discovery call.",
    fields: {
      name: { label: "Full Name", placeholder: "Jane Schmidt" },
      company: { label: "Company", placeholder: "Your organization" },
      role: { label: "Job Title", placeholder: "e.g. Head of IT, Cloud Architect" },
      email: { label: "Work Email", placeholder: "jane.schmidt@yourcompany.com" },
      phone: { label: "Phone (optional)", placeholder: "+49 89 123456" },
      topic: {
        label: "Topic",
        placeholder: "How can we help?",
        options: [
          "Cloud Migration",
          "DevOps & CI/CD",
          "Data & Analytics",
          "Connected Car Platform",
          "SAP on Cloud",
          "Security & Compliance",
          "Other",
        ],
      },
      message: {
        label: "Message",
        placeholder:
          "Briefly describe your challenge or initiative. The more context you share, the better we can prepare for our conversation.",
      },
    },
    submitLabel: "Send Message",
    privacyNote:
      "By submitting this form you agree to our Privacy Policy. We will never share your information with third parties.",
  },

  office: {
    title: "Visit Our Offices",
    locations: [
      {
        city: "Munich",
        address: "Leopoldstraße 180\n80804 München\nGermany",
        phone: "+49 89 2430 8800",
        email: "munich@apexcloudconsulting.com",
        hours: "Monday–Friday, 08:00–18:00 CET",
        isPrimary: true,
      },
      {
        city: "Detroit",
        address: "1234 Woodward Ave, Suite 900\nDetroit, MI 48226\nUSA",
        phone: "+1 313 555 0192",
        email: "detroit@apexcloudconsulting.com",
        hours: "Monday–Friday, 09:00–17:00 EST",
        isPrimary: false,
      },
    ],
  },

  social: {
    title: "Follow Us",
    links: [
      { platform: "LinkedIn", href: "https://linkedin.com/company/apexcloudconsulting" },
      { platform: "GitHub", href: "https://github.com/apexcloudconsulting" },
      { platform: "X / Twitter", href: "https://x.com/apexcloudco" },
    ],
  },
} as const;
