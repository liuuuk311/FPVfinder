
export async function get() {
    // On the fly
    const data = await fetch(import.meta.env.VITE_API_URL + '/api/v1/sitemap/',
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    const results = await data.json();
    const body = render(results);

    const headers = {
        'Cache-Control': `max-age=0, s-max-age=${600}`,
        'Content-Type': 'application/xml',
    };
    return {
        body,
        headers,
    };
}

const render = (data) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
  >

  <url>
    <loc>https://fpvfinder.netlify.app</loc>
    <lastmod>${new Date(data[0].updated_at).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>https://fpvfinder.netlify.app/stores</loc>
    <lastmod>2022-03-31T00:00:00.000Z</lastmod>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>https://fpvfinder.netlify.app/en/support</loc>
    <lastmod>2022-03-31T00:00:00.000Z</lastmod>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>https://fpvfinder.netlify.app/it/supporta</loc>
    <lastmod>2022-03-31T00:00:00.000Z</lastmod>
    <changefreq>yearly</changefreq>
  </url>
    ${data.map((loc) => `<url>
        <loc>https://fpvfinder.netlify.app/search?q=${loc.query}</loc>
        <lastmod>${new Date(loc.updated_at).toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        </url>`
).join('')
    }
  </urlset>
  `;