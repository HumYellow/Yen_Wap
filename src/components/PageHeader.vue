<style type="text/css">
#pageHeader{width:100%;height:22px;padding:14px 0;box-shadow:1px 2px 10px #e9e9e9;text-align:center;color:#333;font-size:16px;line-height:22px;position:relative;background:#fff;}
#pageHeader .backLink{display:block;height:30%;position:absolute;left:2%;top:35%}
#pageHeader .backLink img{float:left;margin-left:3vw;}
#pageHeader .rightMod{position:absolute;right:5%}
#pageHeader .pageHeaderCollection{top:30%;display: flex;justify-content: center}
#pageHeader .toUpload{top:30%; width:6vw;}
#pageHeader .upload{top:30%;}
#pageHeader .upload a{color:#3FBB87;}

#pageHeader .modifyPhoneHead{top:27%;right:2%;}
#pageHeader .modifyPhoneHead .modifyPhoneNext{font-size:12px;color:#666;}
</style>
<template>
	<div id="pageHeader" class="pageHeader clear">
		<span @click="linkBack" class="backLink">
			<img height="100%" src="/static/image/leftBack.png" />
		</span>
		{{thisTitle}}
		<div v-if="this.thisName == 'companyDetails' || this.thisName == 'designDetails' || this.thisName == 'strategyDetails'" class="pageHeaderCollection rightMod">
			<div class="mr15" @click="toShareFn">
				<img class="collectionImg" width="18" src="/static/image/headerShare.png" />
			</div>
			<div @click="subCollection(collect)" :data-collect="collect" v-if="this.thisName != 'strategyDetails'">
				<img v-if="collect==1" class="collectionImg" width="18" src="/static/image/collectionFinish.png" />
				<img v-else class="collectionImg" width="18" src="/static/image/collectionHead.png" />
			</div>
		</div>
		<div v-if="this.thisName == 'myDesignList'" class="toUpload rightMod">
			<router-link to="/myDesignRevise/new">
				<img width="100%" src="/static/image/myCenter/toUpload.png" />
			</router-link>
		</div>
		<div v-if="this.thisName == 'myDesignDetails'" class="upload rightMod">
			<router-link :to="'/myDesignRevise/'+thisId">{{$t('message.myCenter.personalData.edit')}}</router-link>
		</div>
		<div v-if="this.thisName == 'myDesignRevise' || 
					this.thisName == 'acreage' ||
					this.thisName == 'chooseStyle' " class="upload rightMod" @click="save">
			<a v-if="this.$route.params.id!='new'">{{$t('message.myCenter.personalData.save')}}</a>
			<a v-else>{{$t('message.myCenter.personalData.post')}}</a>
		</div>
		<div v-if="this.thisName == 'modifyPhone'" class="modifyPhoneHead rightMod">
			<a class="modifyPhoneNext" @click="save">
				{{$t('message.modifyPhone.verify')}}
			</a>
		</div>
		<div v-if="this.thisName == 'modifyPhoneFinish'" class="modifyPhoneHead rightMod">
			<a class="modifyPhoneNext" @click="save">
				{{$t('message.modifyPhone.finish')}}
			</a>
		</div>
		<div v-if="this.thisName == 'feedback'" class="modifyPhoneHead rightMod">
			<router-link class="modifyPhoneNext" to="/feedbackList">
				{{$t('message.myFooter.feedbackMod.myFeedback')}}
			</router-link>
		</div>
		<shareBox v-if="shareShow" @closeShare="closeShare" :shareData="shareData"></shareBox>
    </div>
</template>
<script>
import shareBox from '@/components/public/eject/shareBox'
export default {
	name: '',
	props:{
		thisTitle:'',
		collect:'',

	},
	data() {
	  return {
		isCollection:false,
		thisName:this.$route.name,
		thisId:this.$route.params.id,
	  	isLogin:this.$swallow.getCookie('yen_u_key_'),
	  	collectType:this.$route.meta.collectType,
		ajaxing:false,
      	shareShow:false,
      	shareData:{}
	  }
	},
	components: {
		shareBox

	},
	mounted() {
	  this.getCollection()
	},
	methods:{
		getCollection:function(){
			this.thisName = this.$route.name
		},
		subCollection:function(el){
			if(this.ajaxing)return
			this.ajaxing = true
			var url;
			if(el == 1){
				url = '/home/collect/deleteData'
			}else if(el == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':this.collectType,
				'relatedId':this.thisId
			}).then(res => {
				el == 1?el = 0:el = 1
				this.$emit('collectTab',el)
				this.ajaxing = false
			})
		},
		save:function(){
			this.$emit('savePic')
		},
		closeShare:function(){
			this.shareShow = false
		},
		toShareFn:function(id){
			this.shareShow = !this.shareShow
			this.shareData.src = this.$route.path
		},
		linkBack:function(){
			this.$router.go(-1)
		}

	}
}
</script>