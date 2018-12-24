<style type="text/css">
.homeDesign{padding-top:8vw;background:#fff;}
.homeDesign .homeTitle{font-size:4.5vw;line-height:8vw;color:#333333; font-weight:400;}
.homeDesign .designList{width:94%;margin:30px auto 0;}
.homeDesign .homeDesignMod{box-shadow:1px -1px 30px #e9e9e9;width:100%;margin-top:4vw;border-radius:10px; overflow:hidden;box-sizing: border-box;padding:4vw;position:relative;}
.homeDesign .homeDesignMod .designDesc{text-align:left;position:relative;}
.homeDesign .homeDesignMod .designDesc .designDescBox{ width:80%;}
.homeDesign .homeDesignMod .designDesc .seeMore{position:absolute;right:0;top:10px;border:1px solid #339966; color:#339966;border-radius:20px;padding:5px 10px;font-size:3vw;}
.homeDesign .homeDesignMod .designName{font-size:5vw;color:#333; line-height:8vw;margin-bottom:2vw;}
.homeDesign .homeDesignMod .designType{font-size:4vw;color:#999; line-height:8vw;}
.homeDesign .homeDesignMod a.designBox{display:block;overflow:hidden;}
.homeDesign .homeDesignMod a.designBox img{float:left;border-radius:10px;width:49%;height:25vw;background-repeat:no-repeat;background-position:center;background-size:100% auto;}
.homeDesign .homeDesignMod a.designBox img:nth-child(2){margin-left:2%;}
.homeDesign .homeDesignMod a.seeMore{}

</style>
<template>
	<div class="homeDesign">
		<h3 class="homeTitle">—&nbsp;&nbsp;{{$t("message.home.designScheme")}}&nbsp;&nbsp;—</h3>
		<div class="designList clear">
			<div class="homeDesignMod" v-for="design in designList">
				<div class="designDesc">
					<div class="designDescBox">
						<div class="designName">{{design.name}}</div>
						<!-- <div class="designType">
							Three bedroom
						</div> -->
					</div>
					<!-- <router-link class="seeMore" to="/design">
						{{$t("message.strategy.strategType.more")}} >
					</router-link> -->
				</div>
				<router-link :to="'/designDetails/'+design.relatedId" class="designBox">
					<img v-for="imgList in design.subDesignList" width="49%" :style="'background-image:url('+imgList.img+')'" />
				</router-link>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from 'axios'
export default {
	components:{

	},
	data(){
		return {
			designList:[{

			}],

		}
	},
	mounted(){
	},
	created(){
		this.$fetch('/recommend/designListData?type=11&subDesignNumber=2')
		.then((res)=>{
			this.designList = res.data
		})
	}
}
</script>