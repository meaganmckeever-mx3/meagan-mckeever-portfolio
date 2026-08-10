import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "../components/site-nav";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.16'/%3E%3C/svg%3E\")";

export const metadata: Metadata = {
  title: "About Meagan McKeever",
  description:
    "Meagan McKeever is a scientist and technology enthusiast with more than fifteen years across R&D, factories, CAPEX, scientific systems, and applied AI.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Meagan McKeever",
    description:
      "More than fifteen years across R&D, factories, CAPEX, scientific systems, and applied AI.",
    type: "profile",
    url: "/about",
  },
};

function Grain() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-10 opacity-30 mix-blend-overlay"
      style={{ backgroundImage: GRAIN, backgroundRepeat: "repeat", backgroundSize: "240px 240px" }}
    />
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f1e4c2] text-[#17243e]">
      <SiteNav />

      <main>
        <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:px-12 sm:pb-32 sm:pt-44">
          <Grain />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(48% 64% at 92% 8%, rgba(239,160,128,.72), transparent 100%), radial-gradient(45% 58% at 4% 100%, rgba(115,136,82,.42), transparent 100%)",
            }}
          />
          <div className="relative z-20 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/55">
                About Meagan
              </p>
              <h1 className="font-display mt-5 max-w-4xl text-5xl leading-[0.96] sm:text-7xl lg:text-8xl">
                Hi, my name is Meagan.
              </h1>
              <div className="font-body mt-10 max-w-2xl space-y-6 text-lg leading-8 text-[#17243e]/76 sm:text-xl sm:leading-9">
                <p>
                  I&apos;m a scientist and technology enthusiast with more than fifteen years of
                  experience managing teams, CAPEX projects, and R&amp;D. I grew up in New York and
                  moved to the Netherlands in 2021.
                </p>
                <p>
                  My career began at the lab bench. It grew into commercializing products across
                  North American manufacturing lines, building quality and data systems, leading
                  factory projects, and now developing and deploying AI systems for scientists.
                </p>
              </div>
              <div className="font-body mt-10 flex flex-wrap gap-3 text-[9px] uppercase tracking-[0.16em] text-[#17243e]/62">
                {[
                  "Food science",
                  "R&D leadership",
                  "CAPEX & factories",
                  "Applied AI",
                ].map((item) => (
                  <span key={item} className="rounded-full border border-[#17243e]/20 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <figure className="mx-auto w-full max-w-[38rem]">
              <div className="rounded-[2.25rem] border border-[#17243e]/12 bg-[#f7ecd0]/75 p-5 shadow-2xl shadow-[#17243e]/15 sm:p-8">
                <Image
                  src="/images/meagan-mckeever-headshot.png"
                  alt="Portrait of Meagan McKeever"
                  width={1200}
                  height={1200}
                  sizes="(min-width: 1024px) 42vw, 88vw"
                  priority
                  className="h-auto w-full"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#a8b49c] px-6 py-24 text-[#17243e] sm:px-12 sm:py-32">
          <div
            aria-hidden
            className="absolute inset-0 bg-repeat opacity-28"
            style={{
              backgroundImage: "url('/images/herbarium-pattern-sage.webp')",
              backgroundPosition: "center",
              backgroundSize: "min(920px, 100vw)",
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-[#efe2bf]/78" />
          <Grain />
          <div className="relative z-20 mx-auto max-w-7xl">
            <div className="max-w-5xl rounded-[2rem] border border-[#17243e]/12 bg-[#f8efd9]/90 p-8 shadow-2xl shadow-[#17243e]/12 backdrop-blur-[2px] sm:p-12 lg:p-16">
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/55">
                From the lab bench to the factory floor
              </p>
              <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.98] sm:text-7xl">
                I learned by making things real.
              </h2>
              <div className="font-body mt-10 max-w-4xl space-y-7 text-base leading-8 text-[#17243e]/76 sm:text-lg">
                <p>
                  Early in my career, I commercialized new products on manufacturing lines across
                  North America and implemented quality and data systems to track consumer
                  complaints. At Back to Nature, I enjoyed high-stakes cross-functional project
                  management with a dream team from across the industry. I prepared the brands for
                  acquisition, supporting due diligence with thorough quality systems I had built
                  from scratch, then led new product launches while B&amp;G acquired and began
                  integrating the businesses.
                </p>
                <p>
                  B&amp;G brought me on to continue managing Back to Nature and SnackWell&apos;s from a
                  food-science perspective. I led major capital and change projects and spent much
                  of my time on the road in factories. After B&amp;G, I managed science and technology
                  for Rip Van and led the build of a new factory from construction through
                  commissioning.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#111b31] px-6 py-24 text-[#efdfb4] sm:px-12 sm:py-32">
          <div
            aria-hidden
            className="absolute inset-0 bg-repeat opacity-35"
            style={{
              backgroundImage: "url('/images/herbarium-pattern-dark.webp')",
              backgroundPosition: "center",
              backgroundSize: "min(980px, 110vw)",
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-[#111b31]/80" />
          <Grain />
          <div className="relative z-20 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
            <div>
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#efdfb4]/58">
                Europe · 2021 onward
              </p>
              <h2 className="font-display mt-5 text-5xl leading-[0.98] sm:text-7xl">
                I moved into more technical roles.
              </h2>
            </div>
            <div className="font-body space-y-7 rounded-[2rem] border border-[#efdfb4]/14 bg-[#0c1528]/84 p-8 text-base leading-8 text-[#efdfb4]/78 shadow-2xl shadow-black/25 backdrop-blur-[2px] sm:p-12 sm:text-lg">
              <p>
                <strong className="text-[#efdfb4]">At FUL,</strong> I studied phycocyanin&apos;s protein
                structure and folding under different process and chemical conditions. I developed
                a method that preserved its conformation, blue color, and nutritional antioxidant
                potential through processing and shelf life. I also started a sensory-science
                program, turned focus-group feedback into structured data, and ran GHG models to
                refine the end-to-end process and formula against climate goals.
              </p>
              <p>
                <strong className="text-[#efdfb4]">At innocent&apos;s new factory, the Blender,</strong>{" "}
                I ran root-cause analysis on automation and order-flow bugs as we commissioned SCADA
                and brought processes online. I worked closely with PLC programmers and automation
                engineers and excitedly tested early AI models in a PID-tuning application.
              </p>
              <p>
                <strong className="text-[#efdfb4]">At Unilever,</strong> I shifted from PLCs toward
                physics, thermodynamics, fluid dynamics, and psychrometrics. I designed the thermal
                process for a patented plant-based cream and validated it with a digital twin of the
                production line. I also built a phase-change heating model for frozen restaurant
                meals prepared in a Metos combi steamer, then used field variability in ML models to
                qualify the process and balance freshness with safety.
              </p>
              <p>
                <strong className="text-[#efdfb4]">At Samyang Foods Inc.,</strong> I now develop and
                deploy AI systems while leading one of our largest R&amp;D departments as Director of
                Digital R&amp;D. Our 2030 vision includes embodied intelligence in the lab and physics,
                chemistry, and biology models that let scientists run fewer, more targeted benchtop
                tests—with agentic workflows carrying the work further between trips to the lab.
              </p>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#d98872] px-6 py-24 text-[#17243e] sm:px-12 sm:py-32">
          <Grain />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(44% 72% at 8% 10%, rgba(241,228,194,.74), transparent 100%), radial-gradient(42% 65% at 100% 100%, rgba(27,41,70,.22), transparent 100%)",
            }}
          />
          <div className="relative z-20 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
            <figure className="overflow-hidden rounded-[2rem] border border-[#17243e]/14 bg-[#111b31] shadow-2xl shadow-[#17243e]/25">
              <Image
                src="/images/meagan-mckeever-painted-portrait.png"
                alt="A painted portrait by Meagan McKeever"
                width={3859}
                height={3432}
                sizes="(min-width: 1024px) 52vw, 92vw"
                className="h-auto w-full"
              />
            </figure>
            <div className="rounded-[2rem] border border-[#17243e]/12 bg-[#f1e4c2]/76 p-8 backdrop-blur-[2px] sm:p-10">
              <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/58">
                Outside work
              </p>
              <h2 className="font-display mt-5 text-5xl leading-[0.98] sm:text-7xl">
                I paint, test models, and go outside.
              </h2>
              <div className="font-body mt-8 space-y-6 text-base leading-8 text-[#17243e]/76 sm:text-lg">
                <p>
                  I love to paint, run ML experiments, load and test local models, and tinker with
                  quantization, mixture-of-experts configurations, and agent harnesses.
                </p>
                <p>
                  I also enjoy hiking in the Alps, gardening at home, and brewing beer or cider. I&apos;m
                  extremely passionate about wilderness and climate, and I want to use breakthrough
                  technology to make a positive impact on our world.
                </p>
                <p>
                  The intersection of science, mathematics, AI, and physics feels like a very good
                  place to work on that.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#a92b34] px-6 py-14 text-[#efdfb4] sm:px-12">
        <div className="font-body mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 text-[10px] uppercase tracking-[0.18em]">
          <Link className="border-b border-transparent pb-1 hover:border-current" href="/">
            Back to selected work ↗
          </Link>
          <a className="border-b border-transparent pb-1 hover:border-current" href="mailto:mckeever.meagan@gmail.com">
            Email Meagan ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
