<style type="text/css">
#homeShortcutBox .homeShortcutBox{position:fixed;left:50%;top:50%;width:90%;height:180px;margin-left:-45%;margin-top:-90px;background:#fff;border-radius:5px;z-index:10000;box-sizing: border-box;padding:20px 0;}
#homeShortcutBox .closeShortcutBox{position:absolute;right:10px;top:10px;}
#homeShortcutBox .homeShortcutMod{display:flex;justify-content: center;margin:20px 0;}
#homeShortcutBox .homeShortcutMod a{width:40%;box-sizing: border-box;padding:10px;color:#333333;font-size:12px;}
#homeShortcutBox .homeShortcutMod a img{margin:0 auto;}
#homeShortcutBox .homeShortcutMod a p{margin-top:10px;text-align:center;}
</style>
<template>
	<div id="homeShortcutBox">
		<div class="homeShortcutBox">
			<div class="homeShortcutMod">
				<router-link to="/myDesignRevise/new">
					<img width="60%" src="/static/image/indexIcon/picShortcut.png" />
					<p>{{$t("message.myFooter.uploadAlbum")}}</p>
				</router-link>
				<!-- <router-link to="/strategy">
					<img width="60%" src="/static/image/indexIcon/strategyShortcut.png" />
					<p>Tải lên tập ảnh</p>
				</router-link> -->
				<router-link to="/feedback">
					<img width="60%" src="/static/image/indexIcon/feedbackShortcut.png" />
					<p>{{$t("message.myFooter.feedback")}}</p>
				</router-link>
			</div>
			<div class="closeShortcutBox" @click="closeEject">
				<img width="100%" src="/static/image/closeIcon.png" />
			</div>
		</div>
		<Eject @closeEject="closeEject" :ejectType="ejectType">
			
		</Eject>
	</div>
</template>

<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'homeShortcutBox',
	props:{
		homeShortcutData:{
			
		},

	},
	components:{
		Eject
	},
	data(){
		return{
			ejectShow:false,
			ejectType:{},
		}
	},
	computed:{
		
	},
	methods:{
		facebook() {
			
		},
		closeEject:function(){
			this.$emit('closeShortcut')
		},
		
	},
	mounted:function(){
		
	},
	watch:{
		
	}
}</script>