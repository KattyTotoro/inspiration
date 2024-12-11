<template>
  <section class="content" style="display: flex;">
  
  <div v-if="post" class="postPage">
    {{ route.params.id_title }}
    <br>
    {{ id }}
    <br>
    <h1>{{ post?.title }}</h1>
    <br>
    <NuxtImg :src="`img/${post?.img}`" sizes="300px"/>
        
    <div v-html="post?.text"></div>
  </div>
  <div v-else>Что-то пошло не так...</div>

  <p v-if="!postsStore.posts.length">Публикаций пока нет</p>
  <div v-else class="blockList">
    <div class="post" v-for="post of postsStore.posts" :key="post.id">
      <NuxtImg :src="`img/${post.img}`" sizes="300px"/>
      <h2><NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ','_')}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.preview }}</p>
    </div>
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