<template>
  <div>

      <Banner v-for="topSection in topSections"
      :key="topSection.id"
      :content="topSection.content" />

    <section id="posts">
      <PostPreview
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :excerpt="post.previewText"
        :thumbnailImage="post.thumbnailUrl"
        :id="post.id" />
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
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
        starts_with: "blog/"
      })
      .then(res => {
          console.log(res);
        return {
          // Posts
          posts: res.data.stories
          .filter(post => post.content.component == "post" && post.content.categories.includes("Økonomi"))
          .map(bp => {
            return {
              id: bp.slug,
              title: bp.content.title,
              previewText: bp.content.summary,
              thumbnailUrl: bp.content.thumbnail
            };
          }),
          // Banner node in /Blog/Banner
          // Probably a bad way to get this data. 
          topSections: res.data.stories
          .filter(topSection => topSection.content.component == "banner-category")
          .map(topSection => {
            return {
              id: topSection.slug,
              content: topSection.content
            };
          })
        };
      });
  }
};
</script>

<style scoped>
#posts {
  padding-top: 2rem;
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