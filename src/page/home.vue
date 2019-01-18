<style type="text/css">
.home{padding-bottom:100px;}
.process{max-width:1800px;width:100%;margin:0 auto;}
.home .homeTitle{font-size:4vw;margin:30px 5vw 10px;font-weight:400;text-align:center;color:#333;}
</style>
<template>
	<div class="home">
		<MyHeader></MyHeader>
		<HomeHead></HomeHead>
		<HomeMenu></HomeMenu>
		<HomeDesignType></HomeDesignType>
		<HomeDesign></HomeDesign>
		<HomeCompany></HomeCompany>
		<HomeStrategy></HomeStrategy>
		<MyFooter></MyFooter>
		<HomeShortcut></HomeShortcut>
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
import HomeStrategy from '@/components/home/HomeStrategy'
import HomeDesign from '@/components/home/HomeDesign'
import HomeShortcut from '@/components/home/HomeShortcut'

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
		HomeStrategy,
		HomeDesign,
		HomeShortcut,
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
		
	}
}
</script>