<template>
  <div>
    <Banner 
      :key="topSection.id"
      :content="topSection.content" />

    <div class="container">
      <div class="filter-wrapper">
        <div class="filter-wrapper__inner">
          <input type="text" v-model="filter" placeholder="Filter title..."/>
          <span class="bottom"></span>
          <span class="right"></span>
          <span class="top"></span>
          <span class="left"></span>
          <ion-icon name="search" size="small"></ion-icon>          
        </div>
      </div>
     
      <section class="posts">
        <div class="posts-grid">
          <PostPreview
            v-for="post in filteredList"
            :key="post.id"
            :id="post.id"
            :content="post.content" />
        </div>
      </section> 
    </div>
    
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

  // Fetch data with async await
  async asyncData(context) {

    // Posts
    const posts = await context.app.$storyapi
      // get data based on params from api
      .get('cdn/stories', {
        version: "draft",
        starts_with: "artikler/" + context.params.categoryId,
        "filter_query": {
          "component": {
            "in": "post"
          }
        }
      })

      // return a promise containing the data as an object
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
  },

  data() {
    return {
      // container for search chars, to match up with post data
      filter: '',
    }
  },

  computed: {
    // Filter functionality
    filteredList() {
      // compare post titles to search chars
      return this.posts.filter(post => {
        return post.content.title.toLowerCase().includes(this.filter.toLowerCase())
      })
    }

  }

};
</script>

