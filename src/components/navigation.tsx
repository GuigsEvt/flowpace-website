"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
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
    label: "Products",
    href: "/products",
    children: [
      { label: "SimsWorkspace", href: "/products/sims-workspace" },
      { label: "Whisper Dictate", href: "/products/whisper-dictate" },
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
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.1)"
          : "1px solid rgba(255,255,255,0)",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0 text-xl font-semibold">
          <span className="text-heading">flowpace</span>
          <span className="text-accent">.ai</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
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
                className="text-sm text-body hover:text-heading transition-colors"
              >
                {link.label}
              </Link>
              {link.children && openDropdown === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl backdrop-blur-2xl bg-black/80 border border-white/10 p-2"
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-body hover:text-heading hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <CTAButton href="/contact" variant="primary">
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
              className="bg-background border-white/10 w-80"
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
                            className="text-sm text-body hover:text-heading"
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
    </motion.header>
  );
}
