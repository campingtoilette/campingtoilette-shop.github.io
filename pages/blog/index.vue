<template>
  <div>
    <BlogHeader
      buttonText="Zu den Blogartikeln"
      image="/assets/images/feature-campingtoiletten-blog-header.jpg"
      title="Blog"
      subtitle="Wir informieren Sie über die neuesten Trends und Entwicklungen im Bereich Camping &
                                Campingtoiletten."
    />

    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Blog
          </div>
          <h2 class="mb-5 h2">Die neuesten Blogbeiträge</h2>
        </div>
        <div class="row g-4 justify-content-center">
          <div
            class="col-lg-4 col-md-6"
            v-for="(article, index) in articles"
            :key="index"
          >
            <BlogItem :article="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "/assets/data/config.json";

export default {
  name: "BlogIndex",
  data() {
    return {
      articles: config.blogArticles,
      config,
    };
  },
};
</script>
