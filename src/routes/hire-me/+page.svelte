<script>
  /** @type {import('./$types').PageData} */
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";
  import Services from "../../lib/components/Services.svelte";
  export let data;
</script>

<SEO pageTitle="Hire Me" />
<div>
  <div class="container">
    <div class="hero">
      <h1>Hire Me</h1>
    </div>
    <br />
    <p>
      Feel free to contact me by email at <a href="mailto:info+hire@zmt3.com"
        >info+hire@zmt3.com</a
      >
    </p>

    <section class="segment small">
      <div class="post-content">
        <Services />
      </div>
    </section>
  </div>
</div>
