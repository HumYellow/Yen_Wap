<style type="text/css">
.strategyCenter{width:100%; box-sizing: border-box;padding:12px;}
.strategyCenter .strategyCenterTitle{ margin-bottom:20px;}
.strategyCenter .strategyCenterTitle h3{font-size:18px; font-weight:400; color:#333;}
.strategyCenter .strategyCenterSubtitle{padding-top:15px;font-size:14px; color:#999;}
.strategyCenter .strategyCenterText .summary{padding:20px;background:#f8f8f8;}
.strategyCenter .strategyCenterText img{display:inline-block;}
.strategyCenter .strategyCenterText .strategyCenterDesc{color:#666666; line-height:5.5vw;font-size:3.8vw;}
.strategyCenterImg{overflow:hidden;border-radius:5px;margin:12px 0;}
</style>
<template>
	<div class="strategyCenter clear">
		<div class="strategyCenterTitle" v-if="!isApp">
			<h3>{{desc.title}}</h3>
			<div v-if="desc.createTime" class="strategyCenterSubtitle">{{desc.createTime}}</div>
		</div>
		<div class="strategyCenterText">
			<!-- <div class="summary">
				{{desc.summary}}
				
			</div> -->
			<p class="strategyCenterDesc" v-html="desc.content"></p>
		</div>
		<div v-if="!isApp">
			<div v-if="desc.memberId" v-for="img in desc.imgList" class="strategyCenterImg">
				<img width="100%" :src="img" />
			</div>
			<div v-if="!desc.memberId" class="strategyCenterImg">
				<img width="100%" :src="desc.img" />
			</div>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	isApp:this.$route.query.app,
	  	desc:{
	  	}
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/article/detailData', {id:this.$route.params.id})
		.then((res)=>{
			this.desc = res.data
		})
	},
}
</script>