---
layout: default
title: Course
permalink: /course/
---

<!-- Page title & subheader over parallax stones background -->
<section class="section title-hero">
  <div class="container title-hero-inner">
    <div class="parallax-stack stones-title-parallax" role="img" aria-label="Stacked stones balanced in calm water">
      <div class="parallax-layer stones-bg" aria-hidden="true"></div>
      <div class="parallax-layer stones-mid" aria-hidden="true"></div>
      <div class="parallax-layer stones-fore" aria-hidden="true"></div>
    </div>
    <div class="section-intro align-left on-parallax">
      <h1 class="course-title">stress burner blueprint</h1>
      <p class="course-kicker small">A five-week, practice-based path to release stress, build energy, and find your focus.</p>
      <div class="cta-row">
        <a class="btn ghost-white" href="https://stressburner.systeme.io/school/course/stressburnerblueprint/" target="_blank" rel="noopener">
          <img class="icon" src="{{ '/assets/images/account_circle.svg' | relative_url }}" alt="" aria-hidden="true" />
          <span>Student Portal</span>
        </a>
      </div>
    </div>
  </div>
  </section>
<script>
(function(){
  const initReveal = () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Containers to reveal without hiding titles/borders
    const staggerContainers = Array.from(document.querySelectorAll(
      '.module-flow, .outcomes-cloud, .options-compare, .feature-list.pillars, .laser-spotlight .laser-card, .cohort-panel'
    ));

    // Prepare children: hide initially so they fade in; keep container (and its borders) visible
    staggerContainers.forEach(el => {
      el.classList.add('reveal-stagger');
      const children = Array.from(el.children);
      children.forEach(child => child.classList.add('reveal-on-scroll'));
    });

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          const container = entry.target;
          container.classList.add('is-visible');
          const hiddenKids = container.querySelectorAll('.reveal-on-scroll');
          hiddenKids.forEach(node => node.classList.add('is-visible'));
          obs.unobserve(container);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });

    staggerContainers.forEach(el => io.observe(el));
  };

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initReveal);
  } else {
    initReveal();
  }
})();
</script>
<!-- Modules section -->
<div class="container section">
  <div class="container-narrow modules-panel">
    <div class="section-intro">
      <h2>Inside the Blueprint</h2>
      <p>A five‑module path to build calm, focus, and momentum—one week at a time.</p>
    </div>
    <div class="module-flow">
    <!-- Step 1 -->
    <div class="step">
      <div class="badge" aria-hidden="true">
        <img src="{{ '/assets/images/module1icon.svg' | relative_url }}" alt="" />
      </div>
      <span class="step-num">Module 1</span>
  <h3>Conscious breathing</h3>
  <p>Use your breath to quickly shift state and lower your stress load.</p>
    </div>
    <!-- Step 2 -->
    <div class="step">
      <div class="badge" aria-hidden="true">
        <img src="{{ '/assets/images/module2icon.svg' | relative_url }}" alt="" />
      </div>
      <span class="step-num">Module 2</span>
      <h3>Emotional Freedom Technique</h3>
  <p>Gentle tapping to calm your body‑mind in minutes.</p>
    </div>
    <!-- Step 3 -->
    <div class="step">
      <div class="badge" aria-hidden="true">
        <img src="{{ '/assets/images/module3icon.svg' | relative_url }}" alt="" />
      </div>
      <span class="step-num">Module 3</span>
      <h3>Thoughts are things</h3>
  <p>Shift your inner narrative so stress affects you less.</p>
    </div>
    <!-- Step 4 -->
    <div class="step">
      <div class="badge" aria-hidden="true">
        <img src="{{ '/assets/images/module4icon.svg' | relative_url }}" alt="" />
      </div>
      <span class="step-num">Module 4</span>
      <h3>Priorities that work</h3>
      <p>Use the Eisenhower Matrix and WWIT to create calm focus.</p>
    </div>
    <!-- Step 5 -->
    <div class="step">
      <div class="badge" aria-hidden="true">
        <img src="{{ '/assets/images/module5icon.svg' | relative_url }}" alt="" />
      </div>
      <span class="step-num">Module 5</span>
      <h3>Integration</h3>
  <p>Pull it all together and apply it to your life right now.</p>
    </div>
      </div>
    </div>
  </div>
