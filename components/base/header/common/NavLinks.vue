<template>
  <div class="navlinks-wrap">
    <div class="navlinks-inner">
      <nuxt-link class="nav-link" to="/">Home</nuxt-link>
      <nuxt-link class="nav-link" to="/about">About</nuxt-link>
      <nuxt-link class="nav-link" to="/issues">Issues</nuxt-link>
    </div>
    <div class="navlinks-icons">
      <a class="link-icons" :href="githubUrl" target="_blank" rel="external nofollow noopener"><i class="fab fa-github"></i></a>
      <a class="link-icons" :href="twitterUrl" target="_blank" rel="external nofollow noopener"><i class="fab fa-twitter"></i></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavLinks",
  computed: {
    githubUrl() {
      return process.env.githubUrl
    },
    twitterUrl() {
      return process.env.twitterUrl
    }
  }
}

</script>

<style lang="scss" scoped>
.navlinks-wrap {
  display: flex;
  /* desktop */
  @include mq-up(md) {
    width: 100%;
    align-items: center;
  }
  /* mobile */
  @include mq-down(md) {
    top: 0;
    bottom: 40px;
    left: 0;
    right: 0;
    overflow-y: auto;
    padding: 30px;
    position: absolute;
    flex-direction: column;
  }
}
.navlinks-inner {
  /* desktop */
  @include mq-up(md) {
    padding: 0 30px;
    flex: 2;
  }
}
.nav-link {
  text-decoration: none;
  font-size: 1rem;
  color: #000;
  padding: 0 10px;
  &:hover {
    opacity: .6;
    transition: .2s;
  }
  /* mobile */
  @include mq-down(md) {
    display: block;
    padding: 5px 0;
  }
}
.navlinks-icons {
  padding: 20px;
}
.link-icons {
  text-decoration: none;
  font-size: 1.5rem;
  color: #444;
  margin-right: 10px;
}
</style>
