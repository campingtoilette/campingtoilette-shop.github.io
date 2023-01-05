<template>
    <div>
        <BlogHeader buttonText="Zu den Blogartikeln" image="/assets/images/feature-campingtoiletten-blog-header.jpg"
            title="Blog" subtitle="Wir informieren Sie über die neuesten Trends und Entwicklungen im Bereich Camping &
                                Campingtoiletten." />

        <div class="container-xxl py-5">
            <div class="container" id="article">
                <div class="row">
                    <div class="col-3" v-for="(article, index) in articles" :key="index">
                        <BlogItem :article="article" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import config from "/assets/data/config.json"

export default {
    name: 'BlogIndex',
    data() {
        return {
            articles: config.blogArticles,
            config,
        }
    }
}
</script>
