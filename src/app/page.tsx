import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";

export const metadata: Metadata = {
  title: "6G Fundamentals — Free Self-Paced Tutorial",
  description:
    "Understand 6G without the jargon fog. Ten free, self-paced modules for entry-level engineers and project managers.",
};

export default function HomePage() {
  return <LandingPage />;
}
