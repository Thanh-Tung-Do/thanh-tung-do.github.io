---
title: "FreshCart Australia: SQL Analytics for Grocery E-Commerce"
category: "analytics-visualization"
description: "Three years of transactional data from a fictional Australian online grocer, dissected across 16 business questions using advanced SQL. Covers cohort retention, RFM segmentation, promotional ROI, market basket analysis, and category performance — the full analytical toolkit of a commercial analyst."
tags: ["SQL", "DuckDB", "Python", "Cohort Analysis", "RFM Segmentation", "E-Commerce"]
thumbnail: "/images/projects/fresh-cart-sql-analytics-banner.png"
github: "https://github.com/Thanh-Tung-Do/FreshCart-Australia-SQL-Analytics-for-Grocery-E-Commerce"
featured: true
order: 2
---

## The Scenario

FreshCart Australia is a fictional online grocery retailer. Three years of transaction data: 5,000 customers, 96 SKUs, 24,074 orders, six relational tables.

The project treats this like a real commercial analytics engagement. Not a tutorial, not a data cleaning exercise. A genuine attempt to answer the questions a category manager or commercial director would actually ask on a Monday morning.

## The Business Questions

Sixteen analyses, structured around four commercial priorities:

**Revenue and margin health**
Monthly year-on-year trends, gross margin by category, state-level benchmarking. Understanding not just what is selling, but what is profitable and where.

**Customer behaviour**
Cohort retention from the first purchase onward. RFM segmentation to identify Champions, Loyalists, At-Risk, and Churned customers. Purchase cycle analysis revealing that the typical repurchase interval is 31 to 60 days.

**Promotional effectiveness**
Which promotions drive genuine incremental sales and which simply discount purchases that would have happened anyway. EOFY promotions carry the deepest discounts at 20%, but the ROI question is more nuanced.

**Category and channel performance**
Coffee leads on revenue at $377K over three years. Breakfast leads on order penetration. Online channel shows consistent quarter-on-quarter growth against in-store. Market basket analysis surfaces which product combinations drive basket size.

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">$1.67M</span>
    <span class="result-label">Total revenue across 3 years</span>
  </div>
  <div class="result-card">
    <span class="result-number">28.9%</span>
    <span class="result-label">Gross margin across the portfolio</span>
  </div>
  <div class="result-card">
    <span class="result-number">23.8%</span>
    <span class="result-label">Revenue share from Champions segment (14% of customers)</span>
  </div>
</div>

## Why DuckDB

DuckDB is an in-process analytical database that runs inside a Python environment with no server setup. It is fast on columnar data, supports the full SQL standard including window functions and ROLLUP, and produces clean output inside Jupyter notebooks.

It is also increasingly relevant for analysts who need to run analytical SQL on local files or embedded datasets without standing up a data warehouse. This project was built specifically to demonstrate that workflow.

## SQL Techniques Demonstrated

The project covers the techniques that separate junior SQL from senior SQL:

- Window functions across every major variant: LAG, LEAD, RANK, ROW_NUMBER, NTILE, running totals
- Cohort construction using first-purchase anchoring and date spine joins
- RFM segmentation using NTILE quartiles with CASE-based label assignment
- Self-joins for market basket (co-purchase) analysis
- CROSS JOIN benchmarking for state-level performance comparison
- ROLLUP aggregations for subtotal and grand total reporting
- Subqueries and multi-level CTEs for stepwise analytical pipelines

The Jupyter notebook includes all query outputs pre-executed, so the analysis is readable without running any code.
