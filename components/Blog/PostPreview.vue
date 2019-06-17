<template>
  <nuxt-link
    :to="'/' + id">
    <article class="post-preview">
      <div class="post-preview--inner">
        <div
          :style="{backgroundImage: 'url(' + content.thumbnail + ')'}"
          class="post-preview-thumbnail"></div>
        <div class="post-preview-content">
          <h3>{{ content.title }}</h3>
          <p>{{ content.summary }}</p>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>
