import type { Metadata } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
};

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
