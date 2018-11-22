<style type="text/css">
</style>
<template>
	<div>
		<PageHeader :thisTitle="thisTitle"></PageHeader>
		<placeOrderBox></placeOrderBox>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import placeOrderBox from '@/components/placeOrder/placeOrderBox'

export default {
	name: '',
	data() {
	  return {
	  	thisTitle:this.$t('message.placeOrder.freeQuotation')
	  }
	},
	components: {
		PageHeader,
		placeOrderBox
	},
	mounted() {
	  
	}
}
</script>