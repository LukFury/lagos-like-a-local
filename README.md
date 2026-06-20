# Lagos Recommendations Site (Step 0)

Mobile-first recommendations page for tourists, opened via QR code right after kayak tours. No tip jar, login, or paid placements yet — see `NOTES.md` for the full phased business plan and `DESIGN.md` for the design spec this build follows.

## Structure

```
index.html       # all page markup — single scroll page, 5 category sections
css/styles.css    # design tokens (colors/fonts) + all styling, matches DESIGN.md
js/main.js        # sticky chip highlight-on-scroll behavior only
images/           # real recommendation photos go here later (currently using
                  # placeholder images from picsum.photos)
NOTES.md          # business vision, phases, revenue model
DESIGN.md         # design spec (palette, typography, layout, components)
```

## Status

Placeholder content throughout (card text, photos, links). Real recommendations
get swapped in once gathered — see task list. No build step: open `index.html`
directly, or serve the folder for GitHub Pages.
