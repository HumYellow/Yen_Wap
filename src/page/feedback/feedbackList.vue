<style type="text/css">
#feedbackList{background:#FAFAFA;height:100vh;}
#feedbackList .feedbackListMod{border-radius:5px;box-shadow:0px 1px 4px 0px rgba(0,0,0,0.13);display:block;margin:20px 0;background:#fff;}
#feedbackList .feedbackList{padding:0 3%;}
#feedbackList .feedbackListTitle ,#feedbackList .feedbackListDesc{padding:15px;box-sizing: border-box;}
#feedbackList .feedbackListTitle{color:#999;border-bottom:1px solid #F3F3F3;}
#feedbackList .feedbackListTitle .status.select{color:#3FBB87;}
#feedbackList .lastPage{color:#999;text-align:center;font-size:12px;}
#feedbackList .noMore{text-align:center;color:#333;margin:15vh 0;}
#feedbackList .noMore img{margin:0 auto;}
#feedbackList .noMore p{color:#999;margin:40px 0;}
</style>
<template>
	<div id="feedbackList">
		<PageHeader :thisTitle="$t('message.myFooter.feedbackMod.myFeedback')"></PageHeader>
		<div class="feedbackList">
			<router-link :to="'/feedbackOnline/'+feedback.complaintId" v-for="feedback in feedbackListData" class="feedbackListMod">
				<div class="feedbackListTitle clear">
					<div class="left">{{feedback.createTime}}</div>
					<div class="status right" v-if="feedback.status == 'A'">{{$t("message.myFooter.feedbackMod.recovered")}}</div>
					<div class="status select right" v-else>{{$t("message.myFooter.feedbackMod.unanswered")}}</div>
				</div>
				<div class="feedbackListDesc">
					{{feedback.content}}
				</div>
			</router-link>
			<p class="lastPage" v-if="lastPage">{{$t("message.tips.noMore")}}</p>
			<div class="noMore" v-if="noData">
				<img width="180" src="/static/image/noMore.png" />
				<p>{{$t("message.myFooter.feedbackMod.haventReceived")}}</p>
			</div>
		</div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: 'feedbackList',
	data() {
	  return {
	  	feedbackListData:[],
	  	pageNo:1,
	  	feedbackNum:10,
	  	getDataing:false,
	  	lastPage:false,
	  	noData:false,
	  }
	},
	components: {
		PageHeader,
	},
	methods:{
		getData:function(){
			this.getDataing = true
			var	data = {
				'pageNo':this.pageNo,
				'number':this.feedbackNum,
			};
			this.$fetch('/home/complaint/listData',data)
			.then((res)=>{
				this.getDataing = false
				if(res.errcode == '0000'){
					this.pageNo++
					if(res.data.length == 0)this.noData = true
					if(res.data.length < this.feedbackNum)this.lastPage = true//判断是否最后一页
					this.feedbackListData = res.data
				}
			})

		},
		isBottom(){
			if(this.getDataing) return
			if(document.body.scrollHeight - document.body.scrollTop <= document.body.clientHeight+10){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
	},
	mounted() {
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
	  
	},
	created() {
		this.getData()

	},
}
</script>