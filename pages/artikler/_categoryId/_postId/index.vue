    
<template>
  <div class="post-view">
    <div class="post-view-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>

    <article class="post-view--inner container">

      <h1>{{ title }}</h1>

      <section class="post-view-content" v-html="postContent"></section>

    </article>

  </div>
</template>

<script>
import marked from 'marked';

export default {
  asyncData(context) {
    return context.app.$storyapi
      .get('cdn/stories/artikler/' + context.params.categoryId + '/' + context.params.postId, {
        version: "draft"
      })
      .then(res => {
        console.log(res);
        return {
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.postContent
        };
      });
  },
  computed: {
      postContent() {
          // marked parses markdown editor to html
          return marked(this.content);
      },
  },
};
</script>