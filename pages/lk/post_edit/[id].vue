<template>
<section v-if="post" class="content tt">
    <input class="myEditor" type="text" v-model="post.title">
    <div v-if="editor">
    <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
    >
        жирный
    </button>
    <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
    >
        курсив
    </button>
    <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
    >
        перечёркнутый
    </button>
    <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
    >
        код
    </button>
    <button @click="editor.chain().focus().unsetAllMarks().run()">
        clear marks
    </button>
    <button @click="editor.chain().focus().clearNodes().run()">
        clear nodes
    </button>
    <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
    >
        paragraph
    </button>

    <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
    >
        h1
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
    >
        h2
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
    >
        h3
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
    >
        h4
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
    >
        h5
    </button>
    <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
    >
        h6
    </button>
    <br>
    <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
    >
        bullet list
    </button>
    <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
    >
        ordered list
    </button>
    <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
    >
        code block
    </button>
    <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
    >
        blockquote
    </button>
    <button @click="editor.chain().focus().setHorizontalRule().run()">
        horizontal rule
    </button>
    <button @click="editor.chain().focus().setHardBreak().run()">
        hard break
    </button>
    <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
    >
        undo
    </button>
    <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
    >
        redo
    </button>
    </div>
    <TiptapEditorContent :editor="editor" />
    
    <button @click="save">save</button>
    <NuxtLink :to="`/posts/${post.id}_${post.title_en}`">{{ post.title }}</NuxtLink>
    
    <!-- <template v-for="el of components">
        <component :is="el.component">{{ el.content }}</component>
    </template> -->

</section>
</template>

<script setup lang="ts">

const postsStore = usePosts()

const route = useRoute()
const id = route.params.id
const {data} = await useFetch(`/api/post/${id}`)
const post = ref(data.value?.post)

const editor = useEditor({
content: post.value?.text,
extensions: [TiptapStarterKit],
});

const components = [
    {component:'p', content:'fsadfsdfdsf',},
    {component:'h1', content:'sdf sfs dfsdf s',},

]

const save = async()=>{
    if (post.value) {
        post.value.text = editor.value?.getHTML().replaceAll('<p></p>','<br>') || ''
        post.value.title_en = postsStore.translit(post.value.title)
        const req = await $fetch(`/api/post/${id}`, {
            method: 'PUT',
            body: post.value
        })
        console.log(req)
    }
}

onBeforeUnmount(() => {
    unref(editor)?.destroy();
});
</script>

<style>
@import url(~/assets/tiptap.css);


</style>
