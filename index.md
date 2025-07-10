---
layout: default
title: "Home"
---

<section class="hero">
    <div class="hero-content">
        <h2>Find Your Flow</h2>
        <p class="hero-subtitle">Transform your life through mindful movement, breath, and community</p>
        <div class="hero-offer">
            <span class="offer-badge">New Students</span>
            <h3>2 WEEKS FOR $59</h3>
            <p>Discover your new favorite studio 🧘‍♀️</p>
            <a href="#classes" class="cta-button">Start Your Journey</a>
        </div>
    </div>
</section>

<section id="classes" class="classes-section">
    <div class="section-content">
        <h2>Our Classes</h2>
        <div class="classes-grid">
            <div class="class-card">
                <h3>🧘‍♀️ Vinyasa Flow</h3>
                <p>Dynamic sequences linking breath with movement. Perfect for building strength and flexibility.</p>
                <div class="class-meta">
                    <span class="level">All Levels</span>
                    <span class="duration">75 min</span>
                </div>
            </div>
            <div class="class-card">
                <h3>🤰 Prenatal Yoga</h3>
                <p>Gentle practice designed for expecting mothers, focusing on comfort and preparation for birth.</p>
                <div class="class-meta">
                    <span class="level">Prenatal</span>
                    <span class="duration">60 min</span>
                </div>
            </div>
            <div class="class-card">
                <h3>🕯️ Yin Yoga</h3>
                <p>Slow, meditative practice with longer-held poses to restore and rejuvenate.</p>
                <div class="class-meta">
                    <span class="level">All Levels</span>
                    <span class="duration">90 min</span>
                </div>
            </div>
            <div class="class-card">
                <h3>🔥 Power Yoga</h3>
                <p>Vigorous, fitness-based approach to vinyasa-style yoga for strength and endurance.</p>
                <div class="class-meta">
                    <span class="level">Intermediate</span>
                    <span class="duration">60 min</span>
                </div>
            </div>
        </div>
        <div class="classes-cta">
            <a href="#" class="secondary-button" onclick="alert('Book your class through our app or call us!')">View Schedule & Book</a>
        </div>
    </div>
</section>

<section class="book-feature">
    <div class="book-container">
        <div class="book-cover">
            <div class="book-spine">
                <h3>Mindful Flow</h3>
                <p>A Guide to Inner Peace Through Yoga</p>
            </div>
        </div>
        <div class="book-details">
            <h3>📖 New Book Available!</h3>
            <h4>Mindful Flow: A Guide to Inner Peace Through Yoga</h4>
            <p class="book-author">by {{ site.author }}</p>
            <p class="book-description">
                Discover the transformative power of yoga in this comprehensive guide that blends ancient wisdom 
                with modern practice. Learn breathing techniques, meditation, and poses that will help you find 
                balance in your daily life and cultivate lasting inner peace.
            </p>
            <div class="book-meta">
                <span class="price">$24.99</span>
                <span class="format">Available in paperback & digital</span>
            </div>
            <a href="#" class="buy-button" onclick="handlePurchase(); return false;">Buy Now 📖</a>
        </div>
    </div>
</section>

<section class="testimonials-section">
    <div class="section-content">
        <h2>What Our Students Say</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"This studio has transformed my life. The teachers are incredible and the community is so welcoming. I've found my second home here!"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-info">
                        <h4>Sarah M.</h4>
                        <span>Student for 2 years</span>
                    </div>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"The prenatal classes helped me stay strong and calm throughout my pregnancy. Forever grateful for this safe space."</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-info">
                        <h4>Maria L.</h4>
                        <span>New Mom</span>
                    </div>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
            <div class="testimonial-card">
                <div class="testimonial-content">
                    <p>"As a beginner, I was nervous, but the instructors made me feel so comfortable. Now yoga is an essential part of my routine!"</p>
                </div>
                <div class="testimonial-author">
                    <div class="author-info">
                        <h4>James K.</h4>
                        <span>Student for 6 months</span>
                    </div>
                    <div class="rating">⭐⭐⭐⭐⭐</div>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="recent-posts">
    <div class="section-content">
        <h2>Latest Insights</h2>
        {% for post in site.posts limit:3 %}
        <article class="post-preview">
            <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
            <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
        </article>
        {% endfor %}
        <div class="posts-cta">
            <a href="{{ '/posts/' | relative_url }}" class="secondary-button">View All Posts</a>
        </div>
    </div>
</section>