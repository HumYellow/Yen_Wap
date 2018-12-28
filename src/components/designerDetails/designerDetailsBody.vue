<style type="text/css">
.designerDetails .designerDetailsHeader{background:url('/static/image/designerDetailsHead.png') no-repeat;height:80px; background-size:100% 100%;position:relative;}
.designerDetails .designerDetailsHeader .backLink{height:20px;position:absolute;left:10px;top:20px;}
.designerDetails .designerDetailsDesc{background:url('/static/image/designerDetailsDesc.png') no-repeat;height:100px;background-size:100% 100%;position:relative;top:-20px;width:95%;margin:0 auto;}
.designerDetails .designerDetailsDesc .contactHe{color:#fff;background:#3fbb87;border-radius:5px; width:100px;display:block;position:absolute;bottom:-10px;left:50%;margin-left:-50px;text-align:center;height:30px;line-height:30px;}
.designerDetailsDescBox{width:25vw;margin:0 auto;position:relative;top:-5vw;box-sizing: border-box;text-align:center;}
.designerDetailsDescBox img{margin:0 auto;height:15vw;width:15vw;border-radius:50%;}
.designerDetailsDescBox .designerDescTitle{margin-top:15px;}
.designerDetails .designPicList{padding-bottom:30px;}
.designerDetails .designPicList .designPicListMod{width:90%;margin:0 auto 10px;border-radius:10px;overflow:hidden;box-shadow: 1px -1px 30px #e9e9e9;background:#fff;display:block;}
.designerDetails .designPicList .designPicListMod img{width:100%;height:150px;}
.designerDetails .designPicList .designPicListMod .designName{padding:15px;color:#333333;}
</style>
<template>
	<div class="designerDetails">
		<div class="designerDetailsHeader">
			<a href="JavaScript:history.go(-1)" class="backLink">
				<img height="100%" src="/static/image/whiteLeftTo.png" />
			</a>
		</div>
		<div class="designerDetailsDesc">
			<div class="designerDetailsDescBox">
				<img :src="designerDesc.headImg" />
				<div class="designerDescTitle">{{designerDesc.title}}</div>
			</div>
			<a v-if="designerDesc.phone" class="contactHe" :href="'tel:' + designerDesc.phone">{{$t("message.design.contact")}}</a>
		</div>
		<div class="designPicList">
			<router-link :to="'/designDetails/'+design.designAtlasId" class="designPicListMod" v-for="(design,index) in designList" :key="index">
				<img :src="design.img" />
				<div class="designName">{{design.name}}</div>
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">

export default {
	name:'',
	components:{
		
	},
	data(){
		return {
			thisId:this.$route.params.id,
			designerDesc:{},
			designList:{},
      		group: 1, // 当前页数
      		groupNamber:10,//请求数量
      		getDataing:false,//是否正在亲求
			ajaxNew:true
		}
	},
	methods:{
		getDesignerDesc:function(){
			this.$fetch('/design/atlas/member/designerInfo', {memberId:this.thisId})
			.then((res)=>{
				this.designerDesc = res.data
			})
		},
		getDesignList:function(){
			if(this.getDataing)return
			this.getDataing = true
			var data = {
				'pageNo':this.group,
				'number':this.groupNamber,
				'memberId':this.thisId
			};
			this.$fetch('/design/atlas/member/listData', data)
			.then((res)=>{
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				if(this.ajaxNew){
					this.designList = res.data
				}else{
					this.designList = this.designList.concat(res.data)
				}
				this.group++
				if(this.getDataing)this.getDataing = false
			})
		},
		isBottom(){
			var scrollTop = document.documentElement.scrollTop
			if(document.body.scrollHeight - scrollTop <= document.body.clientHeight+10){
				if(!this.lastPage && !this.getDataing){
					this.ajaxNew = false
					this.getDesignList()
				}
			}
		},
	},
	created() {
		this.getDesignerDesc()
		this.getDesignList();
	},
	mounted(){
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
		
	}
}
</script>