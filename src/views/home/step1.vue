<template>
  <div>
    <swiper :options="swiperOption" ref="Swiper" :style="{ height: '600px' }">
      <swiper-slide v-for="(item, index) in swiperList" :key="index">
        <img class="swiper-lazy" :src="item.img" alt="轮播图" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: '',
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination',
          clickable: true, //允许分页点击跳转
        },
      },
      swiperList: [
        {
          img: require('@/assets/img/banner1.png'),
        },
        {
          img: require('@/assets/img/banner2.jpg'),
        },
        {
          img: require('@/assets/img/banner1.png'),
        },
        {
          img: require('@/assets/img/banner2.jpg'),
        },
      ],
    }
  },
  watch: {},
  computed: {
    swiper() {
      return this.$refs.Swiper.swiper
    },
    height() {
      return window.innerHeight + 'px'
    },
  },
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
#swiper {
  height: 600px;
}
#swiper .banner-swiper {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide img {
  width: 100%;
  height: 100%;
}
#swiper .banner-swiper .swiper-slide {
  position: relative;
}
#swiper .banner-swiper .swiper-slide-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999999999;
  width: 100%;
  height: 100%;
  color: #fff;
  background: rgba(51, 51, 51, 0.534);
  text-align: center;
  line-height: 80px;
}
#swiper .banner-swiper .swiper-slide-title > h1 {
  font-size: 50px;
  margin-top: 12%;
}
#swiper .banner-swiper .swiper-slide-title > p {
  font-size: 20px;
  margin-top: 1%;
  font-weight: 700;
}
</style>
