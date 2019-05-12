<template>
  <div>

      <Banner 
        :key="topSection.id"
        :content="topSection.content" />

    <section id="posts">
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
      .get("cdn/stories", {
        version: "draft",
        starts_with: "artikler/rejse/",
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
                id: bp.slug,
                title: bp.content.title,
                thumbnail: bp.content.thumbnail,
                summary: bp.content.summary
              };
            })
        };
      });
      // Banner
     const topSection = await context.app.$storyapi
      .get("cdn/stories/artikler/rejse/banner-rejse", {
        version: "draft",
        "filter_query": {
          "component": {
            "in": "banner-category"
          }
        }
      })
      .then(res => {     
        console.log(res); 
        return {
          id: res.data.story.slug,
          content: res.data.story.content
        };
      });
    return { posts: posts.posts, topSection: topSection };
  }
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories", {
  //       version: "draft",
  //       starts_with: "artikler/rejse/"
  //     })
  //     .then(res => {      
  //       return {
  //         // Posts
  //         posts: res.data.stories
  //         .map(bp => {
  //           return {
  //             id: bp.slug,
  //             title: bp.content.title,
  //             previewText: bp.content.summary,
  //             thumbnailUrl: bp.content.thumbnail
  //           };
  //         }),
  //         // Banner node in /Blog/Banner
  //         // Probably a bad way to get this data. 
  //         topSections: res.data.stories
  //         .filter(topSection => topSection.content.component == "banner-category")
  //         .map(topSection => {
  //           return {
  //             id: topSection.slug,
  //             content: topSection.content
  //           };
  //         })
  //       };
  //     });
  // }
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