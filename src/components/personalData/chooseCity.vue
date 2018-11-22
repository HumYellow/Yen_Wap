<style type="text/css">
.chooseCity .chooseCityTitle{background:#F5F5F5;color:#666666;height:45px;line-height:45px;padding:0 5vw;font-size:12px;}
.chooseCity .chooseCityList{padding-left:5vw;background:#fff;}
.chooseCity .chooseCityMod{height:40px;line-height:40px;font-size:12px;color:#333;border-top:1px solid #eee;}
.chooseCity .chooseCityMod:nth-child(0){border:none;}
.chooseCity .chooseCityMod[data-select='select']{background:url('/static/image/myCenter/personalSelectIcon.png') 85vw center no-repeat;background-size:15px 15px;}
</style>
<template>
	<div class="chooseCity">
		<PageHeader :thisTitle="$t('message.myCenter.myCenterSidebar.personalData')"></PageHeader>
		<div class="chooseCityTitle">Hot City</div>
		<div class="chooseCityList">
			<div v-for="city in chooseCityList" class="chooseCityMod" :data-select="city.cityId==selectCity?'select':''" @click="subData(city.cityId)">
				{{city.name}}
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import PageHeader from '@/components/PageHeader'
export default {
	components:{
		PageHeader,
	},
	data(){
		return {
			chooseCityList:{},
			selectCity:''
		}
	},
	mounted(){
		
	},
	methods: {
		getData:function(){
			this.$fetch('/home/member/infoData')
			.then((res)=>{
				this.chooseCityList = res.data.cityList
				this.selectCity = res.data.selectCityId
			})
		},
		subData:function(cityId){
			this.$post('/home/member/updateCityData',{//修改城市
				cityId:cityId,
			})
			.then((res)=>{
				this.$router.replace('/personalData')
			});
		}
		
	},
	created() {
		this.getData()

	},
}
</script>