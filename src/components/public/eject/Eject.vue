<style type="text/css">
.eject{position:fixed;left:0;top:0;z-index:998;width:100vw;height:100vh;}
.eject .ejectBg{background:rgba(0,0,0,.5);width:100%;height:100%;}
</style>
<template>
	<div class="eject clear">
		<div class="ejectBg" @click="closeEject"></div>
		<complaint @closeEject="closeEject" v-if="ejectType.type == 'complaint'"></complaint>
    </div>
</template>
<script>
import complaint from '@/components/public/eject/complaint'
export default {
	name: 'eject',
	props:{
		ejectType:{
			type:'',
		},
	},
	data() {
	  return {
	  	
	  }
	},
	components: {
		complaint,
	},
	methods:{
		closeEject:function(){
			this.$emit('closeEject')
		}
	},
	watch: {
    },
	mounted() {
		
	}
}
</script>