<style type="text/css">
#feedback{height:100vh;background:#F5F5F5;}
.feedbackBox{padding:10px;color:#666;}
.feedbackBox .feedbackText{width:100%; border:none;padding:10px;box-sizing: border-box;border-radius:5px;}
.feedbackBox .feedbackTitle{color:#666666;font-size:12px;margin:15px 0;}
.feedbackBox .feedbackPhone{width:100%;box-sizing: border-box;border: none;padding:10px;border-radius:5px;}
.feedbackBox .feedbackSub{color:#fff;width:100%;padding:15px 0;background:#3FBB87;font-size:14px;display:block;border-radius:5px;text-align:center;margin:20px 0;}
</style>
<template>
	<div id="feedback">
		<PageHeader :thisTitle="$t('message.myFooter.feedback')"></PageHeader>
		<div class="feedbackBox">
			<textarea class="feedbackText" rows="10" maxlength="120" v-model="feedbackText" :placeholder="$t('message.myFooter.feedbackMod.writeDown')"></textarea>
			<p class="feedbackTitle">{{$t('message.myFooter.feedbackMod.contactNumber')}}</p>
			<input maxlength="10" oninput="value=value.replace(/[^\d]/g,'')" class="feedbackPhone" v-model="feedbackPhone" />
			<a class="feedbackSub" @click="feedbackSub">{{$t('message.login.submit')}}</a>
		</div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: 'feedback',
	data() {
	  return {
	  	feedbackText:'',
	  	feedbackPhone:''
	  }
	},
	components: {
		PageHeader,
	},
	methods:{
		feedbackSub:function(){
			var data = {
				phone:this.feedbackPhone,
				content:this.feedbackText
			}
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' || a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'content'){
						nullName = this.$t('message.myFooter.feedback')
					}
					this.$layer.alert(this.$t('message.login.pleaseInput')+' '+nullName,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			this.$post('/home/complaint/saveData', data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.$router.replace('/settings')
				}else{
					this.$layer.msg(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
				
			})
		}
	},
	mounted() {
	  
	}
}
</script>