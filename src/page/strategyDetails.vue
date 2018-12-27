<style type="text/css">
</style>
<template>
	<div>
		<PageHeader v-if="!isApp" :thisTitle="thisTitle"></PageHeader>
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
	  	thisTitle:this.$t('message.strategy.strategyDetailsTitle'),
	  	isApp:this.$route.query.app,
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
	  
	}
}
</script>