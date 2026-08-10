# Meagan McKeever portfolio

Independent portfolio for Meagan McKeever's scientific AI, digital R&D, and
applied software work.

## Status

The visual system, portfolio copy pass, and local quality checks are complete.
The project is awaiting Meagan's review and is not deployed yet.

The project intentionally uses synthetic interface illustrations for private
work. Employer documents, colleague names, supplier information, formulas, and
authenticated application screens do not belong in this repository.

## Image assets

- `building-buddy-synthetic-gantt.png` preserves the real product structure but
  replaces employer, colleague, product, and project information with synthetic
  portfolio data. The image itself labels the data as synthetic.
- `combi-oven-thermal-reconstruction.png` is a representative reconstruction of
  the described physical system. It is not original CFD or solver output and is
  labelled accordingly on the site.
- `cornell-seal-white.svg` is an unaltered official Cornell University asset
  sourced from the Cornell CALS website. Cornell's marks remain the property of
  Cornell University and are not covered by this repository's MIT license.

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Checks

```bash
npm run lint
npm run build
npm audit --audit-level=high
```

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- self-hosted display fonts
- Vercel Analytics

## Source project

This is a standalone repository seeded from the approved thermal visual system
originally explored in whatsoRAG. The whatsoRAG product remains a separate
repository and deployment.
