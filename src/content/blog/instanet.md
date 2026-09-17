---
title: "InstaNet: low-shot recognition in the wild"
description: "An experiment in face parsing, feature embeddings, and finding identity in noisy social data."
published: 2020-07-24
tags: [Computer vision, Machine learning]
featured: true
---

InstaNet was an experiment in building a facial-recognition network from the Instagram pages I followed.

There were two main challenges: low-shot recognition and identifying the owner of a given page. Low-shot recognition is difficult because conventional convolutional networks typically need a large training set, while most people only have a handful of useful portraits on a profile.

I approached this with a feature-detection network pretrained across many faces. Instead of training a new classifier for each person, the network produced an embedding describing the face’s relevant features. New faces could then be identified by comparing embeddings and finding the closest match.

The second challenge was deciding which face belonged to the account owner. People post friends, group photos, and memes. I used clustering to identify which face appeared most consistently across a profile, then stored that cluster’s representative features for later matching.

The image below shows the first stage of the pipeline: detecting and parsing faces from a source photo.

![Face parsing in the InstaNet pipeline](/assets/images/kristen.png)
