const categories = [
  {
    title: "Books",
    items: [
      {
        name: "The Anxious Generation — Jonathan Haidt (2024)",
        description: "The most comprehensive account of how smartphones and social media rewired adolescent mental health. Essential reading.",
      },
      {
        name: "Stolen Focus — Johann Hari (2022)",
        description: "A deep investigation into why we can't pay attention anymore — and who profits from it.",
      },
      {
        name: "Irresistible — Adam Alter (2017)",
        description: "The science of why technology is engineered to be addictive, written before it became mainstream knowledge.",
      },
      {
        name: "Ten Arguments for Deleting Your Social Media Accounts Right Now — Jaron Lanier (2018)",
        description: "By the computer scientist who coined \"virtual reality.\" An insider's clear-eyed indictment.",
      },
    ],
  },
  {
    title: "Documentaries & Journalism",
    items: [
      {
        name: "The Social Dilemma (Netflix, 2020)",
        description: "Former tech insiders explain exactly how social media was designed to manipulate. The documentary that changed the conversation.",
      },
      {
        name: "The Facebook Files (Wall Street Journal, 2021)",
        description: "The original investigative series from Frances Haugen's leaked documents. Still the most damning primary-source journalism.",
      },
      {
        name: "Screened Out (2020)",
        description: "Documentary on phone addiction and its impact on family relationships.",
      },
    ],
  },
  {
    title: "Organizations & Tools",
    items: [
      {
        name: "Center for Humane Technology — humanetech.com",
        description: "Founded by former Google design ethicist Tristan Harris. The leading advocacy org for tech accountability.",
      },
      {
        name: "Fairplay — fairplayforkids.org",
        description: "Campaigns specifically for children's protection from exploitative tech.",
      },
      {
        name: "Screen-Free Week — screenfree.org",
        description: "Annual global event. A starting point for breaking habits and starting conversations.",
      },
      {
        name: "One Sec (app)",
        description: "Adds a deliberate pause before opening addictive apps. Simple, evidence-based intervention.",
      },
    ],
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Resources
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            Go Deeper.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            The anger in these pages is grounded in evidence. Here is where that evidence comes from — and where to go next.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-lg font-black font-sans text-[#e63946] mb-6 pb-3 border-b border-[#1a1a1a] uppercase tracking-wider">
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.items.map((item) => (
                  <div key={item.name}>
                    <p className="font-bold text-[#f0f0f0] text-sm font-sans mb-1">{item.name}</p>
                    <p className="text-[#777] text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
