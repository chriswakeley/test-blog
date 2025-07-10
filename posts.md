---
layout: page
title: "Posts"
permalink: /posts/
---

<section class="hero">
    <h2>All Posts</h2>
    <p>Browse through all my blog posts</p>
</section>

<section class="content">
    {% for post in site.posts %}
    <article class="post-preview">
        <h4><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h4>
        <p class="post-date">{{ post.date | date: "%B %d, %Y" }}</p>
        <p>{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
    </article>
    {% endfor %}
    
    {% if site.posts.size == 0 %}
    <p>No posts yet. Check back soon!</p>
    {% endif %}
</section>
