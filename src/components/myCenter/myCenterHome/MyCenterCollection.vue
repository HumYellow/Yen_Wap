<style type="text/css">
.collectionMod{width:50%;float:left;height:36px; line-height:26px; padding:5px 0;text-align:center;box-sizing: border-box;display:block;margin:20px 0;}
.collectionMod:nth-child(2){border-left:1px solid #F4F4F4;}
.collectionMod img ,.collectionMod span{float:left;display:block; }
.collectionMod img{width:24px;margin:0 0 0 23%;}
.collectionMod span{width:45%;margin-left:5%;font-size:14px;height:24px;text-align:left;}
</style>
<template>
	<div class="myCenterCollection clear">
		<router-link to="/collection" class="collectionMod clear">
			<img src="/static/image/myCenter/collectionIcon.png" />
			<span>{{$t('message.design.collection')}}</span>
		</router-link>
		<router-link to="/myDesignList" class="collectionMod clear">
			<img src="/static/image/myCenter/designIcon.png" />
			<span>{{$t("message.menu.Design")}}</span>
		</router-link>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	userDesc:{}
	  }
	},
	components: {
	},
	methods:{
		
	},
	mounted() {
	  
	},
	created(){
		
	}
}
</script>