<style type="text/css">
.chooseType .chooseTypeTitle{background:#F5F5F5;color:#666666;height:45px;line-height:45px;padding:0 5vw;font-size:12px;}
.chooseType .chooseStyleList{padding-left:5vw;background:#fff;}
.chooseType .chooseTypeMod{height:40px;line-height:40px;font-size:12px;color:#333;border-top:1px solid #eee;}
.chooseType .chooseTypeMod:nth-child(0){border:none;}
.chooseType .chooseTypeMod[data-select='select']{background:url('/static/image/myCenter/personalSelectIcon.png') 85vw center no-repeat;background-size:15px 15px;}
</style>
<template>
	<div class="chooseType">
		<PageHeader :thisTitle="$t('message.myCenter.myCenterSidebar.personalData')" @savePic="save"></PageHeader>
		<div class="chooseTypeTitle">{{$t("message.myCenter.personalData.chooseStyleTitle")}}</div>
		<div class="chooseStyleList">
			<div v-for="type in chooseStyleList.subTypeList" class="chooseTypeMod" :data-select="type.select?'select':''" @click="selectData(type.designTypeId)">
				{{type.name}}
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
			chooseStyleList:'',
			selectCity:''
		}
	},
	mounted(){
		
	},
	methods: {
		getTypeData:function(){
			this.$fetch('/home/design/type/groupData',{selectType:'member'})
			.then((res)=>{
				for(var a=0;a<res.data.length;a++){
					if(res.data[a].designRangeId==4){
						this.chooseStyleList = res.data[a]
					}
				}
			})
		},
		save:function(){
			var styleId = [];
			for(var a = 0;a<this.chooseStyleList.subTypeList.length;a++){
				if(this.chooseStyleList.subTypeList[a].select)styleId += this.chooseStyleList.subTypeList[a].designTypeId +','
			}
			this.$post('/home/member/updateHobbyData',{
				designRangeId:4,
				designTypeIds:styleId
			})
			.then((res)=>{
				if(res.errcode == '0000'){
					this.$router.replace('/personalData')
				}else{
					this.$layer.alert(res.msg,{
						title:'tips',
						btn:'OK'
					})
				}
			});
		},
        selectData:function(id){
			var selectNum = 0
    		var subType = this.chooseStyleList.subTypeList;
			for(var a = 0;a<subType.length;a++){
    			if(subType[a].select){
    				selectNum++
    			}
    		}
			for(var a = 0;a<subType.length;a++){
				if(subType[a].designTypeId == id){
					if(!subType[a].select && selectNum >=2){
						this.$layer.alert(this.$t('message.myCenter.personalData.onlyTwo'),{
							title:this.$t('message.tips.titleMsg'),
							btn:this.$t('message.tips.ok')
						})
						return
					}
					subType[a].select = !subType[a].select
				}
    			
    		}
        },
		
	},
	created() {
		this.getTypeData()

	},
}
</script>