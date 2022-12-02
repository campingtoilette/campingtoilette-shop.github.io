<template>
    <div>
        <div class="card" style="width: 18rem">
            <nuxt-link :to="article.link" :title="article.title">
                <nuxt-img class="card-img-top blogThumbnails" height="200" width="286" :src="article.image"
                    format="webp" quality="90" :alt="article.title" />
            </nuxt-link>
            <div class="card-body">
                <p class="card-text">
                    {{ article.date }}
                </p>
                <nuxt-link :to="article.link" :title="article.title">
                    <h5 class="card-title">
                        {{ article.title }}
                    </h5>
                </nuxt-link>
                <p class="card-text pt-3 pb-3">
                    <small class="text-muted">{{ article.subtitle }}</small>
                </p>
                <nuxt-link :to="article.link" :title="article.title" class="btn btn-primary align-items-center d-block">
                    weiterlesen</nuxt-link>

            </div>

        </div>
    </div>
</template>
  
<script>
export default {
    name: "BlogItem",
    props: {
        article: Object,
    },
    head: {
        title: "News und Informationen rund ums Camping",
        meta: [
            {
                hid: "description",
                name: "description",
                content: "Hier findest du aktuelle News und Informationen zum Thema Camping und Outdoor. Weiterhin vergleichen wir Produkte und stellen dir die besten Modelle vor.",
            },
            {
                hid: "robots",
                name: "robots",
                content: "index, follow",
            }
        ],
    }
};
</script>

<style scoped>
.blogThumbnails {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 200px;
    width: 100%;
}
</style>
  