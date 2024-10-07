<script>
  /** @type {import('./$types').PageData} */
  import SidebarLayout from "$lib/components/SidebarLayout.svelte";
  import SEO from "$lib/components/SEO.svelte";

  // export let data;
</script>

<SEO pageTitle="About Me" />
<main>
  <div>
    <SidebarLayout>
      <div class="hero">
        <h1>About Me</h1>
      </div>
      <section class="segment small">
        <div class="post-content">
          <p>Hey, I'm Zubair. I'm a MERN Stack Developer.</p>
          <p>
            This is my spot on the web for writing, projects, tutorials,
            and anything else I want to put out there. Check out the blog, or
            take a look at the projects page to see a highlight of my
            open-source work.
          </p>
          <p>
            Feel free to contact me by email at <a
              href="mailto:info+ziz@zmt3.com">info+ziz@zmt3.com</a
            > to say hi!
          </p>
          <h2 id="tools">Tools</h2>
          <h3 id="software">Software</h3>
          <ul>
            <li><strong>Coding:</strong> VS Code</li>
            <li>
              <strong>Theme:</strong> Dark Modern &gt; One Dark &gt; Github Dark
            </li>
          </ul>
          <h3 id="hardware">Hardware</h3>
          <ul>
            <li><strong>CPU:</strong> Intel(R) Core(TM) i5-9400F</li>
            <li><strong>GPU:</strong> AMD Radeon RX 580 2048SP</li>
            <li><strong>Monitor:</strong> LG 22MK430H-B 22"</li>
            <li><strong>RAM:</strong> 16 GB</li>
            <li><strong>Keyboard:</strong> Redragon Castor K631</li>
          </ul>
          <h3 id="online-tools">Online Tools</h3>
          <!-- - [squoosh](https://squoosh.app/) - Image Size Reducer -->
          <ul>
            <li>
              <a href="https://squoosh.app/" target="_blank"> Squoosh </a> - image
              size reducer
            </li>
            <li>
              <a href="https://download-directory.github.io/" target="_blank">
                GH directory
              </a> - github directory downloader
            </li>
          </ul>
          <h2 id="favorite-quotes">
            Favorite Quotes
          </h2>
          <blockquote>
            <ul>
              <li>
                “My mother always used to say: The older you get, the better you
                get, unless you’re a banana.” —Rose (Betty White)
              </li>
              <li>
                “You will never meet a hater doing better than you.” — David
                Goggins
              </li>
              <li>
                Give once: you elicit appreciation; Give twice: you create
                anticipation; Give 3 times: you create expectation; Give 4
                times: it becomes entitlement; Give 5 times: you establish
                dependency.
              </li>
              <li>
                Money can buy a house, but not a home. Money can buy a bed, but
                not sleep. Money can buy a clock, but not time. Money can buy a
                book, but not knowledge. Money can buy food, but not an
                appetite. Money can buy friends, but not love
              </li>
            </ul>
          </blockquote>
        </div>
      </section>
    </SidebarLayout>
  </div>
</main>
