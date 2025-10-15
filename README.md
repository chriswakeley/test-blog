# Stress Burner Site (Jekyll)

This site uses Jekyll for static generation and Tailwind + DaisyUI for utilities/components.

## Local development

1. Install Ruby deps
   - `bundle install`
2. Install Node deps
   - `npm install`
3. Build Tailwind once (or run `--watch` locally if preferred)
   - `npm run build:css`
4. Serve the site
   - `bundle exec jekyll serve`

CI builds Tailwind and then runs the Jekyll build for GitHub Pages.
