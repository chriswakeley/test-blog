---
layout: default
title: Book
permalink: /book/
---

<section class="section book-band">
  <div class="container">
    <div class="section-intro">
      <h2>Calm you can carry</h2>
      <p>Keep quick, practical resets at your fingertips—on your desk, in your bag, or wherever your day goes.</p>
    </div>

    <div class="panel image-right reveal-stagger">
      <div class="panel-body">
        <h2>Stress Burner — Tips for Busy People</h2>
        <p>25 on‑the‑spot, off‑the‑mat tools to pivot from stress to release, flow, and connection. Practical and accessible—especially for busy leaders and changemakers.</p>
        <ul class="feature-list bullets">
          <li>2–5 minute practices for busy moments</li>
          <li>25 bite‑size tips and tools</li>
          <li>Build steady energy and focus</li>
        </ul>
        <div class="cta-row" style="justify-content:flex-start">
          <a class="btn" href="https://www.amazon.com/Stress-Burner-Tips-Busy-People/dp/B0B92RJMGV" target="_blank" rel="noopener">Get the Book</a>
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

<script>
  (function(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const containers = Array.from(document.querySelectorAll('.panel, .feature-list'));
    containers.forEach(el => {
      el.classList.add('reveal-stagger');
      const kids = Array.from(el.children);
      kids.forEach(k => k.classList.add('reveal-on-scroll'));
    });
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting){
        const c = e.target; c.classList.add('is-visible');
        c.querySelectorAll('.reveal-on-scroll').forEach(n => n.classList.add('is-visible'));
        obs.unobserve(c);
      }});
    }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });
    containers.forEach(el => io.observe(el));
  })();
</script>
