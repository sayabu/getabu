import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ModulePage } from "@/components/course/ModulePage";
import { getModule, moduleSlugs } from "@/lib/module-registry";

type ModuleRouteProps = {
  params: Promise<{ module: string }>;
};

export function generateStaticParams() {
  return moduleSlugs.map((module) => ({ module }));
}

export async function generateMetadata({ params }: ModuleRouteProps): Promise<Metadata> {
  const { module } = await params;
  const entry = getModule(module);

  if (!entry) {
    return {};
  }

  return {
    title: entry.title,
    description: entry.description,
  };
}

export default async function ModuleRoute({ params }: ModuleRouteProps) {
  const { module } = await params;
  const entry = getModule(module);

  if (!entry) {
    notFound();
  }

  const Content = (await entry.load()).default;

  return (
    <ModulePage moduleId={entry.id}>
      <Content />
    </ModulePage>
  );
}
