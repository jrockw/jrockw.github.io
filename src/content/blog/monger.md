---
title: "Monger: three months from idea to delivery"
description: "What I learned cofounding and building a food-delivery operation during California’s first lockdown."
published: 2021-01-19
tags: [Entrepreneurship, Product, Django]
featured: true
---

During the long months of quarantine, I cofounded, led, designed, and built Monger.la, a food-delivery service with an ecommerce platform and order-management system.

Restaurants had been shut down during California’s first lockdown, and the wholesale food system was struggling. Distributors began selling directly to consumers through email, but the process was fragmented and inefficient. I saw an opportunity to build an ecommerce layer for those distributors.

I started by meeting with distributors and learning where their time went. Efficient routing was a new problem for teams accustomed to driving to the same restaurants every week. Payments and customer communication consumed at least one full-time role. Orders also needed to be assembled in a precise sequence and at speed.

With those observations in mind, I customized Django Oscar’s order flow, inventory management, checkout, and payment processing. I hired and managed a frontend developer, introduced a Kanban workflow as our task list grew, and learned the importance of being explicit about both the product and the definition of done.

One distributor spent about an hour every day plotting routes for drivers in Google Maps. I connected that problem to the traveling-salesperson problem and built a routing tool that considered traffic, distance, the distribution point, and delivery windows. The platform could automatically generate a proposed delivery route alongside an order sheet.

As we entered alpha and beta testing, the importance of a fully tested workflow became obvious. Small features such as password recovery and clear order status mattered just as much as the larger systems. I documented the platform and eventually sold my position and the product to my partners when I returned to school.

The sprint taught me that I enjoy the breadth of product engineering: moving between customer conversations, systems design, implementation, debugging, and project leadership while keeping the work pointed at a real outcome.

![Order tracking in Monger](/assets/images/OrderTracking.jpeg)

![Order history in Monger](/assets/images/OrderHistory.jpeg)
