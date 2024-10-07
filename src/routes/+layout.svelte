<script>
  import Navigation from "$lib/components/Navigation.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import SEO from "$lib/components/SEO.svelte";

  import { page, navigating } from "$app/stores";

  import { Circle, Stretch } from "svelte-loading-spinners";
  import { onMount } from "svelte";

  let time;
  let Loading;

  const updateLoadingComponent = () => {
    time = new Date().getSeconds();
    if (time < 30) {
      Loading = Circle;
    } else {
      Loading = Stretch;
    }
  };

  onMount(() => {
    updateLoadingComponent();
    const interval = setInterval(updateLoadingComponent, 1000);
    return () => clearInterval(interval);
  });

  let siteTitle = "Zubair";
  //  Reactive statement to update siteTitle whenever page data changes
  $: siteTitle = $page.data.title
    ? `${$page.data.title} | Zubair IZ`
    : "Zubair";

  /** @type {import('./$types').LayoutData} */
  // export let data;
</script>

<!-- <svelte:head>
  <title>{siteTitle}</title>
</svelte:head> -->

<div id="layout" class="layout">
  <Navigation />
  <slot />
  {#if $navigating}
    <div class="loading">
      <svelte:component
        this={Loading}
        size="100"
        color="#FF3E00"
        unit="px"
        duration="1s"
      />
    </div>
  {/if}
  <Footer />
</div>

<style>
  .layout {
    position: relative;
  }

  .loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 25vw;
    height: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .loading > :global(svg) {
    width: 100%;
    height: 100%;
  }
</style>
