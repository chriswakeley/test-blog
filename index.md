---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
  <img class="lotus" src="{{ '/assets/images/stress-burner-lotus.svg' | relative_url }}" alt="Stress Burner lotus" />
    <div class="tag">Stress Burner Blueprint</div>
  <h1>stress burner</h1>
  <p class="subtitle">Master Your Calm. Reclaim Your Joy.</p>
    <div class="cta-row">
      <a class="btn" href="{{ site.purchase_url }}" target="_blank" rel="noopener">Discover the Blueprint</a>
    </div>
  </div>
</section>

<section class="section gallery-left-warm">
  <div class="container container-narrow">
    {% include section-intro.html align='left' eyebrow="The Blueprint" title="Build calm into your day" text="Practical tools and gentle structure to reduce stress, prevent burnout, and make space for joy." %}
    <div class="feature-list">
      {% include feature.html icon="/assets/images/leaf.svg" title="On‑the‑spot stress reduction" text="Quick, practical tools you can use anywhere—no mat or special setup required." %}
      {% include feature.html icon="/assets/images/calendar.svg" title="Prevent burnout before it starts" text="Build sustainable micro‑habits that protect your energy and restore clarity." %}
      {% include feature.html icon="/assets/images/check.svg" title="Transform root‑cause habits" text="Shift patterns that keep stress stuck so you can enjoy more ease and flow." %}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
  {% include panel.html image="/assets/images/stock-yoga.png" image_webp="/assets/images/stock-yoga.webp" alt="A woman practicing calm breathing in a sunlit room" eyebrow="Find calm where you are" title="Simple tools for busy days" text="Use Stress Burner practices at home, at work, or between meetings—in minutes." cta_url="/course/" cta_label="See how it works" image_side="left" %}
  </div>
</section>

<section class="section gallery-right-warm">
  <div class="container container-narrow">
    {% include section-intro.html align='left' accent=true eyebrow="What you'll get" title="Course, coaching, and support" text="Focused weekly lessons, supportive group calls, and tools you can keep forever." %}
    <div class="split">
      <div>
        <div class="feature-list">
          {% include feature.html icon="/assets/images/notebook.svg" title="Short weekly lessons" text="10–15 minute videos you can take on your own time." %}
          {% include feature.html icon="/assets/images/calendar.svg" title="Live group calls" text="Weekly 45‑minute sessions to get unstuck and stay motivated." %}
          {% include feature.html icon="/assets/images/clock-logo.svg" title="Lifetime access" text="Keep recordings and tools so the practices stick." %}
          {% include feature.html icon="/assets/images/check.svg" title="Already enrolled?" text="Jump back into your student portal to continue the Blueprint." cta_url=site.student_portal_url cta_label="Open Student Portal" %}
        </div>
      </div>
      <div class="split-media">
        <figure>
          <picture>
            <source srcset="{{ '/assets/images/stress-burner-book.webp' | relative_url }}" type="image/webp">
            <img src="{{ '/assets/images/stress-burner-book.jpg' | relative_url }}" alt="Stress Burner book" loading="lazy">
          </picture>
          <figcaption style="margin-top:.5rem"><a class="btn secondary" href="https://www.amazon.com/Stress-Burner-Tips-Busy-People/dp/B0B92RJMGV" target="_blank" rel="noopener">Get the Book</a></figcaption>
        </figure>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
  {% include panel.html image="/assets/images/clayobjects.png" image_webp="/assets/images/clayobjects.webp" alt="A calm still-life of a mug, hourglass, stones, and a small laptop with a lotus sticker" image_side="right" eyebrow="Designed for everyday life" title="A calmer rhythm, one small step at a time" text="Gentle, repeatable practices that fit your schedule—and actually stick." cta_url="/course/" cta_label="See what's inside" %}
  </div>
</section>
