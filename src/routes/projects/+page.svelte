<script>
  /** @type {import('./$types').PageData} */
  export let data;
  import projectList from "$lib/myData/projectsList";
  import ExternalLinkIcon from "$lib/components/ExternalLinkIcon.svelte";
  import SEO from "$lib/components/SEO.svelte";
</script>

<SEO pageTitle={data.title} />
<main>
  <div>
    <div class="container">
      <header class="hero">
        <h1>My Projects</h1>
      </header>
    </div>
    <section class="segment">
      <div class="container">
        <div class="project-preview">
          {#each projectList as project}
            <div class="card anchored large">
              <div>
                <time> {project.date} </time>
                <a
                  class="card-header"
                  href={`https://github.com/2u841r/${project.slug}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.name}
                </a>
                <p>{project.tagline}</p>
              </div>

              <div class="links anchored">
                {#if project.writeup}
                  <a href={project.writeup} class="button small flex">
                    Article
                  </a>
                {/if}
                <a
                  class="button small flex"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo <ExternalLinkIcon />
                </a>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </div>
</main>
