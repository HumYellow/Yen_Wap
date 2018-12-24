<style type="text/css">
#myHeader{height:50px;width:100%}
#myHeader .header{position:fixed;left:0;top:0;width:100%;z-index:9999;}
#myHeader .loginNav{background:#ffffff;color:#333;height:50px; line-height:50px;z-index:10000;position:relative;}
#myHeader .menu{text-align:center; color:#000;background:#fff;line-height:60px;z-index:10000;position:relative;}
#myHeader .menu li{display:inline-block; padding:0 10px;}
#myHeader .menu li a{}
#myHeader .logo{position:absolute; left:20px;top:0;}
#myHeader .langChange{position:absolute;right:20px; top:20px;}
#myHeader .menuBtn{float:left;width:25%;height:100%}
#myHeader .menuCity{float:left;width:22%;font-size:3.5vw;padding-left:3%;color:#333;}
#myHeader .toCount{color:#dadada;background:#f6f6f6;border-radius:30px;width:50%; float:left;box-sizing: border-box;font-size:4vw; line-height:30px; height:30px; margin:10px 0;text-align:center;margin-left:5%;}
#myHeader .loginMod{float:left;width:20%;height:100%;}
#myHeader .loginMod a{color:#333;display:block; height:40%;width:80%;margin-right:5vw;text-align:center;margin:0 auto;}
#myHeader .loginMod a img{margin:15px auto;}
#myHeader .loginMod a.userNameBox{height:100%;padding:0;overflow: hidden;text-overflow: ellipsis;}
#myHeader .langTab{float:left;width:20%;height:100%;position:relative;}
#myHeader .langTabBox{display: flex;justify-content: center;align-items: center;}
#myHeader .langTab .langArrowUp{width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent;
    border-bottom:5px solid #000;margin-left:5px;}
#myHeader .langTab .langArrowDown {width:0; height:0; border-left:5px solid transparent; border-right:5px solid transparent;border-top:5px solid #000;margin-left:5px;}
#myHeader .langTab .langTabList{position:absolute;right:20px;top:40px;}
#myHeader .langTab .langTabMod{width:50px;background:rgba(86,86,86,.8);color:#fff;border-radius:3px;text-align:center;margin:0 auto;font-size:12px;line-height:40px;}
#myHeader .langTab .langTabMod p{border-top:.5px solid rgba(255,255,255,.4);}
#myHeader .menu-enter-active, #myHeader .menu-leave-active {
  transition: opacity .4s;
}
#myHeader .menu-enter, #myHeader .menu-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
	<div id="myHeader">
		<div class="header">
			<div class="loginNav">
				<div class="menuCity">{{$t('message.menu.HoChiMing')}}</div>
				<!-- <div class="menuBtn" @click="menuShowSwitch">菜单</div> -->
				<router-link to="/placeOrder" class="toCount">
					Miễn phí Thiết kế >
				</router-link>
				<!-- <div v-if="isLogin" class="loginMod">
					<router-link to="/myCenter">
						{{user.username}}
						<img height="100%" src="/static/image/login.png" />
					</router-link>
					<a @click="signOut">退出</a>
				</div>
				<div class="loginMod" v-else>
					<router-link v-if="showHead" to="/login">
						<img src="" />
					</router-link>
					<router-link to="/login">
						<img height="100%" src="/static/image/login.png" />
					</router-link>
				</div> -->
				<div class="langTab">
					<div class="langTabBox" @click="langTabOpenFn">
						<span v-if="lang == 'EN'">EN</span>
						<span v-else>VN</span>
						<span v-if="langTabOpen" class="langArrowUp"></span>
						<span v-else class="langArrowDown"></span>
					</div>
					<div class="langTabList" v-if="langTabOpen">
						<div class="langTabMod">
							<p @click="langTabFn('VN')">VN</p>
							<p @click="langTabFn('EN')">EN</p>
						</div>
					</div>
				</div>
			</div>
			<transition name="menu">
				<div class="menu" v-if="menuShow">
					<ul class="clear">
						<li><router-link to="/">Home</router-link></li>
						<li><router-link to="/design">Design</router-link></li>
						<li><router-link to="/company">Company</router-link></li>
						<li><router-link to="/strategy">Strategy</router-link></li>
						<li><router-link to="/guarantee">Guarantee</router-link></li>
					</ul>
				</div>
			</transition>
			<Eject @closeEject="closeEject" v-if="ejectShow" :ejectType="ejectType"></Eject>
			<!-- <a class="logo"><img width="80" :src="this.logoUrl" /></a> -->
		</div>
	</div>
</template>
<script type="text/javascript">
import vue from 'vue'
import store from '@/store.js'
import {mapGetters,mapActions} from 'vuex' 
import Eject from '@/components/public/eject/Eject'
export default{
	name:'myHeader',
	components:{
		Eject
	},
	data(){
		return{
			showHead:true,
			noShowList:['/login'],
			lang:this.$swallow.localStorageGet("lang"),
			contactShow:true,
			path:{
				home:'',
				ourServices:'',
				aboutUs:'',
				alphaTownMod:'',
				media:'',
				contactUs:'',
			},
			logoUrl:global.localPath+'/logo.png',
			user:{},
			isLogin:this.$swallow.getCookie('yen_u_key_'),
			menuShow:false,
			ejectShow:false,
			ejectType:{},
			langTabOpen:false
		}
	},
	computed:{
		pathBuild:function(){
			for(let i in this.path){
				this.path[i] = '/'+this.lang+'/'+i
			}
			return this.path;
		}
	},
	methods:{
		...mapActions(['langChange']),
		linkTo:function(lang){
			var path = this.$route.path.substring(1,3)
			if(path!=lang){
				path = '/'+lang+this.$route.path.substring(3)
				this.$router.push(path)
			}
			
		},
		look:function(){
			console.info(this.$store.state.lang);
		},
		showTab:function(){//切换展示
			for(var i = 0;i < this.noShowList.length;i++){
				this.$route.path == this.noShowList[i]?this.showHead = false:this.showHead = true
			}
		},
		signOut:function(){
			this.$swallow.delCookie('yen_u_key_');
			this.$router.push('/')
		},
		menuShowSwitch:function(){
			this.menuShow?this.menuShow = false:this.menuShow = true
			this.ejectShow?this.ejectShow = false:this.ejectShow = true
			this.$swallow.stop()
		},
		closeEject:function(){
			this.menuShow = false
			this.ejectShow = false
			this.$swallow.move()
		},
		langTabFn:function(lang){
			this.$swallow.localStorageSet("lang",lang)
			window.history.go(0)
			/*this.$i18n.locale = lang
			this.lang = this.$swallow.localStorageGet('lang')
			this.langTabOpenFn()*/
		},
		langTabOpenFn:function(){
			this.langTabOpen = !this.langTabOpen
		}
	},
	mounted:function(){
		this.showTab()
	},
	watch:{
		"$route":"showTab"
	},
	created(){
		this.$fetch('login/info')
	      .then((response) => {
	      	this.user = response.data
	      })
	},
}
</script>