<script>
  import config from "$lib/myData/config";
  import { onMount } from "svelte";
  import { page } from '$app/stores';

  export let postNode = "";
  export let postSEO = "";
  export let customDescription = "";

  export let title = "";
  export let description = "";
  export let postURL = "";
 
  let image = "";

  function removeLastSegment(url) {
    return url.replace(/\/[^\/]+\/?$/, "");
  }

  async function fetchFeaturedImageData(link) {
    const response = await fetch(
      `${link}/wp-json/wp/v2/media/${postNode.featured_media}`
    );
    const imageData = await response.json();
    return imageData.source_url;
  }

  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url: config.siteUrl,
      name: title,
      alternateName: title,
    },
  ];

  onMount(async () => {
    // if (postNode.featured_media) {
    //   try {
    //     const dataFeaturedIMG = await fetchFeaturedImageData(
    //       removeLastSegment(postNode.link)
    //     );
    //     image = dataFeaturedIMG;
    //   } catch (error) {
    //     console.error("Error fetching post data or featured image:", error);
    //   }
    // } else {
    //   image = config.siteUrl + config.siteLogo;
    // }

    image = config.siteUrl + config.siteLogo;

    if (postSEO) {
      title = postNode?.title?.rendered + ' | Zubair';
      description = postNode?.excerpt?.rendered;
      postURL; 
    } else {
      title = $page.data.title !== undefined && `${$page.data.title} | ${config.siteTitle}` || config.siteTitle;
      description = customDescription || config.description;
    }

    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": postURL,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url: config.siteUrl,
          name: title,
          alternateName: title,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
        }
      );
    } else {
      title =  title || config.title;
      description = config.description;
      image = config.siteUrl + config.siteLogo;
    }
  });
</script>

<svelte:head>
  <title> {title} </title>
  <meta name="description" content={description} />
  <meta name="image" content={image} />

  <meta property="og:url" content={postURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
  <meta property="og:image:width" content="960" />
  <meta property="og:image:height" content="960" />
  
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:text:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
</svelte:head>
