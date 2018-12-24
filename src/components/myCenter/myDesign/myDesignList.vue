<style type="text/css">
.designFilter{position:fixed;top:0;left:0;z-index:2;width:100%;}
.designFilter .designHead{color:#333;text-align:center;height:50px;line-height:50px;border-bottom:1px solid #f4f4f4;z-index:10000;position:relative;}
.designFilter .designFilterHead{border-bottom:1px solid #f4f4f4;background:#fff;z-index:10000;position:relative;}
.designFilter .designFilterHead .designFilterMod{width:33.3%;float:left;text-align:center;padding:20px 0;color:#8e8e8e;}
.designFilter .triangle{width: 0;height: 0;border: 5px solid #8e8e8e;border-left-color: transparent;border-right-color: transparent;display:inline-block;position:relative;top:-2px;margin:0 5px;}
.designFilter .triangle[data-swich="off"]{border-top-color: #8e8e8e;border-bottom: none;}
.designFilter .triangle[data-swich="on"]{border-top: none;border-bottom-color: #8e8e8e;}

.designFilter .filter{text-align:center; color:#000;background:#fff;line-height:60px;z-index:10000;position:relative;}
.designFilter .filter li{float:left;width:33.33%;box-sizing: border-box;margin:10px 0;}
.designFilter .filter li a{display:block; margin:0 5px;text-align:center;color:#333;border-radius:10px;background:#f4f4f4;height:40px;line-height:40px;}
.designFilter .filter li a.select{color:#fff;background:#3fbb87;}
.designFilter .filter .filter-enter-active,.designFilter .filter .filter-leave-active {
  transition: opacity .4s;
}
.designFilter .filter .filter-enter,.designFilter .filter .filter-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#myDesignList{width:100%;text-align:center;}
#myDesignList[data-collectionMod = 'collection']{padding-top:0;}
.vue-waterfall-easy-scroll{overflow:hidden !important;}
#myDesignList .designBox{width:24%;margin:0 .5%;height:200px;float:left;box-sizing: border-box;position:relative;overflow:hidden;}
#myDesignList .designDesc{padding:10px;background:#fff;font-size:3.5vw;color:#999;}

#myDesignList .designDesc .designDescMod1{position:relative;}
#myDesignList .designDesc span.picName{display:block;text-align:left;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:80%;font-size:12px;color:#666;}
#myDesignList .designDesc .deleteIcon{position:absolute; right:0;top:0;}
#myDesignList .designDesc .designDescDesigner{float:left;width:100%;}
#myDesignList .designDesc .designDescDesigner img{width:15px;height:15px;border-radius:50%;margin-right:5px;}
#myDesignList .designDesc .designDescDesigner span{height:15px;line-height:15px;width:50%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;display:block;font-size:10px;text-align:left;}
#myDesignList .designDesc .designDescDesigner span:nth-child(2){text-align:right;}
#myDesignList .designDesc .collection{width:20%;float:left;}
#myDesignList .designDesc .collection img{margin:0 auto;}
#myDesignList .item { break-inside: avoid; box-sizing: border-box; padding: 10px; position:relative;}
#myDesignList .masonry { column-count: 1;} 
@media (min-width: 400px) { 
#myDesignList .masonry { column-count: 2;} 
} 
@media (min-width: 1200px) { 
#myDesignList .masonry { column-count: 3; } 
}
#myDesignList .item_content{overflow:hidden;display:block;}
#myDesignList .loading{display:none !important;}
#myDesignList .ajaxOvere{font-size:20px;padding:0 30px;}
#myDesignList .vue-waterfall-easy-container .vue-waterfall-easy a.img-inner-box{box-shadow:none !important;border:none;}
</style>
<template>
	<div id="myDesignList" class="myDesignList">
		<div v-if="imgsArr.length != 0" class="designList clear">
			<div class="waterfall" :style="style" v-if="imageBox">
				<vue-waterfall-easy :imgsArr="imgsArr">
					<div class="designDesc clear" slot-scope="props">
						<div class="designDescMod1">
							<span class="picName">{{props.value.name}}</span>
							<div class="deleteIcon" @click="delectDesign(props.value.designAtlasId)"><img src="/static/image/myCenter/delectIcon.png" /></div>
						</div>
						<div class="mt5 clear">
							<div class="designDescDesigner clear">
								<span class="left">{{props.value.designCount}} {{$t('message.design.pictures')}}</span>
								<span class="left">{{props.value.createTime}}</span>
							</div>
						</div>
					</div>
				</vue-waterfall-easy>
			</div>
			<!-- <div v-if="maxGroup < group" class="ajaxOvere">{{$t("message.tips.noMore")}}</div> -->
		</div>
	</div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
	components:{
		Eject,
		vueWaterfallEasy
	},
	props:{
	},
	data(){
		return {
			stylwSwich:false,//判断menu是否展开，绽开的话等于展开的ID
			filterShow:false,
			ejectShow:false,
			imgsArr:[],
			designTypeIds:'',
      		group: 1, // 当前页数
      		lastPage:false,//是否最后一页
      		groupNamber:10,//请求数量
      		getDataing:false,//是否正在亲求
      		style:{},
      		ajaxNew:true,
      		height:'100vh',
      		ajaxOvere:false,
      		bodyClientWidth:document.body.clientWidth,
      		getHeightArr:false,//是否获取高度超时
      		getHeightTime:0,//获取高度超时次数
      		getHeightMaxTime:5,//获取高度最高超时次数
      		getHeightInterval:800,
      		imageLoding:false,
      		alerting:false,

	  		getDataUrl:'/home/design/atlas/listData',
	  		imageBox:true,

		}
	},
	mounted(){
		var that = this
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
	},
	methods: {
		getData() {
			if(this.getDataing)return
			this.getDataing = true
			let url = this.getDataUrl 
			let data;
			data = {
				'pageNo':this.group,
				'number':this.groupNamber,
				'designTypeIds':this.designTypeIds
			} ;
			this.$fetch(url,data).then(res => {
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				if(this.ajaxNew){
					this.lastPage = false
					this.imgsArr = res.data
				}else{
					this.imgsArr = this.imgsArr.concat(res.data)
				}
				//新图片（为新？替换：追加）至列表
				for(var i in this.imgsArr){//重新赋属性
					this.$set(this.imgsArr[i],'src',this.imgsArr[i].img)
					this.$set(this.imgsArr[i],'href','/myDesignDetails/'+this.imgsArr[i].designAtlasId)
				}
				this.group++
				this.$nextTick(function(){//计算图片列表最新高度
					this.getHeight()
				})
			}).catch(function (error) {
				console.log(error);
				if(this.getDataing)this.getDataing = false
			})
		},
		isBottom(){
			var scrollTop = document.documentElement.scrollTop
			if(document.body.scrollHeight - scrollTop <= document.body.clientHeight+10){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
		getHeight(){
			var el = this.$el
			this.imageLoding = true
			setTimeout(()=>{
				if(this.imgsArr.length == 0){
					this.getDataing = false
					return
				}
				var box = el.getElementsByClassName('default-card-animation')
				if(this.getHeightTime > this.getHeightMaxTime){
					this.$layer.alert(this.$t('message.tips.againLater'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
				if(box.length == 0 && this.getHeightTime <= this.getHeightMaxTime){//判断是不是imgdom未加载
					this.getHeightArr = false
					this.getHeightTime++
					setTimeout(()=>{
						this.getHeight()

					},this.getHeightInterval/2)
					return
				}else{
					this.getHeightArr = true
				}
				if(this.getHeightArr){
					var lastBox = box[box.length-1]
					var lastBox2 = box.length >= 2?box[box.length-2]:0
					var lastBoxHeight=lastBox.clientHeight
					var lastBox2Height= box.length >=2?lastBox2.clientHeight:0
					var bottomClientHeight = lastBoxHeight > lastBox2Height?lastBoxHeight:lastBox2Height;
					
					var height = lastBox.offsetTop + bottomClientHeight + 90
					this.$set(this.style,'height',height+'px')
					this.getDataing = false//解除ajax封印在图片渲染之后

				}
				this.imageLoding = false
			},this.getHeightInterval)
		},
		delectDesign:function(thisId){
			event.preventDefault()
			var that = this
			
			let index = this.$layer.confirm(this.$t('message.tips.delectIt'),{
					title:'message',
					btn:['OK','No'],
				},()=>{
					that.$post('/home/design/atlas/deleteData',{
						'id':thisId,
					}).then(res => {
						that.getDataing = false
						this.$layer.close(index);
						this.group = 1
						this.getData()
					})
				}
			)
		},
		test:function(){

		}
	},
	created() {
		this.getData()

	},
}
</script>