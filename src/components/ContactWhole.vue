<style type="text/css">
.contactWhole{position:fixed;right:0; bottom:0;background:#fff; width:320px;padding:40px;z-index:9999;box-shadow:1px 1px 1px #000}
.inputMod{margin:20px auto;width:100%}
.contactWhole input{border:none;font-size:16px; line-height:24px; width:80%; padding:5px 10px;border-bottom:1px solid #f4f4f4}
.subData{color:#fff; width:50%; margin:0 auto; background:#0cb46a;text-align:center; border-radius:5px; font-size:18px; line-height:36px;}
.closeContact{position:absolute; right:0;top:0;}

.contactWhole-enter-active, .contactWhole-leave-active {
  transition: opacity .8s;
}
.contactWhole-enter, .contactWhole-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
		<transition name="contactWhole">
			<div v-if="contactShow" class="contactWhole">
				<div class="center">
					<div class="inputMod"><input placeholder="name" v-model="subData.name" /></div>
					<div class="inputMod"><input placeholder="tel" value="" /></div>
					<div class="subData" @click="subDataAjax">Call Us</div>
				</div>
				<a v-on:click="contactShow = !contactShow" class="closeContact">X</a>
			</div>
		</transition>
</template>
<script type="text/javascript">
export default{
	name:'myHeader',
	data(){
		return{
			contactShow:false,
			subData:{
				name:'',
				tel:''
			}
		}
	},
	methods:{
		subDataAjax:function(){
			console.info(this.subData)
		}
	},
	mounted(){
		this.contactShow = true
	}
}
</script>
