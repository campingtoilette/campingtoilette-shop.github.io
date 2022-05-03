<template>
  <div>
    <ZubehoerProductHeader
      productName="TROBOLO Einstreu im Test"
      textContent="Der Trockentoiletten Einstreu von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. TROBOLO stellt den Einstreu selbst her. Er dient der Geruchsunterdrückung für Trockentrenntoiletten."
      :productImage="product.image"
    ></ZubehoerProductHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4">{{ product.name }}</h2>
            <p class="mb-4">
              Der Einstreu von TROBOLO dient dem Einsatz in einer
              Trockentrenntoilette. Er dient der Bindung der Feuchtigkeit und
              unterdrückt die Geruchsentwicklung. TROBOLO stellt den Einstreu
              selbst aus Holzspänen her. Der Einstreu besteht aus 80 % Kiefer
              und 20 % Erle und duftet angenehm nach Holz.
            </p>
            <p class="mb-4">
              Hilfreich ist der Einstreu vor allem dann, wenn man eine kleine
              Trockentrenntoilette oder Campingtoilette besitzt, da die
              Luftzirkulation geringer ist. Weiterhin macht Einstreu in wärmeren
              Gebieten Sinn, vor allem weil die Geruchsentwicklung aufgrund der
              höheren Temperaturen stärker ist.
            </p>
            <p class="mb-4">
              Der Einstreu von TROBOLO umfasst 25 Liter. Er wird in einem
              ökologischen Kraftpapiersack geliefert. Die Nutzung soll laut
              TROBOLO für 85-115 Nutzungen ausreichen. In unserem Test erwies
              sich aber bereits eine kleine Menge Einstreu als
              Geruchsneutralisator, sodass wir die Nutzungsanzahl höher
              einschätzen würden. Unterstützt wird die geringere Notwendigkeit
              des Materials vor allem aber durch den angenehmen Duft nach Holz.
            </p>
            <div class="row gy-2 gx-4 mb-5 mt-5">
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Einstreu aus 80%
                  Kiefer und 20% Erle
                </p>
                <div class="col-12">
                  <p class="mb-0">
                    <i class="fa fa-check text-info me-2"></i>25 Liter Einstreu
                  </p>
                </div>
              </div>
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>85 - 115 Nutzungen
                </p>
              </div>
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Holzduft
                </p>
              </div>
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Packung besteht aus
                  ökologischem Kraftpapiersack
                </p>
              </div>
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Bindet Feuchtigkeit
                </p>
              </div>
              <div class="col-12">
                <p class="mb-0">
                  <i class="fa fa-check text-info me-2"></i>Unterdrückt die
                  Geruchsentwicklung
                </p>
              </div>
            </div>
            <a
              class="btn btn-primary py-3 px-5"
              target="_blank"
              rel="nofollow noopener"
              :href="this.product.shopLink"
              >Bestellen</a
            >
          </div>
          <div class="col-lg-4 fadeInUp">
            <ZubehoerProductCard :product="product" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                target="_blank"
                rel="nofollow noopener"
                :href="this.product.shopLink"
                style="display: block; width: 100%"
                >TROBOLO Online Shop</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
import products from "~/assets/einstreu.json";

export default {
  name: "TROBOLO Einstreu",
  head: {
    title: "TROBOLO Einstreu im Test",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Der Einstreu für Trockentrenntoiletten von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. Wir testen den Einstreu aus der Eigenproduktion von TROBLO.",
      },
    ],
  },
  asyncData: () => {
    return {
      product: products.find((item) => item.name === "TROBOLO Einstreu"),
    };
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          name: this.product.name,
          image: [
            "https://www.trockentrenntoilette.net/assets/images/zubehoer/einstreu/trobolo-einstreu.webp",
          ],
          description:
            "Der Einstreu für Trockentrenntoiletten von TROBOLO besteht zu 80% aus Kiefer und 20% aus Erle. Lieferung im ökologischen Kraftpapiersack",
          sku: this.product.sku,
          mpn: this.product.mpn,
          brand: {
            "@type": "Brand",
            name: this.product.brand,
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: String(this.product.stars),
              bestRating: String(this.product.stars),
            },
            author: {
              "@type": "Organization",
              name: "Trockentrenntoilette.net",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(this.product.ratingValue),
            reviewCount: String(this.product.reviewCount),
          },
          offers: {
            "@type": "Offer",
            url: "https://www.trockentrenntoilette.net/zubehoer/einstreu/trobolo-einstreu/",
            priceCurrency: "EUR",
            price: String(this.product.schemaPrice),
            priceValidUntil: "2024-11-20",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
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
                  "https://www.trockentrenntoilette.net/zubehoer/einstreu/trobolo-einstreu/",
                name: this.product.name,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
