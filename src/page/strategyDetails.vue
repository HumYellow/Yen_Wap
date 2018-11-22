<style type="text/css">
</style>
<template>
	<div>
		<PageHeader :thisTitle="thisTitle"></PageHeader>
		<div class="strategyDetails clear">
			<div class="strategyDetailsPage clear">
				<StrategyCenter></StrategyCenter>
			</div>
	    </div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import StrategyCenter from '@/components/strategyDetails/StrategyCenter'
import StrategySidebar from '@/components/strategyDetails/StrategySidebar'

export default {
	name: 'strategyDetails',
	data() {
	  return {
	  	thisTitle:'Chi tiết Raiders',
	  	desc:{
	  	}
	  }
	},
	components: {
		PageHeader,
		StrategyCenter,
		StrategySidebar
	},
	mounted() {
		document.title = 'strategyDetails'
	  
	}
}
</script>