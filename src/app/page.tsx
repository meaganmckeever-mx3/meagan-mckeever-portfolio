import Image from "next/image";
import SiteNav from "./components/site-nav";

const CREAM = "#efdfb4";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='linear' slope='0' intercept='1'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const HERO_GRADIENT = [
  "radial-gradient(19% 23% at 62% 96%, rgba(239,223,180,0.95) 0%, rgba(239,223,180,0) 100%)",
  "radial-gradient(38% 50% at 106% 96%, rgba(104,26,36,0.95) 0%, rgba(104,26,36,0) 100%)",
  "radial-gradient(30% 38% at 69% 66%, rgba(240,150,118,0.88) 0%, rgba(239,152,126,0.5) 55%, rgba(239,152,126,0) 100%)",
  "radial-gradient(42% 52% at 82% 46%, rgba(188,58,58,0.6) 0%, rgba(188,58,58,0) 100%)",
  "radial-gradient(46% 42% at 58% 110%, rgba(210,138,80,0.92) 0%, rgba(210,138,80,0) 100%)",
  "radial-gradient(42% 48% at 0% 110%, rgba(106,130,70,0.95) 0%, rgba(106,130,70,0) 100%)",
  "radial-gradient(34% 48% at 107% 52%, rgba(158,38,48,0.85) 0%, rgba(158,38,48,0) 100%)",
  "radial-gradient(88% 96% at 97% 0%, #b92831 0%, #ab242d 30%, rgba(122,28,44,0.92) 54%, rgba(64,27,45,0.55) 70%, rgba(24,37,66,0) 84%)",
  "radial-gradient(60% 70% at 0% 0%, #121d34 0%, rgba(18,29,52,0) 78%)",
  "#1a2846",
].join(",");

const DIGITAL_STRATEGY = [
  {
    label: "Knowledge",
    text: "Data topology, figure and equation extraction, and RAG.",
  },
  {
    label: "Capture",
    text: "Structured data capture through production AI, ELNs, and automated testing.",
  },
  {
    label: "Models",
    text: "Model-orchestration architecture, ML model authoring, and expert-model SFT.",
  },
  {
    label: "Change",
    text: "Navigating organizational and cross-cultural challenges to champion the digital initiative and foster a more innovative culture.",
  },
];

const MORE_WORK = [
  {
    number: "04",
    name: "Foodcast",
    label: "PROBABILISTIC FOOD SCIENCE · PRIVATE",
    description:
      "A scientific system for exact Bayesian inference, inverse formulation design, regulatory constraints, gray-box process physics, and human escalation when the model should not decide.",
    meta: "Probabilistic modeling · conformal calibration · 214 tests",
  },
  {
    number: "05",
    name: "Flavor AI evaluation",
    label: "MODEL EVALUATION · AT WORK",
    description:
      "Building a food-science evaluation for GForceNet Flavor AI: domain correctness, useful formulation direction, failure types, and expert scoring against a fixed blind baseline.",
    meta: "GForceNet / Flavor AI · evaluation design · expert review",
  },
  {
    number: "06",
    name: "Echograph",
    label: "LOCAL-FIRST AI · OPEN SOURCE · MISTRAL",
    description:
      "For meeting recordings, medical dictation, and voice notes: normalize and transcribe audio, then use tonal intelligence to capture emotion and importance. Its hypergraph is my preferred RAG architecture—a working neural structure for order awareness and decision milestones that can become the PMO's oracle. Its generative stages can now run through Mistral as a configurable backend.",
    meta: "Mistral Small 4 / Medium 3.5 · function calling · JSON mode · 85 tests",
    href: "https://github.com/meaganmckeever-mx3/echograph",
  },
  {
    number: "07",
    name: "whatsoRAG",
    label: "ARCHITECTURE TOOL · LIVE",
    description:
      "A visual workbench for assembling retrieval pipelines, seeing the trade-offs, and exporting a buildable architecture instead of guessing at a stack.",
    meta: "Next.js · retrieval architecture · interactive planning",
    href: "https://whatsorag.vercel.app",
  },
  {
    number: "08",
    name: "Inkling for symbolic regression",
    label: "MODEL WORK · PRIVATE",
    description:
      "I fine-tuned Inkling for symbolic regression, exploring whether a general open-weight model could recover compact symbolic relationships from scientific data.",
    meta: "Fine-tuning · symbolic regression · scientific ML",
  },
  {
    number: "09",
    name: "VOID",
    label: "AI FOOD-SUSTAINABILITY COMPETITION · IN DEVELOPMENT",
    description:
      "A circular data-center fermentation and distillation system. Bou and I planned the process skid and produced the P&ID; the computational study models how recoverable heat from liquid-cooled AI infrastructure can support brewing and distillation.",
    philosophy:
      "Open source is part of the method: contributors can challenge our assumptions and improve the installation design. When scoping moves into build, I will publish the data from every test.",
    meta: "Process skid · P&ID · thermodynamics · heat reuse",
    href: "https://github.com/meaganmckeever-mx3/data-center-distillery",
  },
];

