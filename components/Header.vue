<template>
  <div>
    <!-- Navbar Start -->
    <nav
      class="
        navbar navbar-expand-lg
        bg-white
        navbar-light
        shadow
        sticky-top
        p-0
      "
    >
      <nuxt-link
        to="/"
        :title="config.title"
        class="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 class="m-0 text-primary" style="font-size: 18px">
          <i class="fa fa-toilet me-3"></i>{{ config.logoText }}
        </h2>
      </nuxt-link>
      <button
        type="button"
        class="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <!-- single link -->
          <div v-for="(link, index) in navigationLinks" :key="index">
            <nuxt-link
              :to="link.linkTo"
              :title="link.linkTitle"
              class="nav-item nav-link"
              >{{ link.title }}</nuxt-link
            >
          </div>

          <!-- end single link -->

          <!-- subLinks -->
          <div
            class="nav-item dropdown"
            v-for="(link, index) in subLinks"
            :key="index"
          >
            <nuxt-link
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >{{ link.title }}</nuxt-link
            >
            <div class="dropdown-menu fade-down m-0">
              <div v-for="(subLink, index) in link.subLinks" :key="index">
                <nuxt-link
                  :to="subLink.linkTo"
                  :title="subLink.linkTitle"
                  class="dropdown-item"
                  >{{ subLink.title }}</nuxt-link
                >
              </div>
            </div>
          </div>

          <!-- end subLinks -->
        </div>
        <a
          href="/#testsieger"
          class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >Testsieger<i class="fa fa-arrow-right ms-3"></i
        ></a>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "headerComponent",
  data() {
    return {
      config,
      navigationLinks: config.navigationLinks.filter(
        (x) => !x.subLinks && x.publish
      ),
      subLinks: config.navigationLinks.filter((x) => x.subLinks && x.publish),
    };
  },
};
</script>

<style>
.nuxt-link-active {
  font-weight: bold;
  color: #06bbcc;
}

.nuxt-link-exact-active {
  font-weight: bold;
  color: #06bbcc;
}
</style>