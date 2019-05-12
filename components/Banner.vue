<template>
    <div class="banner-outer">
        <article class="banner" :style="{ backgroundImage: 'url(' + content.image + ')' }">
            
            <div class="banner-content container">
                <div class="banner-title">
                    <h1> {{ content.title }} </h1>
                </div>
            </div>

        </article>
    </div>
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