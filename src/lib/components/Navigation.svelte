<script>
  import blog from "$lib/assets/nav-blog.png";
  import search from "$lib/assets/nav-search.png";
  import floppy from "$lib/assets/nav-floppy.png";
  import projects from "$lib/assets/nav-projects.png";
  import moon from "$lib/assets/emoji/moon.png";
  import sun from "$lib/assets/emoji/sun.png";
  import github from "$lib/assets/nav-github.png";
  import { slugify } from "$lib/util/helpers.js";


  // DARK MODE
  import '$lib/styles/style.css';
  import '$lib/styles/new-moon.css';
  // import '$lib/styles/dark-mode.css'
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  // Create a writable store for theme
  const theme = writable('dark');
  let srcImage; 
  $: srcImage = $theme === 'dark' ? sun : moon;  
  // Update theme function
  const onUpdateTheme = () => {
    theme.update(currentTheme => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      window.localStorage.setItem('theme', newTheme);
      // console.log(newTheme )
      return newTheme;
    });
  };

  // Set theme from local storage on component mount
  onMount(() => {
    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      theme.set(savedTheme);
    }
  });



  const mainNavItems = [
    { url: "/", icon: floppy, label: "Home" },
    { url: "/me", icon: search, label: "About" },
    { url: "/blog", icon: blog, label: "Blog" },
    { url: "/projects", icon: projects, label: "Projects" },
  ];
  const socialNavItems = [
    { url: "https://github.com/2u841r", icon: github, label: "GitHub" },
  ];

</script>

<svelte:head>
  {#if $theme === 'dark'}
  <link rel="stylesheet" type="text/css" href="/dark-mode.css" />
  {/if}
</svelte:head>

<section class="navigation">
  <div class="container">
    <nav>
      {#each mainNavItems as navItem}
        <div class="nav-item-outer">
          <a href={navItem.url} class={`item home ${slugify(navItem.label)}`}>
            <img src={navItem.icon} alt="navIcon" class="nav-image" />
            <span> {navItem.label} </span>
          </a>
        </div>
      {/each}
      {#each socialNavItems as socialNavItem}
        <div class="nav-item-outer">
          <a href={socialNavItem.url} class="desktop-only item">
            <img src={socialNavItem.icon} alt="navIcon" class="nav-image" />
            <span> {socialNavItem.label} </span>
          </a>
        </div>
      {/each}
    </nav>
    <div class="theme-toggle">
      <button on:click={onUpdateTheme}>
        <img src={srcImage} alt="ThemeToggleButton" />
      </button>
    </div>
  </div>
</section>