<!-- Outcomes & benefits (staggered cloud layout, not cards) -->
<div class="container section outcomes-section">
  <div class="section-intro has-accent align-left">
    <span class="eyebrow">Outcomes</span>
    <h2>What you’ll walk away with</h2>
  <p>Clarity, tools, and a calmer baseline—so stress no longer runs your day.</p>
  </div>
  <div class="outcomes-cloud">
    <div class="outcome">
      <div class="outcome-badge" aria-hidden="true">
        <img src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      </div>
      <div>
        <h3>On‑the‑spot relief</h3>
  <p>Fast resets to downshift your nervous system in 2–5 minutes.</p>
      </div>
    </div>
    <div class="outcome">
      <div class="outcome-badge" aria-hidden="true">
        <img src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      </div>
      <div>
        <h3>Daily flow, not force</h3>
  <p>Replace stress loops with tiny, elegant habits that are easy to stick with.</p>
      </div>
    </div>
    <div class="outcome">
      <div class="outcome-badge" aria-hidden="true">
        <img src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      </div>
      <div>
        <h3>Resilience you can feel</h3>
        <p>More focus, steadier energy, and better sleep within a few weeks.</p>
      </div>
    </div>
    <div class="outcome">
      <div class="outcome-badge" aria-hidden="true">
        <img src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      </div>
      <div>
        <h3>Clarity and calm</h3>
  <p>Know what matters next and move through your day with less noise.</p>
      </div>
    </div>
  </div>
</div>

<!-- Laser Coaching Spotlight — Variant B: Card on edge (dark spotlight, simplified) -->
<div class="container section laser-spotlight is-dark is-simple" id="laser-coaching">
  <div class="laser-card edge">
    <div class="laser-copy">
      
      <h2>Laser Coaching</h2>
      <p>A precision 1:1 session with Unyong to remove blockers fast—so you keep moving without the stress spiral.</p>

      <ul class="feature-list pillars">
        <li class="feature">
          <img class="icon" src="{{ '/assets/images/targeticon.svg' | relative_url }}" alt="" aria-hidden="true" />
          <h3>Targeted</h3>
          <p>Zero in on the one thing bottlenecking your progress.</p>
        </li>
        <li class="feature">
          <img class="icon" src="{{ '/assets/images/bolticon.svg' | relative_url }}" alt="" aria-hidden="true" />
          <h3>Fast</h3>
          <p>Get unstuck in a focused 25–40 minute session.</p>
        </li>
        <li class="feature">
          <img class="icon" src="{{ '/assets/images/check-no-background.svg' | relative_url }}" alt="" aria-hidden="true" />
          <h3>Follow‑through</h3>
          <p>7‑day micro check‑ins to keep momentum.</p>
        </li>
      </ul>
      
      <div style="margin-top: 2rem; text-align: center;">
        <div id="paypal-container-KDK2A7HGLV9Y4" style="display: inline-block; min-width: 250px; max-width: 100%;"></div>
      </div>
      <script src="https://www.paypal.com/sdk/js?client-id=BAA4k3L9B8dsMfMiCpTfIy4nHZDdaeZJEmCqipFuXeON2Lfsbvboikv9NeQUaM4cogJ6QwUDQM6sJ2S9oQ&components=hosted-buttons&enable-funding=venmo&currency=USD"></script>
      <script>
        paypal.HostedButtons({
          hostedButtonId: "KDK2A7HGLV9Y4",
        }).render("#paypal-container-KDK2A7HGLV9Y4")
      </script>
    </div>
  </div>
</div>

<!-- Upcoming cohort panel on course page -->
<div class="container section">
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
</div>

<!-- Options & pricing (redesigned two-column compare) -->
<div class="container section">
  <div class="section-intro align-left" style="margin:0 0 10px 0">
    <span class="eyebrow">Choose your path</span>
    <h2>Two ways to take the Blueprint</h2>
  <p>Pick the format that fits your schedule. After checkout, open your welcome email to complete registration, then visit the November Cohort Community to say hello and stay updated.</p>
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

<!-- Removed glow hover script per request -->
