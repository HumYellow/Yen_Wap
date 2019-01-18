<style type="text/css">
.HomeStrategy .strategyList{width:100%;box-sizing: border-box;padding:0 2%;}
.HomeStrategy .strategyMod{box-shadow: 1px -1px 20px #e9e9e9;border-radius:6px;width:100%;box-sizing: border-box;padding:10px;display: flex;justify-content: center;margin:20px 0;}
.HomeStrategy .strategyMod .strategyModPic{width:50%;height:120px;overflow:hidden;border-radius:6px;}
.HomeStrategy .strategyModDesc{line-height:16px;width:50%;box-sizing: border-box;padding:5px 5px 5px 10px;display:flex;flex-direction: column;}
.HomeStrategy .strategyModDesc h3{overflow:hidden;line-height:18px;font-weight:100;color:#333;
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical}
.HomeStrategy .strategyModDesc .strategyModText{flex-grow: 1;display: flex;align-items: center}
.HomeStrategy .strategyModDesc p{overflow:hidden;line-height:18px;color:#666666;
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical}
.HomeStrategy .strategyModDesc .useBoxMod{display:flex;align-items: center;color:#999;font-size:12px; justify-content: flex-end;}
.HomeStrategy .strategyModDesc .useBoxMod img{margin-right:5px;}
.HomeStrategy .seeMore{color:#999;padding:5px 0;font-size:3vw;margin:15px auto;display:block;width:100px;text-align:center;font-size:14px;}
</style>
<template>
	<div class="HomeStrategy">
		<h3 class="homeTitle">—&nbsp;&nbsp;{{$t('message.menu.Strategy')}}&nbsp;&nbsp;—
		</h3>
		<div class="strategyList">
			<router-link v-for="(strategy,index) in strategyList" class="strategyMod" :key="index" :to="'/strategyDetails/'+strategy.relatedId">
				<div class="strategyModPic">
					<img width="100%" :src="strategy.img" />
				</div>
				<div class="strategyModDesc">
					<h3>{{strategy.title}}</h3>
					<div class="strategyModText"><p>{{strategy.summary}}</p></div>
					<div class="useBox">
						<div class="share useBoxMod" @click="toShareFn(strategy.relatedId)">
							<img :data-id="strategy.relatedId" class="shareImg" width="15" src="/static/image/share.png" />
							<span>{{$t("message.home.share")}}</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		<router-link class="seeMore" to="/strategy">
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
			strategyList:[],
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
			this.$fetch('/recommend/articleListData?type=13',{"number":"5"})
			.then((res)=>{
				this.strategyList = res.data
			})

		}
	},
	created(){
		this.getData()
	}
}
</script>