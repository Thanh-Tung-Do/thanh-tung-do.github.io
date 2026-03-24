---
title: "Age Classification with Convolutional Neural Network"
category: "data-science-ml"
description: "A CNN-based model that predicts the age class of a person from a photo. Facial regions are isolated with MTCNN and cropped with OpenCV before age prediction is applied — inspired by working at Dan Murphy's and checking customer IDs."
tags: ["Python", "TensorFlow", "CNN", "OpenCV", "MTCNN", "Deep Learning", "Computer Vision"]
thumbnail: "/images/projects/age-classification-cnn.gif"
live: "https://colab.research.google.com/drive/101FY8PXSic_81XUj8H_v_IItmNtpU7o9"
featured: false
order: 10
---

## The Idea

Working part-time at Dan Murphy's means checking IDs for any customer who looks under 25. It is a judgment call made in seconds, and it is easy to get wrong. This project is a machine learning take on the same problem: can a model learn to classify a face into an age group reliably enough to be useful?

## Approach

The pipeline runs in two stages:

**Stage 1 — Face detection.** MTCNN (Multi-task Cascaded Convolutional Networks) locates and crops the facial region from each input image. This isolates the relevant signal and removes background noise that could confuse the classifier.

**Stage 2 — Age classification.** A CNN processes the cropped face and outputs a predicted age class. The model is trained to distinguish between broad age bands rather than predict an exact age, which is both more tractable and more practically useful.

## Why Two Steps

A single end-to-end model trained on full images would need to implicitly solve face detection and age estimation simultaneously. By separating the concerns, each stage can be optimised independently, and the face detection step is already a well-solved problem with high-quality pretrained models available.

## Technical Stack

- **Face detection:** MTCNN
- **Image processing:** OpenCV
- **Modelling:** TensorFlow / Keras CNN
- **Environment:** Python, Jupyter / Google Colab
- **Data handling:** pandas
