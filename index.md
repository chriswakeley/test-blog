---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
  <img class="lotus" src="{{ '/assets/images/stressburner-lotus.png' | relative_url }}" alt="Stress Burner lotus" />
    <div class="tag">Stress Burner Blueprint</div>
  <h1>Stressburner</h1>
  <p class="subtitle">Master Your Calm. Reclaim Your Joy.</p>
    <div class="cta-row">
      <a class="btn" href="{{ site.purchase_url }}" target="_blank" rel="noopener">Discover the Blueprint</a>
      <a class="btn secondary" href="{{ '/about/' | relative_url }}">Meet Unyong</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {% include section-intro.html eyebrow="The Blueprint" title="Build calm into your day" text="Practical tools and gentle structure to reduce stress, prevent burnout, and make space for joy." %}
    <div class="grid cols-3">
    {% include card.html icon="/assets/images/leaf.svg" title="On‑the‑spot stress reduction" text="Quick, practical tools you can use anywhere—no mat or special setup required." %}
    {% include card.html icon="/assets/images/calendar.svg" title="Prevent burnout before it starts" text="Build sustainable micro‑habits that protect your energy and restore clarity." %}
    {% include card.html icon="/assets/images/check.svg" title="Transform root‑cause habits" text="Shift patterns that keep stress stuck so you can enjoy more ease and flow." %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {% include panel.html image="/assets/images/stock-yoga.png" alt="A woman practicing calm breathing in a sunlit room" eyebrow="Find calm where you are" title="Simple tools for busy days" text="Use Stress Burner practices at home, at work, or between meetings—in minutes." cta_url="/course/" cta_label="See how it works" image_side="left" %}
  </div>
</section>

<section class="section">
  <div class="container">
    {% include section-intro.html accent=true eyebrow="What you'll get" title="Course, coaching, and support" text="Focused weekly lessons, supportive group calls, and tools you can keep forever." %}
    <div class="grid cols-3">
    {% include card.html image="/assets/images/stress-burner-book.jpg" image_alt="Stress Burner book" title="Stress Burner Tips for Busy People" text="25 quick ways to avoid burnout and reduce daily stress." cta_url="https://www.amazon.com/Stress-Burner-Tips-Busy-People/dp/B0B92RJMGV" cta_label="Get the Book" cta_variant="secondary" cta_external=true %}
    {% include card.html title="What’s inside the course" text="5 weeks of 10–15 minute video modules, weekly 45‑min group coaching, 1:1 laser coaching, and lifetime access to recordings." cta_url="/course/" cta_label="See Course Details →" %}
    {% include card.html title="Already enrolled?" text="Access your student portal to continue the Stress Burner Blueprint." cta_url=site.student_portal_url cta_label="Open Student Portal" %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    {% include panel.html image="/assets/images/clayobjects.png" alt="A calm still-life of a mug, hourglass, stones, and a small laptop with a lotus sticker" image_side="right" eyebrow="Designed for everyday life" title="A calmer rhythm, one small step at a time" text="Gentle, repeatable practices that fit your schedule—and actually stick." cta_url="/course/" cta_label="See what's inside" %}
  </div>
</section>
