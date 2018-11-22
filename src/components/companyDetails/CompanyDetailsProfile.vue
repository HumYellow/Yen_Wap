<style type="text/css">
/* #companyDetailsProfile h3{background:url(/static/image/myCenter/rightToIcon2.png) right center no-repeat;background-size:auto 50%;} */
#companyDetailsProfile .companyDetailsTeamMod p{color:#666;margin:5px 0; line-height:24px;}
#companyDetailsProfile .companyDetailsTeamMod p span{color:#999999;}
</style>
<template>
	<div id="companyDetailsProfile" v-if="companyDetailsProfile.lenght != 0" class="companyDetailsProfile companyDetailsMod clear">
		<!-- <router-link :to="'/companyInformation/'+$route.params.id"> -->
			<h3>{{$t("message.company.companyProfile")}}</h3>
		<!-- </router-link> -->
		<div class="companyDetailsTeamMod clear">
			<p>{{$t("message.company.time")}}&nbsp;:&nbsp;<span>{{this.companyDetailsProfile.businessHour}}</span></p>
			<p>{{$t("message.login.phone")}}&nbsp;:&nbsp;<span>{{this.companyDetailsProfile.contact}}</span></p>
			<p>{{$t("message.company.companyProfile")}}&nbsp;:&nbsp;<span>{{this.companyDetailsProfile.description}}</span></p>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
		companyDetailsProfile:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/company/detailData',{
			'id':this.$route.params.id
		})
		.then((res)=>{
			this.companyDetailsProfile = res.data
		})
	},
}
</script>