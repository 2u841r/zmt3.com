<script>
  import services from "$lib/myData/services";
  //   import Heading from "./Heading.svelte";
</script>

<section class="segment">
  <!-- <Heading title="Services" /> -->
  <h2>Services</h2>
  <div class="post-preview">
    {#each services as service}
      <div class="anchored card">
        <div>
          <!-- <a class="card-header" style="text-decoration: none" href="/hire-me">
            {service.name}
          </a> -->
          <h1> {service.name}</h1>
          {#if service.for !== "Any"}
            <p>{service.for}</p>
          {/if}
          <!-- <br /> -->
        </div>
        <div class="anchored links">
          <time> {service.fee}</time>
        </div>
      </div>
    {/each}
  </div>
  <br />

  <p>Please Notice</p>
  <ul>
    <li>All websites are Responsive.</li>
    <li>SEO Friendly + Speed Optimized</li>
    <li>Domain, Hosting / VPS Not Included.</li>
    <li>3 Page per website, then $5-20 per page.</li>
  </ul>
</section>
