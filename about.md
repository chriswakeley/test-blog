---
layout: default
title: About
permalink: /about/
---

<section class="section">
  <div class="container">
    <div class="section-intro align-left">
      <span class="eyebrow">About</span>
      <h2>Meet Unyong Kim</h2>
      <p class="lede">Teacher, author, and coach helping busy people reduce stress and build steady energy—one small step at a time.</p>
    </div>

    <div class="panel reveal-stagger">
      <div class="panel-media">
        <img alt="Portrait of Unyong smiling outdoors" src="{{ '/assets/images/unyong-kim-author.webp' | relative_url }}" />
      </div>
      <div class="panel-body">
        <h3 style="margin-top:0">A practical, gentle approach</h3>
        <p>Unyong blends ancient and modern techniques into simple, repeatable practices you can use anywhere—at your desk, in a meeting, or on the go. Her students often report feeling lighter, clearer, and more motivated after just a few sessions.</p>
        <ul class="feature-list bullets">
          <li>25+ years studying stress reduction and mind‑body methods</li>
          <li>Published author of Stress Burner: Tips for Busy People</li>
          <li>Trusted by executives, educators, and doers who serve others</li>
        </ul>
        <div class="cta-row" style="justify-content:flex-start">
          <a class="btn" href="{{ site.purchase_url }}" target="_blank" rel="noopener">5‑Week Blueprint Course + Coaching</a>
          <a class="btn secondary" href="{{ site.student_portal_url }}" target="_blank" rel="noopener">Student Portal</a>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  (function(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const containers = Array.from(document.querySelectorAll('.panel, .feature-list'));
    containers.forEach(el => { el.classList.add('reveal-stagger'); Array.from(el.children).forEach(k => k.classList.add('reveal-on-scroll')); });
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting){ const c = e.target; c.classList.add('is-visible'); c.querySelectorAll('.reveal-on-scroll').forEach(n => n.classList.add('is-visible')); obs.unobserve(c); }});
    }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });
    containers.forEach(el => io.observe(el));
  })();
</script>
