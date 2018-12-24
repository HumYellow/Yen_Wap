<style type="text/css">
#HomeShortcut .HomeShortcutEntry{position:fixed;right:30px;bottom:80px; width:55px;height:55px;z-index:9999;}
</style>
<template>
	<div id="HomeShortcut">
		<div class="HomeShortcutEntry" @click="shortcutEntry">
			<img width="100%" src="/static/image/indexIcon/entry.png" />
		</div>
		<homeShortcutBox v-if="homeShortcutShadow" @closeShortcut="closeShortcut" :homeShortcutData="homeShortcutData"></homeShortcutBox>
	</div>
</template>

<script>
import homeShortcutBox from '@/components/public/eject/homeShortcutBox'

export default {
	name: 'homeMenu',
	data() {
	  return {
	    homeShortcutShadow:false,
	    homeShortcutData:{}
	  }
	},
	components: {
		homeShortcutBox
	},
	methods:{
		shortcutEntry:function(){
			event.preventDefault()
			this.homeShortcutShadow = !this.homeShortcutShadow
		},
		closeShortcut:function(){
			this.homeShortcutShadow = false

		}
	},
	mounted(){
	},
	created(){
	}
}
</script>