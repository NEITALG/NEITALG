---
layout: page
permalink: /publications/
title: Publications
description: Publications of the NEITALG project, sorted by year.
nav: true
nav_order: 4
_styles: >
  .container { max-width: 1100px; }
  h2.bibliography { text-align: left; }
---

{% include bib_search.liquid %}

<div class="publications">

<h2>Publications</h2>

{% bibliography --file papers %}

<h2>Preprints</h2>

{% bibliography --file preprints %}

</div>
