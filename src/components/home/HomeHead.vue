<style type="text/css">
#homeHead{height:40vw;}
#homeHead .swiper-container{height:100%;}
#homeHead .swiperHead .swiper-pagination-bullet-active{background-color:#fff;}
#homeHead .swiper-button-white{background-color:rgba(0,0,0,.5);padding:10px 20px;}
#homeHead .swiperHead .headerImage{overflow:hidden;}
#homeHead .swiperHead .headerImage img{object-fit:cover;width:100%;height:100%;}
</style>
<template>
	<div id="homeHead">
		<swiper class="swiperHead" :options="swiperOption" ref="mySwiper" v-if="swiperShow">
			<swiper-slide v-for="(slide ,index) in swiperSlides" :key="index">
				<a class="headerImage" :href="slide.link">
					<img height="100%" :src='slide.img' align="center" />
				</a>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'carrousel',
	data() {
	  return {
	  	swiperShow:false,
	    swiperOption: {
            autoplayDisableOnInteraction: false,
			autoplay:{
			    enabled: true,
			    disableOnInteraction: false,
			    delay: 3000
			},
			pagination: {
				el: '.swiper-pagination',
			},
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true//修改swiper的父元素时，自动初始化swiper
		},
	    swiperSlides: []
	  }
	},
	components: {
		swiper,
		swiperSlide
	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.swiper
		}
	},
	mounted(){
	},
	created(){
	  this.$fetch('/recommend/bannerListData?type=9')
		.then((res)=>{
			this.swiperSlides = res.data
			this.$nextTick(function(){
				this.swiperShow = true
			})
		})
	}
}
</script>