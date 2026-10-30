"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CTAButton } from "@/components/cta-button";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <Link href="/" className="flex items-center gap-0 text-xl font-semibold">
          <span className="text-heading">flowpace</span>
          <span className="text-accent">.ai</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-body hover:text-heading transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <CTAButton href="/contact" variant="primary">
            Let&apos;s talk
          </CTAButton>
        </div>

        <div className="md:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger render={<button className="text-heading p-2" />}>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-white/10 w-80">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-heading"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <CTAButton href="/contact" variant="primary" className="mt-4" onClick={() => setMobileOpen(false)}>
                  Let&apos;s talk
                </CTAButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </motion.header>
  );
}
