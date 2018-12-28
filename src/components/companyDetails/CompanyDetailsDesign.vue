<style type="text/css">
.companyDetailsDesign{}
.companyDetailsDesign h3{}
#companyDetailsDesign .designMod{width:96%;padding:0 2%;float: left;color:#999;}
#companyDetailsDesign .designModImg{height:28vw;width:100%;overflow:hidden}
#companyDetailsDesign .designModDesc{padding:5px 10px;}
#companyDetailsDesign .designModDesc .designName{font-size:4vw; line-height:7vw;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:100%;color:#333;}
#companyDetailsDesign .designModDesc .designDesc{font-size:3vw; line-height:5vw;}
</style>
<template>
	<div id="companyDetailsDesign" v-if="companyDetailsDesign.length != 0" class="companyDetailsDesign companyDetailsMod clear">
		<h3>{{$t("message.company.designCases")}}
			<!-- <router-link class="moreTo" to="/">more &gt;</router-link> -->
		</h3>
		<div class="companyDetailsDesignMod clear">
			<swiper class="swiperHead" :options="swiperOption">
				<swiper-slide v-for="(design,index) in companyDetailsDesign" :key="index">
					<router-link :to="'/designDetails/'+design.id" class="designMod">
						<div class="designModImg"><img width="100%" :src="design.img" /></div>
						<div class="designModDesc clear">
							<p class="designName">{{design.name}}</p>
						</div>
					</router-link>
				</swiper-slide>
			</swiper>
		</div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: '',
	data() {
	  return {
	    swiperOption: {
			slidesPerView:2,
			autoplay:true
		},
	    swiperSlides: [],
	  	companyDetailsDesign:[]
	  }
	},
	components: {
		swiper,
		swiperSlide
		
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/design/atlas/listData',{
			'companyId':this.$route.params.id,
			'number':5
		})
		.then((res)=>{
			this.companyDetailsDesign = res.data
		})
	},
}
</script>