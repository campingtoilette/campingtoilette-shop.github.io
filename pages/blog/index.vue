<template>
    <div>
        <BlogHeader />

        <div class="row">
            <div class="container">
                <div class="container-xxl py-5">
                    <div class="col-md-6" v-for="(article, index) in articles" :key="index">
                        <BlogItem :article="article" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

const articles = [
    {
        title: 'Campingtoiletten Vergleich 2022',
        subtitle: 'Die beste mobile Toilette für kleine Camper – Acht Modelle im Vergleich',
        image: '/assets/images/blog/campingtoiletten-vergleich-2022.jpg',
        link: '/blog/campingtoiletten-vergleich-2022/',
        date: '2022-11-30',
    }
]

export default {
    name: 'BlogIndex',
    data() {
        return {
            articles
        }
    }
}
</script>
