<style type="text/css">

</style>
<template>
	<div id="designerDetails">
		<designerDetailsBody></designerDetailsBody>
	</div>
</template>
<script type="text/javascript">
import designerDetailsBody from '@/components/designerDetails/designerDetailsBody.vue'
export default {
	name:'designerDetails',
	components:{
		designerDetailsBody,
	},
	data(){
		return {
			
		}
	},
	methods:{
	},
	mounted(){
		document.title = 'designerDetails';
		
	}
}
</script>