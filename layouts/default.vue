<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader/TheHeader';

export default {
  components: {
    TheHeader
  }
}
</script>


<style lang="scss">
* {
  box-sizing: border-box;
}
body {
  font-family: "Lato", sans-serif;
  margin: 0;
}
.main-content {
  margin-top: 4.5rem;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media (max-width: 767px) {
    width: auto
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 750px
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 970px
  }
  @media (min-width: 1200px) {
    width: 1170px
  }
}
</style>