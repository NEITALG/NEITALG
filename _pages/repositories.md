---
layout: page
permalink: /software/
title: Software
description: Open-source software developed as part of the NEITALG project.
nav: true
nav_order: 3
_styles: >
  .repo-card {
    border: 1px solid rgba(128, 128, 128, 0.35);
    border-radius: 10px;
    padding: 20px 24px;
    max-width: 420px;
    transition: box-shadow 0.25s, border-color 0.25s;
    text-decoration: none;
    display: block;
    color: inherit;
  }
  .repo-card:hover {
    border-color: rgba(128, 128, 128, 0.65);
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
    text-decoration: none;
    color: inherit;
  }
  .repo-card-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 1rem;
  }
  .repo-card-header svg { flex-shrink: 0; opacity: 0.7; }
  .repo-card-desc {
    font-size: 0.875rem;
    opacity: 0.75;
    margin-bottom: 14px;
    line-height: 1.5;
  }
  .repo-card-meta {
    display: flex;
    gap: 16px;
    font-size: 0.8rem;
    opacity: 0.6;
    align-items: center;
  }
  .repo-lang-dot {
    display: inline-block;
    width: 10px; height: 10px;
    border-radius: 50%;
    background: #3572A5;
    margin-right: 4px;
    vertical-align: middle;
  }
---

{% include cbo_canvas.html %}

<div class="repositories d-flex flex-wrap gap-3 mt-3">

  <a class="repo-card" href="https://github.com/PdIPS/CBXpy" target="_blank" rel="noopener">
    <div class="repo-card-header">
      <svg height="18" viewBox="0 0 16 16" width="18" fill="currentColor">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
      </svg>
      PdIPS / CBXpy
    </div>
    <div class="repo-card-desc">
      A Python package implementing consensus-based particle dynamics for optimization and sampling,
      including CBO, CBS, and related algorithms developed within the NEITALG project.
    </div>
    <div class="repo-card-meta">
      <span><span class="repo-lang-dot"></span>Python</span>
    </div>
  </a>

  <a class="repo-card" href="https://github.com/echnen/CBO-with-boundaries" target="_blank" rel="noopener">
    <div class="repo-card-header">
      <svg height="18" viewBox="0 0 16 16" width="18" fill="currentColor">
        <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"/>
      </svg>
      echnen / CBO-with-boundaries
    </div>
    <div class="repo-card-desc">
      CBO method on domains with boundaries, with application to a p-Allen-Cahn problem.
      Experimental code reproducing numerical experiments for constrained
      consensus-based optimization.
    </div>
    <div class="repo-card-meta">
      <span><span class="repo-lang-dot"></span>Python</span>
    </div>
  </a>

</div>
