# The Asterion

Standalone bilingual Next.js website for **THE ASTERION**.

## Development

```bash
npm install
npm run dev
```

Local preview:

```text
http://localhost:3000
```

## Build Checks

```bash
npm run media:check
npm run lint
npm run build
```

## Source Media Archive

Raw source media is treated as an external archive and must not be linked directly from website components.

Local source root:

```text
ASTERION_SOURCE_DIR=C:\Users\MUSE VR\Desktop\Asterion
```

Copy `.env.example` to `.env.local` if the source archive is in a different location.

## Controlled Media Import

Import selected local media into the repository-controlled public media structure:

```bash
npm run media:import:asterion
```

The script:

- reads `ASTERION_SOURCE_DIR`,
- verifies expected files,
- never changes source files,
- writes one editable master file to `public/media/projects/{project}/master`,
- writes web-ready derivatives to `public/media/projects/{project}/generated`,
- updates `src/content/media-imports.json`,
- preserves source filenames in metadata,
- avoids direct Windows paths in the production website.

Manual image editing should happen only in the `master` folders. After editing a master image, rerun:

```bash
npm run media:import:asterion
```

The generated images are disposable outputs and can be recreated from the master/source workflow.

Generic single-file import is also available:

```bash
npm run media:import -- --project osman-hamdi-bey --slot hero --input "C:\path\to\source.jpg" --altEn "..." --altTr "..."
```

## Content Notes

Public project facts must remain verified. Uncertain dates, venues, credits, collaborators and production details belong in internal verification notes or `src/content/editorial-decisions.md`, not in public copy.
