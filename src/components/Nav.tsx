"use client";
import { useState } from "react";
import Logo from "@/components/Logo";

const links = [
  { label: "The Case", href: "#evidence" },
  { label: "The Playbook", href: "#playbook" },
  { label: "The Defendants", href: "#defendants" },
  { label: "The Victims", href: "#victims" },
  { label: "Take Action", href: "#action" },
  { label: "Resources", href: "#resources" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur border-b border-[#222]">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <Logo size={36} className="rounded-lg" />
          <span className="text-[#e63946] font-bold text-lg tracking-tight uppercase group-hover:opacity-80 transition-opacity">
            Digital Narcos
          </span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-[#aaa] font-sans">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-[#e63946] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#action"
          className="hidden md:inline-block bg-[#e63946] text-white text-sm font-bold px-5 py-2 rounded hover:bg-[#c1121f] transition-colors duration-200"
        >
          Fight Back
        </a>
        <button
          className="md:hidden text-[#f0f0f0]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current mb-1" />
          <span className="block w-6 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[#111] border-t border-[#222] px-6 py-4 flex flex-col gap-4 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#aaa] hover:text-[#e63946]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#action" className="text-[#e63946] font-bold">
            Fight Back →
          </a>
        </div>
      )}
    </nav>
  );
}
