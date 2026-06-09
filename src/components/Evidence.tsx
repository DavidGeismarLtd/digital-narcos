const stats = [
  {
    number: "3.5B+",
    label: "active social media users worldwide",
    source: "DataReportal, 2024",
  },
  {
    number: "2h 27m",
    label: "average daily social media use — per person",
    source: "GWI, 2024",
  },
  {
    number: "153×",
    label: "average daily phone pickups",
    source: "Dscout Research",
  },
  {
    number: "41%",
    label: "of teens report feeling anxious when away from their phone",
    source: "Pew Research, 2023",
  },
  {
    number: "$134B",
    label: "Meta's 2023 revenue — almost entirely from selling your attention",
    source: "Meta annual report, 2023",
  },
  {
    number: "10+",
    label: "years of internal research suppressed by Facebook showing teen harm",
    source: "WSJ, 2021 — The Facebook Files",
  },
];

export default function Evidence() {
  return (
    <section id="evidence" className="py-24 px-6 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 max-w-2xl">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            The Case
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            This Isn&apos;t Accidental.
            <br />
            It Was Engineered.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed">
            Drug dealers don&apos;t accidentally create addicts. They design the product to hook. Social media companies spent billions of dollars and thousands of engineering hours making their platforms impossible to put down — while their own researchers watched the damage unfold in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((s) => (
            <div
              key={s.number}
              className="border border-[#222] rounded-lg p-6 hover:border-[#e63946] transition-colors duration-300"
            >
              <p className="text-4xl font-black text-[#e63946] font-sans mb-3">{s.number}</p>
              <p className="text-[#f0f0f0] mb-3 leading-snug">{s.label}</p>
              <p className="text-[#555] text-xs uppercase tracking-wider">{s.source}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-l-4 border-[#e63946] pl-8 max-w-3xl">
          <blockquote className="text-2xl text-[#ddd] leading-relaxed italic">
            &ldquo;We have evidence from a variety of sources that Instagram is harmful for a sizable percentage of the teenagers who use it… We know the solution, and we aren&apos;t doing it.&rdquo;
          </blockquote>
          <cite className="block mt-4 text-[#666] text-sm not-italic">
            — Internal Facebook memo, 2019. Revealed by Frances Haugen, 2021.
          </cite>
        </div>
      </div>
    </section>
  );
}
