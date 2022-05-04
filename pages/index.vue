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
                src="/assets/images/feature-campingtoilette-trobolo-wandago.webp"
                :alt="config.seo.mainKeyword"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3">
              Der Shop für die richtige
            </div>
            <h1 class="mb-4">{{ config.seo.mainKeyword }}</h1>
            <div v-html="config.seo.featureText"></div>
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
            <a class="btn btn-primary py-3 px-5 mt-2" href="#testsieger"
              >Zu den Testsiegern</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <Testsieger />

    <!-- Vorteile Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Gründe
          </div>
          <h2 class="mb-5 h2">Vorteile einer {{ config.seo.mainKeyword }}</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-water text-primary mb-4"></i>
                <h5 class="mb-3">Wasserfrei</h5>
                <p>
                  Eine {{ config.seo.mainKeyword }} kommt komplett ohne Wasser
                  aus
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-sun text-primary mb-4"></i>
                <h5 class="mb-3">Autark</h5>
                <p>Sie benötigen keine zusätzlichen Sanitäranschlüsse</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-ban text-primary mb-4"></i>
                <h5 class="mb-3">Keine Chemie</h5>
                <p>Dank Trenneinsatz ist keine Chemie notwendig</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-recycle text-primary mb-4"></i>
                <h5 class="mb-3">Nachhaltig</h5>
                <p>
                  Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Vorteile End -->

    <!-- Hersteller Start -->
    <div class="container-xxl py-5 category" id="hersteller">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h3 class="mb-5 h2">Hersteller</h3>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trobolo/"
                  title="Mehr über TROBOLO erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trobolo.webp"
                      alt="TROBOLO"
                    />
                    <div class="overlay">
                      <div class="overlayText">TROBOLO</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">TROBOLO</h5>
                    <!-- <small class="text-primary">Deutschland</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/trelino/"
                  title="Mehr über Trelino erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/trelino.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Trelino</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">Trelino</h5>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/hersteller/kildwick/"
                  title="Mehr über Kildwick erfahren"
                >
                  <div class="grayscaleContainer">
                    <img
                      class="img-fluid grayscale"
                      src="/assets/images/hersteller/kildwick.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Kildwick</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <h5 class="m-0">Kildwick</h5>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 zoomIn" style="min-height: 350px">
            <a class="position-relative d-block h-100 overflow-hidden" href="">
              <div class="grayscaleContainer">
                <img
                  class="img-fluid grayscale"
                  src="/assets/images/hersteller/meinetrenntoilette.webp"
                  alt="MeineTrenntoilette"
                />
                <div class="overlay">
                  <div class="overlayText">Meine Trenntoilette</div>
                </div>
              </div>
              <div
                class="
                  bg-white
                  text-center
                  position-absolute
                  bottom-0
                  end-0
                  py-2
                  px-3
                "
                style="margin: 1px"
              >
                <h5 class="m-0">Meine Trenntoilette</h5>
                <!-- <small class="text-primary">Deutschland</small> -->
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Hersteller End -->

    <!-- Innenbereich Start -->
    <!-- <div class="container-xxl py-5" id="produkte">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h5 class="mb-5 h2">Innenbereich</h5>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in innenbereich"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Innenbereich End -->

    <!-- Gartentoiletten Start -->
    <!-- <div class="container-xxl py-5" id="gartentoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h6 class="mb-5 h2">Gartentoiletten</h6>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in gartentoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Gartentoiletten End -->

    <!-- Campingtoiletten Start -->
    <!-- <div class="container-xxl py-5" id="campingtoiletten">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <div class="mb-5 h2">{{ config.seo.mainKeyword }}</div>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            v-for="product in campingtoiletten"
            :key="product.name"
            class="col-lg-4 col-md-6 fadeInUp"
          >
            <ProductItem :product="product" />
          </div>
        </div>
      </div>
    </div> -->
    <!-- Campingtoiletten End -->

    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Team
          </div>
          <div class="mb-5 h2">Unsere Experten</div>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-1.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Ringo Hülsmann</h5>
                <small>Der "Toilettenkönig"</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-2.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Leonie Meyer</h5>
                <small>Biologin</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-3.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Markus Baum</h5>
                <small>Ökologe</small>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 fadeInUp">
            <div class="team-item bg-light">
              <div class="overflow-hidden">
                <img
                  class="img-fluid"
                  src="/assets/images/img/team-4.jpg"
                  alt=""
                />
              </div>
              <div
                class="position-relative d-flex justify-content-center"
                style="margin-top: -23px"
              >
                <div class="bg-light d-flex justify-content-center pt-2 px-1">
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-facebook-f"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-twitter"></i
                  ></a>
                  <a class="btn btn-sm-square btn-primary mx-1"
                    ><i class="fab fa-instagram"></i
                  ></a>
                </div>
              </div>
              <div class="text-center p-4">
                <h5 class="mb-0">Anh Tanaka</h5>
                <small>Innenarchitektin</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Team End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "IndexPage",
  head: {
    title: config.seo.index.title,
    meta: [
      {
        hid: "description",
        name: "description",
        content: config.seo.index.metaDescription,
      },
      {
        hid: "robots",
        name: "robots",
        content: config.seo.index.robots,
      },
    ],
  },
  asyncData: () => {
    return {
      config,
    };
  },
};
</script>
