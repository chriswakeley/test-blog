---
layout: default
title: Client Comments
permalink: /testimonials/
---

<section class="section stories-band" id="stories-band-page">
  <div class="container">
    <div class="section-intro">
      <h2>Client Comments</h2>
      <p>From busy people who found a calmer rhythm—and kept it.</p>
    </div>

    <div class="stories-grid">
      <!-- Paul Almeida -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/paulalmeida.webp' | relative_url }}" alt="Portrait of Paul Almeida" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“Most men need to overcome stress, whether we like to admit it or not. And Unyong presents us with an easy solution. It worked for me and my students. Try her Stress Burner work once—you won’t regret it!”</blockquote>
        <figcaption class="story-meta"><strong>Paul Almeida</strong> · Dean of Georgetown Business School</figcaption>
      </figure>

      <!-- Sara Ines Lara -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/saraineslara.webp' | relative_url }}" alt="Portrait of Sara Ines Lara" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“I learned from Unyong the importance of taking care of myself while working for a cause I care about. I’m forever grateful for the simple yet effective techniques I use every day.”</blockquote>
        <figcaption class="story-meta"><strong>Sara Ines Lara</strong> · Founder &amp; Executive Director, Women for Conservation</figcaption>
      </figure>

      <!-- Shari Goodwin -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/shari.webp' | relative_url }}" alt="Portrait of Shari Goodwin" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“Unyong is a wise and masterful teacher and her Stress Burner Blueprint is perfect for busy professionals seeking quick and impactful ways to reduce stress. I left sessions feeling lighter and inspired.”</blockquote>
        <figcaption class="story-meta"><strong>Shari Goodwin</strong> · Strategist &amp; Leadership Coach, Jaeger2</figcaption>
      </figure>

      <!-- Ella Waide -->
      <figure class="story">
        <div class="story-photo-wrap">
          <picture>
            <img class="story-photo" src="{{ '/assets/images/ellawaide.webp' | relative_url }}" alt="Portrait of Ella Waide" loading="lazy" />
          </picture>
        </div>
        <blockquote class="story-quote">“The Stress Burner Blueprint helped me realize I had many tools already within me to deal with stressful moments at my job. It was empowering to learn how much I could do on my own.”</blockquote>
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
    const band = document.getElementById('stories-band-page');
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
    const scrollToIndex = (i) => { if (!stories[i]) return; stories[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); };
    const updateDots = () => { const i = getActiveIndex(); dots.forEach((btn, idx) => btn.setAttribute('aria-current', String(idx === i))); };
    dots.forEach((btn) => { btn.addEventListener('click', () => { const idx = parseInt(btn.getAttribute('data-index') || '0', 10); scrollToIndex(idx); }); });
    let ticking = false; const onScroll = () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { updateDots(); ticking = false; }); };
    grid.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateDots();
  })();
  (function(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    const containers = Array.from(document.querySelectorAll('.stories-grid'));
    containers.forEach(el => { el.classList.add('reveal-stagger'); Array.from(el.children).forEach(k => k.classList.add('reveal-on-scroll')); });
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting){ const c = e.target; c.classList.add('is-visible'); c.querySelectorAll('.reveal-on-scroll').forEach(n => n.classList.add('is-visible')); obs.unobserve(c); }});
    }, { threshold: 0.2, rootMargin: '0px 0px -15% 0px' });
    containers.forEach(el => io.observe(el));
  })();
</script>
