<style type="text/css">
.myCenterHead{padding:40px 20px 40px 30px;border-bottom:2px solid #eee;}
.myCenterHead .userDesc{background:url('/static/image/myCenter/rightToIcon.png') right center no-repeat;background-size:10px auto;display:block;}
.myCenterHead .userPic{width:60px;height:60px;float:left;overflow:hidden;border-radius:50%;}
.myCenterHead .userText{width:70%;float:left;margin-left:5%;}
.myCenterHead .userText h3.userName{font-size:16px;height:30px; line-height:30px;font-weight:400;}
.myCenterHead .userText p.userid{font-size:13px; line-height:24px;color:#666;}
.myCenterHead .signOut{position:absolute;right:15px; top:15px; width:20px;height:20px;display:block;}
</style>
<template>
	<div class="myCenterHead">
		<router-link class="userDesc clear" to="/personalData">
			<div class="userPic">
				<img width="100%" height="100%" :src="userDesc.headImg" />
			</div>
			<div class="userText">
				<h3 class="userName">{{userDesc.phone}}</h3>
				<p class="userid">ID：{{userDesc.id}}</p>
			</div>
		</router-link>
		<router-link class="signOut" to="/settings"><img width="100%" src="/static/image/myCenter/setUp.png" /></router-link>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	userDesc:{}
	  }
	},
	components: {
	},
	methods:{
		signOut:function(){
			this.$swallow.delCookie('yen_u_key_');
			this.$router.push('/')
		}
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/login/info')
		.then((res)=>{
			this.userDesc = res.data
		})
	}
}
</script>