<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">Innenbereich</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
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
  </div>
</template>

<script>
import products from "~/assets/products.json";

export default {
  name: "innenbereich",
  head: {
    title: "Trockentrenntoiletten Innenbereich - Testsieger und Produkte",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Finde die richtige Trockentrenntoilette für's Haus, TinyHouse oder Gartenhaus. Produkte, Anbieter und Testberichte. Vor dem Kauf informieren.",
      },
    ],
  },
  asyncData() {
    let category = "Innenbereich";
    return {
      products: products.filter((item) => item.category === category),
    };
  },
};
</script>
