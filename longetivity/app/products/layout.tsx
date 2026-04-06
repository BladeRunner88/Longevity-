import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Daily System — Longevity Protocol",
  description:
    "Three formulas. One protocol. CELLULAR, RESTORE, and SLEEP — experienced as a system.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
