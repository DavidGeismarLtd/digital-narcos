export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="max-w-sm">
            <p className="text-[#e63946] font-black text-xl font-sans mb-3">Digital Narcos</p>
            <p className="text-[#666] text-sm leading-relaxed">
              An independent advocacy site. No corporate funding. No ad revenue. The information here is sourced from public research, whistleblower documents, and court filings.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-16 gap-y-3 text-sm">
            {[
              ["The Case", "#evidence"],
              ["The Playbook", "#playbook"],
              ["The Defendants", "#defendants"],
              ["The Victims", "#victims"],
              ["Take Action", "#action"],
              ["Resources", "#resources"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[#555] hover:text-[#e63946] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#111] pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-[#444]">
          <p>
            All statistics are sourced from peer-reviewed research, government reports, and verified journalism. Sources are cited inline.
          </p>
          <p className="shrink-0">
            Built to last. Not to scroll.
          </p>
        </div>
      </div>
    </footer>
  );
}
