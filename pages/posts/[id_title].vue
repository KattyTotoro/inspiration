<template>
  <section class="content">
  
  <div class="postPage">
  {{ route.params.id_title }}
  <br>
  {{ id }}
  <br>
  {{ post?.title }}
  <br>
  <NuxtImg :src="`img/${post?.img}`" sizes="300px"/>
      
  <div v-html="post?.text"></div>
  </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id_title.toString().split('_',1)[0]
const postsStore = usePosts()
const post = postsStore.posts.find(el=>el.id==+id)
</script>

<style scoped>

</style>