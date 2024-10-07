<script>
  import PostSidebar from "$lib/components/PostSidebar.svelte";
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";

  import { page } from "$app/stores";
  export let data;
  const { post, categories, tags } = data;
  let postURL; 
  $: postURL = $page.url.href;

  let errorMessage = null;
  if (data?.error) {
    errorMessage = data.error;
  }
</script>

<SEO postNode={post} postSEO />
<main>
  <SidebarLayout>
    {#if data?.error}
      <section class="segment small">
        <p class="error">{data.error}</p>
        <p class="error"> or Maybe there's a typo in link. </p>
      </section>
    {:else}
      <div class="post-header medium width">
        <h1>{post.title.rendered}</h1>
      </div>
      <section class="segment small">
        <div class="post-content">
          {@html post.content.rendered}
        </div>
      </section>
      <PostSidebar {categories} {tags} date={post.date} />
    {/if}
  </SidebarLayout>
</main>
