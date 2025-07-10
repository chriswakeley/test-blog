---
layout: default
title: "Blog"
---

<section class="page-hero">
    <div class="hero-content">
        <h1>Yoga Insights & Wellness Tips</h1>
        <p>Explore our collection of articles on yoga, mindfulness, and healthy living</p>
    </div>
</section>

<section class="blog-content">
    <div class="section-content">
        <div class="blog-intro">
            <h2>Welcome to Our Blog</h2>
            <p>Here you'll find practical tips, inspiration, and insights to support your yoga journey and overall well-being. Whether you're a beginner just starting out or an experienced practitioner looking to deepen your practice, our articles are designed to meet you where you are.</p>
        </div>

        <div class="posts-grid">
            {% for post in site.posts %}
            <article class="blog-post-card">
                <div class="post-content">
                    <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
                    <p class="post-date">📅 {{ post.date | date: "%B %d, %Y" }}</p>
                    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
                    <a href="{{ post.url | relative_url }}" class="read-more">Read More →</a>
                </div>
            </article>
            {% endfor %}
        </div>

        {% if site.posts.size == 0 %}
        <div class="no-posts">
            <h3>📝 Blog Coming Soon</h3>
            <p>We're working on some amazing content for you. Check back soon for yoga tips, wellness advice, and community stories!</p>
        </div>
        {% endif %}

        <div class="blog-newsletter">
            <h2>Stay Connected</h2>
            <p>Get the latest yoga tips, class updates, and wellness inspiration delivered to your inbox.</p>
            <div class="newsletter-signup">
                <input type="email" placeholder="Enter your email address" onclick="alert('Newsletter signup coming soon! Follow us on social media for updates.')">
                <button class="cta-button" onclick="alert('Newsletter signup coming soon! Follow us on social media for updates.')">Subscribe</button>
            </div>
        </div>

        <div class="blog-categories">
            <h3>Explore Topics</h3>
            <div class="category-tags">
                <span class="category-tag">🧘‍♀️ Beginner Tips</span>
                <span class="category-tag">🌬️ Breathing Techniques</span>
                <span class="category-tag">🤰 Prenatal Yoga</span>
                <span class="category-tag">🧠 Mindfulness</span>
                <span class="category-tag">💪 Strength Building</span>
                <span class="category-tag">🌙 Restorative Practices</span>
                <span class="category-tag">🏠 Home Practice</span>
                <span class="category-tag">🌱 Wellness</span>
            </div>
        </div>
    </div>
</section>