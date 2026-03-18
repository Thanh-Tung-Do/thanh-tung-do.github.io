---
title: "Learning Rate & Optimizer Explorer"
category: "side-projects"
description: "An interactive classroom tool that lets students navigate a real loss surface in 1D and 3D, watching SGD, Momentum, RMSProp, and Adam converge — or fail to — as they tune the learning rate and schedule in real time. Built as a teaching aid for UTS data science students."
tags: ["JavaScript", "Three.js", "Data Visualisation", "Teaching", "Optimisation", "Deep Learning"]
live: "/tools/optimizer-explorer.html"
featured: true
order: 8
---

## Why I Built This

Teaching optimisation algorithms from slides does not work. Students can memorise the Adam update rule and still have no intuition for why learning rate matters, why SGD zigzags across a narrow valley, or what "getting stuck in a local minimum" actually looks like.

I built this tool for my data science students at UTS so they could discover these behaviours themselves rather than accept them on authority. The goal was a single file that runs in any browser, requires no installation, and is fast enough to demonstrate live in a lecture.

## What It Does

The tool places four optimisers on the same loss surface and lets you watch them navigate it simultaneously:

**SGD** — the purest form. Direct gradient steps, no memory. You can watch it oscillate across narrow valleys and slow to a crawl on flat regions.

**Momentum** — accumulates velocity across steps. Accelerates through flat terrain but overshoots at minima. The overshoot is visible and instructive.

**RMSProp** — scales each gradient by a running average of past squared gradients, adapting step size independently along each axis. Handles anisotropic surfaces that defeat SGD.

**Adam** — combines momentum with RMSProp's per-dimension scaling, plus bias correction in the early steps. The most robust default for most problems.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">4</span>
    <span class="result-label">Optimisers compared side by side</span>
  </div>
  <div class="result-card">
    <span class="result-number">4</span>
    <span class="result-label">Learning rate schedules (constant, step, exponential, cosine)</span>
  </div>
  <div class="result-card">
    <span class="result-number">1</span>
    <span class="result-label">Self-contained HTML file, no install required</span>
  </div>
</div>

## The Loss Surfaces

The 1D surface combines a quadratic bowl with three sine waves at different frequencies, creating local minimum traps that catch naive optimisers. Students can see exactly which configurations escape and which do not.

The 3D surface introduces cross-terms that create ridges and saddle points — the features that make 1D analysis misleading. SGD's tendency to zigzag along ridges, which is invisible in 1D, becomes obvious the moment you switch modes.

This is the central teaching point: the difference between optimisers is not apparent on a smooth bowl. It only becomes visible on surfaces with the structural complexity that real networks produce.

## Learning Rate Exploration

A log-scale slider controls the base learning rate. Four preset buttons show the four characteristic regimes:

- **0.02** — conservative, slow but stable
- **0.12** — balanced, reliable convergence
- **0.50** — aggressive, some oscillation
- **1.50** — unstable, visible divergence

Students can also apply a learning rate schedule — step decay, exponential decay, or cosine annealing — and watch both the loss curve and a real-time schedule chart update simultaneously.

## Convergence Detection

The tool distinguishes three outcomes per optimiser: converged to the global minimum, stuck in a local minimum, or diverged. Status cards show step count, current weight values, loss, and effective learning rate at each step.

## Technical Details

Built as a single HTML/CSS/JS file with no framework and no build step. 3D rendering uses Three.js loaded from CDN. Gradients are computed analytically from the closed-form loss functions. All optimiser state (momentum vectors, squared gradient accumulators, bias correction terms) is maintained explicitly so the update rules match what students see in the formula display.
