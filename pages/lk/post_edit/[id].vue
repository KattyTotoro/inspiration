<template>
<section class="content tt">
    <input class="myEditor" type="text" v-model="post.title">
    <div v-if="editor">
    <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
    >
        bold
    </button>
    <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
    >
        italic
    </button>
    <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
    >
        strike
    </button>
    <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
    >
        code
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
    <NuxtLink :to="`/posts/${post.id}_${post.title.toLowerCase().replaceAll(' ','_')}`">{{ post.title }}</NuxtLink>
</section>
</template>

<script setup>

function translit(word){
	var answer = '';
	var converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (var i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
    answer = answer.trim().replaceAll(' ','_').toLocaleLowerCase()
	return answer;
}

const route = useRoute()
const id = route.params.id
const postsStore = usePosts()
const post = postsStore.posts.find(el=>el.id==+id)

const editor = useEditor({
content: post?.text,
extensions: [TiptapStarterKit],
});

const save = ()=>{
    if (post) {
        post.text = editor.value.getHTML().replaceAll('<p></p>','<br>')
    }
}

onBeforeUnmount(() => {
unref(editor).destroy();
});
</script>

<style>
@import url(~/assets/tiptap.css);


</style>
