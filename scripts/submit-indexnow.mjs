const siteUrl = "https://www.sucesioneslaplata.com";
const host = "www.sucesioneslaplata.com";
const key = "65f45f1d9b164085b0d9f8250cce90c0";
const keyLocation = `${siteUrl}/${key}.txt`;

const response = await fetch(`${siteUrl}/sitemap.xml`, {
  headers: { "user-agent": "sucesioneslaplata-indexnow/1.0" },
});

if (!response.ok) {
  throw new Error(`No se pudo descargar el sitemap: HTTP ${response.status}`);
}

const sitemap = await response.text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replaceAll("&amp;", "&"),
);

if (urlList.length === 0) {
  throw new Error("El sitemap no contiene URLs para notificar.");
}

const indexNowResponse = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation,
    urlList,
  }),
});

if (![200, 202].includes(indexNowResponse.status)) {
  const body = await indexNowResponse.text();
  throw new Error(
    `IndexNow rechazó la notificación: HTTP ${indexNowResponse.status} ${body}`,
  );
}

console.log(
  `IndexNow recibió ${urlList.length} URLs (HTTP ${indexNowResponse.status}).`,
);
