<style type="text/css">

</style>
<template>
	<div class="collection">
		<PageHeader :thisTitle="$t('message.design.collection')"></PageHeader>
		<collectionTab></collectionTab>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import collectionTab from '@/components/myCenter/collection/collectionTab'
export default {
	name: '',
	data() {
	  return {
	  	
	  }
	},
	components: {
		collectionTab,
		PageHeader
	},
	methods:{
		
	},
	mounted() {
	  
	},
	created(){
		
	}
}
</script>