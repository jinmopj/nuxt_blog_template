<template>
  <div class="content">
    <div class="page-title">About</div>
    <div class="other-text" v-html="about"></div>
  </div>
</template>

<script>
import about from '~/contents/others/about.md'

export default {
  computed: {
    about() {
      return about
    }
  },
  head() {
    const title = 'aboutのタイトル'
    const url = `${ process.env.baseUrl }${ this.$router.history.base }${ this.$route.path }`
    const desc = 'aboutのディスクリプション'
    const image = 'imgのパス'
    return {
      title: title,
      meta: [
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'og:description', property: 'og:description', content: desc },
        { hid: 'og:image', property: 'og:image', content: image },
      ],
      link: [{ rel: 'canonical', href: url }]
    }
  }
}
</script>

<style lang="scss" scoped>
.other-text {
  /deep/ {
    .hljs {
      overflow-x: auto;
        padding: 1rem;
    }
    code:not(.hljs) {
      font-size: .9rem;
      margin-right: .2rem;
      margin-left: .2rem;
      background-color: rgba(0,0,0,.06);
    }
    code {
      font-size: .9rem;
      padding: .2em .4em;
      border-radius: 6px;
      font-family: SF Mono,Monaco,Inconsolata,Fira Mono,Droid Sans Mono,Source Code Pro,monospace;
    }
    a {
      text-decoration: none;
      &:hover {
        opacity: .6;
        transition: .2s;
      }
    }
    li {
      padding: 5px 0px;
    }
    img {
      max-width: 100%;
      height: auto;
    }
    table {
      border-collapse: collapse;
      th {
        background-color: #f5f5f5;
        border: 1px solid #ccc;
        line-height: 1.5;
        padding: 10px;
      }
      td {
        border: 1px solid #ccc;
        line-height: 1.5;
        padding: 10px;
      }
    }
    blockquote {
      border-left: 5px solid #ddd;
      color: #777;
      padding: 1em;
      padding-right: 0;
      margin: 1.5em 0;
    }
  }
}
</style>
