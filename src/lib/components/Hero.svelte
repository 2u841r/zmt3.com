<script>
  export let title = "";
  export let subTitle = "";
  export let highlight = "";
  export let index = false;
</script>

<header class={`hero ${index ? "index" : ""}`}>
  {#if subTitle}
    <div class="sub-title">
      {#if highlight}
        <span class="highlight">{highlight}</span>
      {/if}
      {subTitle}
    </div>
  {/if}
  {#if title}
    <h1>{title}</h1>
  {/if}
  <slot />
</header>
