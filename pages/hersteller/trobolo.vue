<template>
  <div>
    <ManufacturerHeader
      productName="TROBOLO"
      textContent="TROBOLO ermöglicht eine autarke, komfortable und hygienische Toilettennutzung an nahezu jedem Ort und Einsatzgebiet."
      productImage="/assets/images/hersteller/trobolo.webp"
      websiteUrl="https://www.trobolo.com/de/"
    ></ManufacturerHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">TROBOLO</h2>
            <p class="mb-4">
              TROBOLO ist ein deutsches Unternehmen mit Produktionsstätte in
              Polen. Die Produktpalette von TROBOLO ist im Vergleich zu den
              anderen Herstellern recht vielfältig. So reichen die Produkte von
              mobilen Campingtoiletten bis hin zu Gartentoiletten in der Größe
              von DIXI Klos.
            </p>
            <p>
              Etabliert hat sich das Unternehmen vor allem aber durch autarke
              und umweltfreundliche Trockentrenntoiletten, welche für nahezu
              alle Einsatzgebiete handgefertigt hergestellt werden und optisch
              modern und ansprechend aussehen.
            </p>
            <p>
              Die Produkte von TROBOLO sind qualitativ sehr hochwertig,
              funktionieren ohne Wasser oder Chemie und sind für den
              umweltbewussten Menschen entwickelt worden.
            </p>

            <h5 class="mb-3 mt-5" id="unternehmen">Unternehmen</h5>

            <p>
              TROBOLO ist die Abkürzung von Trockenbiolokus, was im Grunde für
              "trockene Bio Toilette" steht. Gründer des Unternehmens ist
              Friedrich Lange, welcher zunächst eine Trockentrenntoilette aus
              seiner eigenen Notwendigkeit heraus entworfen hat. Auf seiner
              Europa und Afrika Reise mit seinem ausgebautem Mercedes 809 ist er
              stets auf dasselbe Problem gestoßen: Das Problem des
              Toilettengangs und die natürliche Entsorgung der Ausscheidungen.
            </p>
            <p>
              Das ist der Ursprung von TROBOLO. Heute ist der Betrieb ein
              mittelständiges Unternehmen, welches seine Produkte in bereits
              vielen Ländern wie Deutschland, Schweiz, Österreich, England,
              Spanien und Italien ausliefert.
            </p>

            <h5 class="mb-3 mt-5" id="nachhaltigkeit">Nachhaltigkeit</h5>

            <p>
              TROBOLO ist ein umweltfreundliches Unternehmen. Das verwendete
              Holz ist FSC-zertifiziert und stammt somit aus nachhaltiger und
              umweltgerechter Waldbewirtschaftung.
            </p>
            <p>
              Trockentrenntoiletten von TROBOLO kommen ohne Wasser oder Chemie
              aus. Ebenfalls erhältlich sind ökologisch abbaubare Inlays aus
              Maisstärke.
            </p>
            <p>
              Da die Ausscheidungen nach einen Toilettengang kompostiert werden
              können, bietet TROBOLO auch hierfür Komposter an. Diese sind
              ebenfalls aus FSC-zertifiziertem Holz hergestellt. Somit können
              die Hinterlassenschaften kompostiert werden und der
              nährstoffreiche Kompost kann der Natur zurückgeführt werden.
            </p>

            <h5 class="mb-3 mt-5" id="produkte">Produkte</h5>

            <p>
              TROBOLO stellt Produkte für den Innen- und Außenbereich wie im
              Haus oder Garten her, aber auch den mobilen Einsatz wie Camper,
              Vans oder Wohnmobile.
            </p>
            <p>
              Die Produkte von TROBOLO sehen optisch sehr ansprechend aus und
              werden aus Kiefernholz handgefertigt. In unseren Testberichten wie
              über die
              <NuxtLink to="/trobolo-terabloem/" title="TROBOLO TeraBlœm"
                >TeraBlœm</NuxtLink
              >
              oder die
              <NuxtLink to="/trobolo-kersaboem/" title="TROBOLO KersaBœm"
                >KersaBœm Gartentoilette</NuxtLink
              >
              zeigten die Produkte stets viel Liebe zum Detail.
            </p>
            <p>
              Ebenfalls stellt TROBOLO sämtliches Zubehör her wie Einstreu aus
              Eigenproduktion, Trenneinsätze, Komposter, Trenntoiletten
              Bausätze, Inlays oder elektrische Abluftsysteme.
            </p>

            <h5 class="mb-3 mt-5" id="preis-leistung">
              Preis-Leistungs-Verhältnis
            </h5>

            <p>
              In unseren Tests über etliche Produkte von TROBOLO erwies sich das
              Preis-Leistungs-Verhältnis stets als ausgezeichnet. Die
              verwendeten Materialien sind nachhaltig, umweltbewusst und haben
              eine sehr hohe Langlebigkeit.
            </p>

            <h5 class="mb-3 mt-5" id="fazit">Fazit</h5>

            <p>
              TROBOLO ist ein umweltfreundliches, nachhaltiges Unternehmen
              welches qualitative, handgefertigte Trockentrenntoiletten
              herstellt. Die Auswahl an Zubehör ist vielfältig und das
              Preis-Leistungs-Verhältnis ist ausgezeichnet.
            </p>

            <a
              class="btn btn-primary py-3 px-5 mt-5"
              target="_blank"
              rel="nofollow noopener"
              href="https://www.trobolo.com/de/"
              >zu TROBOLO</a
            >
          </div>
          <div class="col-lg-4 fadeInUp">
            <ManufacturerCard :manufacturer="manufacturer" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                target="_blank"
                rel="nofollow noopener"
                href="https://www.trobolo.com/de/"
                style="display: block; width: 100%"
                >TROBOLO Online Shop</a
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
  name: "TROBOLO",
  head: {
    title: "TROBOLO - Hersteller für autarke Trockentrenntoiletten",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Testbericht zu TROBOLO. TROBOLO stellt autarke, handgefertige Trockentrenntoiletten für's Haus, den Garten, Camper und Wohnmobile her.",
      },
    ],
  },
  asyncData() {
    let brand = "TROBOLO";
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
          name: "TROBOLO",
          description:
            "TROBOLO ist ein Hersteller von Trockentrenntoiletten für den Innen- und Außenbereich.",
          telephone: "+4951151510816",
          url: "https://www.trockentrenntoilette.net/hersteller/trobolo/",
          logo: "https://www.trockentrenntoilette.net/assets/images/logos/trobolo.png",
          image:
            "https://www.trockentrenntoilette.net/assets/images/hersteller/trobolo.webp",
          priceRange: "$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "186",
          },
          address: {
            "@type": "PostalAddress",
            streetAddress: "Vahrenwalder Str. 269A",
            addressLocality: "Hannover",
            postalCode: "30179",
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
                  "https://www.trockentrenntoilette.net/hersteller/trobolo/",
                name: "TROBOLO",
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
