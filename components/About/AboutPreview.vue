<template>
    <div class="about-preview--inner">

        <!-- About preview portrait side -->
        <div class="about-preview__portrait">
            <div class="about-preview__portrait-image" :style="{ backgroundImage: 'url(' + content.portrait + ')' }"></div>
        </div>

        <!-- About preview text side -->
        <div class="about-preview__text">
            <h2 class="about-preview__title colorful">{{ content.teaser_title }}</h2>
            <div class="about-preview__teaser" v-html="teaser"></div>
        </div>
    </div>
</template>

<script>
import marked from 'marked';

export default {
    props: {
        content: {
            type: Object,
            required: true
        }
    },

    computed: {
        teaser() {
            // marked parses markdown editor to html
            return marked(this.content.teaser_text);
        },
    },
};
</script>