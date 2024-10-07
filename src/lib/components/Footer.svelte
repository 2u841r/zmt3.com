<script>
  import netlify from "$lib/assets/netlify.png";
  import svelte from "$lib/assets/svelte.png";
  import github from "$lib/assets/nav-github.png";
  import floppy from "$lib/assets/nav-floppy.png";

  // const links = [
  //   { url: "https://substack.com", label: "Newsletter" },
  //   { url: "https://ko-fi.com/zubairibnzamir", label: "Ko-Fi" },
  //   { url: "https://zmt3.com/rss.xml", label: "RSS" },
  // ];
  const links = [
    { url: "/colophon", label: "Colophon" },
    { url: "https://ssr.zmt3.com", label: "SSR" },
    { url: "https://deno.zmt3.com", label: "Deno" },
    { url: "https://zubair.click", label: "Amplify" },
    { url: "https://zubairiz.com", label: "Vercel" },
  ];
  const madeWithLinks = [
    { url: "https://svelte.dev", label: "Svelte", icon: svelte },
    { url: "https://github.com/2u841r", label: "GitHub", icon: github },
    { url: "https://www.netlify.com", label: "Netlify", icon: netlify },
  ];
</script>

<footer class="footer">
  <section>
    <span>
      <img src={floppy} class="logo" alt="Zubair" />
    </span>
    <nav>
      {#each links as link}
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      {/each}
    </nav>

    <nav>
      {#each madeWithLinks as mwLink}
        <a
          class="button small"
          href={`${mwLink.url}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mwLink.icon} alt={mwLink.label} />
          <span> {mwLink.label} </span>
        </a>
      {/each}
    </nav>
  </section>
</footer>
