---
layout: default
title: "Stress Burner - Transform Stress Into Sustainable Well-Being"
---

<!-- Hero Section -->
<section class="hero">
  <!-- Abstract floating shapes -->
  <div class="hero__shapes">
    <div class="shape shape--1"></div>
    <div class="shape shape--2"></div>
    <div class="shape shape--3"></div>
  </div>
  
  <!-- Morphing blob -->
  <div class="hero__blob"></div>
  
  <!-- Floating particles -->
  <div class="hero__particles">
    {% for i in (1..20) %}
    <span class="particle"></span>
    {% endfor %}
  </div>
  
  <!-- Main content -->
  <div class="hero__content">
    <div class="container">
      <div class="hero__text">
        <span class="hero__badge">✨ 5-Week Transformation Journey</span>
        
        <h1 class="hero__title">
          Burn Through Stress,<br>
          <span class="gradient-text">Reclaim Your Joy</span>
        </h1>
        
        <p class="hero__subtitle">
          Join the Stress Burner Blueprint—a revolutionary approach to self-care that delivers immediate relief and lasting resilience. Built for change makers, leaders, and visionaries ready to thrive.
        </p>
        
        <div class="hero__cta">
          <a href="#" class="btn btn--primary">
            Start Your Journey
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" class="btn btn--glass">
            Learn More
          </a>
        </div>
        
        <div class="author-badge">
          <div class="author-badge__avatar">UK</div>
          <div class="author-badge__text">
            With Unyong Kim
            <span>Published Author & Wellness Expert</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Scroll indicator -->
  <div class="hero__decoration">
    <div class="scroll-indicator"></div>
  </div>
</section>
