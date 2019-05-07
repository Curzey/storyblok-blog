<template>
    <nuxt-link 
      :to="id">
      <article class="post-preview">
          <div 
            :style="{backgroundImage: 'url(' + thumbnailImage + ')'}"
            class="post-preview-thumbnail"></div>
            <div class="post-preview-content">
              <h2>{{title}}</h2>
              <p>{{excerpt}}</p>
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
    excerpt: {
      type: String,
      required: true
    },
    thumbnailImage: {
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

<style scoped lang="scss">
a {
  text-decoration: none;
  color: #000;
}

.post-preview {
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  width: 90%;
  height: 20rem;
  margin: 1rem;
  &-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }
  &-content {
    text-align: center;
    padding: 1rem;
  }
}

@media (min-width: 55rem) {
  .post-preview {
    width: 25rem;
  }
}
</style>
