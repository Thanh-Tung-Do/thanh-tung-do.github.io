---
title: "Telco Customer Churn: End-to-End ML Product"
category: "data-science-ml"
description: "An end-to-end ML product for identifying at-risk telecom customers before they leave, from raw data exploration through to a deployed Streamlit prediction app. Built on 594K synthetic training rows from the IBM Telco dataset. The key finding: cost-sensitive modelling delivers 25x more business value than a standard classifier at identical AUC."
tags: ["Python", "XGBoost", "Scikit-learn", "SHAP", "Streamlit", "Classification", "Cost Analysis"]
thumbnail: "/images/projects/Telco-customer-churn-prediction-machine-learning-solution-banner.png"
github: "https://github.com/Thanh-Tung-Do/Telco-Customer-Churn-End-to-End-ML-Product"
live: "https://telco-customer-churn-end-to-end-ml.streamlit.app/"
featured: true
order: 1
---

## The Business Problem

Customer acquisition costs 5-25x more than retention. Every churned customer represents lost lifetime value that a timely intervention could have preserved.

This project builds a churn prediction system for a fictional telecom provider using the IBM Telco Customer Churn dataset, sourced via Kaggle Playground Series S6E3, which provides 594,194 synthetic training rows. The target question is not just "will this customer churn?" but "which customers are worth flagging, and at what cost?"

## Key Results

Three models were evaluated using 5-fold cross-validation and a cost matrix that reflects real business economics:

| Model | CV ROC-AUC | Net value / 10,000 customers |
|---|---|---|
| Logistic Regression (baseline) | 0.9051 | +$14,600 |
| Logistic Regression (cost-sensitive) | 0.9049 | +$374,000 |
| XGBoost | **0.9161** | **+$381,000** |

The cost model assigns:
- Missed churner = **$500** (lost CLV)
- Wasted retention offer = **$50**
- Successful retention = **$300**

<div class="result-grid">
  <div class="result-card">
    <span class="result-number">0.916</span>
    <span class="result-label">XGBoost CV ROC-AUC</span>
  </div>
  <div class="result-card">
    <span class="result-number">25x</span>
    <span class="result-label">More business value from cost-sensitive vs standard classifier</span>
  </div>
  <div class="result-card">
    <span class="result-number">+23%</span>
    <span class="result-label">Further uplift from threshold optimisation alone</span>
  </div>
</div>

## What the Numbers Actually Say

The most important finding in this project has nothing to do with model architecture.

The cost-sensitive logistic regression has an AUC of 0.9049, almost identical to the baseline at 0.9051. By standard evaluation, they are indistinguishable. But in dollar terms, the cost-sensitive version delivers **$374,000 versus $14,600** per 10,000 customers. That is a 25x difference from a single parameter change (`class_weight='balanced'`).

ROC-AUC is threshold-agnostic. It averages performance across all operating points equally, which obscures the fact that a 10:1 asymmetry between a missed churner ($500) and a wasted offer ($50) makes high recall worth paying for. The metric that matters for deployment is net business value at the chosen threshold, not AUC.

Threshold optimisation at t = 0.28 then adds a further 23% value uplift with no model change at all. The decision threshold is a business parameter, not a modelling parameter.

## EDA Highlights

Base churn rate in the dataset is 22.5%. The strongest structural patterns:

- Month-to-month contract holders churn at **2-3x** the rate of customers on annual or two-year contracts
- Fibre optic internet subscribers churn at nearly twice the rate of DSL customers
- High monthly charges combined with short tenure signals the highest-risk cohort: customers who are paying more than the service feels worth, and haven't yet sunk enough time to stay

## Model Explainability

SHAP beeswarm plots expose the reasoning behind each individual prediction, making the model auditable for stakeholders who need to understand why a customer was flagged before acting on the recommendation.

The dominant risk drivers are **contract type**, **tenure**, and **monthly charges**, consistent with domain intuition. An interesting finding: `TotalCharges` partly acts as a proxy for `tenure` (total charges approximately equals monthly charges multiplied by tenure), which raises a feature engineering question worth investigating.

XGBoost was chosen as the final model because it captures non-linear feature interactions that logistic regression misses. High monthly charges combined with a month-to-month contract is more predictive than either feature in isolation.

## Deployed App

The trained model is served as an interactive Streamlit app. Adjust customer attributes via sliders and dropdowns and see the predicted churn probability update in real time, with SHAP explanations showing which features are driving the result for the selected profile.

## Technical Stack

- **Data:** 594K rows, 20 features, Kaggle Playground Series S6E3 (IBM Telco dataset)
- **Modelling:** scikit-learn Pipeline, Logistic Regression, XGBoost, cost-sensitive training
- **Explainability:** SHAP beeswarm plots
- **Deployment:** Streamlit, Streamlit Community Cloud
- **Supporting libraries:** pandas, NumPy, Matplotlib, joblib
