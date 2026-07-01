# Editorial Decisions

Internal file. Do not render publicly.

## Major Copy Changes

- Primary navigation now uses `Capabilities / Yetkinlikler` instead of `Production / Prodüksiyon` to make the studio offer clearer to commissioners.
- Public copy is written for external decision-makers: museums, curators, producers, cultural institutions, architects, brands, sponsors and project partners.
- Internal launch notes, uncertain claims and founder-facing language have been removed from public-facing text.
- The public positioning test is: The Asterion develops stories, films, museums, exhibitions, immersive environments and interactive systems from research and narrative development through production, technical integration and public presentation.

## Terminology Choices

- English uses `Capabilities`, `Story & Research`, `Museums & Exhibitions`, `Immersive & Interactive`, `Production & Installation`.
- Turkish uses `Yetkinlikler`, `Hikâye ve Araştırma`, `Müze ve Sergi`, `Immersif ve İnteraktif`, `Prodüksiyon ve Kurulum`.
- `Production` remains an internal route key in code for continuity, but the public label and canonical paths are `Capabilities / Yetkinlikler`.
- `Muse Studio` appears only as historical production credit context.

## Media Decisions

- Project media is centralized in `src/content/media.ts`.
- Imported media records are written to `src/content/media-imports.json` and are read by `src/content/media.ts` as controlled overrides.
- Raw desktop files must not be linked directly from public pages or components.
- `npm run media:import` converts source images into web-ready files under `public/media/projects`.
- `npm run media:import:asterion` reads `ASTERION_SOURCE_DIR` and imports selected media from the local Asterion source archive.
- Hero imports are rejected below 1800x1100, preventing low-resolution images such as small Osman Hamdi references from being used as oversized heroes.
- Panoramic principal media may be allowed as `cropMode: "contain"` when the composition would be damaged by a forced hero crop. `beyond_1.jpg` is treated this way.
- `OsmanHamdi3.PNG` is 600x450 and is imported only as contextual/gallery media, preserving its 4:3 composition.
- `npm run media:check` validates approved manifest entries and missing public files.
- Media records support image, video and embed fields; focal point; crop mode; captions; credit; copyright; source and approval status.
- Current NU.D38, Osman Hamdi Bey and Beyond Istanbul visuals are temporary/reference images with `approvalStatus: "pending"`.
- Chef's Slice and Nowhere use placeholders until approved documentation is supplied.
- Image treatment uses restrained grain and duotone. Heavy halftone is intentionally avoided for readability and long-term flexibility.

## Unresolved Factual Questions

- Approved imagery/video for all five public projects.
- Nowhere: year, exhibition title, venue, curator, production scope, film/photo/installation credits.
- Beyond Istanbul: dates, institutions, exhibition/screening details and approved media.
- Chef's Slice: approved documentation, final project credits and media permissions.
- Full list and wording of selected historical references involving Xsolla, Coca-Cola, Turkcell and Heydar Aliyev Center.
- ORTA BlueSkyer NFT: official page verifies MetaDENIMverse / The Blueskyer NFT context; final public collaborator credit and production scope require approval.
- Water Reverie mobile application: credits, dates, public presentation context and release details require confirmation.
- Water Reverie VR film: credits, dates, exhibition/installation context and video material require confirmation.

## Phrases Intentionally Avoided

- cutting-edge
- revolutionary
- game-changing
- unique solutions
- limitless possibilities
- pushing boundaries
- where art meets technology
- unforgettable experiences
- next-generation storytelling
- innovative ecosystem
- future-ready
- world-class
