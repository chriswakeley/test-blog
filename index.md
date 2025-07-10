---
layout: default
title: "Home"
---

<section class="hero">
    <h2>Welcome to My Test Blog</h2>
    <p>This is a simple test blog site hosted on GitHub Pages. Feel free to explore and see what's here!</p>
</section>

<section class="book-feature">
    <div class="book-container">
        <div class="book-cover">
            <div class="book-spine">
                <h3>The Developer's Journey</h3>
                <p>A Guide to Modern Web Development</p>
            </div>
        </div>
        <div class="book-details">
            <h3>📚 New Book Available!</h3>
            <h4>The Developer's Journey: A Guide to Modern Web Development</h4>
            <p class="book-author">by {{ site.author }}</p>
            <p class="book-description">
                Discover the essential skills and mindset needed to thrive in modern web development. 
                From foundational concepts to advanced techniques, this comprehensive guide will take you 
                through the complete journey of becoming a proficient developer.
            </p>
            <div class="book-meta">
                <span class="price">$24.99</span>
                <span class="format">Available in paperback & digital</span>
            </div>
            <a href="#" class="buy-button" onclick="handlePurchase(); return false;">Buy Now 📖</a>
        </div>
    </div>
</section>

<section class="recent-posts">
    <h3>Recent Posts</h3>
    {% for post in site.posts limit:3 %}
    <article class="post-preview">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </article>
    {% endfor %}
</section>
