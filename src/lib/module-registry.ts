type ModuleEntry = {
  id: string;
  title: string;
  description: string;
  load: () => Promise<{ default: React.ComponentType }>;
};

const modules: Record<string, ModuleEntry> = {
  "1": {
    id: "module-01",
    title: "Module 1 — Why 6G? The Road from 1G to IMT-2030",
    description:
      "Meet the mobile generations, IMT-2030, the ITU, 3GPP, and the road to commercial 6G.",
    load: () => import("@/content/modules/module-01.mdx"),
  },
};

export const moduleSlugs = Object.keys(modules);

export function getModule(slug: string) {
  return modules[slug];
}
