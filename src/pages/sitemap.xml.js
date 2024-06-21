function generateSiteMap(resultServices, resultCatalog, resultTutorials) {
  const URL_PRINTCART = "https://printcart.com/";
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!--We manually set the two URLs we know already-->
      <url>
        <loc>https://printcart.com</loc>
      </url>
      <url>
        <loc>https://printcart.com/catalog</loc>
      </url>
      <url>
        <loc>https://printcart.com/tutorials</loc>
      </url>
      <url>
        <loc>https://printcart.com/services</loc>
      </url>
      ${
        resultServices &&
        resultServices?.data
          .map((item) => {
            return `<url>
            <loc>${`${URL_PRINTCART}service/${item?.attributes?.alias}`}</loc>
          </url>`;
          })
          .join("")
      }
      ${
        resultCatalog &&
        resultCatalog?.products
          .map((item) => {
            return `<url>
            <loc>${`${URL_PRINTCART}product/${item?.id}`}</loc>
        </url>`;
          })
          .join("")
      }
      ${
        resultTutorials &&
        resultTutorials?.data
          .map((items) => {
            return `<url>
            <loc>${`${URL_PRINTCART}tutorial/${items?.attributes?.alias}`}</loc>
        </url>`;
          })
          .join("")
      }
      
    </urlset>
  `;
}
function SiteMap() {}
export async function getServerSideProps({ res }) {
  const URL_SERVICES = `https://data2.cloodo.com/api/services?populate=image&filters[$and][0][service_agency][$contains]=568427`;
  const URL_CATALOG = `https://podbackend-8wl1.onrender.com/admin/products?status=published`;
  const URL_TUTORIALS =
    "https://strapi4.cloodo.com/api/posts?filters[channels][name][$eq]=Printcart&pagination[pageSize]=100";
  const token = process.env.TOKEN_AUTH;
  const parameter = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  // We make an API call to gather the URLs for our site
  const fetchServices = fetch(URL_SERVICES);
  const fetchCatalog = fetch(URL_CATALOG, parameter);
  const fetchTutorials = fetch(URL_TUTORIALS);

  const [resServices, resCatalog, resTutorials] = await Promise.all([
    fetchServices,
    fetchCatalog,
    fetchTutorials,
  ]);
  const [resultServices, resultCatalog, resultTutorials] = await Promise.all([
    resServices.json(),
    resCatalog.json(),
    resTutorials.json(),
  ]);

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(
    resultServices,
    resultCatalog,
    resultTutorials
  );

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export const config = { runtime: "experimental-edge" };

export default SiteMap;
