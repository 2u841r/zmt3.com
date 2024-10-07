<script>
  import { formatDate } from "$lib/util/helpers.js";
  export let tags;
  export let categories;
  export let date;
</script>

<aside class="post-sidebar">
  <div class="post-sidebar-card">
    <h2>About me</h2>
    <p>
      Hello and thanks for visiting! My name is{" "}
      <a href="/me">Zubair</a>, and this is my website and digital garden. 🌱
    </p>
    <p>
      I'm a MERN Stack Developer who makes open-source projects and writes about
      life, code, design, and more.
    </p>
  </div>

  <div class="post-sidebar-card">
    <h2>Post Details</h2>
    <ul>
      <li>
        <strong>Published: </strong>
        {formatDate(date, true)}
      </li>
      <li>
        <strong>Category: </strong>
        {#each categories as category}
          <a href={`/blog/category/${category.slug}`} class="tag">
            {category.name}
          </a>
        {/each}
      </li>
    </ul>

    <h2>Tags</h2>
    <div class="tags">
      {#each tags as tag}
        <a href={`/blog/tag/${tag.slug}`} class="tag"> {tag.name} </a>
      {/each}
    </div>
    <p style="margin-top: 1.5rem;">
      <!-- <a href="https://substack.com" target="_blank" rel="noopener noreferrer">
        Subscribe to the Newsletter
      </a> -->
    </p>
  </div>
</aside>
