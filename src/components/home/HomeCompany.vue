<style type="text/css">
.HomeCompany .homeCompanyTitle .moreCompany{float:right;color:#a2a2a2;font-size:4vw;margin-top:5px;}
.HomeCompany .companyList{width:100%;box-sizing:border-box; -webkit-box-sizing: border-box;padding:0 1.5%;}
.HomeCompany .companyMod{background:#fff;width:100%;float:left;border:1px solid #d8d8d8;box-sizing:border-box; -webkit-box-sizing: border-box}
.HomeCompany .companyBox{border-radius:6px;overflow:hidden;display:block;box-shadow: 1px -1px 20px #e9e9e9;width:48%;float:left;margin:10px 1%;}
.HomeCompany .seeMore{color:#999;padding:5px 0;font-size:3vw;margin:15px auto;display:block;width:100px;text-align:center;font-size:14px;}
.HomeCompany .swiper-slide {width:50%;}
.HomeCompany .companyBg{height:30vw;width:100%;text-align:center;position:relative;overflow:hidden;}
.HomeCompany .companyDescribe{padding:20px 0 10px;position:relative;}
.HomeCompany .companyDescribe img{margin:0 auto;}
.HomeCompany .companyLogo ,.HomeCompany .companyName{height:6vw;line-height:6vw;}
.HomeCompany .companyLogo{border-radius:50%;overflow:hidden;width:28px;height:28px;margin:0 auto;position:absolute;top:-15px;left:50%;margin-left:-14px;box-shadow:1px -1px 20px #999}
.HomeCompany .companyName{width:90%;margin-left:5%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;font-size:3vw;text-align:center;}
.HomeCompany .companyDescribe p{text-align:center;font-size:16px; line-height:30px;display: flex;
    align-items: center;height:60px;
    justify-content: space-around;
    flex-direction: column;}
.HomeCompany .useBox{display: flex;justify-content: center;font-size:12px;}
.HomeCompany .useBoxMod{margin:0 5px;display:flex;justify-content: center; align-items: center;color:#999;}
.HomeCompany .useBoxMod img{margin-right:5px;}

</style>
<template>
	<div class="HomeCompany">
		<h3 class="homeTitle">—&nbsp;&nbsp;{{$t('message.company.decorationCompany')}}&nbsp;&nbsp;—
			<!-- <router-link class="moreCompany" to="/company">{{$t("message.strategy.strategType.more")}} ></router-link> -->
		</h3>
		<div class="companyList clear">
			<router-link v-for="(company ,index) in companyList" :key="index" class="companyBox" :to="'/companyDetails/'+company.relatedId">
				<div class="companyBg">
					<img width="100%" :src="company.img" />
				</div>
				<div class="companyDescribe clear">
					<div class="companyName">{{company.name}}</div>
					<div class="useBox">
						<div class="useBoxMod share" @click="toShareFn(company.relatedId)">
							<img :data-id="company.ownerId" class="shareImg" height="15" width="15" src="/static/image/share.png" />
							<span>{{$t("message.home.share")}}</span>
						</div>
						<div class="useBoxMod collection" :data-collect="company.collect" @click="collection($event,index)">
							<img v-if="company.collect" :data-id="company.relatedId" class="collectionImg" height="15" width="15" src="/static/image/collectionFinish.png" />
							<img v-else :data-id="company.relatedId" class="collectionImg" height="15" width="15" src="/static/image/collection.png" />
							<span>{{$t("message.home.collection")}}</span>
						</div>
					</div>
					<div class="companyLogo">
						<img width="100%" :src="company.icon" />
					</div>
				</div>
			</router-link>
		</div>
		<router-link class="seeMore" to="/company">
			{{$t("message.strategy.strategType.more")}} >
		</router-link>
		<shareBox v-if="shareShow" @closeShare="closeShare" :shareData="shareData"></shareBox>
	</div>
</template>
<script type="text/javascript">
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Eject from '@/components/public/eject/Eject'
import shareBox from '@/components/public/eject/shareBox'
export default {
	name:'homeCompany',
	components:{
		shareBox,
		swiper,
		swiperSlide

	},
	data(){
		return {
			companyList:[],
      		collectioning:false,//正在请求收藏
		    swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				slidesPerView :2,
				/*autoplay:{
				    enabled: true,
				    disableOnInteraction: false,
				    delay: 3000
				},*/
			},
		    swiperSlides: [],
      		shareShow:false,
      		shareData:{},
		}
	},
	mounted(){
	},
	methods:{
		closeShare:function(){
			this.shareShow = false
		},
		toShareFn:function(id){
			event.preventDefault()
			this.shareShow = !this.shareShow
			this.shareData.src = '/strategyDetails/'+id
		},
		getData:function(){
			this.$fetch('/recommend/companyListData?type=10',{"number":"10"})
			.then((res)=>{
				this.companyList = res.data
			})

		},
		collection:function(event, index){
			if(this.collectioning)return
			this.collectioning = true
			event.preventDefault()
			var thisId = event.target.attributes["data-id"].nodeValue
			var thisCollect = this.companyList[index].collect
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'Company',
				'relatedId':thisId
			}).then(res => {
				for(var a in this.companyList){
					if(this.companyList[a].relatedId == thisId){
						this.$set(this.companyList[a],'collect',thisCollect==1?0:1)
					}
				}
				this.collectioning = false
			})
		},
	},
	created(){
		this.getData()
	}
}
</script>