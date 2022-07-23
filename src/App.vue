<template>
  <div id="app">
    <Header/>

    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
    <!-- 在Home、Search显示 在登录 注册隐藏 -->
    <Footer v-show="$route.meta.isHideFooter"/>
  </div>
</template>

<style lang="css">
#nprogress .bar {
  background: red !important;
}
</style>

<script>
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default {
  components: {Footer, Header},
};
</script>
