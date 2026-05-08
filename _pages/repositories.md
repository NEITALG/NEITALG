---
layout: page
permalink: /software/
title: Software
description: Open-source software developed as part of the NEITALG project.
nav: true
nav_order: 3
_styles: >
  .repo {
    border: 1px solid rgba(128, 128, 128, 0.35);
    border-radius: 10px;
    padding: 16px !important;
    transition: box-shadow 0.25s, border-color 0.25s;
  }
  .repo:hover {
    border-color: rgba(128, 128, 128, 0.65);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  }
  .repo img { border-radius: 6px; }
---

{% include cbo_canvas.html %}

{% if site.data.repositories.github_repos %}
<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
