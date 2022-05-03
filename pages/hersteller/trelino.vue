<template>
  <div>
    <ManufacturerHeader
      productName="Trelino"
      textContent="Trelino stellt Campingtoiletten her, welche sich für den mobilen Einsatz eignen. Die Trockentrenntoiletten eignen sich insbesondere für Camper, VW-Bus, Mercedes V-Klasse, Wohnmobile und überall dort, wo wenig Platz vorhanden ist."
      productImage="/assets/images/hersteller/trelino.webp"
      websiteUrl="https://www.trelino.com/de/"
    ></ManufacturerHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">Trelino</h2>

            <p class="mb-4">
              Trelino ist ein deutsches Unternehmen. Die Produktion findet
              ebenfalls in Deutschland statt. Das Unternehmen hat sich auf
              Trockentrenntoiletten spezialisiert, die für den mobilen Einsatz
              gedacht sind. Die
              <NuxtLink
                to="/campingtoilette/"
                title="Alle Campingtoiletten im Überblick"
                >Campingtoiletten</NuxtLink
              >
              sind sehr klein, kompakt und leicht. Sie eignen sich hervorragend
              für Vans, VW-Bus, Mercedes V-Klasse, Wohnmobile oder überall, dort
              wo wenig Platz verfügbar ist.
            </p>

            <h5 class="mb-3 mt-5" id="unternehmen">Unternehmen</h5>

            <p>
              Die Trelino Produkte werden von der Camper Active GmbH in
              Düsseldorf produziert. Die Adresse des Online Shops lautet:
              www.trelino.com. Vertrieben werden die Campingtoiletten aber auch
              von der Webseite: www.meinetrenntoilette.de. Geschäftsführer der
              Camper Active GmbH ist Dipl.-Ing. Markus Becker. Dieser Betrieb
              zunächst den Blog meinetrenntoilette.de und entwickelte
              darauffolgend seine eigenen Produkte. Fokus von Trelino ist es,
              Trockentrenntoiletten herzustellen die überall ohne Wasser und
              Chemie nutzbar sind, wie z.B. auf Campingplätzen, in Wohnmobilen,
              Camper, Vans, usw.
            </p>

            <h5 class="mb-3 mt-5" id="nachhaltigkeit">Nachhaltigkeit</h5>

            <p>
              Trelino selbst hat den Ansatz, die Natur und die wertvollen
              Ressourcen unserer Erde zu schonen. Daher entwickelt Trelino
              Campingtoiletten, die weder Wasser noch Chemie benötigen. In der
              Produktion werden recyclebare Materialien wie Polyehtylen
              verwendet. Der Deckel der Trockentrenntoiletten besteht aus Holz.
              Der Korpus besteht leider, wie im Vergleich zu den
              <NuxtLink
                to="/hersteller/trobolo/"
                title="Alle Produkte von TROBOLO im Überblick"
                >Produkten von TROBOLO</NuxtLink
              >, nicht immer nur aus Holz, sondern halt auch aus Kunststoff.
            </p>

            <p>
              Die Campingtoiletten von Trelino werden in Deutschland produziert
              und haben somit kurze Lieferwege, was wiederum der
              Wertschöpfungskette entgegenkommt.
            </p>
            <p>
              Durch den Trenneinsatz in der Campingtoilette wird eine einfache
              Kompostierung ermöglicht.
            </p>

            <h5 class="mb-3 mt-5" id="produkte">Produkte</h5>

            <p>
              Trelino's Sortiment unterliegt grundlegend einem Model, welches in
              unterschiedlichen Ausführungen und Größen kommt. So ist die mobile
              Trockentrenntoilette in der Größe S bis L verfügbar und wird aus
              unterschiedlichen Materialien angefertigt, wie Birkenholz oder
              Kunststoff (Polyethylen). Polyethylen ist recyclebar, sowie
              chemie- und säurebeständig.
            </p>
            <p>
              Die Produkte von Trelino sind in unterschiedlichen Farben wie
              Weiss oder Anthrazit erhältlich. Die mobilen Campingtoiletten von
              Trelino sind formschön und kompakt. Es sind ebenfalls DIY Kits
              vorhanden mit denen du deine Trenntoilette selber bauen kannst.
            </p>

            <h5 class="mb-3 mt-5" id="preis-leistung">
              Preis-Leistungs-Verhältnis
            </h5>

            <p>
              In unserem Testbericht über die
              <NuxtLink to="/trelino-l/" title="Trelino L mit HPL Veredelung"
                >Trelino L mit HPL Veredelung</NuxtLink
              >
              hat die Campingtoilette in der Größe L sehr gut abgeschnitten und
              erhielt 4 von 5 Sternen. Das allgemeine Preis-Leistungs-Verhältnis
              von Trelino ist gut.
            </p>

            <h5 class="mb-3 mt-5" id="fazit">Fazit</h5>

            <p>
              Wer eine besonders kompakte und einfache Trockentrenntoilette
              benötigt die im Camper, Van, Bulli, Wohnwagen oder beim Camping
              eingesetzt werden kann, sollte den Kauf eines Produktes von
              Trelino in Erwägung ziehen.
            </p>

            <a
              class="btn btn-primary py-3 px-5 mt-5"
              target="_blank"
              rel="nofollow noopener"
              href="https://www.trelino.com/de/"
              >zu Trelio</a
            >
          </div>
          <div class="col-lg-4 fadeInUp">
            <ManufacturerCard :manufacturer="manufacturer" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.trelino.com/de/"
                style="display: block; width: 100%"
                >Trelino Online Shop</a
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
  name: "Trelino",
  head: {
    title: "Trelino - Hersteller für Campingtoiletten",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Testbericht zu Trelino. Trelino stellt Campingtoiletten her, welche sich für den mobilen Einsatz wie im Camper, VW-Bus, V-Klasse oder Wohnmobil eignen.",
      },
    ],
  },
  asyncData() {
    let brand = "Trelino";
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
          name: "Trelino",
          description:
            "Trelino stellt kompakte Campingtoiletten mit Trennsystem her. Sie eignen sich ideal für Orte an denen wenig Platz verfügbar ist wie Camper, VW-Bus, Mercedes V-Klasse oder Wohnmobil. Die Produkte benötigen kein Wasser oder Chemie.",
          telephone: "+4921194256059",
          url: "https://www.trockentrenntoilette.net/hersteller/trelino/",
          logo: "https://www.trockentrenntoilette.net/assets/images/logos/trelino.webp",
          image:
            "https://www.trockentrenntoilette.net/assets/images/hersteller/trelino.webp",
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.4",
            reviewCount: "112",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Erkrather Str. 228A",
            addressLocality: "Düsseldorf",
            postalCode: "40233",
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
                  "https://www.trockentrenntoilette.net/hersteller/trelino/",
                name: "Trelino",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
