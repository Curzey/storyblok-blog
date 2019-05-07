<template>
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl" 
      :id="post.id" />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview';

export default {
  components: {
    PostPreview
  },
  data() {
    return {
      posts: [
        {
          title: 'A New Beginning',
          previewText: 'This will be awesome, dont\'t miss it',
          thumbnailUrl: 'https://blog.algolia.com/wp-content/uploads/2017/08/Vue-Instant-Search.png',
          id: 'a-new-beginning'
        },
        {
          title: 'A Second Beginning',
          previewText: 'This will be awesome, dont\'t miss it',
          thumbnailUrl: 'https://blog.algolia.com/wp-content/uploads/2017/08/Vue-Instant-Search.png',
          id: 'a-second-beginning'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  #posts {
    padding-top:2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
  }
</style>
