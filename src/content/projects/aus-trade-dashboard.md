---
title: "Australia Trade Dashboard: Machinery & Transport (1988–2022)"
category: "analytics-visualization"
description: "A Tableau dashboard analysing Australia's Machinery and Transport Equipment trade from 1988 to 2022, using data sourced from the Australian Bureau of Statistics (ABS). Covers import and export trends, trade balance shifts, and economic context over three decades."
tags: ["Tableau", "Python", "pandas", "Data Visualisation", "EDA"]
thumbnail: "/images/projects/aus-trade-dashboard.png"
live: "https://public.tableau.com/app/profile/thanh.tung.do/viz/ThanhTungDo_24607828_A3/Dashboard2"
featured: false
order: 12
---

## Overview

This dashboard examines Machinery and Transport Equipment (SITC Category 7) within the broader context of Australia's international trade from 1988 to 2022. The dataset comes from the Australian Bureau of Statistics (ABS) and covers 34 years of import and export flows.

Category 7 is one of Australia's largest import categories and a key lens on the country's industrial and consumer economy — from cars and aircraft to industrial machinery and electronics.

## What the Dashboard Covers

- **Trade balance trends** across three decades, showing how Australia's position as a net importer of machinery has evolved
- **Year-on-year growth rates** for both imports and exports, highlighting cyclical patterns and structural shifts
- **Period comparisons** that contextualise major economic events — the 1990s recession, the 2008 GFC, the COVID disruption in 2020 — against long-run trade flows
- **Category composition** within Machinery and Transport, identifying which subcategories drive volume

## Data Preparation

Raw ABS data required cleaning and reshaping before visualisation. Python and pandas were used to normalise column structures, handle missing values, and produce the analysis-ready dataset that feeds the Tableau workbook.

## Technical Stack

- **Visualisation:** Tableau Public
- **Data preparation:** Python, pandas
- **Data source:** Australian Bureau of Statistics (ABS)
