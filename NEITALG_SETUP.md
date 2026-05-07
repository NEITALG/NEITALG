# NEITALG Project Site Setup Guide

This document walks you through setting up the al-folio Jekyll template as the official NEITALG ERC project website.

## ✅ Completed Steps

- **_config.yml** updated with NEITALG branding (title, URL structure)
- **Site URL**: `https://NEITALG.github.io/neitalg`

## 📋 Next Steps

### Step 1: Update Site Metadata & Contact Info
Edit `_data/socials.yml` to add NEITALG project contact:

```yaml
email: contact@neitalg.org  # Update with actual email
cv_pdf:  # Remove or set to relevant document
scholar_userid:  # Remove if not needed
rss_icon: true
```

Also update `_config.yml` footer if desired:
```yaml
footer_text: >
  NEITALG is a research program funded by the European Research Council (ERC).
  Hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>.
```

### Step 2: Add Team Members (Optional)
If you want team profiles visible, use `_data/coauthors.yml`:

```yaml
Einstein:
  firstname: Albert
  lastname: Einstein
  url: https://en.wikipedia.org/wiki/Albert_Einstein

Marie Curie:
  firstname: Marie
  lastname: Curie
  url: https://en.wikipedia.org/wiki/Marie_Curie
```

### Step 3: Create Your Publications Bibliography
Update `_bibliography/papers.bib` with NEITALG research publications in BibTeX format:

```bibtex
@article{yourkey2024,
  title={Your Research Title},
  author={You, Author and Others},
  journal={Journal Name},
  year={2024},
  volume={1},
  pages={1--20},
  pdf={/assets/pdf/paper.pdf},
  code={https://github.com/yourrepo}
}
```

**See:** [.github/instructions/bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) for BibTeX custom keywords (pdf, code, preview, doi, etc.)

### Step 4: Add Projects & Results
Create markdown files in `_projects/` directory with frontmatter:

```yaml
---
layout: page
title: "Project Title"
description: "Short description of the project"
img: /assets/img/project-image.jpg
importance: 1  # Higher number = appears first
---

Project description and details go here.
```

**Files:**
- `_projects/` – Project showcases
- `_posts/` – Blog posts and news (if enabled)
- `_pages/` – Static pages (about, publications, teaching, etc.)

### Step 5: Customize Pages
Main content pages are in `_pages/`:

- **about.md** – Project overview and mission
- **publications.md** – Auto-generated from bibliography
- **projects.md** – Project showcase
- **news.md** – Announcements and updates
- **teaching.md** – Courses/training programs (if applicable)

Edit these files to match NEITALG's focus.

### Step 6: Add Project Logo/Images
Place images in `assets/img/`:
- `assets/img/prof_pic.jpg` – Site header icon
- `assets/img/` – Project images and logos

Update the icon in `_config.yml`:
```yaml
icon: 🧬  # Choose an emoji or set: icon: /assets/img/logo.png
```

## 🔨 Local Development & Testing

### Option 1: Docker (Recommended)

```bash
# First time setup
docker compose pull
docker compose up

# Site runs at http://localhost:8080
# Edit files and see changes live (auto-reload enabled)

# When done, stop with Ctrl+C
```

### Option 2: Ruby/Bundle (if Docker unavailable)

```bash
bundle install
pip3 install --upgrade nbconvert
bundle exec jekyll serve --port 4000
# Site at http://localhost:4000
```

## 📝 Content Organization for NEITALG

### Recommended Structure

**For Publications:**
- Add all NEITALG research papers to `_bibliography/papers.bib`
- Publications page auto-generates from bibliography
- Customize with: pdf links, code repositories, custom keywords

**For Team:**
- Add team members to `_data/coauthors.yml`
- Create individual profiles in `_pages/profiles.md`
- Link publications to team members via BibTeX

**For Projects:**
- One markdown file per project in `_projects/`
- Set `importance` value to control display order
- Include images, descriptions, links to outputs

**For News:**
- Create news files in `_news/` for announcements
- Auto-display on news page if enabled
- Use for milestones, new publications, events

## ⚙️ Feature Flags in _config.yml

Ensure these are enabled for NEITALG:

```yaml
# In _config.yml, find and verify:
publications:
  enabled: true

projects:
  enabled: true

news:
  enabled: true

blog:
  enabled: true  # or false if not needed
```

## 🚀 Deployment to GitHub Pages

### When Ready to Deploy:

1. **Format code** (required before commit):
   ```bash
   npm install --save-dev prettier @shopify/prettier-plugin-liquid
   npx prettier . --write
   ```

2. **Test locally** to ensure no build errors:
   ```bash
   docker compose up
   # Visit http://localhost:8080 and verify everything renders
   ```

3. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Setup NEITALG project site"
   git push
   ```

4. **Enable GitHub Pages:**
   - Go to repo settings → Pages
   - Set source to `Deploy from a branch`
   - Select `gh-pages` branch (auto-created by deploy.yml)

5. **Site will be live at:** `https://NEITALG.github.io/neitalg`

## 📖 Important Links

- **Customization Guide:** [CUSTOMIZE.md](CUSTOMIZE.md)
- **Troubleshooting:** [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **BibTeX Reference:** [.github/instructions/bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md)
- **Markdown Content Guide:** [.github/instructions/markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md)
- **YAML Config Guide:** [.github/instructions/yaml-configuration.instructions.md](.github/instructions/yaml-configuration.instructions.md)

## ✨ Tips for NEITALG

1. **Use the `publications.md` page** – It auto-generates a bibliography from your BibTeX with filtering options
2. **Keep BibTeX organized** – Add custom fields like `pdf`, `code`, `preview` to papers
3. **Leverage Liquid templates** – The theme uses [Liquid](https://shopify.github.io/liquid/) for dynamic content
4. **Test before deploying** – Always run `docker compose up` locally first
5. **Use git branches** – Keep `main/master` clean; test changes on branches first

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| "Port 8080 already in use" | Run `docker compose down`, then `docker compose up` |
| CSS/images not loading | Check `url` and `baseurl` in `_config.yml` are correct |
| YAML parse errors | Ensure quotes around values with special chars: `title: "My: Project"` |
| Build fails locally but passes CI | Run `docker compose up --build` to rebuild image |

---

Next: Customize the content files based on NEITALG's specific research and team!
