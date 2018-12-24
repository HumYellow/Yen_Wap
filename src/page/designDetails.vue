<style type="text/css">
</style>
<template>
	<div>
		<PageHeader :thisTitle="$t('message.design.designDetails')" :collect="swiperSlides.collect" @collectTab="collectTab"></PageHeader>
		<div class="designDetails clear">
			<DesignDetailsList :swiperSlides="swiperSlides"></DesignDetailsList>
			<!-- <DesignDetailsDesc></DesignDetailsDesc> -->
	    </div>
	    <DesignDetailsFooter :swiperSlides="swiperSlides" v-if="thisName!='myDesignDetails'" @getData="getData"></DesignDetailsFooter>
	</div>
</template>
<script>
import PageHeader from '@/components/PageHeader'
import DesignDetailsList from '@/components/designDetails/DesignDetailsList'
import DesignDetailsFooter from '@/components/designDetails/DesignDetailsFooter'
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
		DesignDetailsFooter,
	},
	mounted(){
	},
	created(){
		this.getData()
	},
	methods:{
		collectTab:function(id){
			this.$set(this.swiperSlides,'collect',id)
		},
		getData:function(){
			this.$fetch('/design/atlas/detailData', {id:this.$route.params.id})
			.then((res)=>{
				this.ajaxed = true
				this.swiperSlides = res.data
			})
		}
	}
}
</script>