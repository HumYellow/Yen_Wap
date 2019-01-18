<style type="text/css">
#commentBox .commentBox{position:fixed;left:0;bottom:0;width:100%;background:#fff;border-radius:5px;z-index:999;box-sizing: border-box;background:#fff;border-radius:10px 10px 0 0;height:80%;}
#commentBox .commentBox .commentBoxTitle{text-align:center;color:#333;border-bottom:1px solid #EAEAEA;padding:20px 0;}
#commentBox .commentBox .commentMod{padding:10px 5%;box-sizing: border-box;height:calc(100% - 130px);overflow-y: auto}
#commentBox .commentBox .commentMod h4{padding:20px 0;}
#commentBox .commentBox .commentMod .commentListMod{display: flex;justify-content: center;padding:10px 0;}
#commentBox .commentBox .commentMod .commentListMod .userHead{width:30px;height:30px;border-radius:50%;overflow:hidden;}
#commentBox .commentBox .commentMod .commentListMod .commentDesc{width:calc(100% - 70px);box-sizing: border-box;padding:0 10px;font-size:12px;}
#commentBox .commentBox .commentMod .commentListMod .commentDesc .userName{color:#333;}
#commentBox .commentBox .commentMod .commentListMod .commentDesc .commentTime{color:#BEBEBE;margin:5px 0;}
#commentBox .commentBox .commentMod .commentListMod .commentDesc .commentContent{font-size:14px;color:#333;margin-top:10px;}

#commentBox .commentBox .commentMod .commentListMod .commentPraise{width:40px;display: flex;justify-content: left;color:#999;height:16px;background-image:url('/static/image/praiseIcon.png');background-repeat:no-repeat;background-position:left top;background-size:auto 100%;}
#commentBox .commentBox .commentMod .commentListMod .commentPraise.select{background-image:url('/static/image/praisedIcon.png');color:#FF9D12;}
#commentBox .commentBox .commentMod .commentListMod .commentPraise span{margin-left:20px;}
#commentBox .commentBox .subComment{position:fixed;bottom:0;left:0;width:100%;box-sizing: border-box;padding:15px;background:#fff;border-top:1px solid #eaeaea;}
#commentBox .commentBox .subComment input{width:100%;border:none;background:#F6F6F6;border-radius:5px;padding:10px;box-sizing: border-box;color:#999999;}
#commentBox .commentBox .closeCommentBox{position:absolute;right:10px;top:10px;width:30px;height:30px;}
</style>
<template>
	<div id="commentBox">
		<div class="commentBox">
			<div class="commentBoxTitle">
				{{commentNum}} {{$t("message.comment.number")}}
			</div>
			<div class="commentMod" ref="commentMod">
				<div class="commentListBox" ref="commentListBox">
					<h4>{{$t("message.comment.allComment")}}</h4>
					<div class="commentListMod" v-for="(comment,index) in commentData">
						<div class="userHead">
							<img width="100%" height="100%" :src="comment.headImg" />
						</div>
						<div class="commentDesc">
							<p class="userName">{{comment.memberName}}</p>
							<p class="commentTime">{{comment.createTime}}</p>
							<p class="commentContent">{{comment.content}}</p>
						</div>
						<div class="commentPraise select" v-if="comment.isPraise" @click="unPraise(comment.evaluateId,index)">
							<span>{{comment.praiseCount}}</span>
						</div>
						<div class="commentPraise" v-else @click="toPraise(comment.evaluateId,index)">
							<span>{{comment.praiseCount}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="closeCommentBox" @click="closeEject">
				<img width="100%" src="/static/image/closeIcon.png" />
			</div>
			<div class="subComment">
				<input v-model="subComment" :placeholder="$t('message.comment.pushComment')" @keyup.enter="subCommentFn" maxlength="120" />
			</div>
		</div>
		<Eject @closeEject="closeEject" :ejectType="ejectType">
			
		</Eject>
	</div>
</template>

<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'commentBox',
	props:{
		commentNum:'',

	},
	components:{
		Eject
	},
	data(){
		return{
			ejectType:{},
			typeValue:'',
			subComment:'',
			commentData:{
			},
			newData:true,
		    pageNo:1,
		    number:10,
		    getting:false,
		    isLast:false,
		}
	},
	computed:{
		
	},
	methods:{
		typeValueFn:function(){
			if(this.$route.meta.type == 'design'){
				this.typeValue = 'DesignAtlas'
			}else if(this.$route.meta.type == 'strategy'){
				this.typeValue = 'Article'
			}

		},
		closeEject:function(){
			this.$emit('closeCommen')
		},
		getData:function(){
			if(this.getting) return
			this.getting = true
			let data = {
				typeValue:this.typeValue,
				relatedId:this.$route.params.id,
				pageNo:this.pageNo,
				number:this.number
			}
			this.$fetch('/evaluate/listData',data)
			.then((res)=>{
				this.getting = false
				if(res.errcode=='0000'){
					this.pageNo++
					if(this.newData){
						this.commentData = res.data
						this.$nextTick(() => {
							this.$refs.commentMod.scrollTop = 0
							
				        });
					}else{
						this.commentData = this.commentData.concat(res.data)
						if(res.data.length < this.number){
							this.isLast = true
							this.$layer.msg(this.$t("message.tips.noMore"))
						}
					}
				}else{
	  				this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		subCommentFn:function(){
			if(this.subComment == ''){
  				this.$layer.alert('Bình luận không thể là rỗng.',{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
  				return
			}
			let data = {
				relatedId:this.$route.params.id,
				typeValue:this.typeValue,
				content:this.subComment

			}
			this.$post('/home/evaluate/addData',data)
			.then((res)=>{
				if(res.errcode=='0000'){
					this.subComment = ''
					this.newData = true
					this.pageNo = 1
					this.isLast = false
	  				this.$layer.msg(res.msg)
	  				this.getData()
					this.$emit('getData')
				}else{
	  				this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})

		},
		toPraise:function(id,index){
			let data = {
				relatedId:id,
				typeValue:'Evaluate' 
			}
			this.$post('/home/praise/addData',data)
			.then((res)=>{
				if(res.errcode=='0000'){
	  				this.$layer.msg(res.msg)
	  				this.commentData[index].isPraise = 1
	  				this.commentData[index].praiseCount++
				}else{
	  				this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		},
		unPraise:function(id,index){
			let data = {
				relatedId:id,
				typeValue:'Evaluate' 
			}
			this.$post('/home/praise/deleteData',data)
			.then((res)=>{
				if(res.errcode=='0000'){
	  				this.commentData[index].isPraise = 0
	  				this.commentData[index].praiseCount--
				}else{
	  				this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})

		},
		isToNext:function(){
			let commentMod = this.$refs.commentMod
			commentMod.addEventListener('scroll',()=>{
				if(this.isLast)return
				if(this.$refs.commentMod.scrollTop+this.$refs.commentMod.clientHeight>=this.$refs.commentMod.scrollHeight-10){
					this.newData = false
					this.getData()
				}
			})
		},
		
	},
	mounted(){
		this.isToNext()
	},
	created(){
		this.typeValueFn()
		this.getData()
	},
	watch:{
		
	}
}
</script>