const EXPERIENCE = [
  {
    period: "2025—NOW",
    company: "Samyang Foods Inc.",
    role: "Food Technology Application Scientist · Netherlands",
    description:
      "Directing a four-year, €4.5M Digital R&D program reaching 7 FTE by 2030. I built a production protein, satiety, and nutrition application; local RAG and HyperGraphRAG systems; a structured scientific-data pipeline; and the path toward ML-enabled lab robotics.",
  },
  {
    period: "2022—2025",
    company: "Unilever Food Solutions · innocent drinks",
    role: "Lead Process Technologist · Senior Process Technologist",
    description:
      "Applied ML, CFD, digital-twin modeling, SCADA, HMI, PID, and automation to thermal safety and manufacturing systems. Reduced batch time by 75%, increased blended production volume by 260%, and qualified all 16 recipes for a major process-transfer program.",
  },
  {
    period: "2014—2022",
    company: "FUL · Rip Van Wafels · B&G · Back to Nature · Covance / Eurofins",
    role: "Food R&D, scale-up, manufacturing, and commercialization",
    description:
      "Tripled shelf life and raised consumer acceptability from 3/9 to 7/9; launched five SKUs contributing $2M in growth; created a $13M annualized platform while cutting manufacturing cost 50%; and managed an 86-SKU certification program across 22 co-packers and 100+ suppliers in five months.",
  },
];

function GrainOverlay({ strong = false }: { strong?: boolean }) {
  const base = {
    backgroundImage: GRAIN,
    backgroundRepeat: "repeat",
    backgroundSize: "240px 240px",
  } as const;

  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{ ...base, mixBlendMode: "overlay", opacity: strong ? 0.55 : 0.34 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{ ...base, opacity: strong ? 0.1 : 0.045 }}
      />
    </>
  );
}

function Arrow() {
  return <span aria-hidden>↗</span>;
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-current/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.16em]">
      {children}
    </span>
  );
}

function BuildingBuddyVisual() {
  return (
    <figure className="overflow-hidden rounded-[1.6rem] bg-[#f4f0e5] shadow-2xl shadow-black/25">
      <Image
        src="/images/building-buddy-synthetic-gantt.png"
        alt="Building Buddy Gantt interface showing a synthetic technical R&D project"
        width={1586}
        height={992}
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="font-body flex items-center justify-between gap-4 border-t border-black/10 bg-[#fbfaf5] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-black/60 sm:text-[9px]">
        <span>Real interface · synthetic demo data</span>
        <span>Project command / Gantt</span>
      </figcaption>
    </figure>
  );
}

