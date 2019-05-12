<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader/TheHeader";

export default {
  components: {
    TheHeader
  }
};
</script>