<template>
  <nuxt-link
    :to="'/' + id">
    <article class="post-preview">
      <div class="post-preview--inner">
        <div
          :style="{backgroundImage: 'url(' + thumbnail + ')'}"
          class="post-preview-thumbnail"></div>
        <div class="post-preview-content">
          <h3>{{ title }}</h3>
          <p>{{ summary }}</p>
        </div>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  }
};
</script>
