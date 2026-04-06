import type { Metadata } from "next";
import { LandingPage } from "../components/landing/landing-page";

export const metadata: Metadata = {
  title: "Longevity Protocol — Request Access",
  description:
    "Request access to Wave 1. A longevity protocol platform — personalised and delivered monthly.",
};

export default function Page() {
  return <LandingPage />;
}
