<style type="text/css">
.registrationInformationMod{}
.registrationInformationMod .registrationInformationBox{border-bottom:1px solid #e6e6e6;margin:30px auto;}
.registrationInformationMod .registrationInformationTeam{border:1px solid #e6e6e6;border-bottom:none;font-size:13px;}
.registrationInformationMod .registrationInformationTeam .key ,.registrationInformationTeam .pair{float:left;padding:20px 0;}
.registrationInformationMod .registrationInformationTeam .key{width:20%;background:#f8f8f8;text-align:center;border-right:1px solid #e6e6e6;box-sizing: border-box;}
.registrationInformationMod .registrationInformationTeam .pair{width:80%;text-align:left;text-indent: 20px;}
.informationTab{text-align:center;border-bottom:1px solid #F4F4F4;}
.informationTab .informationTabMod{display:inline-block;text-align:center;color:#999999;font-size:14px;margin:0 10px;height:40px;line-height:40px;}

.informationTab .informationTabMod[data-select='select']{color:#3fbb87;border-bottom:2px solid #3fbb87;}
.introductionMod{padding:0 5%;margin-top:20px;}
.introductionBox{margin:30px 0;}
.introductionMod h4{color:#565656;font-size:16px;}
.introductionBox p{color:#666666;font-size:12px;line-height:18px;margin-top:10px;}
</style>
<template>
	<div class="companyDetailsMod registrationInformationMod clear">
		<PageHeader :thisTitle="$t('message.company.registrationInformation')"></PageHeader>
		<div class="informationTab clear">
			<div class="informationTabMod" :data-select="selectTab == tab.id?'select':''" 
				v-for="tab in informationTab" @click="selectTabFn(tab.id)">
				{{tab.text}}
			</div>
		</div>
		<div class="introductionMod" v-if="selectTab==1">
			<div class="introductionBox clear" v-if="registrationList.describe">
				<h4>{{$t('message.company.companyIntroduction')}}</h4>
				<p>{{registrationList.describe}}</p>
			</div>
			<div class="introductionBox clear" v-if="registrationList.scale">
				<h4>{{$t('message.company.companySize')}}</h4>
				<p>{{registrationList.scale}}</p>
			</div>
			<div class="introductionBox clear" v-if="registrationList.special">
				<h4>{{$t('message.company.decorationService')}}</h4>
				<p>{{registrationList.special}}</p>
			</div>
		</div>
		<div class="introductionMod registrationInformationBox clear" v-if="registrationList.bizfileList != undefined && registrationList.bizfileList.length >0 && selectTab==2">
			<div class="registrationInformationTeam clear" v-for="bizfileList in registrationList.bizfileList">
				<span class="key">{{bizfileList.key}}</span>
				<span class="pair">{{bizfileList.value}}</span>
			</div>
		</div>
		<div class="introductionMod certificateMod" v-if="selectTab==3">
			<h4>{{$t('message.company.businessLicense')}}</h4>
			<img class="mt20" width="100%" :src="registrationList.certificateImg" />
		</div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: '',
	data() {
	  return {
		registrationList:{},
		informationTab:[{
			id:'1',
			name:this.$t('message.company.companyIntroduction'),
			text:this.$t('message.company.companyIntroduction'),
		},{
			id:'2',
			name:'informa',
			text:this.$t('message.company.registrationInformation')
		},{
			id:'3',
			name:'certificate',
			text:this.$t('message.company.certificate')
		}],
		selectTab:1,
	  }
	},
	components: {
		PageHeader
	},
	methods:{
		selectTabFn:function(id){
			this.selectTab = id
		}
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/company/profileData', {id:this.$route.params.id})
		.then((res)=>{
			this.registrationList = res.data
		})
	},
}
</script>