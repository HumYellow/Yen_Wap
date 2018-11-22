<style type="text/css">
#companyDetails{padding-bottom:50px;}
#companyDetails .companyDetailsMod{margin-top:5vw;box-shadow:2px -1px 10px #e9e9e9;padding:3vw;border-radius:10px;}
#companyDetails .companyDetails{padding:3vw; }
#companyDetails .companyDetailsMod h3{font-weight: 400;font-size:5vw;line-height:30px;margin-bottom:3vw;color:#333;}
#companyDetails .companyDetailsMod h3 .moreTo{float:right;font-size:4vw;color:#999;}
.toPlaceOrder{position:fixed;left:0;bottom:0;background:#fff;width:100%;padding:10px 0;}
.toPlaceOrder a{margin:0 auto;width:90%;display:block;height:40px;line-height:40px;color:#fff;background:#3FBB87;border-radius:8px;text-align:center;}
</style>
<template>
	<div id="companyDetails">
		<PageHeader :thisTitle="$t('message.company.companyDetails')" :collect="this.desc.collect" @collectTab="collectTab"></PageHeader>
		<div class="companyDetails clear">
			<CompanyDetailsDesc :desc="desc"></CompanyDetailsDesc>
			<CompanyDetailsDesign></CompanyDetailsDesign>
			<CompanyDetailsTeam></CompanyDetailsTeam>
			<CompanyDetailsProfile></CompanyDetailsProfile>
			<!-- <RegistrationInformation></RegistrationInformation> -->
	    </div>

	    <div class="toPlaceOrder">
	    	<router-link to="/placeOrder">
	    		{{$t('message.company.freeDesign')}}
	    	</router-link>
	    </div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import CompanyDetailsDesc from '@/components/companyDetails/CompanyDetailsDesc'
import CompanyDetailsDesign from '@/components/companyDetails/CompanyDetailsDesign'
import CompanyDetailsTeam from '@/components/companyDetails/CompanyDetailsTeam'
import CompanyDetailsProfile from '@/components/companyDetails/CompanyDetailsProfile'
import RegistrationInformation from '@/components/companyDetails/RegistrationInformation'


export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
		PageHeader,
		CompanyDetailsDesc,
		CompanyDetailsDesign,
		CompanyDetailsTeam,
		CompanyDetailsProfile,
		RegistrationInformation
	},
	mounted() {
	  
	},
	methods:{
		collectTab:function(id){
			this.$set(this.desc,'collect',id)
		}
	},
	created(){
		this.$fetch('/company/detailData',{
			'id':this.$route.params.id
		})
		.then((res)=>{
			this.desc = res.data
			console.info(this.desc)
		})
	},
}
</script>