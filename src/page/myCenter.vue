<style>
.myCenter{margin:0 auto;background:#fff; box-sizing: border-box;padding:20px;}
</style>
<template>
	<div>
		<MyCenterHead></MyCenterHead>
		<MyCenterCollection></MyCenterCollection>
		<MyCenterHome></MyCenterHome>
	    <MyFooter></MyFooter>
	</div>
</template>
<script>
import MyCenterHead from '@/components/myCenter/myCenterHome/MyCenterHead'
import MyFooter from '@/components/MyFooter'
import MyCenterHome from '@/components/myCenter/myCenterHome/MyCenterHome'
import MyCenterCollection from '@/components/myCenter/myCenterHome/MyCenterCollection'

export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
		MyCenterHead,
		MyFooter,
		MyCenterHome,
		MyCenterCollection
	},
	mounted() {
		document.title = 'myCenter'
	  
	}
}
</script>