<style type="text/css">
.complaint{width:600px;box-sizing: border-box;padding:20px;background:#fff; height:400px; position:absolute; left:50%; margin-left:-300px; margin-top:-200px;top:50%; font-size:16px;}
.complaint h3{text-align:center;font-size:18px;}
.complaint input ,.complaint textarea{width:100%; margin:10px 0;}
.complaint a{background:#0cb46a;color:#fff;}
</style>
<template>
	<div class="complaint clear">
		<h3>Complaint</h3>
		<div><input v-modle="tel" placeholder="tel" /></div>
		<div><textarea v-modle="content" rows="8" placeholder="content"></textarea></div>
		<a @click="">submit</a>
    </div>
</template>
<script>
export default {
	name: 'complaint',
	data() {
	  return {
	  	complaintDate:{
	  		tel:'',
	  		content:''
	  	}
	  }
	},
	components: {
	},
	methods:{
		subDate:function(){
			console.info(this.complaintDate)
		}
	},
	mounted() {
	}
}
</script>