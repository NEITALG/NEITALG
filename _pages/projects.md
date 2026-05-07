---
layout: page
title: Research
permalink: /research/
description: Research themes and work packages of the NEITALG project.
nav: true
nav_order: 2
display_categories: [optimization, control]
horizontal: false
---

**Objective**

Iterative algorithms (IA) stand as the very backbone of scientific computing. Traditional IA rely on convex optimization to guide the search for optima, severely limiting their scope to local solutions. Consequently, nonconvex problems are regarded as the ultimate challenge of global optimization. Solving them with convergence guarantees will lead to numerous scientific discoveries, such as finding new medications through optimization of the properties of molecules or enhancing materials for solar cells to accelerate advances in green technologies.
The first goal of NEITALG is to design new, efficient, and scalable iterative algorithms that can provably solve relevant nonsmooth nonconvex optimizations. This will allow us to overcome locality barriers and open up an entirely new field in scientific computing.
Furthermore, parametric IA, which are tailored to training data —making them learnable IA— are currently driving remarkable advances in computing and machine learning. However, most of these systems lack rigorous guarantees of performance or interpretability of results.
The second goal of NEITALG is to formulate new learnable IA with focus on interpretability and generalization guarantees. This will greatly advance the development of safer and more reliable technologies based on machine learning.
The key approach to achieve both goals involves the systematic study of the largely unexplored mathematical field connecting iterative algorithms and nonlinear evolutions (NE). NEITALG will
1. Explore the principles for which the analysis of NE provides insights into the convergence of an IA;
2. Generate new IA from nonstandard NE to overcome traditional limitations (e.g. locality, lack of interpretability);
3. Provide mean-field optimal control theories for new learnable IA;
4. Obtain guarantees for learnable IA on metric spaces;
5. Develop code and conduct numerical experiments for novel solvers for nonlinear ODE/PDE and new methods for 3D computer vision.


<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
