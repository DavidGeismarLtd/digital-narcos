import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="A teenager bathed in smartphone light in a dark room"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
        {/* Bottom fade into page */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-[#e63946] uppercase tracking-[0.3em] text-sm font-bold mb-6">
          An open indictment
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-8 font-sans drop-shadow-2xl">
          The Biggest{" "}
          <span className="text-[#e63946]">Narcos</span>
          <br />
          of the Last
          <br />
          25 Years
        </h1>

        <p className="text-xl md:text-2xl text-[#ccc] max-w-2xl mx-auto mb-4 leading-relaxed">
          Tobacco companies lied about cancer. Opioid makers lied about addiction.
          Social media companies are doing the same — at a scale no cartel ever reached.
        </p>

        <p className="text-lg text-[#999] max-w-xl mx-auto mb-12">
          3.5 billion users. Deliberately addicted. The product isn&apos;t content. The product is you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#evidence"
            className="bg-[#e63946] text-white font-bold px-8 py-4 rounded text-lg hover:bg-[#c1121f] transition-colors duration-200"
          >
            See the Evidence
          </a>
          <a
            href="#action"
            className="border border-[#555] text-[#f0f0f0] font-bold px-8 py-4 rounded text-lg hover:border-[#e63946] hover:text-[#e63946] transition-colors duration-200 backdrop-blur-sm"
          >
            Take Action
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#666] z-10">
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
