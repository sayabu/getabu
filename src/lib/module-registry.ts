import type { ComponentType } from "react";
import { courseModules, type CourseModule } from "./module-catalog";

type ModuleEntry = CourseModule & {
  load: () => Promise<{ default: ComponentType }>;
};

const moduleLoaders: Record<string, () => Promise<{ default: ComponentType }>> = {
  "1": () => import("@/content/modules/module-01.mdx"),
  "2": () => import("@/content/modules/module-02.mdx"),
  "3": () => import("@/content/modules/module-03.mdx"),
  "4": () => import("@/content/modules/module-04.mdx"),
  "5": () => import("@/content/modules/module-05.mdx"),
  "6": () => import("@/content/modules/module-06.mdx"),
  "7": () => import("@/content/modules/module-07.mdx"),
  "8": () => import("@/content/modules/module-08.mdx"),
  "9": () => import("@/content/modules/module-09.mdx"),
  "10": () => import("@/content/modules/module-10.mdx"),
};

const modules = new Map<string, ModuleEntry>(
  courseModules.map((module) => [
    module.slug,
    {
      ...module,
      title: `Module ${module.number} — ${module.title}`,
      load: moduleLoaders[module.slug],
    },
  ]),
);

export const moduleSlugs = courseModules.map((module) => module.slug);

export function getModule(slug: string) {
  return modules.get(slug);
}
