# Project Instructions

## Bilingual content

This is a bilingual portfolio website. English and French content must stay synchronized in every change.

- Treat the English page content as the source version and the French page content as its required mirror.
- Whenever English user-facing text is added, removed, or changed, update the corresponding French translation in the same change.
- Whenever a new translatable HTML element is added, give it a stable `data-i18n` key and add the matching French entry to `frenchTranslations` in `script.js`.
- Do not leave new or changed recruiter-facing content in English-only form. This includes headings, paragraphs, buttons, labels, experience bullets, project descriptions, loading states, empty states, error messages, and accessibility text.
- Keep repeated translation keys intentional: use one key when the same wording is shared, and create separate keys when the translations need different wording by context.
- For dynamic project content, provide both English and French title/description values and ensure rerendering works when switching in either direction.
- When changing a translation key, update both the English source text and the French translation, and verify that switching `EN -> FR -> EN` restores the correct text.
- Keep `document.documentElement.lang` synchronized with the selected language.
- Preserve the existing no-build static-site approach. Do not add a translation framework unless the project requirements change substantially.

## Validation

After bilingual content changes:

- Run `node --check script.js`.
- Run `git diff --check`.
- Check that the edited HTML, JavaScript, and CSS files have no diagnostics.
- Inspect both language states when practical, including mobile layout for longer French text.
