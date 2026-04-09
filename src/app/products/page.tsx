import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products | Flowpace.ai",
};

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero */}
      <section className="py-32 pt-40 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-heading">
          Our Products
        </h1>
        <p className="text-body mt-4 max-w-2xl mx-auto text-lg">
          Purpose-built tools for the AI-native workflow.
        </p>
      </section>

      {/* Product Cards */}
      <section className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link key={product.slug} href={`/products/${product.slug}`}>
              <div className="section-card h-full group cursor-pointer transition-all duration-300 hover:border-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <span className="text-accent text-lg font-bold">
                      {product.icon === "LayoutDashboard" ? "D" : "M"}
                    </span>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      product.badge === "Live"
                        ? "bg-success/10 text-success border border-success/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {product.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-heading">
                  {product.name}
                </h3>
                <p className="text-muted text-sm mt-1 mb-4">
                  {product.tagline}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-body text-sm flex items-start gap-2"
                    >
                      <span className="text-accent mt-1 text-xs">
                        &#10003;
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <span className="text-accent-light text-sm font-medium group-hover:underline">
                  Learn More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
