import Image from "next/image";

const steps = [
  {
    step: "01",
    title: "Know the harm. Hide the research.",
    body: "Tobacco executives testified under oath they didn't believe cigarettes caused cancer — while their own scientists knew for decades. Facebook suppressed the \"Facebook Files\" for years. TikTok's parent ByteDance restricted its own algorithm for Chinese users while pushing the most addictive version to the rest of the world.",
  },
  {
    step: "02",
    title: "Target the most vulnerable.",
    body: "Drug dealers push hardest on the margins — the desperate, the young, the lonely. Instagram knowingly targeted teenagers, the age group most susceptible to social comparison and identity anxiety. Snapchat streaks exploit the loss-aversion hardwired into adolescent brains. The younger you hook them, the longer the lifetime revenue.",
  },
  {
    step: "03",
    title: "Engineer the craving, not the product.",
    body: "Variable reward schedules — the same mechanism behind slot machines — are baked into every infinite scroll, every notification delay, every \"like\" count hidden and revealed. This is not a coincidence. Former VP of User Growth at Facebook, Chamath Palihapitiya: \"We have created tools that are ripping apart the social fabric.\"",
  },
  {
    step: "04",
    title: "Buy the politicians. Fund the studies. Reframe the debate.",
    body: "Big Tobacco funded decades of fake science. Meta spent $20M lobbying Washington in 2023 alone. When internal research became too damning, they funded external think tanks to muddy the water. They didn't fight the truth — they bought time.",
  },
  {
    step: "05",
    title: "Blame the user.",
    body: "\"Just put the phone down.\" The most cynical move in the playbook. When addiction to cigarettes became public knowledge, tobacco companies pivoted to personal responsibility. Social media companies do the same: offer half-hearted screen time tools while running 3,000-person teams optimizing for maximum engagement. It's theater.",
  },
];

export default function ThePlaybook() {
  return (
    <section id="playbook" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        {/* Playbook illustration */}
        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden mb-16">
          <Image
            src="/images/playbook-illustration.png"
            alt="Corporate boardroom — the architects of digital addiction"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/60" />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            The Playbook
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            We&apos;ve Seen This Before.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            The tobacco industry ran this exact play. So did OxyContin. The names change. The methods don&apos;t. Here is the five-step corporate addiction playbook — and how social media companies are following it step by step.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex gap-8 py-10 ${i < steps.length - 1 ? "border-b border-[#1a1a1a]" : ""}`}
            >
              <div className="shrink-0 w-12">
                <span className="text-[#e63946] font-black text-3xl font-sans opacity-60">
                  {s.step}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-sans mb-3 text-[#f0f0f0]">{s.title}</h3>
                <p className="text-[#999] leading-relaxed">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
