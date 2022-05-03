<template>
  <!-- Testsieger Start -->
  <div class="container-xxl py-5" id="produkte">
    <div class="container">
      <div class="text-center fadeInUp">
        <div class="section-title bg-white text-center text-primary px-3 h6">
          {{ config.seo.mainKeyword }}
        </div>
        <h4 class="mb-5 h2">Testsieger</h4>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          v-for="product in featured"
          :key="product.name"
          class="col-lg-4 col-md-6 fadeInUp"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
  <!-- Testsieger End -->
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/products.json";

export default {
  name: "testsieger",
  data() {
    return {
      featured: products.filter(
        (x) => x.featured == 1 && x.winner == 1 && x.published == 1
      ),
      config,
    };
  },
};
</script>
