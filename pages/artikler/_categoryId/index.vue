<template>
  <div>
      <Banner 
        :key="topSection.id"
        :content="topSection.content" />

    <section class="posts posts--small">
      <PostPreview
        v-for="post in posts"
        :id="post.id"
        :summary="post.summary"
        :thumbnail="post.thumbnail"
        :key="post.id"
        :title="post.title" />
    </section> 
  </div>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
import Banner from "@/components/Banner";

export default {
  components: {
    PostPreview,
    Banner
  },
    async asyncData(context) {
    // Posts
    const posts = await context.app.$storyapi
      .get('cdn/stories', {
        version: "draft",
        starts_with: "artikler/" + context.params.categoryId,
        "filter_query": {
          "component": {
            "in": "post"
          }
        }
      })
      .then(res => {
        return {
          posts: res.data.stories
            .map(bp => {
              return {
                id: bp.full_slug,
                title: bp.content.title,
                thumbnail: bp.content.thumbnail,
                summary: bp.content.summary
              };
            })
        };
      });
      // Banner
     const topSection = await context.app.$storyapi
      .get("cdn/stories/artikler/" + context.params.categoryId + "/banner", {
        version: "draft",
        "filter_query": {
          "component": {
            "in": "banner-category"
          }
        }
      })
      .then(res => {     
        return {
          id: res.data.story.slug,
          content: res.data.story.content
        };
      });
    return { posts: posts.posts, topSection: topSection };
  }
};
</script>