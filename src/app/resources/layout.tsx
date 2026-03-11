import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & Toolkit | Blue Orange Digital × Databricks",
  description:
    "Co-sell toolkit — download the deck, one-pager, battle cards, email templates, and qualification checklist. No forms.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
