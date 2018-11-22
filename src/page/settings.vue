<style type="text/css">
#settings .settingsList{padding-left:20px;border-top:5px solid #F5F5F5;border-bottom:10px solid #F5F5F5}
#settings .settingsList .settingsMod{border-top:1px solid #eee;padding:10px 20px 10px 0;}
#settings .settingsList .settingsMod:nth-child(1){border:none;}
#settings .settingsList a{display:block;color:#333333;background:url(/static/image/myCenter/rightToIcon2.png) right center no-repeat;background-size:auto 30%;padding:10px 0;}
#settings .signOut{width:80%;height:40px;line-height:40px;text-align:center;border:1px solid #3FBB87;color:#3FBB87;display:block;margin:0 auto;margin-top:50px;border-radius:3px;}
</style>
<template>
	<div id="settings">
		<PageHeader :thisTitle="$t('message.myFooter.settings')"></PageHeader>
		<div class="settingsList">
			<div class="settingsMod">
				<router-link to="/termsService">{{$t("message.myFooter.termsOfService")}}</router-link>
			</div>
			<div class="settingsMod">
				<router-link to="/aboutUs">{{$t("message.myFooter.aboutUs")}}</router-link>
			</div>
			<div class="settingsMod">
				<router-link to="/contactUs">{{$t("message.myFooter.connectUs")}}</router-link>
			</div>
		</div>
		<a @click="signOut" class="signOut">{{$t("message.login.logout")}}</a>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: 'settings',
	data() {
	  return {

	  }
	},
	components: {
		PageHeader,
	},
	methods:{
		signOut:function(){
			this.$swallow.delCookie('yen_u_key_');
			this.$router.push('/')
		}
	},
	mounted() {
	  
	}
}
</script>