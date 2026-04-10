"use client";

import Image from "next/image";

interface IndustryHeroProps {
  name: string;
  tagline: string;
  image: string;
}

export function IndustryHero({ name, tagline, image }: IndustryHeroProps) {
  return (
    <section className="py-32 pt-40 px-4 text-center relative overflow-hidden">
      {/* Background image */}
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Fade to background at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading">
          {name}
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          {tagline}
        </p>
      </div>
    </section>
  );
}
