<style type="text/css">
.shareBox{position:fixed;bottom:0px;left:0;width:100%;z-index:10000;}
.shareMod{width:90%;margin:10px auto;background:#fff;border-radius:5px;box-sizing: border-box;padding:10px;text-align:center;color:#333;}
.shareMod li{float:left;width:25%;text-align:center;}
.shareMod a{color:#333;font-size:12px;}
.shareMod a .shareIcon{width:36px;height:36px; margin:5px auto;}
</style>
<template>
	<div>
		<div class="shareBox">
			<div class="shareList shareMod">
				<ul class="clear">
					<li>
						<div class="fb-share-button" data-href="http://m.yenttroi.com/" data-layout="button_count"  data-mobile-iframe="true">
							<a target="_blank" :href="shareSrc" class="fb-xfbml-parse-ignore">
								<img width="100%" class="shareIcon" src="/static/image/shareIcon/facebook.png" />
								<div>facebook</div>
							</a>
						</div>
					</li>
				</ul>
			</div>
			<div class="shareMod">取消</div>
		</div>
		<Eject @closeEject="closeEject" :ejectType="ejectType">
			
		</Eject>
	</div>
</template>

<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'myHeader',
	props:{
		shareData:{
			src:''
		},
		shareShow:true,

	},
	components:{
		Eject
	},
	data(){
		return{
			ejectShow:false,
			ejectType:{},
			shareSrc:''
		}
	},
	computed:{
		
	},
	methods:{
		facebook() {
			// 初始化  
			FB.init({
				appId: '100030913179823',
				autoLogAppEvents: true,
				xfbml: true,
				version: "v2.12"
			});
			FB.ui({
				method: "share",
				mobile_iframe: false,
				href: "http://www.baidu.com"
			},
			function(response) {

			});
		},
		closeEject:function(){
			this.$emit('closeShare')
		},
		shareSrcFn:function(){
			if(this.shareData.src){
				this.shareSrc = 'https://www.facebook.com/sharer/sharer.php?u=http://m.yenttroi.com'+this.shareData.src
			}else{
				this.shareSrc = 'https://www.facebook.com/sharer/sharer.php?u=http://m.yenttroi.com'+this.$route.path
			}
		}
	},
	mounted:function(){
		this.shareSrcFn()
	},
	watch:{
		
	}
}</script>