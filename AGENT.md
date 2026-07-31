# Editing this site

This is a standalone Vite + Tailwind site for one local business.

- Edit business copy, locale, contact details, section content, palette, and
  fonts in `site.config.json`. Keep that file the single content source.
- Components map directly to page sections:
  `Header`, `Hero`, `About`, `Services`, `Gallery`, `Hours`, `Contact`, and
  `Footer` in `src/components/`.
- Use `src/styles.css` for presentation and `src/types.ts` when the config
  shape changes. Preserve semantic landmarks, visible focus states, and useful
  alternative text.
- Design mobile-first and check narrow screens as well as desktop.
- Run `pnpm build` and keep it green before every commit.
- Never add credentials, tokens, customer private data, or other secrets.
- Keep dependencies minimal. Flag and explain every dependency change before
  making it.
