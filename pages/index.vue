<template>
  <div class="front-page">

      <Banner 
        :key="topSection.id"
        :content="topSection.content" />

    <article class="container">
      <section class="about-preview">
        <AboutPreview 
          :key="about.id"
          :content="about.content" />
        </section>

      <section class="posts posts--big">
        <PostPreview
        v-for="post in posts"
        :key="post.id"
        :content="post.content" />
      </section> 
      
    </article>
    
  </div>
</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
import Banner from "@/components/Banner";
import AboutPreview from "@/components/About/AboutPreview";

export default {
  components: {
    PostPreview,
    Banner,
    AboutPreview
  },
  async asyncData(context) {

    // Posts
    const posts = await context.app.$storyapi
      .get("cdn/stories", {
        version: "draft",
        "filter_query": {
          "component": {
            "in": "post"
          },
          "featured": {
            "in": true
          }
        }
      })
      .then(res => {
        return {
          posts: res.data.stories
            .map(bp => {
              return {
                id: bp.full_slug,
                content: bp.content
              };
            })
        };
      });

    // Banner
    const topSection = await context.app.$storyapi
      .get("cdn/stories/banner", {
        version: "draft"
      })
      .then(res => {      
        return {
          id: res.data.story.slug,
          content: res.data.story.content
        };
      });

    // About teaser
    const about = await context.app.$storyapi
      .get("cdn/stories/about", {
        version: "draft"
      })
      .then(res => {      
        return {
          id: res.data.story.slug,
          content: res.data.story.content
        };
      });
    return { posts: posts.posts, topSection: topSection, about: about };
  }
};
</script>