---
layout: default
title: Home
---

<section class="hero">
  <div class="container">
  <img class="lotus" src="{{ '/assets/images/stress-burner-lotus.svg' | relative_url }}" alt="Stress Burner lotus" />
  <h1>stress burner</h1>
  <p class="subtitle">Master Your Calm. Reclaim Your Joy.</p>
    <div class="cta-row">
      <a class="btn" href="{{ site.purchase_url }}" target="_blank" rel="noopener">Discover the Blueprint</a>
    </div>
  </div>
</section>

<!-- Feature Panel: replaces "Build calm into your day" section -->
<section class="feature-panel">
  <div class="feature-panel__inner container">
    <h2 class="feature-panel__title">The Blueprint</h2>
    <p class="feature-panel__subtitle">A five‑week, practice‑based path to reduce stress, build steady energy, and cultivate lasting calm.</p>

    <div class="feature-grid">
      <!-- Card 1 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/openbookicon.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Modules &amp; Content</h3>
        <ul class="feature-list bullets">
          <li>5 weeks of video lessons</li>
          <li>Downloadable worksheets</li>
          <li>Audio meditations</li>
        </ul>
      </article>

      <!-- Card 2 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/communityicon.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Community &amp; Support</h3>
        <ul class="feature-list bullets">
          <li>Private forum access</li>
          <li>Weekly group calls</li>
          <li>Accountability partners</li>
        </ul>
      </article>

      <!-- Card 3 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/planticon.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Personal Transformation</h3>
        <ul class="feature-list bullets">
          <li>1:1 laser coaching session</li>
          <li>Journaling prompts</li>
          <li>Mindfulness practices</li>
        </ul>
      </article>
    </div>

    <div class="cta-row" style="justify-content:center">
      <a href="/course/" class="btn secondary">Explore All Features</a>
    </div>
  </div>
  
</section>

<section class="section">
  <div class="container">
  {% include panel.html image="/assets/images/stock-yoga.png" image_webp="/assets/images/stock-yoga.webp" alt="A woman practicing calm breathing in a sunlit room" eyebrow="Find calm where you are" title="Simple tools for busy days" text="Use Stress Burner practices at home, at work, or between meetings—in minutes." cta_url="/course/" cta_label="See how it works" image_side="left" %}
  </div>
</section>

<!-- Stories/Testimonials band (distinct layout) -->
<section class="section stories-band">
  <div class="container">
    <div class="section-intro">
      <h2>Real days. Real results.</h2>
      <p>Five short stories from busy people who found a calmer rhythm—and kept it.</p>
    </div>

    <div class="stories-grid">
      <!-- Shari Goodwin -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/shari.webp' | relative_url }}" alt="Portrait of Shari Goodwin" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“I left sessions feeling lighter and inspired.”</blockquote>
        <figcaption class="story-meta"><strong>Shari Goodwin</strong> · Strategist &amp; Leadership Coach, Jaeger2</figcaption>
      </figure>

      <!-- Paul Almeida -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/paulalmeida.webp' | relative_url }}" alt="Portrait of Paul Almeida" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“It worked for me and my students.”</blockquote>
        <figcaption class="story-meta"><strong>Paul Almeida</strong> · Dean of Georgetown Business School</figcaption>
      </figure>

      <!-- Ella Waide -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/ellawaide.webp' | relative_url }}" alt="Portrait of Ella Waide" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“It was empowering to learn how much I could do on my own.”</blockquote>
        <figcaption class="story-meta"><strong>Ella Waide</strong> · Civil Engineer, Solar Development, Kimley‑Horn</figcaption>
      </figure>

      <!-- Sara Ines Lara -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/sharineslara.webp' | relative_url }}" alt="Portrait of Sara Ines Lara" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“Simple yet effective techniques I use every day.”</blockquote>
        <figcaption class="story-meta"><strong>Sara Ines Lara</strong> · Founder &amp; Executive Director, Women for Conservation</figcaption>
      </figure>
    </div>

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
