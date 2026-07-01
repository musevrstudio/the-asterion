# Media

Do not link raw desktop files directly from site components.

Import approved or candidate media through:

```powershell
npm.cmd run media:import -- --project osman-hamdi-bey --slot hero --input "C:\path\to\source.jpg" --altEn "..." --altTr "..." --credit "..." --source "..."
```

The import script converts images to web format, writes them under `public/media/projects`, and updates `src/content/media-imports.json`.

Hero imports are rejected if the source image is too small. This prevents low-resolution artwork references from being used as oversized hero images.

Project media uses this structure:

```text
public/media/projects/{project}/master
public/media/projects/{project}/generated
```

Edit only files in `master`. Files in `generated` are recreated by the import scripts and should not be hand-edited.
