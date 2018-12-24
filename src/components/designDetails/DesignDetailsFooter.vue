<style type="text/css">
.toPlaceOrder{position:fixed;left:0;bottom:0;background:#fff;width:100%;padding:10px 0;display:flex;justify-content: center;box-sizing: border-box;padding:10px 5%;}
.toPlaceOrder a{margin:0 auto;width:90%;display:block;height:40px;line-height:40px;color:#fff;background:#3FBB87;border-radius:8px;text-align:center;}
.toPlaceOrder .commentBtnBox{max-width:10%;padding-left:4%;}
.toPlaceOrder .commentBtn{height:40px;display: flex;flex-direction: column;justify-content: center;text-align:center;}
.toPlaceOrder .commentBtn img{height:60%; width:auto;display:inline;}
.toPlaceOrder .commentBtn span{height:40%;display:block;color:#666666;font-size:12px;line-height:16px;}

</style>
<template>
	<div class="DesignDetailsFooter">
		<div class="toPlaceOrder">
	    	<router-link to="/placeOrder">
	    		{{$t('message.company.freeDesign')}}
	    	</router-link>
	    	<!-- <div class="commentBtnBox" @click="toCommen">
	    			    	<span class="commentBtn">
	    			    		<img height="50%" width="auto" src="/static/image/commentIcon.png" />
	    						<span>{{swiperSlides.evaluateCount}}</span>
	    			    	</span>
	    			    </div> -->
	    </div>
	    <commentBox v-if="commenShow" :commentNum="swiperSlides.evaluateCount" @closeCommen="closeCommen" @getData="getData"></commentBox>
    </div>
</template>
<script>
import commentBox from '@/components/public/eject/commentBox'
export default {
	name: '',
	props:{
	    swiperSlides: {},

	},
	data() {
	  return {
	    commentData: {
	    },
	    commenShow:false,
	  	
	  }
	},
	components: {
		commentBox,
	},
	methods:{
		toCommen:function(){
			this.commenShow = !this.commenShow
		},
		closeCommen:function(){
			this.commenShow = false
		},
		getData:function(){
			this.$emit('getData')
		}
	},
	mounted() {
	  
	},
	created(){
	},
}
</script>