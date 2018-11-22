<style type="text/css">
#design{background:#f7f7f7; min-height:100vh;}
</style>
<template>
	<div id="design">

	    <keep-alive>
			<DesignList></DesignList>
		</keep-alive>
		<!-- <ContactWhole></ContactWhole> -->
		<MyFooter></MyFooter>
	</div>
</template>
<script type="text/javascript">
import DesignFilter from '@/components/design/DesignFilter'
import DesignHead from '@/components/design/DesignHead'
import DesignList from '@/components/design/DesignList'
import ContactWhole from '@/components/ContactWhole'
import MyFooter from '@/components/MyFooter'
export default {
	name:'design',
	components:{
		DesignFilter,
		DesignHead,
		DesignList,
		ContactWhole,
		MyFooter
	},
	data(){
		return {

		}
	},
	mounted:()=>{
		document.title = 'design'
	}
}
</script>