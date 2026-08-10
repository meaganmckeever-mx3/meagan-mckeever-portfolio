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

const MORE_WORK = [
  {
    number: "03",
    name: "Flavor AI evaluation",
    label: "MODEL EVALUATION · AT WORK",
    description:
      "Building a food-science evaluation for GForceNet Flavor AI: domain correctness, useful formulation direction, failure types, and expert judgment against a fixed blind baseline.",
    meta: "GForceNet / Flavor AI · evaluation design · expert review",
  },
  {
    number: "04",
    name: "Echograph",
    label: "LOCAL-FIRST AI · OPEN SOURCE",
    description:
      "Turns twelve years of voice memos into a source-linked knowledge hypergraph, grounded retrieval system, and direct audio evidence layer.",
    meta: "274 recordings · 5,107 statements · 75 tests",
    href: "https://github.com/meaganmckeever-mx3/echograph",
  },
  {
    number: "05",
    name: "whatsoRAG",
    label: "ARCHITECTURE TOOL · LIVE",
    description:
      "A visual workbench for assembling retrieval pipelines, seeing the trade-offs, and exporting a buildable architecture instead of guessing at a stack.",
    meta: "Next.js · retrieval architecture · interactive planning",
    href: "https://whatsorag.vercel.app",
  },
  {
    number: "06",
    name: "Inkling for symbolic regression",
    label: "MODEL WORK · PRIVATE",
    description:
      "Fine-tuning work that explores whether a general open-weight model can recover compact symbolic relationships from scientific data.",
    meta: "Fine-tuning · symbolic regression · technical write-up pending",
  },
  {
    number: "07",
    name: "VOID",
    label: "AI FOOD-SUSTAINABILITY COMPETITION · SIDE PROJECT",
    description:
      "A circular data-center fermentation concept: model whether recoverable heat from liquid-cooled AI infrastructure can support brewing and distillation, with explicit assumptions and physics tests.",
    meta: "Thermodynamics · circular systems · source-backed computation",
    href: "https://github.com/meaganmckeever-mx3/data-center-distillery",
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
    <div
      aria-label="Abstract representation of the Building Buddy interface"
      className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem] bg-[#f4f0e5] p-3 text-[#242424] shadow-2xl shadow-black/25 sm:p-5"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-black/10 bg-[#fbfaf5]">
        <div className="flex h-10 items-center gap-2 border-b border-black/10 px-3 sm:h-12 sm:px-4">
          <span className="grid size-5 place-items-center rounded-md border border-black/20 text-[9px]">●</span>
          <span className="text-[9px] font-semibold tracking-tight sm:text-xs">building·buddy</span>
          <div className="ml-2 h-5 grow rounded-full bg-[#efede3] sm:ml-8 sm:h-7" />
          <span className="size-5 rounded-full bg-[#ef6a42]" />
        </div>
        <div className="grid min-h-0 grow grid-cols-[23%_1fr]">
          <div className="border-r border-black/10 bg-[#f6f3ea] p-2 sm:p-4">
            {[
              "Projects",
              "Drive",
              "Extraction",
              "Knowledge",
              "Notebook",
            ].map((item, index) => (
              <div
                key={item}
                className={`mb-1.5 rounded-md px-2 py-1.5 text-[6px] sm:text-[9px] ${
                  index === 0 ? "bg-[#e9e5d9] font-semibold" : "text-black/50"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="min-w-0 p-3 sm:p-5">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[6px] uppercase tracking-[0.16em] text-black/40 sm:text-[8px]">
                  Project command
                </p>
                <p className="mt-1 text-[11px] font-semibold sm:text-lg">P0 · Evidence spine</p>
              </div>
              <span className="rounded-full bg-[#e9f0de] px-2 py-1 text-[5px] text-[#58703f] sm:text-[7px]">
                ON TRACK
              </span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-5 sm:gap-3">
              {[
                ["Plan", "28 tasks"],
                ["Sources", "traceable"],
                ["Review", "human gate"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-lg border border-black/10 bg-white p-2 sm:p-3">
                  <p className="text-[5px] uppercase tracking-wider text-black/40 sm:text-[7px]">{label}</p>
                  <p className="mt-1 text-[7px] font-medium sm:text-[10px]">{value}</p>
                </div>
              ))}
            </div>
            <div className="mt-2.5 rounded-lg border border-black/10 bg-white p-2.5 sm:mt-4 sm:p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-[6px] font-semibold sm:text-[9px]">Extract → review → commit</span>
                <span className="text-[5px] text-black/35 sm:text-[7px]">SOURCE PRESERVED</span>
              </div>
              <div className="grid grid-cols-4 gap-1 sm:gap-2">
                {["INGEST", "PARSE", "REVIEW", "PUBLISH"].map((step, index) => (
                  <div key={step}>
                    <div className={`h-1.5 rounded-full ${index < 3 ? "bg-[#ef6a42]" : "bg-[#ded9ca]"}`} />
                    <p className="mt-1 text-[4px] text-black/35 sm:text-[6px]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProteinPalVisual() {
  return (
    <div
      aria-label="Abstract representation of the Protein Pal interface"
      className="relative aspect-[16/11] overflow-hidden rounded-[1.6rem] bg-[#100e1f] p-4 text-white shadow-2xl shadow-black/30 sm:p-6"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(50% 55% at 8% 100%, rgba(99,75,189,.72), transparent 100%), radial-gradient(60% 65% at 100% 100%, rgba(30,135,118,.58), transparent 100%)",
        }}
      />
      <div className="relative flex h-full flex-col rounded-xl border border-white/10 bg-[#171329]/80 p-3 backdrop-blur-sm sm:p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-5 w-8 rounded-full bg-[#ff6a13] sm:h-7 sm:w-11" />
            <span className="text-[9px] font-semibold sm:text-sm">Protein Pal</span>
          </div>
          <span className="rounded-full border border-white/15 px-2 py-1 text-[5px] text-white/55 sm:text-[7px]">
            AUDITABLE CALCULATION
          </span>
        </div>
        <div className="mt-4 grid min-h-0 grow grid-cols-[42%_1fr] gap-2 sm:mt-7 sm:gap-4">
          <div className="rounded-lg border border-white/10 bg-white/[0.055] p-2.5 sm:p-4">
            <p className="text-[5px] uppercase tracking-[0.16em] text-white/45 sm:text-[7px]">Formula</p>
            <p className="mt-1 text-[9px] font-medium sm:text-sm">Plant protein blend</p>
            <div className="mt-3 space-y-1.5 sm:mt-5 sm:space-y-2.5">
              {[68, 52, 42, 31].map((width, index) => (
                <div key={width} className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[#ff6a13]/80" />
                  <span className="h-1.5 rounded-full bg-white/15" style={{ width: `${width}%` }} />
                  <span className="ml-auto text-[5px] text-white/35 sm:text-[7px]">{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-rows-[auto_1fr] gap-2 sm:gap-4">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              <div className="rounded-lg bg-[#ff6a13] p-2.5 text-[#171329] sm:p-4">
                <p className="text-[5px] uppercase tracking-wider opacity-60 sm:text-[7px]">Protein quality</p>
                <p className="mt-1 font-mono text-sm font-semibold sm:text-2xl">RULED</p>
              </div>
              <div className="rounded-lg bg-[#efe3bb] p-2.5 text-[#171329] sm:p-4">
                <p className="text-[5px] uppercase tracking-wider opacity-60 sm:text-[7px]">Nutrition</p>
                <p className="mt-1 font-mono text-sm font-semibold sm:text-2xl">TRACED</p>
              </div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.055] p-2.5 sm:p-4">
              <div className="flex h-full items-end gap-1 sm:gap-2">
                {[38, 61, 46, 74, 56, 86, 66].map((height, index) => (
                  <div
                    key={`${height}-${index}`}
                    className="grow rounded-t-sm bg-gradient-to-t from-[#7562d3] to-[#ff8b5c]"
                    style={{ height: `${height}%`, opacity: 0.7 + index * 0.035 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full bg-[#17243e] text-[#efdfb4]">
      <a
        href="#work"
        className="sr-only z-50 rounded-full bg-[#efdfb4] px-4 py-2 text-[#17243e] focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to work
      </a>

      <section id="top" className="relative min-h-svh overflow-hidden" style={{ background: HERO_GRADIENT }}>
        <GrainOverlay strong />

        <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 py-7 sm:px-12 sm:py-9">
          <a
            href="#top"
            aria-label="Meagan McKeever, back to top"
            className="font-display text-lg leading-none tracking-[0.15em]"
          >
            MM
          </a>
          <nav aria-label="Primary" className="font-body flex items-center gap-5 text-[10px] tracking-[0.18em] sm:gap-10 sm:text-[12px] sm:tracking-[0.28em]">
            <a className="opacity-75 transition-opacity hover:opacity-100" href="#work">
              WORK
            </a>
            <a className="opacity-75 transition-opacity hover:opacity-100" href="#about">
              ABOUT
            </a>
            <a className="opacity-75 transition-opacity hover:opacity-100" href="#contact">
              CONTACT
            </a>
          </nav>
        </header>

        <div className="relative z-20 flex min-h-svh flex-col justify-center px-6 pb-28 pt-32 sm:px-12">
          <p className="font-body mb-5 text-[10px] uppercase tracking-[0.26em] text-[#efdfb4]/65 sm:text-xs">
            Scientific AI · Digital R&amp;D · Food systems
          </p>
          <h1
            className="font-display uppercase leading-[0.94]"
            style={{
              color: CREAM,
              fontSize: "clamp(3.35rem, 8.7vw, 8.9rem)",
              letterSpacing: "0.005em",
            }}
          >
            Meagan
            <br />
            McKeever
          </h1>
          <p className="font-body mt-8 max-w-[42rem] text-[17px] leading-[1.62] text-[#efdfb4]/85 sm:mt-10 sm:text-xl">
            Food scientist, applied AI builder, and digital R&amp;D lead. I turn complex
            scientific work into deployed products, evidence-linked systems, and infrastructure
            that teams can actually use.
          </p>
        </div>

        <div className="font-body absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-6 pb-9 text-[9px] tracking-[0.24em] text-[#efdfb4]/55 sm:px-12 sm:text-[11px] sm:tracking-[0.3em]">
          <span>NETHERLANDS · EMEA</span>
          <a href="#work" className="hidden transition-colors hover:text-[#efdfb4] sm:inline">
            SELECTED WORK ↓
          </a>
        </div>
      </section>

      <main>
        <section id="work" className="relative overflow-hidden bg-[#1b2946]">
          <GrainOverlay />
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32">
            <div className="grid gap-6 border-b border-[#efdfb4]/20 pb-12 lg:grid-cols-[1fr_1fr] lg:items-end">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#efdfb4]/55">
                  Selected work
                </p>
                <h2 className="font-display mt-4 max-w-2xl text-4xl uppercase leading-[1.02] sm:text-6xl">
                  Scientific software, in use.
                </h2>
              </div>
              <p className="font-body max-w-xl text-base leading-7 text-[#efdfb4]/68 lg:justify-self-end">
                I build at the seam between a domain, a model, and the people who have to trust
                the output. The system is not finished when the demo works; it is finished when
                the evidence, workflow, and deployment work too.
              </p>
            </div>

            <article id="building-buddy" className="grid gap-12 border-b border-[#efdfb4]/20 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <div>
                <div className="font-body flex items-center gap-4 text-[10px] tracking-[0.2em] text-[#f3a99c]">
                  <span>01</span>
                  <span className="h-px w-8 bg-current" />
                  <span>PRIVATE R&amp;D SYSTEM · WORKING POC</span>
                </div>
                <h3 className="font-display mt-6 text-4xl sm:text-6xl">Building Buddy</h3>
                <p className="font-body mt-5 text-xl leading-8 text-[#efdfb4]/88 sm:text-2xl">
                  Project command, document extraction, and cross-border scientific collaboration
                  in one system.
                </p>
                <p className="font-body mt-5 max-w-xl text-[15px] leading-7 text-[#efdfb4]/62 sm:text-base">
                  I designed and built Building Buddy for a small Netherlands–Korea R&amp;D team.
                  It connects tasks, dependencies, milestones, budgets, risks, source files,
                  structured extraction, human review, collaborative notes, and bilingual
                  workflows—so project status and scientific evidence stop living in separate
                  worlds.
                </p>
                <div className="font-body mt-8 flex flex-wrap gap-2 text-[#efdfb4]/75">
                  <Tag>Next.js</Tag>
                  <Tag>Supabase</Tag>
                  <Tag>Extraction pipeline</Tag>
                  <Tag>Project management</Tag>
                  <Tag>EN / KR</Tag>
                  <Tag>E2E tested</Tag>
                </div>
                <p className="font-body mt-8 text-[10px] uppercase tracking-[0.2em] text-[#efdfb4]/45">
                  Password-protected · client data not shown
                </p>
              </div>
              <BuildingBuddyVisual />
            </article>

            <article id="protein-pal" className="grid gap-12 border-b border-[#efdfb4]/20 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
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
                </p>
                <div className="font-body mt-8 flex flex-wrap gap-2 text-[#efdfb4]/75">
                  <Tag>React</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Supabase</Tag>
                  <Tag>Vercel</Tag>
                  <Tag>Auditable rules</Tag>
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

        <section id="about" className="relative overflow-hidden bg-[#f1e4c2] text-[#17243e]">
          <GrainOverlay />
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-12 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <div>
                <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#17243e]/55">About</p>
                <h2 className="font-display mt-4 text-4xl uppercase leading-[1.03] sm:text-6xl">
                  I did not leave science for software.
                </h2>
              </div>
              <div className="font-body space-y-6 text-lg leading-8 text-[#17243e]/76">
                <p>
                  I learned to build because I kept finding important R&amp;D problems that
                  available tools did not solve. Sixteen years in food science—from bench work
                  and scale-up to manufacturing, portfolios, and commercial decisions—taught me
                  what a system must preserve, what a model cannot invent, and what evidence a
                  scientist needs before acting.
                </p>
                <p>
                  Now I work end to end: define the problem, model the scientific truth, design
                  the architecture, build and test the product, make the business case, and fight
                  through the less glamorous identity, endpoint, network, security, and deployment
                  decisions required to put it into real hands.
                </p>
                <p className="text-sm text-[#17243e]/55">
                  BSc Food Science, Cornell University · Based in the Netherlands · Working across
                  European and Korean teams
                </p>
              </div>
            </div>

            <div className="mt-20 grid border-l border-t border-[#17243e]/20 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["16", "years in science & innovation"],
                ["$13M", "annualized product platform"],
                ["−50%", "manufacturing cost"],
                ["$1M", "annual raw-material savings"],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-r border-[#17243e]/20 p-7 sm:p-9">
                  <p className="font-display text-4xl sm:text-5xl">{value}</p>
                  <p className="font-body mt-3 text-[10px] uppercase tracking-[0.15em] text-[#17243e]/50">
                    {label}
                  </p>
                </div>
              ))}
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
              Let&apos;s make difficult science usable.
            </h2>
          </div>
          <div className="mt-20 flex flex-col gap-8 border-t border-[#efdfb4]/30 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div className="font-body flex flex-wrap gap-x-8 gap-y-4 text-xs tracking-[0.16em]">
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
