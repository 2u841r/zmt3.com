<script>
  /** @type {import('./$types').PageData} */
  import SEO from "$lib/components/SEO.svelte";
  export let data;
</script>

<SEO pageTitle="Colophon" />
<div>
  <div class="container">
    <div class="hero">
      <h1>Colophon</h1>
    </div>
    <br />
    <p>
      A colophon is a page or section, like a footer, of a site that describes
      how the site is made, with what tools, supporting what technologies. See <a
        href="https://en.wikipedia.org/wiki/Colophon_(publishing)"
        target="_blank"
      >
        Wikipedia
      </a> for more details.
    </p>
    <p>
      ওয়েবসাইটটি Svelte দিয়ে তৈরি। ডিজাইন css দিয়ে, পরবর্তীতে tailwind ব্যবহার
      করার ইচ্ছা আছে। ব্লগপোস্টগুলোর জন্য আপাতত ওয়ার্ডপ্রেস ব্যবহার করছি,
      পরবর্তীতে মার্কডাউনে চলে যেতে পারি।
    </p>
    <p>এই সাইটের ক্লোন আলাদা ডোমেইনে আলাদাভাবে ডিপ্লয় করা আছে।</p>
    <table>
      <tr>
        <th> ডোমেইন </th>
        <th> ধরণ </th>
        <th> হোস্টিং </th>
      </tr>
      <tr>
        <td> <a href="/"> www.zmt3.com </a> </td>
        <td> SSG / Static </td>
        <td> Netlify </td>
      </tr>
      <tr>
        <td>
          <a href="https://ssr.zmt3.com" target="_blank"> ssr.zmt3.com </a>
        </td>
        <td> SSR </td>
        <td> Netlify </td>
      </tr>
      <tr>
        <td>
          <a href="https://deno.zmt3.com" target="_blank"> deno.zmt3.com </a>
        </td>
        <td> SSR </td>
        <td> Deno Deploy </td>
      </tr>
      <tr>
        <td>
          <a href="https://zubair.click" target="_blank"> zubair.click </a>
        </td>
        <td> SSG / Static </td>
        <td> AWS Amplify </td>
      </tr>
    </table>

    <section class="segment small">
      <div class="post-content"></div>
    </section>
  </div>
</div>
