<style type="text/css">
.chooseStyle .chooseStyleTitle{background:#F5F5F5;color:#666666;height:45px;line-height:45px;padding:0 5vw;font-size:12px;}
.chooseStyle .chooseTypeList{padding-left:5vw;background:#fff;}
.chooseStyle .chooseStyleMod{height:40px;line-height:40px;font-size:12px;color:#333;border-top:1px solid #eee;}
.chooseStyle .chooseStyleMod:nth-child(0){border:none;}
.chooseStyle .chooseStyleMod[data-select='select']{background:url('/static/image/myCenter/personalSelectIcon.png') 85vw center no-repeat;background-size:15px 15px;}
</style>
<template>
	<div class="chooseStyle">
	<div class="chooseStyle">
		<PageHeader :thisTitle="$t('message.myCenter.myCenterSidebar.personalData')" @savePic="save"></PageHeader>
		<div class="chooseStyleTitle">{{$t("message.myCenter.personalData.chooseTypeTitle")}}</div>
		<div class="chooseTypeList">
			<div v-for="type in chooseTypeList.subTypeList" class="chooseStyleMod" :data-select="type.select?'select':''" @click="selectData(type.designTypeId)">
				{{type.name}}
			</div>
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
			chooseTypeList:'',
		}
	},
	mounted(){
		
	},
	methods: {
		getTypeData:function(){
			this.$fetch('/home/design/type/groupData',{selectType:'member'})
			.then((res)=>{
				for(var a=0;a<res.data.length;a++){
					if(res.data[a].designRangeId==3){
						this.chooseTypeList = res.data[a]
					}
				}
			})
		},
		save:function(){
			var typeId = [];
			for(var a = 0;a<this.chooseTypeList.subTypeList.length;a++){
				if(this.chooseTypeList.subTypeList[a].select)typeId += this.chooseTypeList.subTypeList[a].designTypeId +','
			}
			this.$post('home/member/updateHobbyData',{
				designRangeId:3,
				designTypeIds:typeId
			})
			.then((res)=>{
				if(res.errcode == '0000'){
					this.$router.replace('/personalData')
				}else{
					alert(res.msg)
				}
			});
		},
        selectData:function(id){
    		var subType = this.chooseTypeList.subTypeList;
			for(var a = 0;a<subType.length;a++){
    			subType[a].select = false
    			if(subType[a].designTypeId == id)subType[a].select = true
    		}
    		this.save()
        },
		
	},
	created() {
		this.getTypeData()

	},
}
</script>