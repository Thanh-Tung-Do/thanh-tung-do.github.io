---
title: "Client Health Score Model"
organisation: "PepsiCo"
category: "analytics-visualization"
description: "A predictive scoring system built to proactively identify at-risk key accounts during COVID-19, enabling account managers to intervene before contracts were lost and achieving 100% Key Account retention across the portfolio."
tags: ["Python", "Scikit-learn", "pandas", "Excel", "Power BI", "Predictive Modelling"]
featured: true
order: 6
---

## The Challenge

During COVID-19, PepsiCo's national key account portfolio faced significant instability. Traditional lagging indicators (complaints, late payments) only surfaced problems after damage was already done. The commercial team needed a way to identify which accounts were deteriorating before they became urgent.

The problem had three layers:

- **Sales trajectory:** Which accounts were declining faster than the broader market?
- **Engagement signals:** Which account managers had reduced contact frequency with their clients?
- **Contract risk:** Which accounts had upcoming renewals combined with poor recent performance?

No single metric answered all three. A composite approach was needed.

## The Solution

I built a Client Health Score model that aggregated signals across three dimensions into a single 0-100 score per account, updated weekly.

**Data sources:**
- Sales transaction data (volume, value, YOY trends)
- Account manager activity logs (visit frequency, call records)
- Contract metadata (renewal dates, terms, negotiation history)

**Modelling approach:**

Each dimension was scored independently using a combination of rule-based thresholds and percentile ranking within the portfolio. The three scores were weighted and combined. Accounts below a defined threshold were flagged as "at risk" and surfaced to account managers in a Power BI dashboard.

The model was validated against the previous year's churn events. Retrospectively, it would have flagged 87% of churned accounts at least six weeks before the contract was lost.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">100%</span>
    <span class="result-label">Key Account retention during COVID-19</span>
  </div>
  <div class="result-card">
    <span class="result-number">87%</span>
    <span class="result-label">Retrospective churn detection accuracy</span>
  </div>
  <div class="result-card">
    <span class="result-number">6 wks</span>
    <span class="result-label">Average early warning lead time</span>
  </div>
</div>

## Implementation

The model ran as a Python script scheduled weekly, writing outputs to a shared Excel file that fed the Power BI dashboard. Given PepsiCo's existing infrastructure, this approach had zero setup cost and was immediately usable by the commercial team.

Account managers received a ranked list of their accounts by health score each Monday morning, with the prior week's score for comparison. Accounts that dropped by more than a defined threshold triggered an automatic alert.

## Outcome

The commercial team achieved 100% Key Account retention through COVID-19. The model did not cause this outcome directly, but it gave account managers the visibility to prioritise their attention where it was most needed during a period of constrained capacity.

The approach was later documented as a case study for PepsiCo's APAC commercial analytics team.
