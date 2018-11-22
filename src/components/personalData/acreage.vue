<style type="text/css">
.acreageList{margin:0 5vw;background:#fff;}
.acreageMod{padding:20px 0;font-size:12px;color:#333;border-bottom:1px solid #EAEAEA;}
.acreageMod input{width:93%;border:none;outline:none; }
</style>
<template>
	<div class="chooseCity">
		<PageHeader :thisTitle="$t('message.myCenter.personalData.acreage')" @savePic="save"></PageHeader>
		<div class="acreageList">
			<div class="acreageMod">
					<input onkeyup="value=value.replace(/[^\d]/g,'')" v-model="acreage"  :placeholder="$t('message.myCenter.personalData.acreage')" />m²
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
			acreage:'',
		}
	},
	mounted(){
		
	},
	methods: {
		getData:function(){
			this.$fetch('/home/member/infoData')
			.then((res)=>{
				this.acreage = res.data.acreage
			})
		},
		save:function(){
			this.$post('home/member/updateAcreageData',{//修改面积
				acreage:this.acreage,
			})
			.then((res)=>{
				this.$router.replace('/personalData')
			});
		}
		
	},
	created() {
		this.getData()

	},
}
</script>