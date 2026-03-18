---
title: "Power BI Trade Marketing Suite"
organisation: "British American Tobacco"
category: "analytics-visualization"
description: "Design and automation of a multi-report Power BI suite that replaced fragmented manual reporting across 300,000 retail outlets, resolving longstanding data discrepancies between field systems and head office."
tags: ["Power BI", "DAX", "SQL", "Excel", "Data Modelling", "ETL"]
featured: false
order: 3
---

## Context

BAT's trade marketing function relied on a fragmented collection of Excel-based reports distributed weekly by email. The reports were produced by different teams, used inconsistent definitions, and frequently showed conflicting numbers for the same metrics. Field managers and head office regularly worked from different versions of the truth.

The reporting burden was also significant: three analysts spent roughly 40% of their week producing reports that were out of date by the time they were distributed.

## The Brief

Design a Power BI reporting suite that:
- Consolidated all trade marketing reporting into a single source of truth
- Resolved the data discrepancy issues at the source
- Reduced the manual reporting effort to near zero
- Was self-serve for field managers, without requiring analyst involvement

## Design Approach

**Step 1: Data audit**

I mapped every source system feeding into the existing reports and traced each metric to its calculation logic. The discrepancies turned out to have two causes: different date filters applied inconsistently, and different handling of outlet status (active, inactive, suspended) across teams.

**Step 2: Unified data model**

I built a star schema in Power BI connecting the field system, the sales transaction database, and the outlet master file. The date and outlet status logic was standardised at the model level, so all reports drew from the same definitions.

**Step 3: Report design**

The suite comprised four reports: a national executive summary, a territory performance view, an outlet-level drill-through, and a promotional effectiveness tracker.

DAX measures were built for all key metrics with explicit documentation of logic, so future analysts could maintain and extend the suite without reverse-engineering calculations.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">40%</span>
    <span class="result-label">Analyst time freed from manual reporting</span>
  </div>
  <div class="result-card">
    <span class="result-number">4</span>
    <span class="result-label">Reports in the unified suite</span>
  </div>
  <div class="result-card">
    <span class="result-number">0</span>
    <span class="result-label">Data discrepancy escalations after launch</span>
  </div>
</div>

## Outcome

The suite replaced all manual Excel reports within three months of launch. Data discrepancy escalations dropped to zero in the quarter following deployment.

The self-serve capability was the most impactful change. Field managers who previously waited for weekly email reports could now check their territory's performance in real time, which changed how quickly they could respond to emerging issues.

## Technical Notes

- Power BI Desktop for report development
- SQL for data extraction and transformation from source systems
- DAX for all calculated measures and time intelligence
- Incremental refresh configured for the outlet transaction table (>50M rows)
- Row-level security applied so each field manager sees only their territory
