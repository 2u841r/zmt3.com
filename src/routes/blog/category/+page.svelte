<script>
  /** @type {import('./$types').PageData} */
  import Hero from "$lib/components/Hero.svelte";
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";

  export let data;
  const { allCategoriesData } = data;
  export let message =
    allCategoriesData?.length === 0
      ? "No Category Found"
      : allCategoriesData?.length === 1
        ? `Only ${allCategoriesData?.length} Category`
        : `All ${allCategoriesData?.length} Categories`;
</script>

<SEO pageTitle={data?.title} />
<main>
  <div>
    <SidebarLayout>
      {#if !data?.error}
        <Hero title={message} />
        <section class="segment">
          {#each allCategoriesData as categorty}
            <a class="post" href={`/blog/category/${categorty.slug}`}>
              <h3>{categorty.name}</h3>
              <time
                >{categorty.count}
                {#if categorty.count < 2}
                  post
                {:else}
                  posts
                {/if}</time
              >
            </a>
          {/each}
        </section>
      {:else}
        <section class="segment small">
          <p class="error">{data.error}</p>
        </section>
      {/if}
    </SidebarLayout>
  </div>
</main>
