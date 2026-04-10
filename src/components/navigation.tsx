"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CTAButton } from "@/components/cta-button";

const navLinks = [
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Freight & Logistics", href: "/industries/freight-logistics" },
      { label: "Hospitality & Airbnb", href: "/industries/hospitality" },
      { label: "Venture Capital", href: "/industries/venture-capital" },
      { label: "Insurance", href: "/industries/insurance" },
    ],
  },
  {
    label: "Open Source",
    href: "/open-source",
    children: [
      { label: "Whisper Dictate", href: "/open-source/whisper-dictate" },
    ],
  },
  {
    label: "Resources",
    href: "#",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Managed AIOps", href: "/managed-aiops" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f0f0f] border-b-2 border-[#1c1c1c] shadow-[0_4px_54px_rgba(0,0,0,0.8)]"
          : "bg-[#0f0f0f]/80 border-b-2 border-transparent"
      }`}
    >
      <nav className="w-full mx-auto px-8 md:px-16 lg:px-24 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold shrink-0">
          <div className="flex items-center">
            <span className="text-heading">Flowpace</span>
            <span className="text-accent">.ai</span>
          </div>
          <Image
            src="/logo.png"
            alt="Flowpace logo"
            width={28}
            height={28}
            className="w-7 h-7 brightness-0 invert"
          />
        </Link>

        {/* Desktop nav - centered */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children && setOpenDropdown(link.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-[15px] font-medium text-[#a9a9a9] hover:text-white hover:bg-[#2e2e2e]/90 h-[34px] px-4 rounded-[9px] transition-all duration-300"
              >
                {link.label}
                {link.children && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                )}
              </Link>
              <AnimatePresence>
                {link.children && openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-[#0f0f0f] border-2 border-[#1c1c1c] shadow-[0_4px_54px_rgba(0,0,0,0.8)] p-1.5"
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-[14.5px] font-[450] text-[#a9a9a9] hover:text-white hover:bg-[#262626] rounded-lg transition-all duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <CTAButton href="/contact" variant="primary" size="small">
            Book a Call
          </CTAButton>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={<button className="text-heading p-2" />}
            >
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-[#0f0f0f] border-[#1c1c1c] w-80"
            >
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium text-heading"
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="text-sm text-[#a9a9a9] hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <CTAButton href="/contact" variant="primary" className="mt-4">
                  Book a Call
                </CTAButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
