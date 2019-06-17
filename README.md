# Nuxt + Storyblok: Blog test project

> This is just a personal test project, to learn Nuxt, Storyblok and the integration of Storyblok data.
> If you want to try it out, you'll need your own Storyblok backend and API key. 

## To-do
- [x] Optimize AsyncData() calls.
- [x] Make dynamic category urls and .vue file
- [x] Create teaser of About Me on Frontpage
- [x] Make _scss file structure, and remove template `<style>` tags
- Make a filtering function on category pages
    - [x] Functionality
    - [x] Styling
    - [ ] Make it a re-usable component
- Give posts tags that can also be used in the filtering and make a component that lists those on post-preview and the post itself.
    - [ ] Tags and filtering
    - [ ] Component
- [ ] Create pagination on the category pages
- [ ] Animations
- [ ] Add vuex so i don't have to fetch posts on both index.vue, /artikler/_categoryId/index.vue and /artikler/_categoryId/_postId/index.vue
- [ ] Create component that lists all categories as inline labels
- [ ] Make the site responsive
- [ ] Guide to the CMS setup to help others
- [ ] Publish a test site on Github Pages with placeholder content from a placeholder branch. 
 

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
