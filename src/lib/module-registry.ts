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
  "2": {
    id: "module-02",
    title: "Module 2 — The Network That Sees: ISAC",
    description:
      "ISAC turns the radio signals already in the air into a giant, invisible radar system — no new hardware on the objects being sensed.",
    load: () => import("@/content/modules/module-02.mdx"),
  },
  "3": {
    id: "module-03",
    title: "Module 3 — Immersive Worlds: XR, Holograms & the Internet of Senses",
    description:
      "XR flips the network's job from 'move lots of data eventually' to 'move quite a lot of data RIGHT NOW, EVERY TIME.'",
    load: () => import("@/content/modules/module-03.mdx"),
  },
  "4": {
    id: "module-04",
    title: "Module 4 — Digital Twins & Ambient IoT: When Everything Gets a Voice",
    description:
      "A digital twin is only as good as its freshest data. The network's real deliverable isn't bandwidth — it's an up-to-date picture of reality.",
    load: () => import("@/content/modules/module-04.mdx"),
  },
};

export const moduleSlugs = Object.keys(modules);

export function getModule(slug: string) {
  return modules[slug];
}
