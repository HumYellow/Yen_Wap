<style type="text/css">
.myDesignDetailList{padding:10px 5%;}
.myDesignName input{border:none;width:100%;}
.myDesignDetailList .picList{margin-top:10px;}
.myDesignDetailList .picMod{float:left;width:32%;margin:5px .5%;position:relative;}
.myDesignDetailList .picMod .picModPic{height:18vw;overflow:hidden;}
.myDesignDetailList .picMod .picModDesc{margin-top:5px;}
.myDesignDetailList .picMod .picModDesc .left{width:85%;}
.myDesignDetailList .picMod .picModDesc .delece{width:15px;margin-top:2px;}
.myDesignDetailList .picMod .picModDesc .left input{width:100%;border:none;color:#666666;}
.myDesignDetailList .picMod input.fileImage{opacity:0;width:100%;height:100%;position:absolute;left:0;top:0;}
.myDesignDetailList .styleList{margin:40px 5%;}
.myDesignDetailList .styleMod{padding:10px 0;}
.myDesignDetailList .styleTitle ,.myDesignDetailList .styleList select{height:30px;line-height:30px;float:left;}
.myDesignDetailList .styleTitle{width:30%;}
.myDesignDetailList .styleList select{width:70%;border-radius:5px;}
</style>
<template>
	<div class="myDesignRevise">
		<PageHeader :thisTitle="thisTitle" @savePic="savePic"></PageHeader>
		<div class="myDesignDetailList">
			<div class="myDesignName">
				<input v-model="dataList.name" maxlength="20" :placeholder="$t('message.myCenter.inputPictureDescription')"  />
			</div>
			<div class="picList clear">
				<div class="picMod">
					<img width="100%" :src="$t('message.placeOrder.addPicMod')" />
	            	<input v-if="!fileing" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="" id="" class="fileImage"  />
				</div>
				<div class="picMod" v-for="(slide ,index) in subDesignList">
					<div class="picModPic">
						<img width="100%" height="100%" :src="slide.img" />
					</div>
					<div class="picModDesc clear">
						<div class="left">
							<input v-model="slide.name" :placeholder="$t('message.myCenter.inputPictureDescription')" maxlength="20" />
						</div>
						<div class="delece left" @click="delectPic(index)">
							<img width="100%" src="/static/image/myCenter/delectIcon.png" />
						</div>
					</div>
				</div>
			</div>
			<div class="styleList">
				<div class="styleMod clear" v-for="designFilter in designFilterList">
					<div class="styleTitle">{{designFilter.name}}</div>
					<select class="myDesignSelect" name="carlist" v-model="designFilter.selectId">
						<option v-for="(designFilterMod,value) in designFilter.subTypeList" 
								:value="designFilterMod.designTypeId"
								:name="designFilterMod.designTypeId">
								{{designFilterMod.name}}
						</option>
					</select>
				</div>
			</div>
		</div>
    </div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: '',
	data() {
		return {
			isLogin:this.$swallow.isLogin(),
	  		getDataUrl:'/home/design/atlas/detailData',
	  		fileing:false,
	  		dataList:{},
			pushData:{
				name:'',
				designTypeIds:'',
			},
			designFilterList:{},
			thisTitle:this.$route.params.id!='new'?this.$t("message.myCenter.personalData.edit"):this.$t("message.myCenter.personalData.upload"),
			subDesignList:[],
		}
	},
	components: {
		PageHeader,
	},
	methods:{
		fileImage:function(e){//上传图片
			if(this.subDesignList.length>=20){
				this.$layer.alert(this.$t("message.myCenter.noMorePictures"),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
				this.$layer.alert(this.$t("message.myCenter.uploadSize"),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
            }else{ 
            	this.fileing = true        
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','design')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					this.fileing = false
					if(!this.dataList.subDesignList)this.dataList.subDesignList = []
					this.subDesignList.unshift({
						"width":res.data.fileWidth,
						"height":res.data.fileHeight,
						"img":res.data.file,
						"url":res.data.file,
					})
					this.$set(this.dataList,'subDesignList',this.subDesignList)
				})
				//

            }
        },
		getDesignFilterList:function(){//进入页面执行获取选项
			this.$fetch('/home/design/type/groupData', {designAtlasId:this.$route.params.id=='new'?'':this.$route.params.id})
			.then(res => {
				this.designFilterList =  res.data
				for(var a in this.designFilterList){
					if(this.$route.params.id != 'new'){
						for(var z in this.designFilterList[a].selectTypeList){
							if(z == 0){
								this.designFilterList[a].selectId = this.designFilterList[a].selectTypeList[z].designTypeId
							}
						}
					}else{
						for(var z in this.designFilterList[a].subTypeList){
							if(z == 0){
								this.designFilterList[a].selectId = this.designFilterList[a].subTypeList[z].designTypeId
							}
						}
					}
				}
				
			})
		},
        spellDesignTypeIds:function(){//拼接设计图ID
        	this.pushData.designTypeIds = ''
        	for(var a  = 0;a<this.designFilterList.length;a++){
        		this.pushData.designTypeIds += this.designFilterList[a].selectId +','
        		if(this.pushData.designTypeIds.indexOf("all") != -1)this.noSub = false
        	}
        },
		getData() {
			this.$fetch(this.getDataUrl, {id:this.$route.params.id})
			.then((res)=>{
				this.dataList = res.data
				for(var a in this.dataList.subDesignList){//更换接口名字
					this.dataList.subDesignList[a].url = this.dataList.subDesignList[a].img
				}
				this.subDesignList = this.dataList.subDesignList
			})
		},
		delectPic:function(index){
			this.subDesignList.splice(index,1)
			this.$set(this.dataList,'subDesignList',this.subDesignList)

		},
		savePic:function(){
			this.pushData.name = this.dataList.name;
			if(this.pushData.name == '' || !this.pushData.name){
				this.$layer.alert(this.$t('message.placeOrder.name')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.$set(this.pushData,'subDesignList',this.subDesignList)
			this.noSub = true
			this.spellDesignTypeIds();
			if(!this.noSub){
				this.$layer.alert(this.$t('message.placeOrder.type')+this.$t('message.tips.contNull'),{
					title:this.$t('message.tips.titleMsg'),
					btn:this.$t('message.tips.ok')
				})
				return
			}
			this.pushData.designAtlasId = this.dataList.designAtlasId;
			this.pushData.imgListJson = ''
			for(var i =0;i< this.dataList.subDesignList.length;i++){
				this.pushData.imgListJson += JSON.stringify(this.dataList.subDesignList[i]) + ','
			}
			this.pushData.imgListJson = '['+this.pushData.imgListJson+']'
			this.$post('/home/design/atlas/saveData',this.pushData)
			.then(res => {
				if(res.errcode == '0000'){
					this.$router.push('/myDesignList')
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})

		},
		
	},
	mounted() {
	  
	},
	created(){
		this.getDesignFilterList()
		if(this.$route.params.id != 'new'){
			this.getData()
		}
	}
}
</script>