<script>
    import SidebarLayout from "$lib/components/SidebarLayout.svelte";
    import SEO from "$lib/components/SEO.svelte";
  </script>
  
  <SEO pageTitle="My Stack" />
  
  <main>
    <div>
      <SidebarLayout>
        <div class="hero">
          <h1>Stack</h1>
        </div>
        <section class="segment small">
          <div class="post-content">
            <style>
              /* Custom styles for this page */
              table tr td:first-child {
                word-break: normal; /* Override global word-break */
                white-space: nowrap; /* Prevent breaking of text */
              }
            </style>
            
            <table >
                <tr>
                  <th>Section</th>
                  <th>Mostly Use</th>
                  <th>Familiar</th>
                  <th>Example/Details/Comment</th>
                </tr>
                <tr>
                  <td>Frontend</td>
                  <td>React, Gatsby, Svelte</td>
                  <td>Vue</td>
                  <td>
                    1. Svelte – My this site<br>
                    2. Madrasah Management App – React
                  </td>
                </tr>
                <tr>
                  <td>Concepts</td>
                  <td>MPA, SPA, SSG, SSR</td>
                  <td>ISR, DSG</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Backend</td>
                  <td>Node, Deno, PM2</td>
                  <td>Bun</td>
                  <td>Deployed Discord bot on EC2 with PM2 and on Deno Deploy</td>
                </tr>
                <tr>
                  <td>db SQL</td>
                  <td>PostgreSQL</td>
                  <td>MySQL, MariaDB</td>
                  <td></td>
                </tr>
                <tr>
                  <td>DB No-SQL</td>
                  <td>MongoDB, Cloudflare KV, Deno KV</td>
                  <td>DynamoDB</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Headless CMS</td>
                  <td>WP, Strapi</td>
                  <td>Contentful</td>
                  <td>This site's backend is WordPress, now on lightsail, previously was on EC2.</td>
                </tr>
                <tr>
                  <td>CI/CD</td>
                  <td>Github Action</td>
                  <td>Bash</td>
                  <td>deno.zmt3.com on deno deploy with Github Action.</td>
                </tr>
                <tr>
                  <td>Testing</td>
                  <td>Jest</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>Monitoring</td>
                  <td>K6, Uptime Kuma</td>
                  <td></td>
                  <td>uk.zmt3.com self hosted.</td>
                </tr>
                <tr>
                  <td>Cloud Platform</td>
                  <td>Netlify, Vercel, AWS, GCP, Firebase, Cloudflare, Supabase, Appwrite</td>
                  <td>GCP, Azure</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Extras</td>
                  <td>
                    Bots (Discord, Telegram)<br>
                    VS Code Theme<br>
                    PGP encryption<br>
                    Basic Networking, FTP
                  </td>
                  <td></td>
                  <td>Bytes Newsletter Theme (vscode theme)</td>
                </tr>
                <tr>
                  <td>AWS</td>
                  <td>EC2, Lightsail, S3</td>
                  <td></td>
                  <td>Custom WordPress Installed and Migrated. also Discord bot with PM2</td>
                </tr>
                <tr>
                  <td>Git</td>
                  <td>Github, Gitlab</td>
                  <td>Bitbucket, CodeCommit, sr.ht</td>
                  <td></td>
                </tr>
              </table>
          </div>
        </section>
      </SidebarLayout>
    </div>
  </main>
  