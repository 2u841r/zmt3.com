<script>
  import config from "$lib/myData/config";
  import { page } from "$app/stores";
  import { stripHtmlTags, trimDescription } from "$lib/util/helpers.js";

  export let pageTitle = "";
  export let postNode = "";
  let postURL;
  $: postURL = $page.url.href;

  let currentUrl = "";

  currentUrl = $page.url.href
  // console.log($page.url.origin);
  // console.log($page.url);

  export let postSEO = "";

  let title = "";
  let description = "";
  // let image = config.siteUrl + config.siteLogo;
  let image = $page.url.origin+'/logo.png'
  // console.log(image)

  if (postSEO && postNode) {
    title = postNode.title.rendered + " | Zubair";
    description =
      trimDescription(stripHtmlTags(postNode.excerpt.rendered), 120) ||
      config.description;
    //   image = postNode.featured_media ? postNode.featured_media : config.siteUrl + config.siteLogo;
  } else {
    title = (pageTitle && `${pageTitle} | Zubair`) || `${config.siteTitle}`;
    description = config.description;
    //   image = config.siteUrl + config.siteLogo;
  }
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta name="image" content={image} />

  <meta property="og:url" content={currentUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="960" />
  <meta property="og:image:height" content="960" />
  <meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <!-- <meta name="twitter:text:title" content={title} /> -->
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
