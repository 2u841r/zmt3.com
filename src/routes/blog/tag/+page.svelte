<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import Hero from "$lib/components/Hero.svelte";
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";

  const { allTagsData } = data;
  export let message =
    allTagsData?.length === 0
      ? `No Tag Found`
      : allTagsData?.length === 1
        ? `Only ${allTagsData?.length} Tag`
        : `All ${allTagsData?.length} Tags`;
</script>

<SEO pageTitle={data.title} />
<main>
  <div>
    <SidebarLayout>
      {#if !data.error}
        <Hero title={message} />
        <section class="segment">
          {#each allTagsData as tag}
            <a class="post" href={`/blog/tag/${tag.slug}`}>
              <h3>{tag.name}</h3>
              <time
                >{tag.count}
                {#if tag.count < 2}
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
        <p class="error"> {data.error} </p>
      </section>
      {/if}
    </SidebarLayout>
  </div>
</main>
