<style>
#contactUs{padding:20px;}
#contactUs p{margin:10px;line-height:28px;}
</style>
<template>
	<div>
		<PageHeader v-if="!isApp" :thisTitle="$t('message.myFooter.connectUs')"></PageHeader>
		<div class="textBody" id="contactUs">
			<p v-html="contactUs"></p>
			<!-- <p>Điện thoại: +84 (28) 3910.0635</p> 
			<p>Email: yenttroi@yenttroi.com </p> 
			<p>Địa chỉ: Vietcombank Tower, số 5 Công trường Mê Linh, phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</p> -->
		</div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: '',
	data() {
	  return {
	  	thisTitle:this.$t('message.myFooter.connectUs'),
	  	isApp:this.$route.query.app,
	  	contactUs:'',
	  }
	},
	components: {
		PageHeader
	},
	methods:{
		getData:function(){
			this.$fetch('/article/connectUsData')
			.then((res)=>{
				this.contactUs = res.data
			})
		}
	},
	mounted(){
	},
	created(){
		this.getData()
	}
}
</script>