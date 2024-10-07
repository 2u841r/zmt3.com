<script>
  export let title = "";
  export let description = "";
  export let slug = "";
</script>

<h2 class="home-heading">
  <div>
    <div class="title">{title}</div>
    {#if description}
      <div class="description">{description}</div>
    {/if}
  </div>
  {#if slug}
    <a class="button" href={slug}> View all </a>
  {/if}
</h2>
