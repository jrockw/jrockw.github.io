---
title: "Scouter: mapping a fragmented scooter network"
description: "Building one map for a city full of incompatible scooter and bike services."
published: 2020-05-14
tags: [Product, APIs, Maps]
featured: true
---

Scouter was an app designed to help people navigate the confusing and chaotic world of shared e-scooters and e-bikes. The idea came from a friend who used scooters as his primary way to get to work and was tired of checking several different apps just to find the closest ride.

I built a single map that plotted Bird, Lime, Jump, and Lyft vehicles in the area. Obtaining access to each service’s location data became the real project. I contacted the City Council, which had exclusive API access for monitoring scooter programs, researched Lime’s available data, found community documentation for Bird, and inspected network traffic from the mobile apps to understand the remaining services.

Most of those companies have since changed their API configurations, but the project was a useful lesson in stitching together fragmented systems—and in discovering how quickly a useful idea can become a competitive market.

![An early version of Scouter](/assets/images/scouter_old.png)

![The later Scouter interface](/assets/images/scouter.png)
