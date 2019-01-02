<style type="text/css">
</style>
<template>
	<div>
		<PageHeader v-if="!isApp" :thisTitle="thisTitle"></PageHeader>
		<StrategyCenter></StrategyCenter>
		<!-- <StrategyComment></StrategyComment> -->
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import StrategyCenter from '@/components/strategyDetails/StrategyCenter'
import StrategyComment from '@/components/strategyDetails/StrategyComment'

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
		StrategyComment,
	},
	mounted() {
	  
	}
}
</script>