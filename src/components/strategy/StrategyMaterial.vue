<style type="text/css">
.strategyMaterial h3{border-bottom:1px solid #F0F0F0}
.strategyMaterialMod{width:48%;margin-right:2%;padding:10px 0;float:left;}
.strategyMaterialMod .pic ,.strategyMaterialMod .text{float:left;}
.strategyMaterialMod .pic{width:28%;margin-right:2%;}
.strategyMaterialMod .text{width:70%;font-size:12px;overflow: hidden;}
.strategyMaterialMod .text h4{font-size:18px;line-height:24px;}


</style>
<template>
	<div v-if="strategyMaterial.length != 0" class="strategyMaterial strategyMod clear">
		<div class="strategyTitle"><h3>选材手册</h3></div>
		<div class="strategyMaterialList clear">
			<router-link :to="'/strategyDetails/'+mod.id" v-for="mod in strategyMaterial" class="strategyMaterialMod clear">
				<div class="pic"><img width="100%" :src="mod.img" /></div>
				<div class="text">
					<h4>{{mod.title}}</h4>
					<p>{{mod.summary}}</p>
				</div>
			</router-link>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	strategyMaterial:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/recommend/articleListData?type=7', {number:6})
		.then((res)=>{
			this.strategyMaterial = res.data
		})
	},
}
</script>