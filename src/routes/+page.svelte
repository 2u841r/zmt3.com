<script>
  import Heading from "$lib/components/Heading.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import skillList from "$lib/myData/skillList.js";
  import Projects from "$lib/components/Projects.svelte";
  import { formatDate } from "$lib/util/helpers.js";
  import {
    Circle,
    Stretch
  } from "svelte-loading-spinners";
  import { onMount } from 'svelte';

  export let data;
</script>

<SEO />
<main>
  <div>
    <div class="container">
      <div class="hero-wrapper">
        <Hero title="Zubair Ibn Zamir">
          <p class="hero-description small width">
            I'm a MERN Stack Developer, who writes about life, code, Islam and
            more. Welcome to my digital garden. 🌱
          </p>
          <div class="hire-me">
            <a href="/hire-me" class="button"> Hire Me </a>
          </div>
        </Hero>
        <div class="decoration">
          <img
            src="./mernl.png"
            alt="MERN Logo"
            class="image hero-image"
            title="MERN Logo"
          />
        </div>
      </div>
    </div>
    <div class="container">
      <section class="segment first">
        <Heading title="Latest Posts" slug="/blog" />
        <div class="posts newspaper">
          {#if data.latestPosts.loading}
            <Circle />
          {:else if data.latestPosts.error}
            <p class="error">{data.latestPosts.error}</p>
          {:else}
            {#each data.latestPosts.data as post}
              <a class="post" href={`/blog/${post.slug}`}>
                <h3>{post.title.rendered}</h3>
                <time>{formatDate(post.date, true)}</time>
              </a>
            {/each}
          {/if}
        </div>
      </section>
      <section class="segment large">
        <Heading title="Highlights" />
        <div class="highlight-preview">
          {#if data.highlightedPosts.loading}
            <Circle />
          {:else if data.highlightedPosts.error}
            <p class="error">{data.highlightedPosts.error}</p>
          {:else}
            {#each data.highlightedPosts.data as hPost}
              <div class="muted card flex">
                <div
                  class="gatsby-image-wrapper"
                  style="position:relative;overflow:hidden;display:inline-block;width:45px;height:45px"
                >
                  {#if hPost.featuredImage}
                    <img src={hPost.featuredImage} alt={hPost.title.rendered} />
                  {/if}
                </div>
                <div>
                  <time>{formatDate(hPost.date, true)}</time>
                  <a class="card-header" href={`/blog/${hPost.slug}`}>
                    {hPost.title.rendered}
                  </a>
                </div>
              </div>
            {/each}
          {/if}
        </div>
      </section>
      <section class="segment large">
        <Heading title="Skills" />
        <div class="skill-preview">
          {#each skillList as skill}
            <i class={`${skill} colored`}> </i>
          {/each}
        </div>
      </section>
      <Projects />
    </div>
  </div>
</main>