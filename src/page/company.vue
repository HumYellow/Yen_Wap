<style type="text/css">
</style>
<template>
	<div>
		<CompanyList></CompanyList>
		<MyFooter></MyFooter>
    </div>
</template>
<script>
import SearchHeader from '@/components/SearchHeader'
import CompanyList from '@/components/company/companyList'
import ContactWhole from '@/components/ContactWhole'
import MyFooter from '@/components/MyFooter'
export default {
	name: '',
	data() {
	  return {
	  }
	},
	components: {
		SearchHeader,
		CompanyList,
		ContactWhole,
		MyFooter
	},
	mounted() {
	  
	}
}
</script>