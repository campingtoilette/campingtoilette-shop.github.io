<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <h5 class="mb-4">{{ product.name }}</h5>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <span>Hersteller</span>
          <span
            ><NuxtLink :to="product.manufacturerLink">{{
              product.brand
            }}</NuxtLink></span
          >
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Material</span>
          <span>{{ product.material.join(", ") }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Nutzungen</span>
          <span>{{ product.numberOfUsage }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Kategorie</span>
          <span>
            <NuxtLink :to="`/zubehoer/${product.category.toLowerCase()}/`">
              {{ product.category }}</NuxtLink
            >
          </span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Bewertung</span>
          <div class="mb-1 mt-3">
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
          </div>
        </li>
        <hr />
      </ul>
      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis</p>
        <h3>{{ product.price }} EUR</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productcard",
  props: {
    product: Object,
  },
};
</script>
