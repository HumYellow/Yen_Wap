<style type="text/css">
.DesignDetailsList{float:left;width:100%;margin:3px auto;box-sizing:border-box;background:#fff; padding:10px 10px 60px;}

.masonry { column-count: 2; column-gap: 0; }
.item { break-inside: avoid; box-sizing: border-box; padding: 4px; }
.item_content{overflow:hidden;}
.viewer-title{color:#fff; font-size:4vw;}
.viewer-backdrop{background-color:rgba(0,0,0,.8) !important;}
.DesignDetailsList .pictures span{line-height:20px;display:block;color:#333;font-size:13px;margin:5px 0 10px;}
.DesignDetailsList li{margin:2px 0;}
.DesignDetailsList li img{border-radius:8px;}
</style>
<template>
	<div class="DesignDetailsList" id="galley" ref="galley">
    	<ul class="pictures masonry">
            <li v-for="(slide ,index) in swiperSlides.subDesignList" :key="index" class="item">
               <img class="item_content" width="100%" :src="slide.img" :alt="slide.description?slide.description:slide.name">
               <span>{{slide.name}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';
export default {
	name: 'designDetailsList',
	props:{
	    swiperSlides: {},
	    collect:''

	},
	data() {
	  return {
	    ajaxed:false
	  }
	},
	components: {
	},
	methods:{
		galley:function(){
			setTimeout(function(){
				var galley = document.getElementById('galley');
				var viewer = new Viewer(galley, {
					title:true
				// 相关配置项,详情参考官网
				});
			},500)
		}
	},
	created(){
	},
	mounted() {
		
	},
	watch:{
		'swiperSlides':'galley'
	}
}
</script>