<style type="text/css">

</style>
<template>
	<div class="collectionDesign">
		<DesignList :centerType="collection"></DesignList>
    </div>
</template>
<script>
import DesignList from '@/components/design/DesignList'
export default {
	name: '',
	data() {
	  return {
	  	collection:{
	  		type:'collection',
	  		url:'/home/collect/listData',
	  		data:{
	  			tagValue:'DesignAtlas',
	  		}
	  	}
	  }
	},
	components: {
		DesignList
	},
	methods:{
		
	},
	mounted() {
	  
	},
	created(){
		
	}
}
</script>