# Foodplanner design notes

- Keep the visual system dark, restrained, and content-first: near-black backgrounds, thin borders, muted secondary text, and Inter typography.
- Design mobile-first. On recipe pages, ingredients and scaling controls must appear before cooking steps on narrow screens.
- Keep recipe content in `src/lib/recipes.ts`; pages and cards should render from that source rather than duplicating markup.
- Every recipe must include a dedicated banner image and descriptive alt text in `src/lib/recipes.ts`; store recipe images in `public/images/recipes`.
- Every recipe and food type should have a stable, shareable route.
- Food type filters describe the main protein or ingredient form, such as Boneless chicken or Ground meat.
- Personal cooking notes are stored per recipe in versioned browser localStorage keys.
- Interactive controls must use comfortable touch targets and visible keyboard focus states.
- The production build is a static export hosted at the `/Foodplanner` GitHub Pages base path.
