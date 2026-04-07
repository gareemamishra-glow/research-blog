---
title: "Graph Neural Networks for Retrosynthesis"
date: 2026-03-12
description: "How we're using message-passing neural networks to predict synthetic routes for complex molecules."
tags: ["AI", "Chemistry"]
---

Retrosynthesis — working backwards from a target molecule to find viable starting materials — is one of the hardest problems in computational chemistry.

## The Approach

We model chemical reactions as graph transformations. Atoms are nodes, bonds are edges. A reaction is a change in that graph.

## Results

On the USPTO-50k benchmark, our model achieves top-1 accuracy of 54.6%, competitive with state-of-the-art approaches while being 3x faster at inference.
