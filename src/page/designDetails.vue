<style type="text/css">
.toPlaceOrder{position:fixed;left:0;bottom:0;background:#fff;width:100%;padding:10px 0;}
.toPlaceOrder a{margin:0 auto;width:90%;display:block;height:40px;line-height:40px;color:#fff;background:#3FBB87;border-radius:8px;text-align:center;}
</style>
<template>
	<div>
		<PageHeader :thisTitle="$t('message.design.designDetails')" :collect="swiperSlides.collect" @collectTab="collectTab"></PageHeader>
		<div class="designDetails clear">
			<DesignDetailsList :swiperSlides="swiperSlides"></DesignDetailsList>
			<!-- <DesignDetailsDesc></DesignDetailsDesc> -->
	    </div>
	    <div v-if="thisName!='myDesignDetails'" class="toPlaceOrder">
	    	<router-link to="/placeOrder">
	    		{{$t('message.company.freeDesign')}}
	    	</router-link>
	    </div>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import DesignDetailsList from '@/components/designDetails/DesignDetailsList'
export default {
	name: '',
	data() {
	  return {
	  	swiperSlides:{},
		thisName:this.$route.name,
	  }
	},
	components: {
		PageHeader,
		DesignDetailsList,
	},
	mounted(){
		document.title = this.$t('message.design.designDetails')
	},
	created(){
		this.$fetch('/design/atlas/detailData', {id:this.$route.params.id})
		.then((res)=>{
			this.ajaxed = true
			this.swiperSlides = res.data
		})
	},
	methods:{
		collectTab:function(id){
			this.$set(this.swiperSlides,'collect',id)
		}
	}
}
</script>