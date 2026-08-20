export const landingContent = {
  hero: {
    eyebrow: "Free self-paced tutorial",
    title: "6G, Explained Like You're a Human.",
    lede:
      'From "WTF is ISAC?" to "Ah — the network is a bat that delivers pizza" — in pocket-sized bites.',
    stats: "10 modules · 20–30 acronyms decoded · 30–35 min each · Free",
    cta: "Start Module 1",
    aboutTeaser: "Made by a wireless engineer who got tired of jargon wearing a lab coat.",
    aboutLink: "Who made this and why",
    imageAlt:
      "A giant yellow 6G structure under construction, surrounded by a satellite, drone, smart glasses, antenna array, cityscape, and AI chip.",
  },
  teaser: {
    eyebrow: "Try before you commit",
    title: "Yes, the bat delivers pizza.",
    analogy: [
      "Bats send out sound waves, listen to the echoes, and build a picture of the world — that's echolocation. Now imagine that same bat also delivers pizza: dropping off dinner while mapping the neighborhood.",
      'In 6G, the antenna is the bat, your data is the pizza — and the echoes of its own radio signals let the network "see" its surroundings.',
      "That's ISAC: Integrated Sensing and Communication. One signal, two jobs.",
    ],
    imageAlt:
      "A cheerful orange bat in sunglasses and a delivery cap holding an open box labeled ‘6G Pizza Delivery.’",
    soundSmart: {
      quote:
        '"ISAC is basically turning the RAN into a distributed radar — the sensing comes almost free because we\'re reusing the waveform we already transmit."',
      clue:
        "the whole radio network becomes one big team of radar stations, and it costs little extra because it recycles the signals it was already sending.",
    },
  },
  journey: {
    eyebrow: "The full course",
    title: "Your Journey: From Grandpa 1G to the 2030 Sunrise",
    intro:
      "Each module fits between two meetings, during a boring presentation, or over lunch at your desk. Plan on 30–35 minutes each — no judgment if lunch wins.",
  },
  payoff: {
    eyebrow: "The payoff",
    title: "Sound Smart in Your Next Meeting. No Posturing Required.",
    expertLabel: "What the expert says",
    expert:
      '"The Rel-20 ISAC study is converging on FR3 monostatic sensing with Giga-MIMO arrays."',
    learnerLabel: "What you'll hear after this course",
    learner:
      '"The 6G radar studies favor the golden bands, using the tower\'s own huge antenna to both send and listen."',
    promise:
      "Conversational in 6G — follow the jargon, translate it in your head, ask the smart question.",
  },
  email: {
    eyebrow: "A useful thing for your inbox",
    title: "Take the Cheat Sheet With You",
    copy:
      "Get the one-page 5G-vs-6G cheat sheet + the master acronym decoder (all 20–30, one page) in your inbox. Free, like the tutorial.",
    button: "Send Me the Cheat Sheet",
    finePrint:
      "I'll also email you when new trainings launch — including AI for 5G & 6G. No spam, unsubscribe anytime.",
  },
  footer: {
    title: "From WTF to Aha. Start Module 1.",
    cta: "Start Module 1",
    emailCopy: "Cheat sheet + launch updates, straight to your inbox.",
  },
} as const;

export const landingModules = [
  { number: 1, icon: "📡", title: "Why 6G? The Road to IMT-2030" },
  { number: 2, icon: "🦇", title: "The Network That Sees: ISAC" },
  { number: 3, icon: "🥽", title: "Immersive Worlds: XR & Holograms" },
  { number: 4, icon: "🏙️", title: "Digital Twins & Ambient IoT" },
  { number: 5, icon: "📶", title: "Spectrum: The New Real Estate" },
  { number: 6, icon: "🪞", title: "Giga-MIMO & Smart Surfaces" },
  { number: 7, icon: "🧠", title: "AI-Native Networks" },
  { number: 8, icon: "☁️", title: "Cloud Cores & Towers in the Sky" },
  { number: 9, icon: "🛡️", title: "Trust, Energy & Sustainability" },
  { number: 10, icon: "⚖️", title: "The 5G vs. 6G Showdown" },
] as const;
