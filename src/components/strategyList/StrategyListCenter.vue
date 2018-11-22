<style type="text/css">
.strategyListCenter{width:75%;float:left;background:#fff; box-sizing: border-box; padding:30px;}
.strategyListCenterMod{padding-bottom:20px;}
.strategyListCenter .articlePic{float:left;width:28%;margin-right:2%;}
.strategyListCenter .articleText{float:left;width:70%;}
.strategyListCenter .articleTitle{padding-bottom:20px;}
</style>
<template>
	<div class="strategyListCenter clear">
		<div v-for="center in strategyListCenter" class="strategyListCenterMod clear">
			<router-link :to="'/strategyDetails/'+center.id">
				<div class="articlePic"><img width="100%" :src="center.img" /></div>
				<div class="articleText">
					<h3 class="articleTitle">{{center.title}}</h3>
					<p class="articleDesc">{{center.summary}}</p>
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
	  	strategyListCenter:[],
  		group: 1, // request param
  		maxGroup:1,
  		groupNamber:10,
  		getDataing:false,
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	methods:{
		getData() {
			if(this.getDataing) return
			this.getDataing = true
			this.$fetch('/article/listData',{
				'pageNo':this.group,
				'number':this.groupNamber
			})
			.then(res => {
				console.log(res.data);
				this.strategyListCenter = this.strategyListCenter.concat(res.data)
				this.group++
				this.getDataing = false
			}).catch(function (error) {
				console.log(error);
				this.getDataing = false
			});
		},
		isBottom(){
			if(document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight+10){
				if(this.maxGroup >= this.group)this.getData()
				
			}
		}
	},
	created(){
		this.$fetch('/article/total')
		.then(res => {
			this.maxGroup = parseInt(res.data/this.groupNamber) +1;
		}).catch(function (error) {
			console.log(error);
		})
		this.getData()
	},
}
</script>