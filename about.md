---
layout: default
title: About
permalink: /about/
---

<!-- Hero Section -->
<section class="section title-hero">
  <div class="container title-hero-inner" style="min-height: 480px; align-items: center; justify-content: center; background: var(--sb-warm); overflow: hidden;">
    <div class="section-intro" style="z-index: 1; position: relative;">
      <span class="eyebrow">About the Founder</span>
      <h1 class="course-title" style="color: var(--sb-ink); text-shadow: none;">Meet Unyong Kim</h1>
      <p class="course-kicker small" style="color: var(--sb-ink); opacity: 0.8; max-width: 600px; margin-left: auto; margin-right: auto;">Teacher, author, and coach helping busy people reduce stress and build steady energy.</p>
    </div>
    <!-- Background texture -->
    <div style="position: absolute; inset: 0; opacity: 0.08; background-image: url('{{ '/assets/images/chaos-order.webp' | relative_url }}'); background-size: cover; background-position: center; pointer-events: none;"></div>
    <!-- Decorative lotus -->
    <img src="{{ '/assets/images/stress-burner-lotus.svg' | relative_url }}" alt="" style="position: absolute; bottom: -60px; right: -40px; width: 320px; opacity: 0.05; transform: rotate(-15deg); pointer-events: none;">
  </div>
</section>

<script>
(function(){
  const initReveal = () => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const staggerContainers = Array.from(document.querySelectorAll(
      '.panel, .feature-grid, .values-grid'
    ));

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

<!-- Main Bio Panel -->
<section class="section">
  <div class="container">
    <div class="panel image-right reveal-stagger">
      <div class="panel-body">
        <span class="eyebrow">The Journey</span>
        <h2>A practical, gentle approach</h2>
        <p class="lede">"I believe that calm isn't something you find on a mountaintop—it's something you build, moment by moment, right where you are."</p>
        <p>Unyong blends ancient and modern techniques into simple, repeatable practices you can use anywhere—at your desk, in a meeting, or on the go. Her students often report feeling lighter, clearer, and more motivated after just a few sessions.</p>
        <ul class="feature-list bullets">
          <li>25+ years studying stress reduction and mind‑body methods</li>
          <li>Published author of <em>Stress Burner: Tips for Busy People</em></li>
          <li>Trusted by executives, educators, and doers who serve others</li>
        </ul>
      </div>
      <div class="panel-media">
        <img alt="Portrait of Unyong smiling outdoors" src="{{ '/assets/images/unyong-kim-author.webp' | relative_url }}" />
      </div>
    </div>
  </div>
</section>

<!-- Philosophy / Values Section -->
<section class="section" style="background-color: rgba(255,255,255,0.4);">
  <div class="container">
    <div class="section-intro">
      <span class="eyebrow">Philosophy</span>
      <h2>Why Stress Burner?</h2>
      <p>A different kind of stress management—designed for real life.</p>
    </div>
    
    <div class="feature-grid values-grid">
      <!-- Value 1 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/planticon.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Gentle & Sustainable</h3>
        <p>No rigid rules or "pushing through." We use gentle practices that work <em>with</em> your nervous system, not against it.</p>
      </article>

      <!-- Value 2 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/clock-logo.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Time-Efficient</h3>
        <p>You don't need an hour of meditation. Most practices take 2–5 minutes and can be done in the middle of a busy workday.</p>
      </article>

      <!-- Value 3 -->
      <article class="feature-card">
        <div class="feature-icon" aria-hidden="true">
          <img class="icon" src="{{ '/assets/images/targeticon.svg' | relative_url }}" alt="" />
        </div>
        <h3 class="feature-card__title">Practical & Proven</h3>
        <p>Grounded in science and decades of experience. These aren't just theories—they are tools that actually work.</p>
      </article>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container">
    <div class="panel cohort-panel" style="text-align: center; display: block;">
      <div class="panel-body" style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
        <h2>Ready to reclaim your calm?</h2>
        <p style="max-width: 600px; margin: 0 auto;">Join the next cohort of the Stress Burner Blueprint or explore the self-guided modules.</p>
        <div class="cta-row">
          <a class="btn" href="{{ '/course/' | relative_url }}">Explore the Course</a>
          <a class="btn secondary" href="mailto:{{ site.email }}">Contact Unyong</a>
        </div>
      </div>
    </div>
  </div>
</section>
