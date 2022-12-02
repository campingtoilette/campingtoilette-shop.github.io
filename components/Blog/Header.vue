<template>
    <div>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-6 fadeInUp" style="min-height: 400px">
                        <div class="position-relative h-100">
                            <img class="img-fluid position-absolute w-100 h-100" :src="image"
                                :alt="config.seo.mainKeyword"
                                style="object-fit: cover; object-position: center bottom" />
                        </div>
                    </div>
                    <div class="col-lg-6 fadeInUp">
                        <div class="section-title bg-white text-start text-primary pe-3">
                            {{ config.seo.mainKeyword }}
                        </div>
                        <h1 class="mb-4">{{ title }}</h1>
                        <div>
                            <p>
                                {{ subtitle }}
                            </p>
                        </div>
                        <a class="btn btn-primary py-3 px-5 mt-2" href="#article">Zu den Blogartikeln</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import config from "/assets/data/config.json"
export default {
    name: "BlogHeader",
    props: {
        image: String,
        title: String,
        subtitle: String,
    },
    data() {
        return {
            config
        }
    }
}
</script>
