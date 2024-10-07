<script>
  //   import type { PageData } from "./$types";
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import { groupPostsByYear, formatDate } from "$lib/util/helpers.js";
  import SEO from "$lib/components/SEO.svelte";

  export let data;

  let postsByYear = groupPostsByYear(data.wppost);

  let errorMessage = null;
  if (data?.error) {
    errorMessage = data.error;
  }
</script>

<SEO pageTitle={data.title} />
<main>
  <div>
    <SidebarLayout>
      <header class="hero">
        <h1>Blog</h1>
      </header>
    
      <section class="segment">
        {#if data?.error}
          <p class="error">{data.error}</p>
        {:else}
          {#each Object.keys(postsByYear).sort((a, b) => b - a) as year}
            <h2 class="year">{year}</h2>
            <div class="posts">
              {#each postsByYear[year] as post}
                <a class="post" href={`/blog/${post.slug}`}>
                  <h3>{post.title.rendered}</h3>
                  <time>{formatDate(post.date)}</time>
                </a>
              {/each}
            </div>
          {/each}
        {/if}
      </section>
    </SidebarLayout>
  </div>
</main>