function BuildingBuddyPipelineVisual() {
  return (
    <figure className="overflow-hidden rounded-[1.6rem] bg-[#f4f0e5] shadow-2xl shadow-black/25">
      <Image
        src="/images/building-buddy-extraction-pipeline-synthetic.png"
        alt="Building Buddy extraction pipeline interface using synthetic documents and demo statuses"
        width={1586}
        height={992}
        sizes="(min-width: 1024px) 76vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="font-body flex flex-wrap items-center justify-between gap-3 border-t border-black/10 bg-[#fbfaf5] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-black/60 sm:text-[9px]">
        <span>Representative interface · synthetic demo data</span>
        <span>Upload / extraction / review / index</span>
      </figcaption>
    </figure>
  );
}

function ProteinPalVisual() {
  return (
    <figure className="overflow-hidden rounded-[1.6rem] bg-[#100e1f] shadow-2xl shadow-black/30">
      <Image
        src="/images/protein-pal-synthetic-interface.png"
        alt="Protein Pal interface using a synthetic formula to show nutrition, protein quality, formulation controls, rule checks, and calculation trace"
        width={1586}
        height={992}
        sizes="(min-width: 1024px) 52vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="font-body flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#100e1f] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-white/55 sm:text-[9px]">
        <span>Representative interface · synthetic demo data</span>
        <span>Formulation / nutrition / protein quality / trace</span>
      </figcaption>
    </figure>
  );
}

function ScientificAISystemVisual() {
  return (
    <figure className="overflow-hidden rounded-[1.6rem] bg-[#07172b] shadow-2xl shadow-black/30">
      <Image
        src="/images/scientific-ai-system-public-map.png"
        alt="Public conceptual architecture for an auditable scientific AI system with model, deterministic, and knowledge lanes"
        width={1672}
        height={941}
        sizes="(min-width: 1024px) 76vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="font-body flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#07172b] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-white/55 sm:text-[9px]">
        <span>Public conceptual map · internal details removed</span>
        <span>Models / scientific tools / physics / knowledge / evaluation</span>
      </figcaption>
    </figure>
  );
}

function ThermalProcessVisual() {
  return (
    <figure className="overflow-hidden rounded-[1.6rem] bg-[#111b31] shadow-2xl shadow-black/30">
      <Image
        src="/images/combi-oven-thermal-reconstruction.png"
        alt="Representative thermal reconstruction of a lidded gastronorm meal tray in a steam combi oven"
        width={1672}
        height={941}
        sizes="(min-width: 1024px) 62vw, 100vw"
        className="h-auto w-full"
      />
      <figcaption className="font-body flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#111b31] px-5 py-3 text-[8px] uppercase tracking-[0.16em] text-white/55 sm:text-[9px]">
        <span>Representative reconstruction · not original solver output</span>
        <span>Steam / condensation / internal cold region</span>
      </figcaption>
    </figure>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-[#17243e] text-[#efdfb4]">
      <a
        href="#projects"
        className="sr-only z-50 rounded-full bg-[#efdfb4] px-4 py-2 text-[#17243e] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to projects
      </a>

      <SiteNav />

      <section id="top" className="relative min-h-svh overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <GrainOverlay strong />

        <div className="relative z-20 flex min-h-svh flex-col justify-center px-6 pb-28 pt-32 sm:px-12">
          <p className="font-body mb-5 text-[10px] uppercase tracking-[0.26em] text-[#efdfb4]/65 sm:text-xs">
            Scientific AI · Digital R&amp;D · Food systems
          </p>
          <h1
            className="font-display uppercase leading-[0.94]"
            style={{
              color: CREAM,
              fontSize: "clamp(3.25rem, 8.3vw, 8.5rem)",
              letterSpacing: "0.005em",
            }}
          >
            Meagan
            <br />
            McKeever
          </h1>
          <p className="font-body mt-8 max-w-[52rem] text-[16px] leading-[1.65] text-[#efdfb4]/85 sm:mt-10 sm:text-xl">
            Food scientist, applied AI builder, and digital R&amp;D lead. I create production
            systems and scientific applications for R&amp;D teams, deploy and develop local
            models, and architect the systems and strategy for a research division making
            breakthrough discoveries in protein science, microstructures, plant-based nutrition,
            and hydrogel systems.
          </p>
        </div>

        <div className="font-body absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 pb-9 text-[9px] tracking-[0.2em] text-[#efdfb4]/55 sm:px-12 sm:text-[11px] sm:tracking-[0.3em]">
          <span>NETHERLANDS · EUROPE · USA</span>
          <a href="#projects" className="hidden transition-colors hover:text-[#efdfb4] sm:inline">
            SELECTED PROJECTS ↓
          </a>
        </div>
      </section>

      <main>
        <section id="projects" className="relative overflow-hidden bg-[#1b2946]">
          <GrainOverlay />
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32">
            <div className="grid gap-8 border-b border-[#efdfb4]/20 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#efdfb4]/55">
                  Selected projects
                </p>
                <h2 className="font-display mt-4 max-w-4xl text-4xl uppercase leading-[1.02] sm:text-6xl">
                  Production systems and scientific software delivering ROI.
                </h2>
              </div>
              <p className="font-body max-w-xl text-base leading-7 text-[#efdfb4]/68 lg:justify-self-end">
                For technical users, R&amp;D teams, and laboratory automation. I have defined a
                strategy that applies emerging technology at every phase.
              </p>
            </div>

            <div className="grid border-l border-t border-[#efdfb4]/20 sm:grid-cols-2 lg:grid-cols-4">
              {DIGITAL_STRATEGY.map((item) => (
                <div key={item.label} className="border-b border-r border-[#efdfb4]/20 p-6 sm:p-8">
                  <p className="font-body text-[9px] uppercase tracking-[0.2em] text-[#f3a99c]">
                    {item.label}
                  </p>
                  <p className="font-body mt-4 text-[14px] leading-6 text-[#efdfb4]/64">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <ScientificAISystemVisual />
            </div>

            <article
              id="building-buddy"
              className="grid gap-12 border-b border-[#efdfb4]/20 py-20 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-16"
            >
              <div>
                <div className="font-body flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#f3a99c]">
                  <span>01</span>
                  <span className="h-px w-8 bg-current" />
                  <span>PRIVATE R&amp;D SYSTEM · AGENTS + EXTRACTION</span>
                </div>
                <h3 className="font-display mt-6 text-4xl sm:text-6xl">Building Buddy</h3>
                <p className="font-body mt-5 text-xl leading-8 text-[#efdfb4]/88 sm:text-2xl">
                  Tool-using agents, project management, source-pinned extraction, and collaborative R&amp;D.
                </p>
                <p className="font-body mt-5 max-w-xl text-[15px] leading-7 text-[#efdfb4]/62 sm:text-base">
                  Building Buddy combines project management and source-pinned file extraction with
                  regulatory and PMO agents working across the inbox. Agent actions are authenticated,
                  bounded, and reviewable; consequential updates stay reversible. The application tracks
                  CAPEX, milestones, dependencies, risks, and project progress in a leadership-friendly
                  dashboard.
                </p>
                <div className="font-body mt-8 flex flex-wrap gap-2 text-[#efdfb4]/75">
                  <Tag>Project management</Tag>
                  <Tag>Source-pinned extraction</Tag>
                  <Tag>Tool calling</Tag>
                  <Tag>Human review</Tag>
                  <Tag>CAPEX</Tag>
                  <Tag>EN / KR</Tag>
                </div>
                <p className="font-body mt-8 text-[10px] uppercase tracking-[0.2em] text-[#efdfb4]/45">
                  Private source · synthetic portfolio data
                </p>
              </div>
              <BuildingBuddyVisual />
              <div className="lg:col-span-2">
                <BuildingBuddyPipelineVisual />
              </div>
            </article>

            <article
              id="protein-pal"
              className="grid gap-12 border-b border-[#efdfb4]/20 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20"
            >
              <div className="lg:order-2">
                <div className="font-body flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#d7b06f]">
                  <span>02</span>
                  <span className="h-px w-8 bg-current" />
                  <span>DEPLOYED SCIENTIFIC PRODUCT · LIVE</span>
                </div>
                <h3 className="font-display mt-6 text-4xl sm:text-6xl">Protein Pal</h3>
                <p className="font-body mt-5 text-xl leading-8 text-[#efdfb4]/88 sm:text-2xl">
                  Deterministic protein-quality, formulation, and nutrition software.
                </p>
                <p className="font-body mt-5 max-w-xl text-[15px] leading-7 text-[#efdfb4]/62 sm:text-base">
                  I translated specialist food-science and FDA logic into explicit, auditable
                  software rules. Protein Pal combines ingredient data, formula building,
                  protein-quality calculations, nutrition labelling, and comparisons—keeping
                  exact calculations deterministic instead of asking a language model to guess.
                  A headless application and MCP interface are in development.
                </p>
                <div className="font-body mt-8 flex flex-wrap gap-2 text-[#efdfb4]/75">
                  <Tag>React</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Supabase</Tag>
                  <Tag>Vercel</Tag>
                  <Tag>Auditable rules</Tag>
                  <Tag>Headless / MCP</Tag>
                </div>
                <a
                  href="https://proteinpal.app"
                  target="_blank"
                  rel="noreferrer"
                  className="font-body mt-9 inline-flex items-center gap-3 border-b border-[#efdfb4]/35 pb-2 text-xs tracking-[0.18em] transition-colors hover:border-[#efdfb4]"
                >
                  OPEN LIVE PRODUCT <Arrow />
                </a>
              </div>
              <div className="lg:order-1">
                <ProteinPalVisual />
              </div>
            </article>

            <article id="thermal-process" className="border-b border-[#efdfb4]/20 py-20">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-20">
                <div>
                  <div className="font-body flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#f3a99c]">
                    <span>03</span>
                    <span className="h-px w-8 bg-current" />
                    <span>PHYSICAL MODELING · INDUSTRIAL FOOD SYSTEMS</span>
                  </div>
                  <h3 className="font-display mt-6 text-4xl sm:text-6xl">Heat penetration &amp; CFD</h3>
                  <p className="font-body mt-5 text-xl leading-8 text-[#efdfb4]/88 sm:text-2xl">
                    From condensing-film theory to cooking programs shipped with the product.
                  </p>
                </div>
                <p className="font-body max-w-2xl text-[15px] leading-7 text-[#efdfb4]/62 sm:text-base lg:justify-self-end">
                  For frozen vegan meals in lidded 2/3 or 1/1 GN trays, I mapped combi-oven
                  programs in psychrometric space, developed a theory around condensing-film heat
                  transfer, calculated product conductivity and heat-transfer coefficients, and
                  built the 3D geometry in Blender. The programs took sauce, vegan-meat pieces,
                  and vegetables from frozen to ready in 20 or 40 minutes while protecting color,
                  texture, and microbiological safety.
                </p>
              </div>
              <div className="font-body mt-8 flex flex-wrap gap-2 text-[#efdfb4]/75">
                <Tag>Heat penetration</Tag>
                <Tag>CFD</Tag>
                <Tag>Psychrometrics</Tag>
                <Tag>Condensing film</Tag>
                <Tag>Blender geometry</Tag>
                <Tag>120°C / 90% steam</Tag>
                <Tag>2 m³/s convection</Tag>
              </div>
              <div className="mt-10">
                <ThermalProcessVisual />
              </div>
            </article>

            <div className="pt-20">
              <div className="mb-10 flex items-end justify-between gap-6">
                <h3 className="font-display text-3xl uppercase sm:text-4xl">More systems &amp; model work</h3>
                <span className="font-body hidden text-[9px] tracking-[0.2em] text-[#efdfb4]/40 sm:block">
                  PUBLIC + PRIVATE
                </span>
              </div>
              <div className="grid border-l border-t border-[#efdfb4]/20 md:grid-cols-2 xl:grid-cols-3">
                {MORE_WORK.map((project) => {
                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-4">
                        <span className="font-body text-[10px] tracking-[0.2em] text-[#efdfb4]/40">
                          {project.number}
                        </span>
                        {project.href ? (
                          <span className="text-base text-[#efdfb4]/45 transition-colors group-hover:text-[#efdfb4]">
                            <Arrow />
                          </span>
                        ) : null}
                      </div>
                      <p className="font-body mt-8 text-[9px] uppercase tracking-[0.18em] text-[#f3a99c]">
                        {project.label}
                      </p>
                      <h4 className="font-display mt-3 text-2xl sm:text-3xl">{project.name}</h4>
                      <p className="font-body mt-4 text-[14px] leading-6 text-[#efdfb4]/62">
                        {project.description}
                      </p>
                      {project.philosophy ? (
                        <p className="font-body mt-5 border-l border-[#f3a99c]/45 pl-4 text-[12px] leading-5 text-[#efdfb4]/54">
                          {project.philosophy}
                        </p>
                      ) : null}
                      <p className="font-body mt-8 text-[9px] leading-5 tracking-[0.1em] text-[#efdfb4]/38">
                        {project.meta}
                      </p>
                    </>
                  );

                  return project.href ? (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group border-b border-r border-[#efdfb4]/20 p-7 transition-colors hover:bg-[#efdfb4]/[0.04] sm:p-9"
                    >
                      {content}
                    </a>
                  ) : (
                    <article key={project.name} className="border-b border-r border-[#efdfb4]/20 p-7 sm:p-9">
                      {content}
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="relative overflow-hidden bg-[#d79b76] text-[#17243e]">
          <GrainOverlay />
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32">
            <div className="grid gap-8 border-b border-[#17243e]/20 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/55">Experience</p>
                <h2 className="font-display mt-4 text-4xl uppercase leading-[1.02] sm:text-6xl">
                  Sixteen years of industrial R&amp;D.
                </h2>
              </div>
              <p className="font-body max-w-xl text-base leading-7 text-[#17243e]/68 lg:justify-self-end">
                Food science, processing, manufacturing, commercialization, and applied AI—across
                laboratories, production lines, co-manufacturers, suppliers, and executive teams.
              </p>
            </div>

            <div className="divide-y divide-[#17243e]/20">
              {EXPERIENCE.map((item) => (
                <article key={item.company} className="grid gap-6 py-10 lg:grid-cols-[0.22fr_0.78fr_1.25fr] lg:gap-12">
                  <p className="font-body text-[10px] tracking-[0.18em] text-[#17243e]/65">{item.period}</p>
                  <div>
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl">{item.company}</h3>
                    <p className="font-body mt-2 text-[10px] uppercase leading-5 tracking-[0.13em] text-[#17243e]/52">
                      {item.role}
                    </p>
                  </div>
                  <p className="font-body text-[15px] leading-7 text-[#17243e]/72 sm:text-base">{item.description}</p>
                </article>
              ))}
            </div>

            <div className="mt-6 grid border-l border-t border-[#17243e]/20 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["€4.5M", "Digital R&D roadmap"],
                ["−75%", "batch time"],
                ["+260%", "production volume"],
                ["$13M", "annualized platform"],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-r border-[#17243e]/20 p-7 sm:p-9">
                  <p className="font-display text-4xl sm:text-5xl">{value}</p>
                  <p className="font-body mt-3 text-[10px] uppercase tracking-[0.15em] text-[#17243e]/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>

            <div className="font-body mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[9px] uppercase leading-5 tracking-[0.14em] text-[#17243e]/65">
              <span>Co-inventor · WO2012112700A2</span>
              <span>IFTSA / Disney · First place</span>
              <span>IFTSA / Mars · First place</span>
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden bg-[#f1e4c2] text-[#17243e]">
          <GrainOverlay />
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/55">About</p>
                <h2 className="font-display mt-4 text-4xl uppercase leading-[1.03] sm:text-6xl">
                  A smarter standard for scientific work.
                </h2>
              </div>
              <div>
                <div className="font-body space-y-6 text-lg leading-8 text-[#17243e]/76">
                  <p>
                    The acceleration of technology has made it possible to create custom tools very
                    quickly, suited to the needs we as scientists experience daily. I have embraced
                    coding, building, and leveraging agents to help deliver a vision of a smarter
                    standard.
                  </p>
                  <p>
                    Currently I cover the work end to end to transform our division&apos;s capabilities
                    and toolkit. I have learned to navigate across cultures, communication styles,
                    and ranks. I am very happy with the change I have been able to bring about, and I
                    am hopeful my own projects may also drive good working habits and a culture of
                    innovation. My daily work now includes IT systems, security, endpoint management,
                    and executive communication.
                  </p>
                </div>

                <a
                  href="https://www.cornell.edu/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-12 grid overflow-hidden border border-[#17243e]/20 bg-[#f7ecd0] transition-colors hover:bg-white/35 sm:grid-cols-[9rem_1fr]"
                  aria-label="Bachelor of Science in Food Science from Cornell University"
                >
                  <span className="grid min-h-36 place-items-center bg-[#b31b1b] p-6">
                    <Image
                      src="/images/cornell-seal-white.svg"
                      alt="Cornell University seal"
                      width={104}
                      height={104}
                      className="size-24"
                    />
                  </span>
                  <span className="flex flex-col justify-center p-7 sm:p-9">
                    <span className="font-body text-[9px] uppercase tracking-[0.18em] text-[#17243e]/65">Education</span>
                    <span className="font-display mt-3 text-3xl leading-tight">Cornell University</span>
                    <span className="font-body mt-2 text-sm text-[#17243e]/72">Bachelor of Science · Food Science</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="relative overflow-hidden bg-[#a92b34]">
        <GrainOverlay strong />
        <div className="relative z-20 mx-auto flex min-h-[68vh] max-w-7xl flex-col justify-between px-6 py-20 sm:px-12 sm:py-24">
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#efdfb4]/60">Contact</p>
            <h2 className="font-display mt-5 max-w-4xl text-5xl uppercase leading-[0.98] sm:text-7xl lg:text-8xl">
              Please reach out.
            </h2>
            <p className="font-body mt-7 text-base text-[#efdfb4]/65">Using the contact information below.</p>
          </div>
          <div className="mt-20 flex flex-col gap-8 border-t border-[#efdfb4]/30 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="font-body flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-[0.14em]">
              <a
                href="mailto:mckeever.meagan@gmail.com"
                className="border-b border-transparent pb-1 transition-colors hover:border-[#efdfb4]"
              >
                EMAIL <Arrow />
              </a>
              <a
                href="https://github.com/meaganmckeever-mx3"
                target="_blank"
                rel="noreferrer"
                className="border-b border-transparent pb-1 transition-colors hover:border-[#efdfb4]"
              >
                GITHUB <Arrow />
              </a>
              <a
                href="https://www.linkedin.com/in/meaganmmckeever"
                target="_blank"
                rel="noreferrer"
                className="border-b border-transparent pb-1 transition-colors hover:border-[#efdfb4]"
              >
                LINKEDIN <Arrow />
              </a>
            </div>
            <p className="font-body text-[9px] tracking-[0.18em] text-[#efdfb4]/45">
              MEAGAN MCKEEVER · 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
