<style type="text/css">
.picBox{overflow:hidden;font-size:0;margin-bottom:-0.5px;}
</style>
<template>
	<div class="designDetails clear">
		<PageHeader v-if="!isApp" :thisTitle="thisTitle"></PageHeader>
		<div class="picBox" v-for="pic in picList"><img width="100%" :src="pic.img" /></div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: '',
	data() {
	  return {
	  	thisTitle:this.$t('message.guarantee.title'),
	  	isApp:this.$route.query.app,
	  	picList:[],
	  }
	},
	components: {
		PageHeader,
	},
	mounted(){
		document.title = this.thisTitle
		this.getPic()
	},
	methods:{
		getPic:function(){
			this.$fetch('/recommend/protectionListData')
		      .then((res) => {
		        this.picList = res.data
		      })

		}
	}
}
</script>