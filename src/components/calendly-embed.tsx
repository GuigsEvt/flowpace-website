"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-xl overflow-hidden"
      data-url={`${url}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=111113&text_color=fafafa&primary_color=1A73E8`}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
