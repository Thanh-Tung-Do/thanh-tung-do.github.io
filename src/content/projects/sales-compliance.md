---
title: "Sales Compliance Detector"
organisation: "British American Tobacco"
category: "data-science-ml"
description: "An unsupervised ML pipeline combining K-Means clustering with statistical outlier detection to identify non-compliant sales behaviour across a 300,000-outlet retail network, protecting incentive payouts and strengthening reporting integrity."
tags: ["Python", "K-Means", "Scikit-learn", "pandas", "Power BI", "Anomaly Detection"]
featured: true
order: 9
---

## Background

BAT's field incentive programme paid performance bonuses to reps based on outlet visit counts and product placement compliance. The self-reported nature of the data created an obvious integrity risk: inflated visit counts or falsified placement records would trigger payouts that were not earned.

Auditing manually was impractical at scale across 300,000 outlets. A data-driven approach was needed.

## The Problem

The challenge was that there was no labelled dataset of confirmed fraud. Traditional supervised classification was not viable. The approach needed to be unsupervised, identifying statistical patterns that were inconsistent with legitimate field behaviour.

Two types of anomaly were hypothesised:

1. **Visit inflation:** Reps logging visits to outlets at implausible speeds or in geographically impossible sequences
2. **Placement fabrication:** Compliance rates for a rep's outlets that were statistically inconsistent with the surrounding territory

## The Approach

**Phase 1: Behavioural clustering**

I grouped reps into clusters based on their behavioural patterns: visit frequency, time-per-outlet, travel speed between consecutive visits, and geographic spread. Within each cluster, I identified outliers using z-score thresholds on the key behavioural metrics.

Reps with z-scores beyond the threshold on multiple dimensions were flagged for review.

**Phase 2: Placement anomaly detection**

For placement compliance, I used a spatial approach. For each outlet, I compared its reported compliance rate against a rolling average of nearby outlets in the same territory. Outlets with compliance rates significantly above their spatial neighbours (adjusted for outlet size and channel type) were flagged as potentially fabricated.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">300K+</span>
    <span class="result-label">Outlets analysed</span>
  </div>
  <div class="result-card">
    <span class="result-number">12%</span>
    <span class="result-label">Of flagged records confirmed non-compliant on audit</span>
  </div>
  <div class="result-card">
    <span class="result-number">2</span>
    <span class="result-label">Detection approaches combined</span>
  </div>
</div>

## Outcome

The model was deployed as a monthly pipeline feeding a Power BI dashboard. Field managers used it to prioritise audit visits. A subset of flagged reps were reviewed, and a proportion of flagged records were confirmed as non-compliant on manual audit.

The primary value was deterrence. After the programme was announced internally, self-reported anomaly rates declined in subsequent months, suggesting the visibility itself changed behaviour.

## Lessons

Unsupervised anomaly detection in HR-sensitive contexts requires careful threshold calibration. Setting thresholds too aggressively produces too many false positives, erodes trust in the tool, and creates management overhead. I used conservative thresholds and flagged for review rather than automated action, which proved to be the right call for this environment.
