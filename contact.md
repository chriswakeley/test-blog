---
layout: default
title: Contact
permalink: /contact/
---

<section class="section">
  <div class="container">
    <div class="section-intro align-left">
      <span class="eyebrow">Contact</span>
      <h2>We’re here to help</h2>
      <p class="lede">Questions about the course, cohort, or portal? Reach out any time.</p>
    </div>

    <div class="panel reveal-stagger">
      <div class="panel-body">
        <h3 style="margin-top:0">Quick links</h3>
        <ul class="feature-list bullets">
          <li>Email support: <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
          <li>Student Portal: <a href="{{ site.student_portal_url }}" target="_blank" rel="noopener">Log in</a></li>
          <li>November Cohort Community: <a href="https://stressburner.systeme.io/community/stress-burner-fall25" target="_blank" rel="noopener">Introduce yourself</a></li>
        </ul>
        <div class="cta-row" style="justify-content:flex-start">
          <a class="btn" href="mailto:{{ site.email }}">Email us</a>
          <a class="btn secondary" href="{{ site.student_portal_url }}" target="_blank" rel="noopener">Student Portal</a>
          <a class="btn secondary" href="https://stressburner.systeme.io/community/stress-burner-fall25" target="_blank" rel="noopener">Community</a>
        </div>
      </div>
      <div class="panel-media">
        <div class="card" style="padding:18px">
          <h3 style="margin-top:0">Follow along</h3>
          <p>Light updates, tips, and behind‑the‑scenes.</p>
          <div class="cta-row" style="justify-content:flex-start">
            <a class="btn secondary" href="https://www.instagram.com/stressburners/" target="_blank" rel="noopener" aria-label="Unyong on Instagram (opens in a new tab)">Instagram</a>
            <a class="btn secondary" href="https://www.facebook.com/StressBurners" target="_blank" rel="noopener" aria-label="Unyong on Facebook (opens in a new tab)">Facebook</a>
            <a class="btn secondary" href="https://www.linkedin.com/in/unyong-kim-01a39a6/" target="_blank" rel="noopener" aria-label="Unyong on LinkedIn (opens in a new tab)">LinkedIn</a>
          </div>
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
