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
.designFilter .filter li a{display:block; margin:0 5px;text-align:center;color:#333;border-radius:10px;background:#f4f4f4;height:40px;line-height:40px;font-size:12px;}
.designFilter .filter li a.select{color:#fff;background:#3fbb87;}
.designFilter .filter .filter-enter-active,.designFilter .filter .filter-leave-active {
  transition: opacity .4s;
}
.designFilter .filter .filter-enter,.designFilter .filter .filter-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.vue-waterfall-easy-container .vue-waterfall-easy a{box-shadow: none !important;border-radius:8px;overflow:hidden;}
.designTypeTab{position:absolute;right:20px;top:0;height:100%;display: flex;align-items: center}
.designTypeTab img{width:20px;}

.designListTab{}
#designList{width:100%;padding-top:120px;text-align:center;}
#designList[data-collectionMod = 'collection']{padding-top:0;}
.vue-waterfall-easy-scroll{overflow:hidden !important;}
#designList .designBox{width:24%;margin:0 .5%;height:200px;float:left;box-sizing: border-box;position:relative;overflow:hidden;}
#designList .designDesc{padding:15px 0;font-size:3.5vw;color:#999;}

#designList .designDesc span.picName{display:block;text-align:left;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
#designList .designDesc .designDescDesigner{float:left;width:70%;display:block;color:#999;}
#designList .designDesc .designDescDesigner img{width:15px;height:15px;border-radius:50%;margin-right:5px;}
#designList .designDesc .designDescDesigner span{height:15px;line-height:15px;width:80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;text-align:left;}
#designList .designDesc .collection,#designList .designDesc .share{float:right;}
#designList .designDesc .share{margin-right:10px;}
#designList .designDesc .collection img{margin:0 auto;}
#designList .item { break-inside: avoid; box-sizing: border-box; padding: 10px; position:relative;}
#designList .masonry { column-count: 1;} 
@media (min-width: 400px) { 
#designList .masonry { column-count: 2;} 
} 
@media (min-width: 1200px) { 
#designList .masonry { column-count: 3; } 
}
#designList .item_content{overflow:hidden;display:block;}
#designList .loading{display:none !important;}
#designList .ajaxOvere{padding:0 30px;font-size:14px;color:#999;}

#designList .designListMod{width:90%;margin:0 5% 20px;text-align:left;}
#designList .designListMod a{display:block;}
#designList .designListMod h4{color:#333;font-weight:100;margin:10px 0;}
#designList .designListMod .designListModPic{border-radius:10px;overflow:hidden;}
#designList .designListMod .designListModDesc{height:25px;margin:5px 0;}
#designList .designListMod .designListModDesc .designListModDescMod{height:100%;display: flex;align-items: center;}
#designList .designListMod .designListModDesc .designListModDescMod .share{margin-right:10px;}
#designList .designListMod .designListModDesc .designerHead{height:100%;border-radius:50%;}
#designList .designListMod .designListModDesc .designerName{margin-left:10px;color:#999;font-size:12px;}

.loadState{padding:20px 0 80px;}
.loadingBox .loadingMod{vertical-align: bottom;
    background-color: #999;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 3px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;
    animation: ball-beat-data-v-ded6b974 0.7s 0s infinite linear;}
.loadingBox .loadingMod:nth-child(1){-webkit-animation-delay: 0.35s;
    animation-delay: 0.35s;}
</style>
<template>
	<div class="design">
		<div class="designFilter">
			<div class="designFilterHead clear" v-if="!centerType">
				<div class="designHead">
					{{$t("message.menu.Design")}}
					<div class="designTypeTab" @click="designListTabFn">
						<img v-if="designListTab" src="/static/image/designIcon/designTypeList.png" />
						<img v-else src="/static/image/designIcon/designTypeFull.png" />
					</div>
				</div>
				<div class="designFilterMod" v-for="filterBox in designFilterList" 
				@click="styleFilterShowSwich(filterBox.designRangeId)">
					{{filterBox.nameType}}
					<span :data-swich="stylwSwich == filterBox.designRangeId?'on':'off'" class="triangle"></span>
				</div>
			</div>
			<transition name="filter">
				<div class="filter" v-if="filterShow">
					<ul class="clear">
						<li v-for="(filter,index) in designFilterList2.subTypeList">
							<a :class="designFilterNo[designFilterList2.designRangeId] == filter.designTypeId?'select':''" 
							@click="toDesignFilter(filter.designTypeId)" :data-id="filter.designTypeId">
								{{filter.name}}
							</a>
						</li>
					</ul>
				</div>
			</transition>
			<Eject @closeEject="closeEject" v-if="ejectShow" :ejectType="ejectType"></Eject>
		</div>
		<div v-if="imgsArr.length != 0" id="designList" class="designList clear" 
		:data-collectionMod="centerType?centerType.type:''">
			<div class="designListTab">
				<div v-if="designListTab" class="waterfall" :style="style">
					<vue-waterfall-easy :imgsArr="imgsArr" @click="clickFn">
						<div class="designDesc clear" slot-scope="props">
							<span class="picName">{{props.value.name}}</span>
							<div class="mt10 clear">
								<div @click="clickDesigner(props.value.ownerId,props.value.ownerType)" class="designDescDesigner clear">
									<img class="left" :src="props.value.ownerImg" />
									<span class="left">{{props.value.ownerTitle}}</span>
								</div>
								<div class="collection" :data-collect="props.value.collect">
									<img v-if="props.value.collect" :data-id="props.value.designAtlasId" class="collectionImg" width="14" src="/static/image/collectionFinish.png" />
									<img v-else :data-id="props.value.designAtlasId" class="collectionImg" width="14" src="/static/image/collection.png" />
								</div>
								<div class="share">
									<img :data-id="props.value.designAtlasId" class="shareImg" width="14" src="/static/image/share.png" />
								</div>
							</div>
						</div>
					</vue-waterfall-easy>
				</div>
				<div v-else>
					<div class="designListMod" v-for="(imgs,index) in imgsArr">
						<router-link :to="imgs.href">
							<img class="designListModPic" width="100%" :src="imgs.img" />
							<h4>{{imgs.name}}</h4>
							<div class="designListModDesc clear">
								<router-link class="designListModDescMod left" :to="'/designerDetails/'+imgs.ownerId">
									<img height="25" width="25" class="designerHead" :src="imgs.ownerImg" />
									<span class="designerName">{{imgs.ownerTitle}}</span>
								</router-link>
								<div class="designListModDescMod right">
									<div class="share" @click="toShareFn(imgs.designAtlasId)">
										<img :data-id="imgs.designAtlasId" class="shareImg" width="20" src="/static/image/share.png" />
									</div>
									<div class="collection" :data-collect="imgs.collect" @click="collection($event,index)">
										<img v-if="imgs.collect" :data-id="imgs.designAtlasId" class="collectionImg" width="20" src="/static/image/collectionFinish.png" />
										<img v-else :data-id="imgs.designAtlasId" class="collectionImg" width="20" src="/static/image/collection.png" />
									</div>
									
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div class="loadState">
				<div v-if="imageLoding || getDataing" class="loadingBox">
					<div class="loadingMod"></div>
					<div class="loadingMod"></div>
					<div class="loadingMod"></div>
				</div>
				<div v-if="lastPage" class="ajaxOvere">{{$t("message.tips.noMore")}}</div>
			</div>
		</div>
		<shareBox v-if="shareShow" @closeShare="closeShare" :shareData="shareData"></shareBox>
	</div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
import shareBox from '@/components/public/eject/shareBox'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
	components:{
		Eject,
		vueWaterfallEasy,
		shareBox,
	},
	props:{
		centerType:{
			type:'',
      		url:''
		}
	},
	data(){
		return {
			stylwSwich:false,//判断menu是否展开，绽开的话等于展开的ID
			filterShow:false,
			ejectShow:false,
			ejectType:{},
			designListTab:localStorage.getItem('designListTab')?true:false,
			designFilterNo:{},
			designFilterList:[],
			designFilterList2:[],
			imgsArr:[],
			imgsNewArr:[],
			designTypeIds:'',
      		group: 1, // 当前页数
      		lastPage:false,//是否最后一页
      		groupNamber:10,//请求数量
      		getDataing:false,//是否正在亲求
      		collectioning:false,//正在请求收藏
      		style:{},
      		ajaxNew:true,
      		height:'100vh',
      		ajaxOvere:false,
      		bodyClientWidth:document.body.clientWidth,
      		getHeightArr:false,//是否获取高度超时
      		getHeightTime:0,//获取高度超时次数
      		getHeightMaxTime:20,//获取高度最高超时次数
      		getHeightInterval:500,
      		imageLoding:false,
      		alerting:false,
      		getDataUrl:'/design/atlas/listData',
      		designFilterName:[],
      		ajaxTime:0,
      		waterfallHeight:500,
      		imagLoded:0,
      		shareShow:false,
      		shareData:{}
		}
	},
	mounted(){
		var that = this
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
	},
	methods: {
		closeEject:function(){
			this.filterShow = false
			this.ejectShow = false
			this.stylwSwich = false
			this.$swallow.move()
		},
		styleFilterShowSwich:function(el){//点击一级菜单触发,el为一级菜单ID
			for(var i in this.designFilterList){//循环一级菜单
				if(this.designFilterList[i].designRangeId == el){//获取点击的一级菜单
					this.designFilterList2 = this.designFilterList[i]//二级菜单赋值
					if(!this.designFilterNo[el]){
						this.designFilterNo[el] = this.designFilterList2.subTypeList[0].designTypeId
					}
					//获取二级菜单选中的选项
				}
			}
			if(this.stylwSwich && this.stylwSwich != el){
				this.stylwSwich = el
				return
			}
			this.stylwSwich == el?this.stylwSwich = false:this.stylwSwich = el
			this.filterShow?this.filterShow = false:this.filterShow = true
			this.ejectShow?this.ejectShow = false:this.ejectShow = true
			this.ejectShow?this.$swallow.stop():this.$swallow.move()
			
		},
		getDesignFilterList:function(){//进入页面执行获取ID
			this.$fetch('/design/type/groupData')
			.then(res => {
				this.designFilterList = res.data
				for(var i=0;i<this.designFilterList.length;i++){
					this.designFilterList[i].nameType = this.designFilterList[i].name
				}
				if(this.$route.query.menuId && this.$route.query.styleId){
					this.styleFilterShowSwich(this.$route.query.menuId)
					this.toDesignFilter(this.$route.query.styleId)
				}
				this.getData()
			})
		},
		toDesignFilter:function(el){//点击二级菜单触发，el为点击的二级菜单ID
			this.$delete(this.designFilterNo,this.designFilterList2.designRangeId)
			this.$set(this.designFilterNo,this.designFilterList2.designRangeId,el)
			this.designTypeIds = ''
			for(var i in this.designFilterNo){
				this.designTypeIds += this.designFilterNo[i] +','
			}
			this.group = 1
			this.closeEject()
			this.ajaxNew = true
			this.getData()
		},
		getData() {
			if(this.getDataing)return
			if(this.ajaxTime!=0)return
			this.ajaxTime=2;
			this.ajaxTimeFn();
			this.getDataing = true
			let url = this.centerType ? this.centerType.url : this.getDataUrl 
			let data;
			if(this.centerType){
				data = this.centerType.data;
				data['pageNo'] = this.group
				data['number'] = this.groupNamber
			}else{
				data = {
					'pageNo':this.group,
					'number':this.groupNamber,
					'designTypeIds':this.designTypeIds
				} ;
			}
			this.$fetch(url,data).then(res => {
				if(res.data.length < this.groupNamber)this.lastPage = true//判断是否最后一页
				this.getHeightTime = 0
				this.imgsNewArr = res.data
				this.imagLoded = 0
				if(this.imgsNewArr.length == 0){
					this.imagLoadFn()
				}else{
					for(var i =0;i<this.imgsNewArr.length;i++){
						let img = new Image()
		                img.src = this.imgsNewArr[i].img;
		                img.onload = (i)=>{
		                	this.imagLoded++
		                }
					}
				}
			}).catch(function (error) {
				console.log(error);
				if(this.getDataing)this.getDataing = false
			})
		},
		isBottom(){
			if(this.getDataing || this.imageLoding)return
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
				var box = el.getElementsByClassName('default-card-animation')
				if(box.length != this.imgsArr.length && this.getHeightTime <= this.getHeightMaxTime){//判断是不是imgdom未加载
					this.getHeightTime++
					setTimeout(()=>{
						this.getHeight()
					},this.getHeightInterval/2)
					return
				}else{
					var lastBox = box[box.length-1]
					var lastBox2 = box.length >= 2?box[box.length-2]:0
					var lastBoxHeight=lastBox.clientHeight
					var lastBox2Height= box.length >=2?lastBox2.clientHeight:0
					var bottomClientHeight = lastBoxHeight > lastBox2Height?lastBoxHeight:lastBox2Height;
					
					var height = lastBox.offsetTop + bottomClientHeight + 30
					//this.waterfallHeight = height
					this.$set(this.style,'height',height+'px')
					this.getDataing = false//解除ajax封印在图片渲染之后
					this.imageLoding = false
				}
			},this.getHeightInterval)
		},
		clickFn(event, { index, value }) {
			// 阻止a标签跳转
			event.preventDefault()
			// 只有当点击到图片时才进行操作
			if (event.target.tagName.toLowerCase() == 'img') {
				if(event.target.className == 'collectionImg'){
					this.collection(event, index)
				}else{
					this.$router.push(value.href)
				}
				/*console.log('img clicked',index, value)*/
			}
		},
		collection:function(event, index){
			if(this.collectioning)return
			this.collectioning = true
			event.preventDefault()
			var thisId = event.target.attributes["data-id"].nodeValue
			var thisCollect = this.imgsArr[index].collect
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'DesignAtlas',
				'relatedId':thisId
			}).then(res => {
				for(var a in this.imgsArr){
					if(this.imgsArr[a].designAtlasId == thisId){
						this.$set(this.imgsArr[a],'collect',thisCollect==1?0:1)
					}
				}
				this.collectioning = false
			})
		},
		clickDesigner:function(id,type){
			event.preventDefault()
			event.stopPropagation();
			if(type == 'Member'){
				this.$router.push('/designerDetails/'+id)
			}else if(type == 'Company'){
				this.$router.push('/companyDetails/'+id)
			}
		},
		ajaxTimeFn:function(){
			var that = this
			var set = setInterval(function(){
				if(that.ajaxTime==0){
					clearInterval(set);
					return
				}
				that.ajaxTime--
			},1000)
		},
		imagLoadFn:function(){
			if(this.imagLoded != this.imgsNewArr.length)return
			if(this.ajaxNew){
				this.lastPage = false
				this.imgsArr = this.imgsNewArr
				if(this.imgsNewArr.length == 0){
					this.$layer.msg(this.$t("message.tips.noMore"),{
						title:'tips',
						btn:'OK'
					})
					this.imgsArr = ''
					this.getDataing = false
					this.lastPage = true
					return
				}
			}else{
				this.imgsArr = this.imgsArr.concat(this.imgsNewArr)
			}
			for(var i in this.imgsArr){
				this.$set(this.imgsArr[i],'src',this.imgsArr[i].img)
				this.$set(this.imgsArr[i],'href','/designDetails/'+this.imgsArr[i].designAtlasId)
				if(this.centerType && this.centerType.type == 'collection'){
					this.$set(this.imgsArr[i],'collect',1)
				}
			}
			this.group++
			if(this.designListTab){
				this.getHeight()
			}else {
				this.getDataing = false//解除ajax封印在图片渲染之后
				this.imageLoding = false
			}
			for(var i = 0;i<this.designFilterList.length;i++){//替换切换赋值
				for(var a = 0;a<this.designFilterList[i].subTypeList.length;a++){
					let arr = this.designTypeIds.split(",")
					if(arr.indexOf(this.designFilterList[i].subTypeList[a].designTypeId) > -1){
						this.designFilterList[i].nameType = this.designFilterList[i].subTypeList[a].name
						if(this.designFilterList[i].nameType =='All'){
							this.designFilterList[i].nameType = this.designFilterList[i].name
						}
					}
				}
			}
		},
		designListTabFn:function(){
			this.designListTab = !this.designListTab
			this.designListTab?localStorage.setItem('designListTab','1'):localStorage.removeItem('designListTab')
			if(this.designListTab)this.getHeight()
		},
		closeShare:function(){
			this.shareShow = false
		},
		toShareFn:function(id){
			event.preventDefault()
			this.shareShow = !this.shareShow
			this.shareData.src = '/designDetails/'+id
		}
	},
	created() {
		this.getDesignFilterList()

	},
	watch:{
		imagLoded:function(){
			this.imagLoadFn();
		},
		getDataing:function(){
			//console.info('getDataing:'+this.getDataing)
		},
		imageLoding:function(){
			//console.info('imageLoding:'+this.imageLoding)

		}
	}
}
</script>