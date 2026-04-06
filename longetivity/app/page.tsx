import type { Metadata } from "next";
import { HomePage } from "./components/home/home-page";

export const metadata: Metadata = {
  title: "Longevity Protocol — The Daily System",
  description:
    "The quiz is the product. The supplements are the delivery mechanism. Your personalised longevity protocol.",
};

export default function Page() {
  return <HomePage />;
}
