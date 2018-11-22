<style type="text/css">
.footer{width:100%;box-sizing: border-box;color:#fff;z-index:1;position:fixed;bottom:-2px;left:0;background:#fff;box-shadow: 1px -1px 10px #e9e9e9;}
.footerMod{float:left; width:25%;text-align:center;color:#333;box-sizing: border-box;margin:10px 0;}
.footerMod img{margin:0 auto;width:25%;}
.footerMod p{margin-top:5px;color:#d6d6d6;font-size:3vw;}
.footerMod p.select{color:#333;}
</style>
<template>
	<div v-if="showThis" id="footer" class="footer clear">
		<router-link to="/" class="footerMod">
			<img :src="thisRouteMeta == 'home'?'/static/image/home-select.png':'/static/image/home.png'" />
			<p :class="thisRouteMeta == 'home'?'select':''">{{$t("message.menu.Home")}}</p>
		</router-link>
		<router-link to="/design" class="footerMod">
			<img :src="thisRouteMeta == 'design'?'/static/image/design-select.png':'/static/image/design.png'" />
			<p :class="thisRouteMeta == 'design'?'select':''">{{$t("message.menu.Design")}}</p>
		</router-link>
		<router-link to="/company" class="footerMod">
			<img :src="thisRouteMeta == 'company'?'/static/image/company-select.png':'/static/image/company.png'" />
			<p :class="thisRouteMeta == 'company'?'select':''">{{$t("message.menu.Company")}}</p>
		</router-link>
		<router-link to="/myCenter" class="footerMod">
			<img :src="thisRouteMeta == 'myCenter'?'/static/image/mine-select.png':'/static/image/mine.png'" />
			<p :class="thisRouteMeta == 'myCenter'?'select':''">{{$t("message.menu.Mine")}}</p>
		</router-link>
	</div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'myFooter',
	data(){
		return{
			showThis:true,
			noShowList:['/login','/register'],
			ejectType:'complaint',
			ejectShow:false,
			thisRouteMeta:this.$route.meta.type
		}
	},
	components:{
		Eject
	},
	computed:{
	},
	methods:{
		showTab:function(){//切换展示
			for(var i = 0;i < this.noShowList.length;i++){
				if(this.$route.path == this.noShowList[i]){
					this.showThis = false 
					return
				}else this.showThis = true
			}
		},
		showEject:function(){
			this.ejectShow = true
			this.$swallow.stop()
		},
		closeEject:function(){
			this.ejectShow = false
			this.$swallow.move()
		}

	},
	mounted:function(){
		this.showTab();
	},
	watch:{
		"$route":"showTab"
	}
}
</script>