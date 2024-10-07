<script>
  /** @type {import('./$types').PageData} */
  import Hero from "$lib/components/Hero.svelte";
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";

  export let data; 
  const { posts, category } = data;
  export let message =
    posts?.length === 0
      ? "0 post categorized as:"
      : posts?.length === 1
        ? ` post categorized as:`
        : `posts categorized as:`;

  import { groupPostsByYear, formatDate } from "$lib/util/helpers.js";

  let categoryPostsByYear = groupPostsByYear(data?.posts);

</script>

<SEO pageTitle={data.title} />
<main>
  <div>
    <SidebarLayout>
      {#if !data.error}
        <Hero
          highlight={posts?.length}
          subTitle={message}
          title={category?.name}
        />
        <section class="segment">
          {#each Object.keys(categoryPostsByYear).sort((a, b) => b - a) as year}
            <h2 class="year">{year}</h2>
            <div class="posts">
              {#each categoryPostsByYear[year] as post}
                <a class="post" href={`/blog/${post.slug}`}>
                  <h3>{post.title.rendered}</h3>
                  <time>{formatDate(post.date)}</time>
                </a>
              {/each}
            </div>
          {/each}
        </section>
        <a href="/blog/category"> See all categories </a>
        {:else}
        <section class="segment small">
          <p class="error"> {data.error} </p>
        </section>
      {/if}
    </SidebarLayout>
  </div>
</main>
