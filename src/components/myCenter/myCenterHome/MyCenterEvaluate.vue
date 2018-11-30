<style type="text/css">
#design{background:#f7f7f7; min-height:100vh;}
.evaluate{background:#fff;margin:20px;box-shadow: 2px 2px 30px #e9e9e9;box-sizing: border-box;padding:40px 20px;}
.evaluate .starList{text-align:center;margin:20px 0;}
.evaluate .starList .starBox{display:inline-block;padding:0 5px;cursor:pointer;width:30px;}
.evaluateText textarea{resize:none;border:1px solid #CCCCCC;background:#fafafa;padding:10px;width:100%; margin:10px 0;box-sizing: border-box;}
.evaluate .uploadPicBox{height:50px;position:relative;width:80%;}
.evaluate .uploadPicBox .uploadPic{float:left;height:60px;width:60px;overflow:hidden;}
.evaluate .uploadPicBox .uploadText{float:left;height:60px;line-height:60px;margin-left:20px;color:#666666;font-size:14px;}
.evaluate .uploadPicBox .uploadIndex{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;}
#myCenterEvaluate .subBtn{background:#3FBB87;color:#fff;width:90%;display:block;padding:10px; box-sizing: border-box;margin:20px auto;border-radius:5px;text-align:center;}
</style>
<template>
	<div id="myCenterEvaluate">
		<PageHeader thisTitle="Đánh giá"></PageHeader>
		<div class="evaluate">
			<div class="starList clear">
				<div class="starBox" v-for="(star ,index) in star" @click="starClick(index)">
					<img v-if="star.select" src="/static/image/myCenter/scoreStarSelect.png" width="100%" />
					<img v-else src="/static/image/myCenter/scoreStar.png" width="100%" />
				</div>
			</div>
			<div class="evaluateText">
				<textarea maxlength="50" v-model="evaluateDate.content" rows="10" :placeholder="$t('message.placeOrder.pleaseEvaluation')"></textarea>
			</div>
			<div class="uploadPicBox clear">
				<div class="uploadPic"><img height="100%" :src="nowImg" /></div>
				<div class="uploadText">{{$t('message.placeOrder.uploadPic')}}</div>
				<input class="uploadIndex" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="Agree to pay" id=""  />
			</div>
		</div>
		<div class="subBtn" @click="subDate">{{$t('message.login.submit')}}</div>
	</div>
</template>
<script type="text/javascript">
import PageHeader from '@/components/PageHeader'
export default {
	name:'MyCenterEvaluate',
	components:{
		PageHeader
	},
	data(){
		return {
			dvaluateData:this.$route.query,
			evaluateDate:{
				orderId:this.$route.query.orderId,
				tagValue:'step'+this.$route.query.tagValue,
			},
		  	star:[{
		  		select:false,
		  	},{
		  		select:false,
		  	},{
		  		select:false,
		  	},{
		  		select:false,
		  	},{
		  		select:false,
		  	}],
	  		nowImg:'/static/image/myCenter/scorePic.png',
		}
	},
	methods:{
		starClick:function(index){
			for(var i=0;i<this.star.length;i++){
				this.star[i].select = false
				if(i<=index)this.star[i].select = true
			}
			this.evaluateDate.star = index+1
		},
		fileImage:function(e){//上传图片
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2000KB的图片')
            }else{         
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','comment')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					this.nowImg = res.data.file
  					this.evaluateDate.img = this.nowImg
				})
			};
        },
  		subDate:function(){
  			if(!this.evaluateDate.star){
  				this.$layer.msg('Vui lòng đánh giá',{
					title:'message',
					btn:'OK'
				})
				return
  			}
  			this.$post('/home/order/comment/addData',this.evaluateDate)
			.then((res)=>{
				if(res.errcode=='0000'){
					this.$router.push('/myCenter')
				}else{
	  				this.$layer.alert(res.msg,{
						title:'message',
						btn:'OK'
					})
				}
			})
  		},
    },
	mounted:()=>{
		document.title = 'Evaluate'
	},
	created(){
	},
	beforeCreate () {
		document.querySelector('body').setAttribute('style', 'background-color:#FAFAFA')
	},
	beforeDestroy () {
		document.querySelector('body').removeAttribute('style')
	}
}
</script>