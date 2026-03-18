---
title: "Customer Churn Prediction Web App"
category: "data-science-ml"
description: "End-to-end ML project using the IBM Telco dataset. Includes feature engineering, model selection across Logistic Regression, Random Forest, and XGBoost, and deployment as an interactive web app for exploring churn probability by customer segment."
tags: ["Python", "Scikit-learn", "XGBoost", "Classification", "Feature Engineering", "Web App"]
featured: true
order: 6
---

## Problem

Customer churn is one of the most direct levers in subscription and service businesses. This project uses the publicly available IBM Telco Customer Churn dataset (7,043 customers, 20 features) to build a model that predicts churn probability at the individual customer level.

The target question: given a customer's contract type, tenure, services, and billing characteristics, how likely are they to churn in the next period?

## Approach

**Exploratory analysis**

Churn rate in the dataset is 26.5%, which is moderately imbalanced but manageable without aggressive resampling. Initial analysis identified the strongest predictors:
- Contract type (month-to-month contracts churn at 43% versus 11% for two-year contracts)
- Tenure (churn risk is highest in the first six months)
- Internet service type (Fibre optic customers churn at nearly twice the rate of DSL customers)

**Feature engineering**

- Tenure bins (0-6 months, 6-12, 1-2 years, 2+ years)
- Total services count (sum of all add-on services)
- Monthly charge to tenure ratio (a proxy for perceived value)
- Interaction term: month-to-month contract AND no online security

**Model comparison**

Three models were compared using 5-fold stratified cross-validation:

| Model | AUC-ROC | Precision (churn) | Recall (churn) |
|-------|---------|-------------------|----------------|
| Logistic Regression | 0.846 | 0.67 | 0.55 |
| Random Forest | 0.861 | 0.69 | 0.58 |
| XGBoost | 0.878 | 0.72 | 0.61 |

XGBoost was selected for deployment. Hyperparameters tuned via GridSearchCV.

**Deployment**

The trained model is served as an interactive web app. Users can adjust customer attributes via sliders and dropdowns and see the predicted churn probability update in real time. SHAP values are displayed to explain which features are driving the prediction for the selected customer profile.

## Technical Stack

- Python: pandas, NumPy, Scikit-learn, XGBoost, SHAP
- Model serialisation: joblib
- Web app: to be confirmed on deployment
- Data: IBM Telco Customer Churn (Kaggle)
