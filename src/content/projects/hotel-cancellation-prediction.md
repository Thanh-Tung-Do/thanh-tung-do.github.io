---
title: "Predicting Hotel Reservation Cancellations"
category: "data-science-ml"
description: "A predictive model built to tackle booking cancellations in the hotel industry, driven by the shift in customer behaviour through online reservation channels. Evaluated multiple classifiers with a focus on interpretability and commercial applicability."
tags: ["Python", "Scikit-learn", "pandas", "NumPy", "Classification", "EDA"]
thumbnail: "/images/projects/hotel-cancellation-prediction.png"
live: "https://colab.research.google.com/drive/1JjUi2NozoPjaWJiXdl6kC3y9SC7hriDA?usp=sharing"
featured: false
order: 11
---

## The Problem

Online booking platforms give customers the flexibility to reserve rooms and cancel without friction. For hotels, this creates significant operational and revenue forecasting challenges. A reservation on the books is not the same as guaranteed occupancy, and over-reliance on nominal booking data leads to poor staffing decisions, suboptimal pricing, and lost revenue.

This project builds a classification model to predict whether a hotel reservation will be cancelled, using customer and booking attributes available at the time of reservation.

## Approach

The pipeline covers the full supervised learning workflow:

- **Exploratory data analysis** to understand cancellation rates, seasonal patterns, lead time distributions, and the relationship between booking channel and cancellation behaviour
- **Feature engineering** to extract signal from raw booking attributes
- **Model training and evaluation** across multiple classifiers, assessed on accuracy, precision, recall, and F1

## What the Analysis Found

Lead time is one of the strongest predictors — reservations made far in advance have meaningfully higher cancellation rates, which makes intuitive sense given that plans change over longer horizons. Bookings made through certain distribution channels also carry higher cancellation risk, pointing to differences in customer intent between direct bookings and OTA-sourced reservations.

## Technical Stack

- **Modelling:** scikit-learn (Logistic Regression, Decision Tree, Random Forest)
- **Data handling:** pandas, NumPy
- **Visualisation:** Matplotlib, Seaborn
- **Environment:** Python, Jupyter / Google Colab
