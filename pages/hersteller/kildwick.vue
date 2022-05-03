<template>
  <div>
    <ManufacturerHeader
      productName="Kildwick"
      textContent="Kildwick ist ein Hersteller für kompakte Trockentrenntoiletten."
      productImage="/assets/images/hersteller/kildwick.webp"
      websiteUrl="https://www.kildwick.com/"
    ></ManufacturerHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">Kildwick</h2>
            <p class="mb-4">
              Kildwick ist ein junges, deutsches Unternehmen mit einem Ursprung
              in Großbritannien. Im Grunde genommen bietet Kildwick drei
              Trockentrenntoiletten an, die EasyLoo, die FancyLoo und die
              <NuxtLink to="/kildwick-miniloo/" title="Kildwick MiniLoo im Test"
                >MiniLoo</NuxtLink
              >, welche aufgrund ihrer Kompaktheit und dem geringen Gewicht
              ideal für mobile Einsatzzwecke geeignet sind.
            </p>

            <h5 class="mb-3 mt-5" id="unternehmen">Unternehmen</h5>

            <p>
              Der Ursprung von Kildwick liegt in Großbritannien und ist nur
              wenige Jahre zurück. Ziel des einst kleinen Teams war es, einen
              Trockentrenntoiletten-Einsatz zu entwickeln welcher robust, aber
              auch kompakt ist. Nach vielen Experimenten hat es das Team
              geschafft, eine nachhaltige Trockentrenntoilette zu entwickeln die
              klein und leicht ist und sich somit ideal für den mobilen
              Einsatzzweck eignet.
            </p>

            <h5 class="mb-3 mt-5" id="nachhaltigkeit">Nachhaltigkeit</h5>

            <p>
              Kildwick produziert Trockentrenntoiletten die umweltfreundlich,
              komfortabel, günstig und optisch gutaussehend sind. Das verwendete
              Material ist grundlegend unbehandeltes Birkensperrholz.
              Sperrholzplatten haben den Vorteil extrem fest und Stabil in ihrer
              Form zu sein. Dadurch haben die Trockentrenntoiletten eine hohe
              Langlebigkeit.
            </p>
            <p>
              Durch das natürliche Holz, der umweltbewusste Abbau und der
              Grundidee einer Trockentrenntoilette mit dem Hintergedanken der
              Kompostierung und des Wassererparnisses, erreicht Kildwick eine
              hohe Nachhaltigkeit.
            </p>

            <h5 class="mb-3 mt-5" id="produkte">Produkte</h5>

            <p>
              Kildwick bietet drei unterschiedliche Trockentrenntoiletten an:
              Die EasyLoo, welche als Erscheinung einer klassischen Toilette am
              nächsten kommt, die FancyLoo, welche als Premium Model daherkommt,
              oder die
              <NuxtLink to="/kildwick-miniloo/" title="Kildwick MiniLoo im Test"
                >MiniLoo</NuxtLink
              >, welche für den mobilen Einsatzzweck wie Camper, Vans,
              Wohnwagen, Tiny House oder Gartenhaus konzipiert worden ist.
            </p>

            <h5 class="mb-3 mt-5" id="preis-leistung">
              Preis-Leistungs-Verhältnis
            </h5>

            <p>
              Das Preis-Leistungs-Verhältnis von Kildwick ist gut. Das per
              Lasercut geschnittene Birkensperrholz ist qualitativ gut
              verarbeitet worden. Ingesamt machen die Produkte von Kildwick
              einen qualitativen und nachhaltigen Eindruck und haben in unseren
              Tests stets gut abgeschnitten.
            </p>

            <h5 class="mb-3 mt-5" id="fazit">Fazit</h5>

            <p>
              Wer auf der Suche nach einer kompakten und gut verarbeiteten
              Trockentrenntoilette für Van, Wohnmobil, Garten oder TinyHouse
              ist, wird bei Kildwick sicher fündig.
            </p>

            <a
              class="btn btn-primary py-3 px-5 mt-5"
              target="_blank"
              rel="nofollow noopener"
              href="https://www.kildwick.com/"
              >zu Kildwick</a
            >
          </div>
          <div class="col-lg-4 fadeInUp">
            <ManufacturerCard :manufacturer="manufacturer" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.kildwick.com/"
                style="display: block; width: 100%"
                >Kildwick Online Shop</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <!-- Products Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div
            v-for="product in products"
            :key="product"
            class="col-lg-4 fadeInUp"
          >
            <ProductItem :product="product" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
    <!-- Products End -->
  </div>
</template>

<script>
import products from "~/assets/products.json";
import manufacturer from "~/assets/manufacturer.json";

export default {
  name: "Kildwick",
  head: {
    title: "Kildwick - Hersteller für Trockentrenntoiletten",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Testbericht zu Kildwick. Kildwick ist ein Hersteller für Trockentrenntoiletten die sich vor allem für den mobilen, wasserlosen Einsatz eignen.",
      },
    ],
  },
  asyncData() {
    let brand = "Kildwick";
    return {
      products: products.filter((item) => item.brand === brand),
      manufacturer: manufacturer.find((item) => item.brand === brand),
    };
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org",
          "@type": "Store",
          name: "Kildwick",
          description:
            "Kildwick ist ein Hersteller für Trockentrenntoiletten die sich vor allem für den mobilen, wasserlosen Einsatz eignen.",
          telephone: "+4934135521876",
          url: "https://www.trockentrenntoilette.net/hersteller/kildwick/",
          logo: "https://www.trockentrenntoilette.net/assets/images/logos/kildwick.png",
          image:
            "https://www.trockentrenntoilette.net/assets/images/hersteller/kildwick.webp",
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.2",
            reviewCount: "31",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Haferkornstrasse 15",
            addressLocality: "Leipzig",
            postalCode: "04129",
            addressCountry: {
              "@type": "Country",
              name: "Deutschland",
            },
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": "https://www.trockentrenntoilette.net/",
                name: "Trockentrenntoiletten",
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id":
                  "https://www.trockentrenntoilette.net/hersteller/kildwick/",
                name: "Kildwick",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
