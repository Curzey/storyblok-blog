<template>
  <div>
    <TheHeader />
    <main class="main-content">
      <nuxt/>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Master/TheHeader";
import TheFooter from "@/components/Master/TheFooter";

export default {
  components: {
    TheHeader,
    TheFooter
  }
};
</script>