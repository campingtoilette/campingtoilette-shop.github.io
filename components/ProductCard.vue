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
          <span>{{ product.material }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Maße</span>
          <span>{{ product.size }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Gewicht</span> <span>{{ product.weight }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Traglast</span> <span>{{ product.payload }}</span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Einsatzgebiet</span>
          <span>
            <NuxtLink :to="`/${product.category.toLowerCase()}/`">
              {{ product.category }}</NuxtLink
            >
          </span>
        </li>
        <hr />
        <li class="d-flex justify-content-between align-items-center">
          <span>Funktion</span> <span>{{ product.function }}</span>
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
