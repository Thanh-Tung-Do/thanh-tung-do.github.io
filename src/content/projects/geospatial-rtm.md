---
title: "Geospatial Route-to-Market Optimisation"
organisation: "British American Tobacco"
category: "analytics-visualization"
description: "A geospatial analytics project that audited national field territory allocation, identified distribution inefficiencies invisible to conventional reporting, and redesigned routes to deliver a 16% reduction in Route-to-Market costs."
tags: ["Python", "GeoPandas", "pandas", "Matplotlib", "K-Means Clustering", "Geospatial Analysis"]
featured: true
order: 7
---

## The Problem

BAT's national field force was organised into territories that had been drawn years earlier and updated only informally. No one had done a quantitative audit of whether the territory boundaries made geographic sense.

The symptoms were visible but hard to diagnose: some field reps consistently reported low outlet coverage, while others reported high visit rates but poor sales density. The conventional data did not reveal why, because it was organised by territory, not by geography.

## The Approach

I obtained outlet GPS coordinates for approximately 300,000 retail points across the national network and mapped them against field rep territories and travel routes.

**Step 1: Visualise the status quo**

Using GeoPandas and Matplotlib, I plotted every outlet against its assigned territory and rep. This immediately revealed the core issue: territories were drawn by administrative boundaries, not by drive-time proximity. Some reps were crossing each other's paths daily.

**Step 2: Identify inefficiencies**

I calculated:
- Distance from each rep's home base to their furthest assigned outlets
- Drive-time estimates using road network data
- Outlet density per territory versus visit frequency

Several territories had poor outlet density but very high travel burden. Others had dense outlet clusters that a single rep could not physically cover in a standard week.

**Step 3: Optimise via clustering**

I used K-Means clustering to regroup outlets into territories based on geographic proximity and density, constrained by a maximum weekly travel distance per rep. The resulting territories were more compact, with better density and lower total travel.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">16%</span>
    <span class="result-label">Reduction in national RTM costs</span>
  </div>
  <div class="result-card">
    <span class="result-number">300K+</span>
    <span class="result-label">Retail outlets mapped and analysed</span>
  </div>
  <div class="result-card">
    <span class="result-number">6 wks</span>
    <span class="result-label">From analysis to leadership sign-off</span>
  </div>
</div>

## Why It Worked

Visualisation was the most important deliverable. The maps made the problem self-evident in a way that no table of statistics could have achieved. Leadership approved the territory redesign within a week of seeing the side-by-side comparison of old versus optimised territories.

The project also demonstrated that the inefficiency was structural, not behavioural. This mattered politically: it reframed the issue from "some reps are underperforming" to "the territory design is costing us money."

## Technical Notes

- Python, GeoPandas, Shapely for spatial operations
- Matplotlib for map visualisation
- K-Means via Scikit-learn with a custom distance-weighted objective
- All analysis run locally; outputs delivered as static map images and an Excel summary
