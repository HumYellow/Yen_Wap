<style type="text/css">
.HomeCompany .homeCompanyTitle{font-size:5vw;margin:30px 5vw;font-weight:400;}
.HomeCompany .homeCompanyTitle .moreCompany{float:right;color:#a2a2a2;font-size:4vw;margin-top:5px;}
.HomeCompany .companyList{width:100%;box-sizing:border-box; -webkit-box-sizing: border-box;padding:0 2%;}
.HomeCompany .companyMod{background:#fff;width:100%;float:left;border:1px solid #d8d8d8;box-sizing:border-box; -webkit-box-sizing: border-box}
.HomeCompany .companyBox{border-radius:10px;overflow:hidden;display:block;box-shadow: 1px -1px 20px #e9e9e9;margin:0 1vw 20px;}
.HomeCompany .swiper-slide {width:50%;}
.HomeCompany .companyBg{height:30vw;width:100%;text-align:center;overflow:hidden;}
.HomeCompany .companyDescribe{padding:2vw;}
.HomeCompany .companyLogo ,.HomeCompany .companyName{height:6vw;line-height:6vw;}
.HomeCompany .companyLogo{border-radius:50%;overflow:hidden;width:6vw;float:left;}
.HomeCompany .companyName{float:left;width:70%;margin-left:5%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:3.5vw;}
.HomeCompany .companyDescribe p{text-align:center;font-size:16px; line-height:30px;display: flex;
    align-items: center;height:60px;
    justify-content: space-around;
    flex-direction: column;}

</style>
<template>
	<div class="HomeCompany">
		<h3 class="homeCompanyTitle">{{$t('message.company.decorationCompany')}}
			<router-link class="moreCompany" to="/company">{{$t("message.strategy.strategType.more")}} ></router-link>
		</h3>
		<div class="companyList clear">
			<swiper class="swiperHead" :options="swiperOption">
				<swiper-slide v-for="(company ,index) in companyList">
					<router-link class="companyBox" :to="'/companyDetails/'+company.relatedId">
						<div class="companyBg">
							<img width="100%" :src="company.img" />
						</div>
						<div class="companyDescribe clear">
							<div class="companyLogo">
								<img width="100%" :src="company.icon" />
							</div>
							<div class="companyName">{{company.name}}</div>
						</div>
					</router-link>
				</swiper-slide>
				<!-- <div class="swiper-pagination" slot="pagination"></div> -->
			</swiper>
		</div>
	</div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name:'homeCompany',
	components:{
		swiper,
		swiperSlide

	},
	data(){
		return {
			companyList:[],
		    swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				slidesPerView :2,
				autoplay:{
				    enabled: true,
				    disableOnInteraction: false,
				    delay: 3000
				},
			},
		    swiperSlides: []
		}
	},
	mounted(){
	},
	created(){
		this.$fetch('/recommend/companyListData?type=10',{"nunmber":"4"})
		.then((res)=>{
			this.companyList = res.data
		})
	}
}
</script>