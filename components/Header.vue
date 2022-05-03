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
          <a href="/" class="nav-item nav-link active">Home</a>
          <a href="/#produkte" class="nav-item nav-link">Produkte</a>
          <a href="/#hersteller" class="nav-item nav-link">Hersteller</a>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Einsatzgebiete</a
            >
            <div class="dropdown-menu fade-down m-0">
              <a href="/innenbereich/" class="dropdown-item">Innenbereich</a>
              <a href="/gartentoilette/" class="dropdown-item"
                >Gartentoiletten</a
              >
              <a href="/campingtoilette/" class="dropdown-item"
                >Campingtoiletten</a
              >
            </div>
          </div>
          <div class="nav-item dropdown">
            <a
              href="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Zubehör</a
            >
            <div class="dropdown-menu fade-down m-0">
              <!-- <a href="/zubehoer/trenneinsatz/" class="dropdown-item"
                >Trenneinsatz</a
              > -->
              <a href="/zubehoer/einstreu/" class="dropdown-item">Einstreu</a>
              <!-- <a href="/campingtoilette/" class="dropdown-item"
                >Campingtoiletten</a
              > -->
            </div>
          </div>
          <a href="#kontakt" class="nav-item nav-link">Kontakt</a>
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
    };
  },
};
</script>

