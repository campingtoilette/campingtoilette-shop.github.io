<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <img
                class="img-fluid position-absolute w-100 h-100"
                :src="productImage"
                :alt="productName"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <h6 class="section-title bg-white text-start text-primary pe-3">
              Testbericht
            </h6>
            <h1 class="mb-4">{{ productName }}</h1>
            <p class="mb-4">
              {{ textContent }}
            </p>
            <p class="mb-4">
              Unsere Tests beinhalten mehrere Faktoren denen wir auf den Grund
              gehen. Dabei kommen folgende Testkritieren zum Einsatz:
            </p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Funktionalität
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Materialien
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Nachhaltigkeit
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i
                  >Geruchsentwicklung
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Komfort
                </p>
              </div>
              <div class="col-sm-6">
                <p class="mb-0">
                  <i class="fa fa-arrow-right text-primary me-2"></i>Entsorgung
                  & Hygiene
                </p>
              </div>
            </div>
            <a class="btn btn-primary py-3 px-5 mt-2" href="#testbericht"
              >Zum Testbericht</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
export default {
  name: "productheader",
  props: {
    productName: String,
    textContent: String,
    productImage: String,
  },
};
</script>
