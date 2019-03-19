<style type="text/css">
.strategy{padding:3vw;}
.strategy .strategyMod{padding-bottom:40px;}
.strategy .strategyMod:last-child{padding-bottom:0;}
.strategy .strategyPage{margin:0 auto;}
.strategy .strategyTitle h3{font-size:24px;line-height:40px;font-weight:100;padding-bottom:10px;margin-bottom:10px;position:relative}
</style>
<template>
	<div>
		<PageHeader :thisTitle="thisTitle"></PageHeader>
		<div class="strategy clear">
			<div class="strategyPage">
				<StrategyList></StrategyList>
			</div>
	    </div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import StrategyList from '@/components/strategy/StrategyList'
import ContactWhole from '@/components/ContactWhole'

export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	},
	  	thisTitle:this.$t('message.menu.Strategy')
	  }
	},
	components: {
		PageHeader,
		StrategyList,
		ContactWhole
	},
	mounted() {
		document.title = 'strategy'
	  
	},
}
</script>