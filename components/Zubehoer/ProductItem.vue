<template>
  <div>
    <div class="course-item bg-light">
      <div class="position-relative overflow-hidden">
        <NuxtLink :to="product.linkTo" :title="product.linkTitle">
          <img class="img-fluid" :src="product.image" :alt="product.name" />
        </NuxtLink>
        <div
          class="
            w-100
            d-flex
            justify-content-center
            position-absolute
            bottom-0
            start-0
            mb-4
          "
        >
          <NuxtLink
            :to="product.linkTo"
            class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
            style="border-radius: 30px 0 0 30px"
            :title="product.linkTitle"
            >Testbericht</NuxtLink
          >
          <a
            :href="product.shopLink"
            class="flex-shrink-0 btn btn-sm btn-primary px-3"
            style="border-radius: 0 30px 30px 0"
            target="_blank"
            rel="nofollow noopener"
            >Bestellen</a
          >
        </div>
      </div>
      <div class="text-center p-4 pb-0">
        <h3 class="mb-0">{{ product.price }} €</h3>
        <div class="mb-3">
          <small
            v-for="star in product.stars"
            :key="star"
            class="pl-3 fa fa-star text-primary"
          ></small>
          <small
            v-for="index in 5 - product.stars"
            :key="index"
            class="fa fa-star text-default"
          ></small>
          <small>({{ product.reviewCount }})</small>
        </div>
        <h5 class="mb-4">{{ product.name }}</h5>
      </div>
      <div class="d-flex border-top">
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa fa-toilet text-primary me-2"></i
          ><NuxtLink :to="product.manufacturerLink" :title="product.brand">{{
            product.brand
          }}</NuxtLink></small
        >
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa text-primary me-2"></i
          ><NuxtLink :to="`/zubehoer/${product.category.toLowerCase()}/`">
            {{ product.category }}</NuxtLink
          ></small
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productitem",
  props: {
    product: Object,
  },
};
</script>
