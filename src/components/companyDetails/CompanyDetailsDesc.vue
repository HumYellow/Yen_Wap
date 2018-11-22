<style type="text/css">
.companyDetailsDesc{width:100%;margin-top:2vw;}
.companyDetailsDescLeft{float:left;height:15vw;width:15vw; border:1px solid #bbb;}
.companyDetailsDescRight{box-sizing: border-box;margin-left:70px;}
.companyDetailsDescText{}
.companyDetailsDescText h2{font-size:5vw;font-weight:400;padding:2vw 0;}
.companyDetailsDescText p{font-size:13px; color:#999;}
.companyDetailsDescText p.address{line-height:4vw;padding:2vw 0;}
.companyDetailsDescText p.address img{float:left;}
.companyDetailsDescText p.address span{padding-left:1vw;display:block;color:#999;overflow: hidden;width:90%;line-height:16px;}
</style>
<template>
	<div class="companyDetailsDesc clear">
		<div class="companyDetailsDescLeft">
			<img width="100%" :src="desc.img" />
		</div>
		<div class="companyDetailsDescRight">
			<div class="companyDetailsDescText">
				<h2>{{desc.name}}</h2>
				<p class="address">
					<img height="16" src="/static/image/add.png" />
					<span>{{desc.address}}</span>
				</p>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	props:{
		desc:{}
	},
	data() {
	  return {
	  	
	  }
	},
	components: {
		
	},
	created(){
	},
	mounted() {
	  
	}
}
</script>