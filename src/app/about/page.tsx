import type { Metadata } from "next";
import { AboutPage } from "@/components/landing/AboutPage";

export const metadata: Metadata = {
  title: "About getabu",
  description: "The story behind getabu and the person building it.",
};

export default function AboutRoute() {
  return <AboutPage />;
}
