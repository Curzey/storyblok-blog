<template>
  <section id="about-page">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <img :src="portrait"/>
  </section>
</template>

<script>
export default {
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories/about', {
      version: 'draft'
    }).then(res => {
      return {
        title: res.data.story.content.title,
        content: res.data.story.content.content,
        portrait: res.data.story.content.portrait
      }
    })
  }
}
</script>

<style>
#about-page {
  width: 80%;
  max-width: 500px;
  margin: auto;
}
#about-page p {
  white-space: pre-line;
}
</style>
