# NEITALG Quick Start Checklist

## ✅ Configuration Complete

Your `_config.yml` has been updated with:
- **Site Title**: NEITALG ERC Project  
- **URL**: `https://NEITALG.github.io`  
- **Base Path**: `/neitalg`  
- **All Features Enabled**: Publications, Projects, News, Dark Mode, Image Optimization

## 🚀 To Get Your Site Running

### Option A: Docker (Recommended - No Local Setup Needed)

```bash
docker compose pull
docker compose up
# Open http://localhost:8080 in your browser
# Edit files in the project → live reload on save
# Stop with Ctrl+C when done
```

### Option B: Ruby/Bundle (If Docker unavailable)

```bash
bundle install
pip3 install --upgrade nbconvert
bundle exec jekyll serve --port 4000
# Open http://localhost:4000
```

## 📝 Content to Customize (In Priority Order)

### 1. **Bibliography** (Publications Page)
   - **File**: [`_bibliography/papers.bib`](_bibliography/papers.bib)
   - **Add**: NEITALG research papers in BibTeX format
   - **Example**:
     ```bibtex
     @article{smith2024algorithm,
       title={Novel Algorithm for AI},
       author={Smith, Jane and Others},
       journal={Nature},
       year={2024},
       pdf=/assets/pdf/paper.pdf,
       code=https://github.com/repo
     }
     ```

### 2. **Team & Authors**
   - **File**: [`_data/coauthors.yml`](_data/coauthors.yml)
   - **Add**: Names and profiles of NEITALG team members
   - **Used in**: Publication author links

### 3. **Projects & Results**
   - **Directory**: [`_projects/`](_projects/)
   - **Create**: One markdown file per project
   - **Template**:
     ```yaml
     ---
     layout: page
     title: "Project Name"
     description: "One-line summary"
     img: /assets/img/project-pic.jpg
     importance: 1
     category: research
     ---
     
     Project description and outcomes...
     ```

### 4. **About/Overview Page**
   - **File**: [`_pages/about.md`](_pages/about.md)
   - **Update**: NEITALG mission, goals, and description
   - **Shows**: On homepage and "About" link

### 5. **Contact Information**
   - **File**: [`_data/socials.yml`](_data/socials.yml)
   - **Add**: 
     ```yaml
     email: contact@neitalg.org
     cv_pdf: /assets/pdf/neitalg-overview.pdf
     ```

### 6. **Site Logo/Images**
   - **Directory**: [`assets/img/`](assets/img/)
   - **Add**: Project logo, header image, project thumbnails
   - **Update in _config.yml**:
     ```yaml
     icon: 🧬  # or set icon: /assets/img/logo.png
     ```

## 🌐 Pages That Will Auto-Generate

These pages are **automatically created** from your content:

- **Publications** ([`_pages/publications.md`](_pages/publications.md)) ← From [`_bibliography/papers.bib`](_bibliography/papers.bib)
- **Projects** ([`_pages/projects.md`](_pages/projects.md)) ← From [`_projects/`](_projects/) markdown files
- **News** ([`_pages/news.md`](_pages/news.md)) ← From [`_news/`](_news/) entries
- **CV** ([`_pages/cv.md`](_pages/cv.md)) ← From [`_data/cv.yml`](_data/cv.yml)

## 🔧 Before Deploying to GitHub

```bash
# 1. Format code (required by CI/CD)
npm install --save-dev prettier @shopify/prettier-plugin-liquid
npx prettier . --write

# 2. Test build locally
docker compose up
# Visit http://localhost:8080 and verify everything looks good

# 3. Commit & push
git add .
git commit -m "Setup NEITALG project site"
git push

# 4. Enable GitHub Pages in Settings → Pages
# Select: Deploy from a branch → gh-pages
```

## 📖 More Documentation

| Topic | File |
|-------|------|
| Full Setup Guide | [NEITALG_SETUP.md](NEITALG_SETUP.md) |
| Customization Options | [CUSTOMIZE.md](CUSTOMIZE.md) |
| Troubleshooting | [TROUBLESHOOTING.md](TROUBLESHOOTING.md) |
| Bibliography & BibTeX | [.github/instructions/bibtex-bibliography.instructions.md](.github/instructions/bibtex-bibliography.instructions.md) |
| Markdown Content | [.github/instructions/markdown-content.instructions.md](.github/instructions/markdown-content.instructions.md) |

## ⚡ Quick Tips

1. **Test locally first** – Always run `docker compose up` before pushing
2. **Keep BibTeX clean** – Use consistent formatting; al-folio auto-generates publication pages
3. **Use branches** – Create branches for testing; keep main/master clean
4. **Images matter** – Add project thumbnails in BibTeX with `preview: /assets/img/pic.jpg` keyword
5. **Mobile-friendly** – The theme is responsive; test on mobile before deploying

---

**Next Step**: Start by updating `_pages/about.md` with NEITALG's mission, then add your publications to `_bibliography/papers.bib`. Then run `docker compose up` to see it all come together!
