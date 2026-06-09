import Image from "next/image";

const data = [
  {
    headline: "Teen depression doubled",
    detail:
      "Since 2012 — the year Instagram hit mass adoption — rates of teen depression and anxiety have roughly doubled in the US and UK. The timing is not coincidental. Jean Twenge's research in iGen established the correlation across 11 countries.",
    tag: "Mental Health",
  },
  {
    headline: "Girls hit hardest",
    detail:
      "Girls ages 10–14 experienced a 189% increase in depression-related hospitalizations between 2009 and 2019. Boys saw a 48% increase. Social comparison, body image, and cyberbullying — all amplified by Instagram and Snapchat — explain the asymmetry.",
    tag: "Gender",
  },
  {
    headline: "Sleep deprivation at scale",
    detail:
      "45% of US teens report using their phones for 5+ hours per day. 57% say they wake up at night to check notifications. Chronic sleep deprivation is one of the strongest predictors of depression, anxiety, and impaired learning.",
    tag: "Neuroscience",
  },
  {
    headline: "Attention destroyed",
    detail:
      "A Microsoft study found the average human attention span has dropped from 12 seconds in 2000 to 8 seconds — shorter than a goldfish. The infinite scroll destroys the brain's ability to sustain focus. A generation is growing up unable to concentrate.",
    tag: "Cognitive",
  },
  {
    headline: "Fentanyl delivered via Snapchat",
    detail:
      "In 2022, the parents of over 100 children who died from fentanyl overdoses filed a lawsuit against Snapchat. Drug dealers used the platform to find and sell to teenagers. Snap had the tools to stop it. They did not prioritize it.",
    tag: "Physical Harm",
  },
  {
    headline: "The political cost",
    detail:
      "Researchers at the MIT Media Lab found that false news spreads 6x faster on Twitter than true news. Algorithmic outrage amplification didn't just damage mental health — it eroded democracy, fueled polarization, and helped radicalize thousands toward violence.",
    tag: "Democracy",
  },
];

export default function Victims() {
  return (
    <section id="victims" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            The Victims
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            What the Damage
            <br />
            Actually Looks Like.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            This is not a story about teenagers spending too much time online. It is a story about a generation being chemically and psychologically conditioned for profit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((d) => (
            <div key={d.headline} className="bg-[#0f0f0f] border border-[#1a1a1a] rounded-lg p-6">
              <span className="text-xs text-[#666] uppercase tracking-wider font-mono">
                {d.tag}
              </span>
              <h3 className="text-xl font-bold font-sans text-[#f0f0f0] mt-2 mb-3">
                {d.headline}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">{d.detail}</p>
            </div>
          ))}
        </div>

        {/* Addiction illustration — hands reaching for phones */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-16">
          <Image
            src="/images/addiction-illustration.png"
            alt="Hands reaching for smartphones — the scale of engineered addiction"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/70" />
          <p className="absolute bottom-6 left-6 right-6 text-[#ccc] text-sm italic text-center">
            3.5 billion hands reaching for the same dopamine lever. Every day.
          </p>
        </div>

        {/* TikTok two-worlds illustration */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/two-phones-illustration.png"
            alt="Two worlds — what TikTok shows Chinese children vs Western children"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a]/80" />
          <p className="absolute bottom-6 left-6 right-6 text-[#ccc] text-sm italic text-center">
            TikTok in China (left): capped at 40min/day, educational content. TikTok in the West (right): infinite scroll, optimized for maximum dopamine.
          </p>
        </div>

        <div className="mt-0 bg-[#e63946]/10 border border-[#e63946]/30 rounded-lg p-8 max-w-3xl">
          <p className="text-2xl font-black font-sans text-[#f0f0f0] mb-4">
            42 US states sued Meta in October 2023.
          </p>
          <p className="text-[#aaa] leading-relaxed">
            The lawsuit alleged that Meta knowingly designed Instagram and Facebook to be harmful to children, and that the company deployed features it knew were dangerous — while publicly claiming to prioritize safety. It is the largest coordinated legal action against a social media company in US history. It is only the beginning.
          </p>
        </div>
      </div>
    </section>
  );
}
