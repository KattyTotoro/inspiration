<template>
    <section class="content">

<h1>Сайт Вдохновение. Транслирование знаний.</h1>
<strong>Путеводители среди знаний.</strong>

<div>

  <p v-if="!publications.length">Публикаций пока нет</p>
  <div v-else class="grid"></div>
  <div class="publication" v-for="publication of publications" :key="publication.id">
    <NuxtImg :src="`img/${publication.img}`"/>
    <!-- <NuxtImg :src="`img/${publication.img}`"></NuxtImg> -->
    <h2><a href="">{{ publication.title }}</a></h2>
    <p>{{ publication.preview }}</p>
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


const publications = [
  {id: 1, title: 'First publication', text: 'Text text text text', preview: 'Peview...', img: 'summary_small_image.png',}
]

</script>