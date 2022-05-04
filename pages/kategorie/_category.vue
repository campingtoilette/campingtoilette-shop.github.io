<template>
  <div>
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Testsieger
          </div>
          <h1 class="mb-5">
            {{ category[0].toUpperCase() + category.substring(1) }}
          </h1>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div
            v-for="product in filteredProducts"
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
import config from "~/assets/data/config.json";

export default {
  name: "categoryComponent",
  head() {
    const category = this.category;
    const categoryData = config.categories.find((x) => x.key === category);

    return {
      title: categoryData.name + "- Testsieger und Produkte",
      meta: [
        {
          hid: "description",
          name: "description",
          content: categoryData.seo ? categoryData.seo.metaDescription : "bla",
        },
        {
          hid: "robots",
          name: "robots",
          content: categoryData.seo
            ? categoryData.seo.robots
            : "noindex, follow",
        },
      ],
    };
  },
  data() {
    const category = this.$route.params.category;
    const filteredProducts = products.filter(
      (x) => x.category.toLowerCase() === category
    );
    return {
      filteredProducts,
      category,
      categoryData: this.categoryData,
    };
  },
};
</script>
