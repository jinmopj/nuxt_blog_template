<template>
  <footer class="footer">
    <div class="footer-copyright">
      <p>
        Copy Right &copy; 2019 - {{ new Date().getFullYear() }} <br>
        <nuxt-link to="/"><a>xxx.com</a></nuxt-link> All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 0;
  margin: 0 auto;
}
.footer-copyright {
  font-size: 0.9rem;
  text-align: center;
  color: gray;
  padding: 20px;
}
</style>
