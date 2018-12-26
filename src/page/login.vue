<style type="text/css">
.loginPage{width:100%;height:100vh;margin:0 auto;background:#fff url('/static/image/loginBg.jpg') no-repeat;background-size: auto 100%;}
.loginPage .loginBox{width:70%;margin:0 auto; padding:20px 5%;}
.loginPage .loginTitle{text-align:center; font-size:22px;padding:7vh 0;display:block;}
.loginPage .loginTitle img{margin:0 auto;}
.loginPage .loginMod{margin-bottom:30px;text-align:center;padding:5px 20px;border-radius:7px;}
.loginPage .loginBox input{border:none;outline:none;font-size:16px; line-height:22px;width:80%;padding:5px;background:none;}
.loginPage .userNameMod{background:rgba(255,255,255,.8) url('/static/image/userNameIcon.png') no-repeat;
background-size:auto 50%;background-position:15px 10px;}
.loginPage .passwordMod{background:rgba(255,255,255,.8) url('/static/image/passwordIcon.png') no-repeat;
background-size:auto 50%;background-position:15px 10px;}
.loginPage .loginBox .null{border-color:red;}
.loginPage .toLogin{display:block;margin:0 auto;width:100%; padding:5px; font-size:16px;line-height:30px; color:#fff; background:#46ba89; border-radius:7px;text-align:center;box-sizing: border-box;}
.loginPage .otherLink{margin-top:20px;}
.loginPage .otherLink a{color:#fff;font-size:3.6vw;width:50%;display:block;float:left;}
.loginPage .otherLink a:nth-child(1){text-align:left;}
.loginPage .otherLink a:nth-child(2){text-align:right;}

</style>
<template>
	<div class="loginPage">
		<div class="loginBox">
			<router-link class="loginTitle" to="/">
				<img width="30%" src="/static/image/loginLogo.png" />
			</router-link>
			<div class="loginMod userNameMod">
				<input :class="userName == '' && this.isNull?'null':''" v-model="userName" :placeholder="$t('message.login.phone')" oninput="value=value.replace(/[^\d]/g,'')" maxlength="10" />
			</div>
			<div class="loginMod passwordMod">
				<input type="password" :class="password == ''&&this.isNull?'null':''" v-model="password" :placeholder="$t('message.login.password')" />
			</div>
			<a class="toLogin" @click="toLogin()">{{$t("message.login.login")}}</a>
			<div class="otherLink">
				<router-link to="/register">{{$t("message.login.register")}}!</router-link>
				<router-link to="/forgetPassword">{{$t("message.login.forgetPassword")}}?</router-link>
			</div>
			<!-- <a @click="test()">testGet</a>
			<a @click="setCookie">写入</a>
			<a @click="getCookie">读取</a>
			<a @click="delCookie">删除</a>
			<a @click="info">info</a> -->
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'login',
	components:{
	},
	data(){
		return {
			userName:'',
			password:'',
			isNull:false

		}
	},
	mounted:()=>{
	},
	methods:{
		toLogin:function(){
			var data = {
				'username':this.userName,
				'password':this.password
			}
			this.isNull = true
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' || a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}
					this.$layer.alert(this.$t('message.login.pleaseInput')+' '+nullName,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g
			if (!re.test(this.password)){
				this.$layer.alert(this.$t('message.login.passwordError'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$post('login/doLogin',data)
		      .then((response) => {
		      	if(response.errcode == '0000'){
					this.$layer.msg(this.$t('message.tips.success'))
			      	this.$swallow.setCookie('yen_u_key_',response.data)
			      	let path = this.$route.query.redirect?this.$route.query.redirect:'/';
			      	this.$router.push(path)
		      	}else{
		      		this.$layer.alert(response.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
		      	}
		      })
		},
		test:function(){
			this.$fetch('login/test',{
				test:'test'
			})
		      .then((response) => {
		        console.log(response)
		      })
		},
		setCookie:function(){
			this.$swallow.setCookie('yen_u_key_','B9974BCA9788A90EF33CC52307B2B755F71D5B741E8E61C8@b0612e26')
		},
		getCookie:function(){
			console.info(this.$swallow.getCookie('yen_u_key_'))
		},
		delCookie:function(){
			this.$swallow.delCookie('yen_u_key_')
		},
		info:function(){
			this.$fetch('home/member/info')
		      .then((response) => {
		        console.log(response)
		      })
		}
	}
}
</script>