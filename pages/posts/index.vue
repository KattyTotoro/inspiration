<template>
    <section class="content">

<h1>Сайт Вдохновение. Транслирование знаний.</h1>
<strong>Путеводители среди знаний.</strong>

<div>

  <p v-if="!posts.length">Публикаций пока нет</p>
  <div v-else class="grid">
    <div class="post" v-for="post of posts" :key="post.id">
      <NuxtImg :src="`img/${post.img}`" sizes="300px"/>
      <h2><NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ','_')}`">{{ post.title }}</NuxtLink></h2>
      <p>{{ post.preview }}</p>
    </div>
  </div>

</div>

    </section>
</template>


<script setup lang="ts">
useSeoMeta({
  title: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  ogTitle: 'Сайт Вдохновение. Путеводитель в мире знаний.',
  description: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogDescription: 'Вдохновение - это Видеть, слышать, чувствовать. Восхвалять творение, быть его частью ежесекундно! Это единение в распространении энергий Любви и знаний, которые начнут пробуждать окружающих.',
  ogImage: '/img/summary_small_image.png',
  twitterCard: 'summary_large_image',
})


const posts = [
  {id: 3, rubric: '', title: 'Third post', text: 'ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'third Peview ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать….', img: 'inspirationLargeImage.png',},
  {id: 2, rubric: '', title: 'Second post', text: 'Second Text text text text', preview: 'SecondPeview...', img: 'summary_small_image.png',},
  {id: 1, rubric: '', title: 'First post', text: 'Text text text text', preview: 'Peview...', img: 'summary_large_image.png',},
]

</script>


<style scoped>

.grid {
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 20px;
  margin: 50px auto;
  width: 940px;
}


</style>