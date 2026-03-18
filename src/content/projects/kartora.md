---
title: "Kartora: Was the Category Expansion Worth It?"
category: "analytics-visualization"
description: "A Power BI case study for a fictional Australian e-commerce brand, built on a star schema data model. Demonstrates DAX measure design, data modelling decisions, and business storytelling using a structured hypothesis-driven narrative."
tags: ["Power BI", "DAX", "Data Modelling", "Data Storytelling", "Star Schema"]
featured: true
order: 5
---

## Background

Kartora is a fictional Australian e-commerce brand used as the basis for a structured Power BI case study. The project explores a single business question through a complete analytical workflow, from data model design to executive-ready visuals.

The goal was to build something that demonstrated not just technical Power BI skills, but the ability to frame a business question, structure the analysis around it, and communicate findings clearly.

## Business Question

Was the category expansion worth it? Kartora expanded into a new product category in a prior period. This project examines whether that decision improved revenue, margin, and customer metrics relative to the core category.

## Approach

**Data model:**

Built a star schema connecting sales transactions, customers, products, and a date table. The model was designed to support both high-level trend analysis and granular drill-through without performance degradation.

**DAX measures:**

Key measures included:
- Revenue and margin by category and period
- Customer acquisition rate by category entry point
- Repeat purchase rate and average order value for cross-category customers
- Period-over-period comparison with dynamic baseline selection

**Report structure:**

The report follows a hypothesis-driven narrative: each page answers one question before surfacing the next. The opening page states the business question. Subsequent pages examine revenue, margin, and customer behaviour in sequence. The final page summarises the answer with supporting evidence.

## Key Findings

The full write-up and live dashboard will be linked here when published.

The short answer: the category expansion was worth it on revenue and customer acquisition metrics, but margin compression in the new category partially offset the gains. The recommendation was to continue the expansion with a focus on improving margin through supplier terms renegotiation.

## Technical Stack

- Power BI Desktop (report + data model)
- DAX (all measures and time intelligence)
- Power Query (ETL from synthetic CSV source files)
- Published to Power BI Service with scheduled refresh
