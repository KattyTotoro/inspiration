<template>
  <section class="content">
  <div>
  {{ route.params.id_title }}
  <br>
  {{ id }}
  </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id_title.toString().split('_',1)[0]

</script>

<style scoped>

</style>