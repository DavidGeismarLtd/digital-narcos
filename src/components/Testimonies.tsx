import Image from "next/image";

const testimonies = [
  {
    image: "/images/testimony-1.png",
    alt: "Anonymous teenage girl",
    name: "Emma, 16",
    location: "Ohio, USA",
    quote:
      "I deleted Instagram twice. Both times I was back within a week. Not because I wanted to — because I genuinely didn't know how to exist without it. I'd be in a conversation with my mom and I could feel my brain pulling away, like a physical itch. I didn't know that was by design until I read about the algorithm. That's when I got angry instead of ashamed.",
  },
  {
    image: "/images/testimony-2.png",
    alt: "Anonymous teenage boy",
    name: "Lucas, 17",
    location: "Paris, France",
    quote:
      "I was on TikTok for 6 hours one Saturday. I didn't eat lunch. I looked up and it was dark outside. I can't remember a single video I watched. It felt like I'd been drugged. My parents thought I was lazy. I thought I was weak. We were both wrong — something was being done to us.",
  },
  {
    image: "/images/testimony-3.png",
    alt: "Anonymous parent",
    name: "Parent of a 14-year-old",
    location: "London, UK",
    quote:
      "My daughter went from a happy, social kid to someone who barely spoke to us in the span of one school year. That was the year she got Instagram. I spent 18 months blaming myself, blaming her, trying to \"take the phone away\" — which just created war. Then I found out Facebook had internal research that predicted exactly what happened to her. Exactly. And did nothing.",
  },
];

export default function Testimonies() {
  return (
    <section id="testimonies" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-4">
            Testimonies
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-sans mb-6">
            Real People.
            <br />
            Engineered Addiction.
          </h2>
          <p className="text-[#aaa] text-lg leading-relaxed max-w-2xl">
            Behind every statistic is a person. These are not edge cases — they are the intended outcome of the product.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonies.map((t) => (
            <div key={t.name} className="flex flex-col">
              {/* Portrait */}
              <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                <Image
                  src={t.image}
                  alt={t.alt}
                  fill
                  className="object-cover object-center grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Quote */}
              <blockquote className="text-[#ccc] text-sm leading-relaxed italic mb-4 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Attribution */}
              <div className="border-t border-[#1a1a1a] pt-4">
                <p className="text-[#f0f0f0] font-bold font-sans text-sm">{t.name}</p>
                <p className="text-[#555] text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[#444] text-xs mt-10 text-center">
          Names changed to protect privacy. Stories are composites based on published first-person accounts.
        </p>
      </div>
    </section>
  );
}
