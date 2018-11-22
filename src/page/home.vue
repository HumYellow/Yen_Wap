<style type="text/css">
body{background:#fff;}
.home{padding-bottom:100px;}
.process{max-width:1800px;width:100%;margin:0 auto;}
.home .homeTitle{text-align:center; font-size:3vw; line-height:4.5vw;}
</style>
<template>
	<div class="home">
		<MyHeader></MyHeader>
		<HomeHead></HomeHead>
		<HomeMenu></HomeMenu>
		<HomeDesignType></HomeDesignType>
		<HomeDesign></HomeDesign>
		<HomeCompany></HomeCompany>
		<MyFooter></MyFooter>
		<!-- <ContactWhole></ContactWhole>
		<Eject :ejectType="ejectType"></Eject> -->
	</div>
</template>
<script type="text/javascript">
import MyHeader from '@/components/MyHeader'
import HomeHead from '@/components/home/HomeHead'
import HomeMenu from '@/components/home/HomeMenu'
import HomeDesignType from '@/components/home/HomeDesignType'
import HomeCompany from '@/components/home/HomeCompany'
import HomeDesign from '@/components/home/HomeDesign'
import MyFooter from '@/components/MyFooter'
import ContactWhole from '@/components/ContactWhole'
import Eject from '@/components/public/eject/Eject'
export default {
	name:'home',
	components:{
		MyHeader,
		HomeHead,
		HomeMenu,
		HomeDesignType,
		HomeCompany,
		HomeDesign,
		MyFooter,
		ContactWhole,
		Eject
	},
	data(){
		return {
			ejectType:{
				type:'complaint',
				isShow:true
			}
		}
	},
	methods:{
	},
	mounted(){
		document.title = 'home';
		
	}
}
</script>