<style type="text/css">
.strategyComment{border-top:1px solid #F4F4F4;}
.strategyCommentListBox{padding:20px 5%;box-sizing: border-box;}
</style>
<template>
	<div class="strategyComment clear">
		<div class="strategyCommentListBox">
			<h4>Comment</h4>
			<div class="strategyCommentList">
				
			</div>
		</div>
		<div class="strategyCommentPub">
			
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	thisId:this.$route.id
	  }
	},
	components: {
	},
	methods:{
		getData:function(){
			this.$fetch('/article/detailData', {id:this.$route.params.id})
			.then((res)=>{
				this.desc = res.data
			})
		}
	},
	mounted() {
	  
	},
	created(){
	},
}
</script>