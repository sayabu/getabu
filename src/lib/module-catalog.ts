export type CourseModule = {
  number: number;
  slug: string;
  id: string;
  href: string;
  title: string;
  shortTitle: string;
  estimatedMinutes: number;
  description: string;
  currentLabel?: string;
};

export const courseModules: readonly CourseModule[] = [
  {
    number: 1,
    slug: "1",
    id: "module-01",
    href: "/modules/1",
    title: "Why 6G? The Road from 1G to IMT-2030",
    shortTitle: "Why 6G?",
    estimatedMinutes: 30,
    description:
      "Meet the mobile generations, IMT-2030, the ITU, 3GPP, and the road to commercial 6G.",
  },
  {
    number: 2,
    slug: "2",
    id: "module-02",
    href: "/modules/2",
    title: "The Network That Sees: ISAC",
    shortTitle: "The Network That Sees (ISAC)",
    estimatedMinutes: 35,
    description:
      "ISAC turns the radio signals already in the air into a giant, invisible radar system — no new hardware on the objects being sensed.",
  },
  {
    number: 3,
    slug: "3",
    id: "module-03",
    href: "/modules/3",
    title: "Immersive Worlds: XR, Holograms & the Internet of Senses",
    shortTitle: "Immersive Worlds",
    estimatedMinutes: 35,
    description:
      "XR flips the network's job from 'move lots of data eventually' to 'move quite a lot of data RIGHT NOW, EVERY TIME.'",
  },
  {
    number: 4,
    slug: "4",
    id: "module-04",
    href: "/modules/4",
    title: "Digital Twins & Ambient IoT: When Everything Gets a Voice",
    shortTitle: "Digital Twins & Ambient IoT",
    estimatedMinutes: 35,
    description:
      "A digital twin is only as good as its freshest data. The network's real deliverable isn't bandwidth — it's an up-to-date picture of reality.",
  },
  {
    number: 5,
    slug: "5",
    id: "module-05",
    href: "/modules/5",
    title: "Spectrum: The New Real Estate (FR1, FR2, FR3 & Beyond)",
    shortTitle: "Spectrum",
    estimatedMinutes: 35,
    description:
      "Why spectrum is the real estate of wireless — and why location is everything.",
  },
  {
    number: 6,
    slug: "6",
    id: "module-06",
    href: "/modules/6",
    title: "The Radio Magic: Giga-MIMO, Beamforming & Smart Surfaces",
    shortTitle: "The Radio Magic",
    estimatedMinutes: 35,
    description:
      "Beamforming: how many small antennas become one steerable spotlight.",
  },
  {
    number: 7,
    slug: "7",
    id: "module-07",
    href: "/modules/7",
    title: "AI-Native Networks: The Network That Learns",
    shortTitle: "AI-Native Networks",
    estimatedMinutes: 35,
    description:
      "The difference between sprinkling AI on a network and building one out of AI.",
  },
  {
    number: 8,
    slug: "8",
    id: "module-08",
    href: "/modules/8",
    title: "Architecture: Cloud Cores, Open Radios & Cell Towers in the Sky",
    shortTitle: "Architecture, Core & Satellites",
    estimatedMinutes: 35,
    description:
      "The two halves of every mobile network: the storefront (RAN) and headquarters (core).",
  },
  {
    number: 9,
    slug: "9",
    id: "module-09",
    href: "/modules/9",
    title: "Trust, Energy & Sustainability: The Grown-Up Goals",
    shortTitle: "Trust, Energy & Sustainability",
    estimatedMinutes: 30,
    description:
      "Resilience: designing networks that bend in disasters instead of breaking.",
  },
  {
    number: 10,
    slug: "10",
    id: "module-10",
    href: "/modules/10",
    title: "The 5G vs. 6G Showdown & The Road Ahead",
    shortTitle: "The 5G vs. 6G Showdown",
    estimatedMinutes: 35,
    description:
      "The complete 5G-vs-6G comparison — every module's payoff in one table.",
    currentLabel: "Module 10 — the finale!",
  },
];

export function getCourseModule(slug: string) {
  return courseModules.find((module) => module.slug === slug);
}

export function getAdjacentModules(slug: string) {
  const currentIndex = courseModules.findIndex((module) => module.slug === slug);

  if (currentIndex < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: courseModules[currentIndex - 1],
    next: courseModules[currentIndex + 1],
  };
}
