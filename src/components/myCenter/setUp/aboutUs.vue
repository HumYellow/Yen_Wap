<style>
#aboutUs{padding:20px;line-height:28px;}
</style>
<template>
	<div>
		<PageHeader v-if="!isApp" :thisTitle="$t('message.myFooter.aboutUs')"></PageHeader>
		
		<div class="textBody" id="aboutUs">
			<p v-html="aboutUsData"></p>
			<!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Yến Trời</b> là một công ty cung cấp dịch vụ thi công thiết kế nội thất trên nền tảng ứng dụng số, thông qua nền tảng này để kết nối những dịch vụ khác nhau trong thị trường thi công thiết kế nội thất. Mục tiêu cung cấp cho người dùng những công ty thiết kế, những doanh nghiệp thi công, các chương trình nghiệm thu công trình, dịch vụ uỷ thác quản lý tài chính. Mang lại cho người dùng giải pháp một điểm dừng để có thể trang trí cho ngôi nhà của mình. <b>Yến Trời</b> tập trung vào mô hình nền tảng kĩ thuật số trong lĩnh vực thiết kế thi công trang trí nội thất. Một mặt, nền tảng này sẽ liên kết một lượng lớn những nhà cung cấp dịch vụ thiết kết thi công, thông qua những chiến lược được hoạch định rõ ràng đảm bảo chất lượng cho các công trình, không ngừng thay đổi chính sách, cũng như giao dịch để phù hợp với hoàn cảnh hiện tại. Tạo niềm tin và sự yên tâm cho khách hàng khi thiết kế thi công công trình. Mặt khác, những công ty thiết kế thi công liên kết với <b>Yến Trời</b>, sau khi thông qua phân tích dư liệu, <b>Yến Trời</b> sẽ đưa ra sự phối hợp chuẩn xác nhất giữa chủ nhà và công ty thiết kế, giúp cho các doanh nghiệp thiết kế thi công tiếp thị được chính xác nhất.  -->
		</div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
export default {
	name: '',
	data() {
	  return {
	  	thisTitle:this.$t('message.myFooter.aboutUs'),
	  	isApp:this.$route.query.app,
	  	aboutUsData:'',
	  }
	},
	components: {
		PageHeader
	},
	methods:{
		getData:function(){
			this.$fetch('/article/aboutUsData')
			.then((res)=>{
				this.aboutUsData = res.data
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