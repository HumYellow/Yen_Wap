<style type="text/css">
.personalDataList{background:#fff;border-top:20px solid #f5f5f5;}
.personalDataMod.contTo{background:none;}

.personalDataMod{width:85%;margin:0 5%;border-bottom:1px solid #eee;height:30px;padding:10px 0; font-size:3.5vw;color:#333;display:block;background:url('/static/image/myCenter/rightToIcon2.png') right center no-repeat;background-size:10px auto;padding-right:5%;}
.personalDataHead{height:45px;position:relative;}
.personalDataTitle{float:left;width:40%;line-height:30px;}
.personalDataDesc{float:right;height:100%;line-height:30px;text-align:right;}
.personalDataHead .personalDataTitle{line-height:45px;}
.personalDataHead .personalDataDesc{width:45px;height:45px;overflow:hidden;border-radius:50%;}
.personalDataHead .personalDataDesc .headBox{float:right;width:45px;}
.personalDataHead input{position:absolute;width:100%;height:100%;right:0;top:0;opacity: 0;}
.personalDataDesc .selectDataMod{padding:0 10px;border-left:1px solid #666;}
.personalDataDesc .selectDataMod:nth-child(1){border:none;}
</style>
<template>
	<div class="personalDataBox">
		<PageHeader :thisTitle="$t('message.myCenter.myCenterSidebar.personalData')"></PageHeader>
		<div class="personalDataList">
			<div class="personalDataMod personalDataHead clear">
				<div class="personalDataTitle">{{$t('message.myCenter.personalData.currentProfilePhoto')}}</div>
				<div class="personalDataDesc">
					<img height="100%" width="100%" :src="personalData.headImg" />
				</div>
				<input v-if="!fileing" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="" id=""  />
			</div>
			<div class="personalDataMod contTo clear">
				<div class="personalDataTitle">{{$t('message.login.phone')}}</div>
				<div class="personalDataDesc">{{personalData.phone}}</div>
			</div>
			<router-link to="/personalData/chooseCity" class="personalDataMod clear">
				<div class="personalDataTitle">{{$t('message.myCenter.personalData.city')}}</div>
				<div class="personalDataDesc" v-if="personalData.selectCity">{{personalData.selectCity.name}}</div>
			</router-link>
			<div style="border-top:10px solid #F5F5F5">
				<router-link to="/personalData/acreage" class="personalDataMod clear">
					<div class="personalDataTitle">{{$t('message.myCenter.personalData.acreage')}}</div>
					<div class="personalDataDesc">{{personalData.acreage}}m²</div>
				</router-link>
				<router-link v-for="personalType in personalTypeData" :to="personalType.designRangeId == 4?'/personalData/chooseStyle':'/personalData/chooseType'" class="personalDataMod clear">
					<div class="personalDataTitle">{{personalType.name}}</div>
					<div class="personalDataDesc">
						<span class="selectDataMod" v-for="select in personalType.selectTypeList">{{select.name}}</span>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import PageHeader from '@/components/PageHeader'
export default {
	components:{
		PageHeader,
	},
	data(){
		return {
			personalData:{},
			personalTypeData:{},
			fileing:false
		}
	},
	mounted(){
		
	},
	methods: {
		getData:function(){
			this.$fetch('/home/member/infoData')
			.then((res)=>{
				this.personalData = res.data
			})
		},
		getTypeData:function(){
			this.$fetch('/home/design/type/groupData',{selectType:'member'})
			.then((res)=>{
				this.personalTypeData = res.data
			})
		},
		fileImage:function(e){//上传图片
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2000KB的图片')
            }else{ 
            	this.fileing = true        
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','member')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					this.fileing = false
					this.pubHead(res.data.file)
				})
				//

            }
        },
        pubHead:function(url){
        	this.$post('/home/member/updateHeadImgData',{//发布头像
				headImg:url,
			})
			.then((res)=>{
				this.$set(this.personalData,'headImg',url)
			})
        }
		
	},
	created() {
		this.getData()
		this.getTypeData()

	},
}
</script>