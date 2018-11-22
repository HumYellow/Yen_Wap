<style type="text/css">

</style>
<template>
	<div class="collection">
		<PageHeader :thisTitle="$t('message.myCenter.myDesign')"></PageHeader>
		<myDesignList></myDesignList>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import myDesignList from '@/components/myCenter/myDesign/myDesignList'
export default {
	name: '',
	data() {
	  return {
	  	
	  }
	},
	components: {
		myDesignList,
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