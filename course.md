---
layout: default
title: Course
permalink: /course/
---

<!-- Intro / Hook with stacked stones image -->
<div class="container section">
  <div class="panel image-right">
    <div class="panel-body">
      <div class="section-intro align-left" style="margin:0">
        <span class="eyebrow">Stress Burner Blueprint</span>
        <h2>Build calm that lasts</h2>
        <p>Five focused weeks to turn stress into steady energy. You’ll learn simple, elegant practices that fit real life—so you can feel clearer, sleep deeper, and show up as your best self without adding more to your plate.</p>
      </div>
      <ul>
        <li>Short, practical modules you can do anywhere</li>
        <li>Guided practices that reduce stress in minutes</li>
        <li>Lightweight, repeatable rituals that stick</li>
      </ul>
    </div>
    <div class="panel-media">
      <img src="{{ '/assets/images/stacked-stones.webp' | relative_url }}" alt="Stacked stones balanced in calm water" loading="lazy" width="960" height="640" />
    </div>
  </div>
</div>

<!-- Outcomes & benefits with accent art (chaos/order) -->
<div class="container section">
  <div class="section-intro has-accent align-left">
    <span class="eyebrow">Outcomes</span>
    <h2>What you’ll walk away with</h2>
    <p>Clarity, tools, and a calmer baseline—so stress no longer runs the day.</p>
  </div>
  <div class="feature-list">
    <div class="feature">
      <img class="icon" src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      <h3>On‑the‑spot relief</h3>
      <p>Fast resets to downshift nervous‑system load in 2–5 minutes.</p>
    </div>
    <div class="feature">
      <img class="icon" src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      <h3>Daily flow, not force</h3>
      <p>Replace stress loops with tiny, elegant habits that are easy to keep.</p>
    </div>
    <div class="feature">
      <img class="icon" src="{{ '/assets/images/check.svg' | relative_url }}" alt="" />
      <h3>Resilience you can feel</h3>
      <p>More focus, steadier energy, and better sleep within a few weeks.</p>
    </div>
  </div>
  <div style="margin-top:18px">
    <img src="{{ '/assets/images/chaos-order.webp' | relative_url }}" alt="From chaos to order" loading="lazy" style="display:block; width:100%; max-width:900px; margin:8px auto 0; border-radius:12px; box-shadow:0 6px 16px rgba(0,0,0,.06)" />
  </div>
</div>

<!-- Options & pricing with inline SVG visuals -->
<div class="container section">
  <div class="section-intro align-left" style="margin:0 0 10px 0">
    <span class="eyebrow">Choose your path</span>
    <h2>Two ways to take the Blueprint</h2>
    <p>Pick the format that fits your season. You’ll receive a follow‑up email with your registration link after checkout.</p>
  </div>
  <div class="grid" style="grid-template-columns:repeat(2,1fr); gap:22px">
    <!-- Coaching option -->
    <div class="card">
      <svg role="img" aria-label="Telecoaching" viewBox="0 0 120 72" width="100%" height="80" style="display:block; margin-bottom:8px">
        <rect x="2" y="10" width="80" height="50" rx="6" fill="#F6F3F1" stroke="#9A0C0C" stroke-width="2" />
        <circle cx="90" cy="26" r="10" fill="#9A0C0C" opacity=".12" />
        <path d="M88 20 h8 v12 h-8 z" fill="#9A0C0C" opacity=".35" />
        <path d="M14 48 c8-12 22-12 30 0" fill="none" stroke="#9A0C0C" stroke-width="2" stroke-linecap="round" />
        <circle cx="24" cy="32" r="6" fill="#9A0C0C" opacity=".35" />
        <circle cx="34" cy="32" r="6" fill="#9A0C0C" opacity=".35" />
      </svg>
      <h3>Blueprint + Coaching</h3>
      <p>All modules plus live group calls and a 1:1 laser session for momentum and support.</p>
      <p style="font-weight:800; font-size:1.25rem; margin:.35rem 0">$500</p>
      <ul>
        <li>5 weeks of modules</li>
        <li>Weekly group coaching</li>
        <li>1:1 laser coaching session</li>
        <li>Recordings + lifetime access</li>
      </ul>
      <div class="cta-row" style="margin-top:10px">
        <a class="btn" href="{{ site.purchase_coaching_url | default: '#' }}" target="_blank" rel="noopener">Purchase coaching option</a>
      </div>
    </div>

    <!-- Self-directed option -->
    <div class="card">
      <svg role="img" aria-label="Self‑directed online modules" viewBox="0 0 120 72" width="100%" height="80" style="display:block; margin-bottom:8px">
        <rect x="8" y="12" width="100" height="48" rx="6" fill="#F6F3F1" stroke="#9A0C0C" stroke-width="2" />
        <polygon points="58,28 78,36 58,44" fill="#9A0C0C" opacity=".35" />
        <rect x="16" y="20" width="28" height="6" rx="3" fill="#9A0C0C" opacity=".18" />
        <rect x="16" y="30" width="24" height="6" rx="3" fill="#9A0C0C" opacity=".12" />
        <rect x="16" y="40" width="20" height="6" rx="3" fill="#9A0C0C" opacity=".12" />
      </svg>
      <h3>Blueprint (Self‑Directed)</h3>
      <p>Stream the full program at your pace with simple, repeatable practices.</p>
      <p style="font-weight:800; font-size:1.25rem; margin:.35rem 0">$100</p>
      <ul>
        <li>5 weeks of modules</li>
        <li>Guided practices</li>
        <li>Lifetime access</li>
      </ul>
      <div class="cta-row" style="margin-top:10px">
        <a class="btn secondary" href="{{ site.purchase_modules_url | default: '#' }}" target="_blank" rel="noopener">Purchase modules only</a>
      </div>
    </div>
  </div>
  <p style="margin-top:12px; opacity:.9"><em>After checkout, you’ll receive an email with a link to complete your registration and get access.</em></p>
</div>
