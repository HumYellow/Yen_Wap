<style type="text/css">

</style>
<template>
	<div class="collectionCompany">
		<CompanyList :centerType="collection"></CompanyList>
    </div>
</template>
<script>
import CompanyList from '@/components/company/companyList'
export default {
	name: '',
	data() {
	  return {
	  	collection:{
	  		type:'collection',
	  		url:'/home/collect/listData',
	  		data:{
	  			tagValue:'Company',
	  		}
	  	}
	  }
	},
	components: {
		CompanyList,
	},
	methods:{
		
	},
	mounted() {
	  
	},
	created(){
		
	}
}
</script>