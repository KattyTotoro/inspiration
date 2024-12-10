// import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePosts = defineStore('posts', () => {
  const posts = [
    {id: 3, rubric: '', title: 'Third post', text: 'ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'third Peview ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать….', img: 'inspirationLargeImage.png',},
    {id: 2, rubric: '', title: 'Second post', text: 'Second Text text text text', preview: 'SecondPeview...', img: 'summary_small_image.png',},
    {id: 1, rubric: '', title: 'First post', text: 'Text text text text', preview: 'Peview...', img: 'summary_large_image.png',},
  ]

  return { posts }
})