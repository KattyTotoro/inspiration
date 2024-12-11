import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePosts = defineStore('posts', () => {
  const posts = [
    {id: 3, rubric: '', title: 'Third post', text: 'Text 1 ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'third Peview ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать….', 
      img: 'inspirationLargeImage.png', datetime: '2024-12-12', author: 'Sidorov',
      reactions:{
        smile:0,
        sad:0,
      }},

    {id: 2, rubric: '', title: 'Second post', text: 'Text 2 Second Text text text text ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', 
      preview: 'SecondPeview...', img: 'summary_small_image.png', datetime: '2024-12-12', author: 'Ivanov', 
      reactions:{
      smile:0,
      sad:0,
    }},

    {id: 1, rubric: '', title: 'First post', text: 'Text 3 Text text text text ВДОХНОВЕНИЕ - это Видеть, слышать, чувствовать…. Восхвалять творение, быть его частью ежесекундно! Приглашаем вместе учиться ведать Божественные энергии, делиться Радостью и Знаниями.', preview: 'Peview...', img: 'summary_large_image.png', datetime: '2024-12-12', author: 'Petrov',
      reactions:{
        smile:0,
        sad:0,
      }},
  ]

  return { posts }
})