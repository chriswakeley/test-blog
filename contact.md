---
layout: default
title: Contact
permalink: /contact/
---

<section class="section" style="padding-top: 80px; min-height: 80vh;">
  <div class="container">
    <div class="section-intro">
      <span class="eyebrow">Contact</span>
      <h2>I’m here to help</h2>
      <p>Questions about the course, cohort, or portal? Reach out any time.</p>
    </div>

    <div class="grid reveal-stagger" style="grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-top: 48px; max-width: 960px; margin-left: auto; margin-right: auto;">
      
      <!-- Support Card -->
      <div class="feature-card reveal-on-scroll" style="padding: 40px; align-items: flex-start;">
        <div class="feature-icon" style="margin-bottom: 16px;">
           <img src="{{ '/assets/images/communityicon.svg' | relative_url }}" alt="" style="width: 48px; height: 48px;">
        </div>
        <h3 style="font-size: 24px;">Questions & Support</h3>
        <p>Whether you have a question about the course or need help with the portal, I'm here to help.</p>
        <ul class="feature-list bullets" style="margin-top: 16px; margin-bottom: 32px; padding-left: 0; list-style: none;">
          <li style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:{{ site.email }}">{{ site.email }}</a></li>
          <li><strong>Response:</strong> Within 24 hours (Mon-Fri)</li>
        </ul>
        <a class="btn" href="mailto:{{ site.email }}">Email Unyong</a>
      </div>

      <!-- Social Card -->
      <div class="feature-card reveal-on-scroll" style="padding: 40px; align-items: flex-start;">
        <div class="feature-icon" style="margin-bottom: 16px;">
           <img src="{{ '/assets/images/leaf.svg' | relative_url }}" alt="" style="width: 48px; height: 48px;">
        </div>
        <h3 style="font-size: 24px;">Connect & Follow</h3>
        <p>Get daily tips, behind-the-scenes updates, and join the conversation.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; width: 100%;">
            <a class="btn secondary small" href="https://www.instagram.com/stressburners/" target="_blank" rel="noopener">Instagram</a>
            <a class="btn secondary small" href="https://www.facebook.com/StressBurners" target="_blank" rel="noopener">Facebook</a>
            <a class="btn secondary small" href="https://www.linkedin.com/in/unyong-kim-01a39a6/" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>

    </div>

    <!-- Portal Link -->
    <div class="reveal-stagger" style="text-align: center; margin-top: 60px; opacity: 0.9;">
        <p class="reveal-on-scroll">Already a student? <a href="{{ site.student_portal_url }}" target="_blank" rel="noopener" style="font-weight: 600; color: var(--sb-red); margin-left: 4px;">Log in to the Portal &rarr;</a></p>
    </div>

  </div>
</section>

<script>
  (function(){
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;
    
    const containers = Array.from(document.querySelectorAll('.reveal-stagger'));
    
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

    containers.forEach(el => io.observe(el));
  })();
</script>
