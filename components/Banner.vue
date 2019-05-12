<template>
     <article class="banner" :style="{ backgroundImage: 'url(' + content.image + ')' }">
        
        <div class="banner-content container">
            <div class="banner-title">
                <h1> {{ content.title }} </h1>
            </div>
            <div v-if="content.component == 'banner'" class="banner-about">
                <div class="banner-portrait" :style="{ backgroundImage: 'url(' + content.portrait + ')' }"></div>
                <p class="banner-aboutMe"> {{ content.aboutMe }} </p>
            </div>
        </div>
        <!-- <div v-else class="banner-content container">
            <h1>{{this.$route.path.split('/').splice(-1)[0]}}</h1>
        </div> -->

    </article>
</template>

<script>

export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    }

};

</script>

<style scoped lang="scss">

.banner {
    background-position:center;
    background-size:cover;
    height: 400px;

    &-content {
        display:flex;
        height: 100%;
        justify-content: space-between;
        align-items:center;
    }
    &-portrait {
        height: 150px;
        width:150px;
        background-size:contain;
        background-position: center;
    }

}

</style>
