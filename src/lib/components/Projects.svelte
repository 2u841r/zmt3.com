<script>
  import projectList from "$lib/myData/projectsList";
  import Heading from "./Heading.svelte";
</script>

<section class="segment large">
  <Heading title="Projects" slug="/projects" />
  <div class="post-preview">
    {#each projectList as project}
      {#if project.highlight}
        <div class="anchored card">
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

          <div class="anchored links">
            {#if project.writeup}
              <a href={project.writeup} class="button flex"> Article </a>
            {/if}

            {#if project.url !== "#"}
              <a
                class="button flex"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            {/if}
          </div>
        </div>
      {/if}
    {/each}
  </div>
</section>
