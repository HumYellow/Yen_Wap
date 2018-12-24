<style type="text/css">
#feedbackOnline{height:100vh;overflow:hidden;width:100%;position:relative;}
#feedbackOnline .feedbackOnlineHead{position:fixed;top:0;left:0;width:100%;z-index:2;}
#feedbackOnline .feedbackOnlineDesc{display: flex;align-items: flex-end;}
#feedbackOnline .feedbackOnlineDesc.service{}
#feedbackOnline .feedbackOnlineDesc.user{justify-content:flex-end;}
#feedbackOnline .userHead{width:50px;height:50px;border-radius:50%;overflow:hidden;margin:0 10px;}
#feedbackOnline .userWord{width:50%;padding:15px;border-radius:10px;background:#F6F6F6;color:#333;}
#feedbackOnline #feedbackOnlineMod{height:100vh; padding:60px 0 80px; box-sizing: border-box;}
#feedbackOnline .feedbackOnlineTime{color:#999999;font-size:12px;text-align:center;margin:5px 0;}
#feedbackOnline #feedbackOnlineListBox{height:100%;overflow-y:scroll;}
#feedbackOnline .feedbackOnlineListMod{}
#feedbackOnline .feedbackOnlineListMod .feedbackOnlineList{padding:15px 0;}
#feedbackOnline .reply{position:fixed;bottom:0;left:0;width:100%;box-sizing: border-box;padding:10px 3%;border-top:1px solid #E5E5E5;background:#fff;}
#feedbackOnline .reply input{border:none;background:#F6F6F6;width:100%;padding:10px;box-sizing: border-box;color:#999;}
</style>
<template>
	<div id="feedbackOnline">
		<div class="feedbackOnlineHead">
			<PageHeader thisTitle="Hồ sơ phản hồi"></PageHeader>
		</div>

		<div id="feedbackOnlineMod">
			<div id="feedbackOnlineListBox">
				<div class="feedbackOnlineListMod">
					<div v-for="list in feedbackOnlineData" class="feedbackOnlineList">
						<p class="feedbackOnlineTime">{{list.createTime}}</p>
						<div v-if="list.memberType == 1" class="feedbackOnlineDesc service">
							<div class="userHead">
								<img width="100%" height="100%" :src="list.img" />
							</div>
							<div class="userWord">{{list.content}}</div>
						</div>
						<div v-else class="feedbackOnlineDesc user">
							<div class="userWord">{{list.content}}</div>
							<div class="userHead">
								<img width="100%" height="100%" :src="list.img" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="reply"><input v-model="submitReply" @keyup.enter="submitReplyFn" maxlength="120" :placeholder="$t('message.myFooter.feedbackMod.writeDown')" /></div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: 'feedbackOnline',
	data() {
	  return {
	  	feedbackOnlineData:{},
	  	submitReply:'',
	  	lastTime:'',
	  	feedbackNum:10,
	  	getDataing:false,
	  	lastPage:false,
	  	ajaxNew:true,
	  	toBottom:true,
	  }
	},
	components: {
		PageHeader,
	},
	methods:{
		getData:function(){console.info(this.lastPage)
			this.getDataing = true
			var	data = {
				'id':this.$route.params.id,
				'lastTime':this.lastTime,
				'number':this.feedbackNum,
			};
			this.$fetch('/home/complaint/reply/listData',data)
			.then((res)=>{
				this.getDataing = false
				if(res.errcode == '0000'){
					this.lastTime = res.data[0].createTime
					if(res.data.length < this.feedbackNum)this.lastPage = true//判断是否最后一页
					if(this.ajaxNew){
						this.feedbackOnlineData = res.data
					}else{
						this.feedbackOnlineData = res.data.concat(this.feedbackOnlineData)
					}
					if(this.toBottom){
						this.$nextTick(function(){
							var div = document.getElementById('feedbackOnlineListBox');
							div.scrollTop = div.scrollHeight;
							this.toBottom = false
						})
					}
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})

		},
		isTop:function(){
			if(this.getDataing) return
			var div = document.getElementById('feedbackOnlineListBox');
			if(div.scrollTop<=20){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
		submitReplyFn:function(){
			if(this.submitReply == ''){
				this.$layer.closeAll('alert')
				this.$layer.alert('Reply '+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			let data = {
				id:this.$route.params.id,
				content:this.submitReply
			}
			this.$post('/home/complaint/reply/saveData',data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.submitReply = ''
					this.ajaxNew = true
					this.lastTime=''
					this.$layer.msg(res.msg)
					this.getData()
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		}
	},
	mounted() {
		var div = document.getElementById('feedbackOnlineListBox');
		div.addEventListener('scroll', this.isTop)
		div.addEventListener('touchmove', this.isTop)
	  
	},
	created(){
		this.getData()
	}
}
</script>