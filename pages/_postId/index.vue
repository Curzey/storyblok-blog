<template>
    
<article id="post">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <section class="post-content"><h1>{{ title }}</h1>
    <p>{{ content }}</p>
    </section>
</article>

</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.postId, {
        version: "draft"
      })
      .then(res => {
        return {
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        };
      });
  }
};
</script>


<style scoped lang="scss">
.post-content {
    width:80%;
    max-width:500px;
    margin: auto;
    p {
        white-space: pre-line;
    }
}
.post-thumbnail {
  height: 300px;
  width: 100%;
  background-position: center;
  background-size: cover;
}
</style>
