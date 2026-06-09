const defendants = [
  {
    name: "Meta",
    brands: "Facebook · Instagram · WhatsApp · Threads",
    charge: "Crimes against adolescent mental health",
    indictment:
      "Internal research showed Instagram worsened body image in 32% of teenage girls. Facebook knew. They shipped it anyway. When whistleblower Frances Haugen leaked thousands of pages of internal documents in 2021, the world finally saw what employees had been raising alarms about for years: the algorithm systematically amplified outrage, envy, and distress because those emotions drive engagement.",
    known_for: "The Facebook Files. The Instagram teen mental health suppression.",
  },
  {
    name: "TikTok",
    brands: "TikTok (ByteDance)",
    charge: "Deliberate two-tiered algorithm deployment",
    indictment:
      "ByteDance runs a fundamentally different version of TikTok in China — called Douyin — where screen time for minors is capped at 40 minutes/day and content promotes science, education, and civic values. The international version? Engineered for maximum dopamine loops. Chinese engineers optimizing a product they would never let their own children use.",
    known_for: "The two-algorithm strategy. Congressional hearings.",
  },
  {
    name: "Snapchat",
    brands: "Snapchat (Snap Inc.)",
    charge: "Weaponizing adolescent psychology",
    indictment:
      "Snap invented streaks — a daily ritual that exploits the loss-aversion bias hardwired into teenage brains. Miss a day: lose the streak. Lose the streak: lose social status. The anxiety created is not a bug. It is the core retention mechanic. A 2023 study found Snapchat was the most correlated social platform with teen depression and anxiety.",
    known_for: "Streaks. The teen depression correlation. Fentanyl dealer access on platform.",
  },
  {
    name: "YouTube",
    brands: "YouTube · YouTube Shorts (Google/Alphabet)",
    charge: "Radicalization by recommendation",
    indictment:
      "YouTube's recommendation algorithm was internally called \"the beast\" by engineers who knew it pushed users toward increasingly extreme content because extremism drives watch time. A 2019 internal study showed the algorithm consistently radicalized moderate users toward fringe content. Google suppressed the findings. The algorithm ran untouched for years.",
    known_for: "Rabbit hole radicalization. \"The beast.\" Guillaume Chaslot whistleblowing.",
  },
  {
    name: "X (Twitter)",
    brands: "X / Twitter (xAI)",
    charge: "Outrage amplification as product strategy",
    indictment:
      "Twitter's internal research, published in 2021, showed that the algorithm boosted political outrage by 40% compared to non-political content. Anger is the highest-engagement emotion on the platform. It was not an accident — it was the feature. Under Elon Musk, content moderation has been gutted while the engagement optimization engine runs harder than ever.",
    known_for: "The outrage algorithm. Hate speech amplification. Mental health researcher bans.",
  },
];

export default function Defendants() {
  return (
    <section id="defendants" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            The Defendants
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            Name Them.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            Accountability starts with specificity. These are not abstract &ldquo;tech companies.&rdquo; These are specific corporations, run by specific people, who made specific decisions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {defendants.map((d) => (
            <div
              key={d.name}
              className="border border-[#222] rounded-lg p-7 hover:border-[#e63946]/50 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-1">
                <h3 className="text-2xl font-black font-sans text-[#f0f0f0]">{d.name}</h3>
                <span className="text-xs text-[#e63946] bg-[#e63946]/10 px-2 py-1 rounded font-mono uppercase tracking-wider ml-4 shrink-0">
                  Defendant
                </span>
              </div>
              <p className="text-[#555] text-xs mb-3">{d.brands}</p>
              <p className="text-[#e63946] text-sm font-bold uppercase tracking-wide mb-4">
                ⚖ {d.charge}
              </p>
              <p className="text-[#999] text-sm leading-relaxed mb-4">{d.indictment}</p>
              <p className="text-[#555] text-xs border-t border-[#1a1a1a] pt-3">
                <span className="text-[#444] uppercase tracking-wider">Known for: </span>
                {d.known_for}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
