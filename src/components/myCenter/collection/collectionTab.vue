<style type="text/css">
.collectionTab{background:#fff;position:relative;top:-2px;border-bottom:1px solid #f7f7f7;}
.collectionTabBox{width:70%;margin:0 auto;}
.collectionTabMod{float:left;padding:10px 0;margin:0 5%;height:30px;line-height:30px;text-align:center;display: block;width:40%;}
.collectionTabMod[data-style="select"]{border-bottom:1px solid #3FBB87;color:#3FBB87;}
</style>
<template>
	<div class="collectionTab">
		<div class="collectionTabBox clear">
			<a class="collectionTabMod" @click="routerTab('company')"
			:data-style="isCompany?'select':''">{{$t("message.menu.Company")}}</a>
			<a class="collectionTabMod" @click="routerTab('design')"
			:data-style="!isCompany?'select':''">{{$t("message.menu.Design")}}</a>
	    </div>
	    <collectionCompany v-if="isCompany"></collectionCompany>
	    <collectionDesign v-else></collectionDesign>
	</div>
</template>
<script>
import collectionCompany from '@/components/myCenter/collection/collectionCompany'
import collectionDesign from '@/components/myCenter/collection/collectionDesign'
export default {
	name: '',
	data() {
	  return {
	  	nowRouter:this.$route.name,
	  	isCompany:true
	  }
	},
	components: {
		collectionCompany,
		collectionDesign
	},
	methods:{
		routerTab:function(name){
			name == 'company'?this.isCompany = true:this.isCompany = false
			
		}
	},
	mounted() {
	},
	created(){
		
	},
	watch:{
	  $route(to,from){
	    this.nowRouter = to.name
	  }
	},
}
</script>