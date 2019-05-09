<template>
  <article class="home-content">

    <section class="banner">
      <div class="banner-title"><h1>{{title}}</h1></div>
    </section>

    <BlogPosts />

  </article>
</template>

<script>
import BlogPosts from '@/pages/blog/index';

export default {
  components: {
    BlogPosts
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/home", {
        version: "draft"
      })
      .then(res => {
        console.log(res);
        const data = res.data.story.content;
        return {
          aboutMe: data.aboutMe,
          bannerImage: data.bannerImage,
          portraitImage: data.portraitImage,
          title: data.title
        };
      });
    }
  }
</script>
