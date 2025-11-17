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
      <a class="btn" href="/course/">Discover the Blueprint</a>
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

    <div class="stories-pagination" role="group" aria-label="Client comments">
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
  // Scroll reveal: keep titles/borders visible; animate content blocks below hero
  (function(){
    const initReveal = () => {
      const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // Containers we want to reveal (but keep their own borders/titles visible)
      const staggerContainers = Array.from(document.querySelectorAll(
        '.feature-grid, .stories-grid, .options-compare, .panel'
      ));

      // Add stagger behavior to containers, and hide only content while leaving headings visible
      staggerContainers.forEach(el => {
        el.classList.add('reveal-stagger');
        let targets = [];
        if (el.classList.contains('panel')){
          // In panels, animate media and panel-body children except headings
          targets = Array.from(el.querySelectorAll(':scope > .panel-media, :scope > .panel-body > :not(h1):not(h2):not(h3)'));
        } else {
          targets = Array.from(el.children);
        }
        targets.forEach(child => child.classList.add('reveal-on-scroll'));
      });

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            const container = entry.target;
            // Mark container visible
            container.classList.add('is-visible');
            // Also mark any hidden descendants so they can animate individually
            const hiddenKids = container.querySelectorAll('.reveal-on-scroll');
            hiddenKids.forEach(node => node.classList.add('is-visible'));
            obs.unobserve(container);
          }
        });
      }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });

      // Observe only the containers; titles and borders remain rendered
      staggerContainers.forEach(el => io.observe(el));
    };
    if (document.readyState === 'loading'){
      document.addEventListener('DOMContentLoaded', initReveal);
    } else {
      initReveal();
    }
  })();
  </script>

<!-- Ready to choose your path: pull options cards from course page -->
<section class="section">
  <div class="container">
    <div class="section-intro align-left" style="margin:0 0 10px 0">
      <h2>Ready to choose your path?</h2>
      <p>Pick the option that fits your schedule—self‑guided anytime, or join the scheduled 5‑week cohort with coaching starting <strong>November 17</strong>.</p>
    </div>

    <!-- Upcoming cohort panel -->
    <div class="panel cohort-panel cohort-panel--grid">
      <div class="cohort-calendar" aria-label="Course timeframe calendar: five consecutive weeks starting November 17">
        <div class="cal-header"><span class="dot" aria-hidden="true"></span><span><strong>Nov–Dec</strong> • 5 weeks</span></div>
        <div class="cal-weeks">
          <div class="cal-week" aria-label="Week 1: November 17 to 23"><div class="wk-label">Week 1</div><div class="wk-dates">Nov 17–23</div></div>
          <div class="cal-week" aria-label="Week 2: November 24 to 30"><div class="wk-label">Week 2</div><div class="wk-dates">Nov 24–30</div></div>
          <div class="cal-week" aria-label="Week 3: December 1 to 7"><div class="wk-label">Week 3</div><div class="wk-dates">Dec 1–7</div></div>
          <div class="cal-week" aria-label="Week 4: December 8 to 14"><div class="wk-label">Week 4</div><div class="wk-dates">Dec 8–14</div></div>
          <div class="cal-week" aria-label="Week 5: December 15 to 21"><div class="wk-label">Week 5</div><div class="wk-dates">Dec 15–21</div></div>
        </div>
        <div class="cal-foot">Weekly live calls • recordings provided</div>
      </div>
      <div class="panel-body">
        <span class="eyebrow">Upcoming Cohort</span>
        <h3>5‑week course starts November 17</h3>
        <span class="details">Starts Nov 17 · Weekly live calls · 1:1 session · Lifetime access</span>
        <a class="btn" href="https://stressburner.systeme.io/126ed7cc" target="_blank" rel="noopener">Enroll — Nov 17 cohort</a>
      </div>
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

      <!-- Right: 5‑Week Blueprint Course + Coaching -->
      <div>
        <div class="price-card coaching">
          <div class="media-band">
            <img class="media-center" src="{{ '/assets/images/coachingicon.svg' | relative_url }}" alt="Coaching icon" />
          </div>
          <h3 class="card-title">5‑Week Blueprint Course + Coaching</h3>
          <p class="card-price">$500</p>
          <p class="card-blurb">Scheduled 5‑week cohort starting <strong>Nov 17</strong>. Includes weekly live group calls, all modules, and a 1:1 laser session.</p>
          <ul class="features-check">
            <li>Weekly group coaching</li>
            <li>1:1 laser coaching session</li>
            <li>Recordings + lifetime access</li>
          </ul>
          <div class="subtle-divider"></div>
          <div class="cta-row">
            <a class="btn" href="https://stressburner.systeme.io/126ed7cc" target="_blank" rel="noopener">Enroll — Nov 17 cohort</a>
          </div>
        </div>
      </div>
    </div>
    <p style="margin-top:12px; opacity:.9"><em>After checkout: complete registration from your welcome email, visit the community at <a href="https://stressburner.systeme.io/community/stress-burner-fall25" target="_blank" rel="noopener">stressburner.systeme.io/community/stress-burner-fall25</a>, and email <a href="mailto:{{ site.email }}">{{ site.email }}</a> with any questions.</em></p>
  </div>
  
</section>

<!-- Book band: single card with image on the right -->
<section class="section book-band">
  <div class="container">
    <div class="panel image-right">
      <div class="panel-body">
  <h2>Calm you can carry</h2>
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

<!-- Removed: 'Course, coaching, and support' and 'A calmer rhythm...' sections per request -->
