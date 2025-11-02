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
<section class="section stories-band" id="stories-band">
  <div class="container">
    <div class="section-intro">
      <h2>Real people. Real results.</h2>
      <p>Five short stories from busy people who found a calmer rhythm—and kept it.</p>
    </div>

    <div class="stories-grid">
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

      <!-- Sara Ines Lara -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/saraineslara.webp' | relative_url }}" alt="Portrait of Sara Ines Lara" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“Simple yet effective techniques I use every day.”</blockquote>
        <figcaption class="story-meta"><strong>Sara Ines Lara</strong> · Founder &amp; Executive Director, Women for Conservation</figcaption>
      </figure>

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
    </div>

    <div class="stories-pagination" role="group" aria-label="Testimonials">
      <button type="button" data-index="0" aria-label="Show Paul" aria-current="true"></button>
      <button type="button" data-index="1" aria-label="Show Sara" aria-current="false"></button>
      <button type="button" data-index="2" aria-label="Show Shari" aria-current="false"></button>
      <button type="button" data-index="3" aria-label="Show Ella" aria-current="false"></button>
    </div>

  </div>
</section>

<script>
  (function(){
    const band = document.getElementById('stories-band');
    if (!band) return;
    const grid = band.querySelector('.stories-grid');
    const stories = grid ? Array.from(grid.querySelectorAll('.story')) : [];
    const dots = Array.from(band.querySelectorAll('.stories-pagination button'));
    if (!grid || stories.length <= 1 || dots.length !== stories.length) return;
    const getActiveIndex = () => {
      const rect = grid.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      let best = 0, bestD = Infinity;
      for (let i = 0; i < stories.length; i++){
        const r = stories[i].getBoundingClientRect();
        const sc = r.left + r.width / 2;
        const d = Math.abs(sc - cx);
        if (d < bestD){ bestD = d; best = i; }
      }
      return best;
    };
    const scrollToIndex = (i) => {
      if (!stories[i]) return;
      stories[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    };
    const updateDots = () => {
      const i = getActiveIndex();
      dots.forEach((btn, idx) => btn.setAttribute('aria-current', String(idx === i)));
    };
    // Click handlers for dots
    dots.forEach((btn) => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
        scrollToIndex(idx);
      });
    });
    // Update active dot on scroll/resize
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => { updateDots(); ticking = false; });
    };
    grid.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // Initial state
    updateDots();
  })();
  </script>

<!-- Ready to choose your path: pull options cards from course page -->
<section class="section">
  <div class="container">
    <div class="section-intro align-left" style="margin:0 0 10px 0">
      <h2>Ready to choose your path?</h2>
      <p>Pick the option that fits your schedule—self‑guided or with coaching support.</p>
    </div>
    <div class="options-compare">
      <!-- Left: Self-guided modules -->
      <div>
        <div class="price-card modules">
          <div class="card-hero">
            <img class="hero-emblem" src="{{ '/assets/images/openbookicon.svg' | relative_url }}" alt="Open book icon" />
          </div>
          <h3 class="card-title">Blueprint (Self‑Guided)</h3>
          <p class="card-price">$100</p>
          <p class="card-blurb">Stream the full program at your pace with simple, repeatable practices.</p>
          <ul class="features-plain">
            <li>5 weeks of modules</li>
            <li>Guided practices</li>
            <li>Lifetime access</li>
          </ul>
          <div class="subtle-divider"></div>
          <div class="cta-row">
            <a class="btn secondary" href="{{ site.purchase_modules_url | default: '#' }}" target="_blank" rel="noopener">Purchase modules only</a>
          </div>
        </div>
      </div>

      <!-- Right: Blueprint + Coaching -->
      <div>
        <div class="price-card coaching">
          <div class="media-band">
            <img class="media-center" src="{{ '/assets/images/coachingicon.svg' | relative_url }}" alt="Coaching icon" />
          </div>
          <h3 class="card-title">Blueprint + Coaching</h3>
          <p class="card-price">$500</p>
          <p class="card-blurb">All modules plus live group calls and a 1:1 laser session for momentum and support.</p>
          <ul class="features-check">
            <li>Weekly group coaching</li>
            <li>1:1 laser coaching session</li>
            <li>Recordings + lifetime access</li>
          </ul>
          <div class="subtle-divider"></div>
          <div class="cta-row">
            <a class="btn" href="{{ site.purchase_coaching_url | default: '#' }}" target="_blank" rel="noopener">Purchase coaching option</a>
          </div>
        </div>
      </div>
    </div>
    <p style="margin-top:12px; opacity:.9"><em>After checkout, you’ll receive an email with a link to complete your registration and get access.</em></p>
  </div>
  
</section>

<!-- Book band: single card with image on the right -->
<section class="section book-band">
  <div class="container">
    <div class="panel image-right">
      <div class="panel-body">
        <h2>Carry calm anywhere</h2>
        <p>Keep quick, practical resets at your fingertips—on your desk, in your bag, or wherever your day goes.</p>
        <ul class="feature-list bullets">
          <li>2–5 minute practices for busy moments</li>
          <li>40+ bite‑size tips and tools</li>
          <li>Build steady energy and focus</li>
        </ul>
        <div class="cta-row" style="justify-content:flex-start">
          <a class="btn secondary" href="https://www.amazon.com/Stress-Burner-Tips-Busy-People/dp/B0B92RJMGV" target="_blank" rel="noopener">Get the Book</a>
        </div>
      </div>
      <div class="panel-media">
        <picture>
          <source srcset="{{ '/assets/images/stress-burner-book.webp' | relative_url }}" type="image/webp">
          <img class="book-photo" src="{{ '/assets/images/stress-burner-book.jpg' | relative_url }}" alt="Stress Burner book cover" loading="lazy">
        </picture>
      </div>
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
