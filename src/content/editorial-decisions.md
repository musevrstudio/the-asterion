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
