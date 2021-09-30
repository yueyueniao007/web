<template>
  <div class="recommendPage">
    <swiper :options="swiperOption" ref="mySwiper" :style="{ height: height }">
      <swiper-slide>
        <Header></Header>
        <step1></step1>
      </swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <swiper-slide>I'm Slide 3</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import step1 from './step1.vue'

export default {
  components: {
    swiper,
    swiperSlide,
    step1,
  },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true, //允许分页点击跳转
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    height() {
      return window.innerHeight + 'px'
    },
  },
  mounted() {
    console.log(window.innerHeight)
  },
}
</script>
<style scoped lang="scss">
.recommendPage .swiper-container {
  position: relative;
  width: 100%;
  height: 200px;
  background: pink;
}
.recommendPage .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  background: yellowgreen;
  color: #000;
  font-size: 16px;
  text-align: center;
}
</style>
