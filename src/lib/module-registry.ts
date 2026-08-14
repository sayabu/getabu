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
  "5": {
    id: "module-05",
    title: "Module 5 — Spectrum: The New Real Estate (FR1, FR2, FR3 & Beyond)",
    description:
      "Why spectrum is the real estate of wireless — and why location is everything.",
    load: () => import("@/content/modules/module-05.mdx"),
  },
  "6": {
    id: "module-06",
    title: "Module 6 — The Radio Magic: Giga-MIMO, Beamforming & Smart Surfaces",
    description:
      "Beamforming: how many small antennas become one steerable spotlight.",
    load: () => import("@/content/modules/module-06.mdx"),
  },
  "7": {
    id: "module-07",
    title: "Module 7 — AI-Native Networks: The Network That Learns",
    description:
      "The difference between sprinkling AI on a network and building one out of AI.",
    load: () => import("@/content/modules/module-07.mdx"),
  },
  "8": {
    id: "module-08",
    title: "Module 8 — Architecture: Cloud Cores, Open Radios & Cell Towers in the Sky",
    description:
      "The two halves of every mobile network: the storefront (RAN) and headquarters (core).",
    load: () => import("@/content/modules/module-08.mdx"),
  },
  "9": {
    id: "module-09",
    title: "Module 9 — Trust, Energy & Sustainability: The Grown-Up Goals",
    description:
      "Resilience: designing networks that bend in disasters instead of breaking.",
    load: () => import("@/content/modules/module-09.mdx"),
  },
  "10": {
    id: "module-10",
    title: "Module 10 — The 5G vs. 6G Showdown & The Road Ahead",
    description:
      "The complete 5G-vs-6G comparison — every module's payoff in one table.",
    load: () => import("@/content/modules/module-10.mdx"),
  },
};

export const moduleSlugs = Object.keys(modules);

export function getModule(slug: string) {
  return modules[slug];
}
