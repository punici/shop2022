<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel) in carouselList" :key="carousel.id">
        <img :src="carousel.imgUrl"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Carousel',
  props: {
    carouselList: {
      type: Array,
      required: true,
    },
  },
  watch: {
    carouselList: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          this.mySwiper = new Swiper(this.$refs.mySwiper, {
            autoplay: {
              delay: 1000,
              disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        });
      },
    },
  },
};
</script>

<style scoped>

</style>
