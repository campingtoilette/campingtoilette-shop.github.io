<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">Einstreu für die Trockentrenntoilette</h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            v-for="product in products"
            :key="product"
            class="col-lg-4 fadeInUp"
          >
            <ZubehoerProductItem :product="product" class="mt-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/einstreu.json";

export default {
  name: "einstreu",
  head: {
    title: "Einstreu für die Trockentrenntoilette",
    meta: [
      {
        hid: "description",
        name: "description",
        content:
          "Das richtige Einstreu für die Trockentrenntoilette. Markenprodukte im Test: Material, Geruchsentwicklung, Nutzungsanzahl. Produktvergleich und Empfehlungen.",
      },
    ],
  },
  asyncData() {
    return {
      products,
    };
  },
};
</script>
