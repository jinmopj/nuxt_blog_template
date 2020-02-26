<template>
  <article class="content">
      <div class="post-title">{{ title }}</div>
      <div class="post-meta">
        <time>created: {{ params.date }}</time>
        <time>updated: {{ updatedDate[0] }}</time>
      </div>
      <div class="post-tags-wrap">
        <div class="post-tag" v-for="tag in formatTags" v-bind:key="tag">
          {{ tag }}
        </div>
      </div>
      <SnsShare :title="shareTitle" />
      <div class="post" v-html="bodyHtml"></div>
  </article>
</template>

<script>
import { sourceFileArray } from '~/contents/posts/summary.json'
import SnsShare from '~/components/posts/SnsShare.vue'

export default {
  components: {
    SnsShare
  },
  validate({ params }) {
    return sourceFileArray.includes(`contents/posts/markdown/${params.date}_${params.slug}.md`)
  },
  asyncData({ params }) {
    return Object.assign({}, require(`~/contents/posts/json/${params.date}_${params.slug}.json`), { params })
  },
  head() {
    const title = this.title
    const url = `${ process.env.baseUrl }${ this.$router.history.base }${ this.$route.path }`
    const desc = this.description
    const image = this.ogimage
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
  },
  computed: {
    updatedDate() {
      return this.updated_at.split('T')
    },
    formatTags() {
      return this.tags.split(',')
    },
    shareTitle() {
      return this.title + " | xxx"
    }
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 26px;
  font-weight: 500;
  padding: 20px 0;
}
.post-meta {
  font-size: .8rem;
}
.post-tags-wrap {
  display: flex;
  padding: 10px 0;
}
.post-tag {
  font-size: .8rem;
  text-align: center;
  padding: 0 .5rem;
  margin: 0 .2rem;
  border: 1px solid #d2d7e5;
}
.post {
  padding: 40px 0;
  font-weight: 300;
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
