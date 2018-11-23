<style type="text/css">
.registerPage{width:100%;height:100vh;margin:0 auto;background:#fff url('/static/image/loginBg.jpg') no-repeat;background-size: auto 100%;}
.registerPage .registerBox{width:70%;margin:0 auto; padding:20px 5%;}
.registerPage .registerTitle{text-align:center; font-size:22px;margin:7vh auto;display:block;}
.registerPage .registerTitle img{margin:0 auto;}
.registerPage .registerMod{margin-bottom:30px;text-align:center;padding:5px 20px;border-radius:7px;background-color:rgba(255,255,255,.85);background-repeat:no-repeat;}
.registerPage .registerBox input{border:none;outline:none;font-size:16px; line-height:22px;width:100%;padding:2px 0;background:none;}
/* .registerPage .userNameMod{background-image:url('/static/image/userNameIcon.png');
background-size:auto 50%;background-position:15px 10px;}
.registerPage .passwordMod{background-image:url('/static/image/passwordIcon.png');
background-size:auto 50%;background-position:15px 10px;}
.registerPage .telMod{background-image:url('/static/image/telIcon.png');
background-size:auto 50%;background-position:17px 12px;} */
.registerPage .dynamicCode{width:35%;}
.registerPage .getVerify{color:#fff;background:#3FBB87;padding:12px 0;width:45%;text-align:center;border-radius:7px;font-size:12px;}
.registerPage .getVerify.verifyGeting{background:#cacaca;}
.registerPage .registerBox .null{border-color:red;}
.registerPage .toregister{display:block;margin:0 auto;width:100%; padding:5px; font-size:16px;line-height:30px; color:#fff; background:#3FBB87; border-radius:7px;text-align:center;box-sizing: border-box;}
.registerPage .otherLink{margin-top:10px;}
.registerPage .otherLink a{color:#fff;font-size:3.6vw;}
.readingProtocol{color:#EBEBEB;margin-bottom:15px;}
.readingProtocol p{margin-left:30px;line-height:20px;}
.readingProtocol span.selectMod{width:14px;height:14px;display:block;margin:2px 0;float:left;}
.readingProtocol a{color:#3FBB87;}
</style>
<template>
	<div class="registerPage">
		<div class="registerBox">
			<router-link class="registerTitle" to="/">
				<img width="30%" src="/static/image/loginLogo.png" />
			</router-link>
			<div class="registerMod telMod">
				<input :class="phone == ''&&this.null?'null':''" v-model="phone" :placeholder="$t('message.login.phone')" oninput="value=value.replace(/[^\d]/g,'')" maxlength="10" />
			</div>
			<div class="clear">
				<div class="registerMod dynamicCode left">
					<input :class="dynamicCode == ''&&this.null?'null':''" v-model="dynamicCode" :placeholder="$t('message.login.inputVerificationCode')" oninput="value=value.replace(/[\W]/g,'')" maxlength="4" />
				</div>
				<a v-if="!verifyGeting" class="getVerify right" @click="getVerify">{{$t("message.login.getCode")}}</a>
				<a v-else class="getVerify right verifyGeting">{{countdownData.sec}}S</a>
			</div>
			<div class="registerMod passwordMod">
				<input type="password" :class="password1 == '' && this.null?'null':''" v-model="password1" :placeholder="$t('message.login.password')" oninput="value=value.replace(/[\W]/g,'')" />
			</div>
			<div class="registerMod passwordMod">
				<input type="password" :class="password2 == '' && this.null?'null':''" v-model="password2" :placeholder="$t('message.login.againPassword')" oninput="value=value.replace(/[\W]/g,'')" />
			</div>
			<div class="readingProtocol clear">
				<span class="selectMod" @click="readTab">
					<img width="100%" :src="readUrl" />
				</span>
				<p>Tôi đã đọc và đồng ý với <router-link to="/termsService">《Thỏa thuận người dùng của Yến trời》</router-link></p>
			</div>
			<a class="toregister" @click="register()">{{$t("message.login.register")}}</a>
			<p class="otherLink">
				<router-link to="/login">{{$t("message.login.login")}}</router-link>
			</p>
		</div>
	</div>
</template>
<script type="text/javascript">
export default {
	name:'register',
	components:{
	},
	data(){
		return {
			contSub:true,
			phone:'',
			dynamicCode:'',
			password1:'',
			password2:'',
			null:false,
			verifyGeting:false,
			selectRead:true,
			countdownData:{
				day: 0,
				hr: 0, 
				min: 0, 
				sec: 0
			},
			readUrl:'/static/image/readSelect.png'
		}
	},
	mounted(){
		document.title = 'register'
	},
	created(){
	},
	methods:{
		register:function(){
			var data = {
				'password':this.password1,
				'phone':this.phone,
				'dynamicCode':this.dynamicCode,
				'selectRead':this.selectRead,
			}
			this.null = true
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' && a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}else if(a == 'selectRead'){
						this.$layer.alert('Làm ơn đọc người dùng giao thức',{
							title:this.$t('message.tips.titleMsg'),
							btn:this.$t('message.tips.ok')
						})
						return
					}
					this.$layer.alert('Vui lòng nhập '+nullName+' và Mật khẩu',{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			var re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/g
			if (!re.test(this.password1)){
				this.$layer.alert(this.$t('message.login.passwordError'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			if(this.password1 != this.password2){
				this.$layer.alert(this.$t('message.tips.passwordDifferent'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			if(this.contSub){
				this.$post('/login/register',data)
				.then((response) => {
					if(response.success){
						this.$layer.msg(this.$t('message.tips.success'))
			      		this.$swallow.setCookie('yen_u_key_',response.data)
			      		this.$router.push('/')
					}else{
						this.$layer.alert(response.msg,{
							title:this.$t('message.tips.titleMsg'),
							btn:this.$t('message.tips.ok')
						})
					}
				})

			}
		},
		getVerify:function(){
			if(this.phone==''){
				this.$layer.alert(this.$t('message.login.phone')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$post('/login/sendDynamicCode',{
				'phone':this.phone
			}).then((res) => {
				if(res.errcode == '0000'){
					this.verifyGeting = true
					this.$swallow.setCookie('verifyGeting',true,1/60)
					this.countdown(59000)

				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		countdown: function (endDateStr) {
			const msec = parseInt(endDateStr / 1000)
			let day = parseInt(msec / 60 / 60 / 24)
			let hr = parseInt(msec / 60 / 60 % 24)
			let min = parseInt(msec / 60 % 60)
			let sec = parseInt(msec % 60)
			this.$set(this.countdownData,'day',day)
			this.$set(this.countdownData,'hr',hr > 9 ? hr : '0' + hr)
			this.$set(this.countdownData,'min',min > 9 ? min : '0' + min)
			this.$set(this.countdownData,'sec',sec > 9 ? sec : '0' + sec)
			const that = this
			setTimeout(function () {
				if(endDateStr<=0){
					that.verifyGeting = false
					return
				}else{
					that.countdown(endDateStr-1000)
				}
			}, 1000)
		},
		readTab:function(){
			this.selectRead = !this.selectRead
			this.readUrl = this.selectRead?'/static/image/readSelect.png':'/static/image/readNoSelect.png'
		}
	}
}
</script>