<style type="text/css">
#forgetPassword input{border:none;outline:none;width:100%;}
.forgetPasswordMod{background:#fff;width:90%;margin:20px auto;padding:15px 20px;border-radius:7px;box-sizing: border-box;}
.dynamicCodeMod{width:90%;margin:20px auto;height:40px;line-height:40px;background:#fff;border-radius:7px;box-sizing: border-box;padding-left:20px;overflow:hidden;}
.dynamicCodeMod .dynamicCode{width:70%;margin:0;}
.dynamicCodeMod .getVerify{width:30%;float:left;color:#fff;background:#3FBB87;height:40px;line-height:40px;text-align:center;font-size:12px;}
.dynamicCodeMod .verifyGeting{background:#cacaca;}
#forgetPassword .forgetPassword{display:block;margin:40px auto;width:90%; padding:5px; font-size:16px;line-height:30px; color:#fff; background:#3FBB87; border-radius:7px;text-align:center;box-sizing: border-box;}
</style>
<template>
	<div id="forgetPassword">
		<PageHeader :thisTitle="thisTitle"></PageHeader>
		<div class="forgetPasswordMod">
			<input :class="phone == ''&&this.null?'null':''" v-model="phone" :placeholder="$t('message.login.phone')" oninput="value=value.replace(/[^\d]/g,'')" maxlength="10" />
		</div>
		<div class="dynamicCodeMod clear">
			<div class="dynamicCode left">
				<input :class="dynamicCode == ''&&this.null?'null':''" v-model="dynamicCode" :placeholder="$t('message.login.inputVerificationCode')" oninput="value=value.replace(/[\W]/g,'')" maxlength="4" />
			</div>
			<a v-if="!verifyGeting" class="getVerify" @click="getVerify">{{$t('message.login.get')}}</a>
			<a v-else class="getVerify verifyGeting">{{countdownData.sec}}S</a>
		</div>
		<div class="forgetPasswordMod">
			<input type="password" :class="password1 == '' && this.null?'null':''" v-model="password1" :placeholder="$t('message.login.password')" oninput="value=value.replace(/[\W]/g,'')" />
		</div>
		<div class="forgetPasswordMod">
			<input type="password" :class="password2 == '' && this.null?'null':''" v-model="password2" :placeholder="$t('message.login.againPassword')" oninput="value=value.replace(/[\W]/g,'')" />
		</div>
		<a class="forgetPassword" @click="forgetPassword()">{{$t('message.login.submit')}}</a>
	</div>
</template>
<script type="text/javascript">
import PageHeader from '@/components/PageHeader'
export default {
	name:'forgetPassword',
	components:{
		PageHeader
	},
	data(){
		return {
			thisTitle:'Quên mật khẩu của bạn',
			contSub:true,
			phone:'',
			dynamicCode:'',
			password1:'',
			password2:'',
			null:false,
			verifyGeting:false,
			countdownData:{
				day: 0,
				hr: 0, 
				min: 0, 
				sec: 0
			}

		}
	},
	mounted:()=>{
		document.title = 'Forget the password'
	},
	methods:{
		forgetPassword:function(){
			var data = {
				'phone':this.phone,
				'password':this.password1,
				'dynamicCode':this.dynamicCode
			}
			this.contSub = true
			this.null = true
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' && a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}
					this.$layer.alert(nullName+this.$t('message.tips.contNull'),{
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
				this.$post('/login/changePassword',data)
				.then((response) => {
					if(response.success){
						this.$layer.msg(this.$t('message.tips.success'))
				      	this.$router.push('/login')
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
			this.$post('/login/sendDynamicCode2',{
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
		}
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#f5f5f5')
	},
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	}
}
</script>