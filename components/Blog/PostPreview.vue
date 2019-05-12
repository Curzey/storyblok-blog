<template>
  <nuxt-link
    :to="'/' + id">
    <article class="post-preview">
      <div
        :style="{backgroundImage: 'url(' + thumbnail + ')'}"
        class="post-preview-thumbnail"></div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ summary }}</p>
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
