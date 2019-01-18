<style type="text/css">
.homeDesign{padding-top:4vw;background:#fff;}
.homeDesign .designList{width:94%;margin:15px auto 0;}
.homeDesign .homeDesignMod{box-shadow:1px -1px 30px #e9e9e9;width:100%;margin-top:4vw;border-radius:10px; overflow:hidden;box-sizing: border-box;position:relative;}
.homeDesign .homeDesignMod .designDesc{text-align:left;position:relative;}
.homeDesign .homeDesignMod .designDesc .designDescBox{ box-sizing: border-box;padding:10px;display:block;}
.homeDesign .seeMore{color:#999;padding:5px 0;font-size:3vw;margin:15px auto;display:block;width:100px;text-align:center;font-size:14px;}
.homeDesign .homeDesignMod .designName{font-size:3.5vw;color:#333; line-height:5vw;margin-bottom:5px;}
.homeDesign .homeDesignMod .designUser{font-size:12px;display: flex;flex-direction: row;justify-content: space-between;}
.homeDesign .homeDesignMod .designUser .designUserLeft{display:flex;align-items: center;width:50%;}
.homeDesign .homeDesignMod .designUser .designUserLeft span{margin-left:5px;line-height:16px;}
.homeDesign .homeDesignMod .designUser .designUserHead{border-radius:50%;width:20px;height:20px;}
.homeDesign .homeDesignMod .designUser .designUserRight{display:flex;justify-content: flex-end;width:50%;}
.homeDesign .homeDesignMod .designUser .designUserRight .collection{margin-left:10px;}
.homeDesign .homeDesignMod .designUser .designUserRightMod{display:flex;justify-content: center;align-items: center}
.homeDesign .homeDesignMod .designUser .designUserRightMod span{margin-left:5px;color:#999;}
.homeDesign .homeDesignMod .designType{font-size:4vw;color:#999; line-height:8vw;}
.homeDesign .homeDesignMod a.designBox{display:block;overflow:hidden;}
.homeDesign .homeDesignMod a.designBox img{background-repeat:no-repeat;background-position:center;background-size:100% auto;}
.homeDesign .homeDesignMod a.designBox img:nth-child(2){margin-left:2%;}
.homeDesign .homeDesignMod a.seeMore{}

</style>
<template>
	<div class="homeDesign">
		<h3 class="homeTitle">—&nbsp;&nbsp;{{$t("message.home.designScheme")}}&nbsp;&nbsp;—</h3>
		<div class="designList clear">
			<div class="homeDesignMod" v-for="(design,index) in designList" :key="index">
				<router-link :to="'/designDetails/'+design.relatedId" class="designBox">
					<img v-for="(imgList,index) in design.subDesignList" v-if="index<=0" :key="index" width="100%" :src="imgList.img" />
				</router-link>
				<div class="designDesc">
					<div class="designDescBox">
						<div class="designName" @click="clickDesigner(design.ownerId,design.ownerType)">{{design.name}}</div>
						<div class="designUser clear">
							<div class="designUserLeft" @click="clickDesigner(design.ownerId,design.ownerType)">
								<img class="designUserHead" :src="design.ownerImg" />
								<span class="aloneTextEllipsis">{{design.ownerTitle}}</span>
							</div>
							<div class="designUserRight">
								<div class="designUserRightMod share" @click="toShareFn(design.relatedId)">
									<img :data-id="design.ownerId" class="shareImg" width="15" src="/static/image/share.png" />
									<span>{{$t("message.home.share")}}</span>
								</div>
								<div class="designUserRightMod collection" :data-collect="design.collect" @click="collection($event,index)">
									<img v-if="design.collect" :data-id="design.relatedId" class="collectionImg" width="15" src="/static/image/collectionFinish.png" />
									<img v-else :data-id="design.relatedId" class="collectionImg" width="15" src="/static/image/collection.png" />
									<span>{{$t("message.home.collection")}}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<router-link class="seeMore" to="/design">
			{{$t("message.strategy.strategType.more")}} >
		</router-link>
		<shareBox v-if="shareShow" @closeShare="closeShare" :shareData="shareData"></shareBox>
	</div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
import shareBox from '@/components/public/eject/shareBox'
export default {
	components:{
		shareBox,

	},
	data(){
		return {
			designList:[{

			}],
      		collectioning:false,//正在请求收藏
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
			this.shareData.src = '/designDetails/'+id
		},
		getData:function(){
			this.$fetch('/recommend/designListData?type=11&subDesignNumber=2')
			.then((res)=>{
				this.designList = res.data
			})

		},
		clickDesigner:function(id,type){
			event.preventDefault()
			event.stopPropagation();
			if(type == 'Member'){
				this.$router.push('/designerDetails/'+id)
			}else if(type == 'Company'){
				this.$router.push('/companyDetails/'+id)
			}
		},
		collection:function(event, index){
			if(this.collectioning)return
			this.collectioning = true
			event.preventDefault()
			var thisId = event.target.attributes["data-id"].nodeValue
			var thisCollect = this.designList[index].collect
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'DesignAtlas',
				'relatedId':thisId
			}).then(res => {
				for(var a in this.designList){
					if(this.designList[a].relatedId == thisId){
						this.$set(this.designList[a],'collect',thisCollect==1?0:1)
					}
				}
				this.collectioning = false
			})
		}
	},
	created(){
		this.getData()
	}
}
</script>