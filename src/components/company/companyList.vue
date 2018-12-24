<style>
#companyList .companyListHeader{position:fixed;top:0;left:0;width:100%;z-index:2;}
#companyList .searchHeader{background:#fff;width:100%;height:50px;padding:10px 5vw;box-shadow: 2px 2px 30px #e9e9e9;box-sizing: border-box;z-index:10000;position:relative;}
#companyList .searchHeader .searchBox{background:#f6f6f6;height:100%;width:80%;border-radius:20px;float:left;padding:0 3%;overflow:hidden;}
#companyList .searchHeader .searchBox img{float:left;margin-top:7px}
#companyList .searchHeader .searchBox input{float:left;outline:none;border:none;background:#f6f6f6;height:100%;width:90%;padding:0 10px;box-sizing: border-box;}
#companyList .searchHeader .searchBox input::-webkit-search-cancel-button{
  display: none;
}
#companyList .searchHeader .searchBox input[type=search]::-ms-clear{
  display: none;
}
#companyList .searchHeader .toCalculator{float:right;height:100%;}

.companyFilter{width:100%;background:#fff;}
.companyFilter .companyHead{color:#333;text-align:center;height:50px;line-height:50px;border-bottom:1px solid #f4f4f4;z-index:10000;position:relative;}
.companyFilter .companyFilterHead{border-bottom:1px solid #f4f4f4;background:#fff;z-index:10000;position:relative;}
.companyFilter .companyFilterHead .companyFilterMod{width:50%;float:left;text-align:center;padding:20px 0;color:#8e8e8e;}
.companyFilter .triangle{width: 0;height: 0;border: 5px solid #8e8e8e;border-left-color: transparent;border-right-color: transparent;display:inline-block;position:relative;top:-2px;margin:0 5px;}
.companyFilter .triangle[data-swich="off"]{border-top-color: #8e8e8e;border-bottom: none;}
.companyFilter .triangle[data-swich="on"]{border-top: none;border-bottom-color: #8e8e8e;}

.companyFilter .filter{text-align:center; color:#000;background:#fff;line-height:60px;z-index:10000;position:relative;}
.companyFilter .filter li{float:left;width:33.33%;box-sizing: border-box;margin:10px 0;}
.companyFilter .filter li a{display:block; margin:0 5px;text-align:center;color:#333;border-radius:10px;background:#f4f4f4;height:40px;line-height:40px;font-size:12px;}
.companyFilter .filter li a.select{color:#fff;background:#3fbb87;}
.companyFilter .filter .filter-enter-active,.companyFilter .filter .filter-leave-active {
  transition: opacity .4s;
}
.companyFilter .filter .filter-enter,.companyFilter .filter .filter-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#companyList .companyListCenter{width:100%;box-sizing: border-box;padding:120px 5vw 60px;}
#companyList .companyListCenter[data-centerType=centerType]{padding-top:15px;}
#companyList .companyListMod{display:block;overflow:hidden;border-radius:10px;box-shadow: 1px -1px 30px #e9e9e9;margin-bottom:3vw;background:#fff;}
#companyList .companyListMod a{display:block;padding:5vw;}
#companyList .companyListMod .companyLogo{border-radius:50%;overflow:hidden;width:10vw;height:10vw;float:left;border:1px solid #e2e2e2;}
#companyList .companyListMod .companyDesc{padding-left:14vw;}
#companyList .companyListMod .companyDesc h3{height:5vw;line-height:5vw;font-size:4vw;font-weight:400;color:#333;display:block;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:100%;}
#companyList .companyListMod .companyDesc h3 span.companyDescName{width:80%;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;float:left;}
#companyList .companyListMod .companyDesc h3 span.companyDescPic{width:20%;float:left;}
#companyList .companyListMod .companyDesc h3 span.companyDescPic img{margin:0 auto;}
#companyList .companyListMod .companyDesc p{height:3.5vw;line-height:3.5vw;font-size:2.8vw;padding:.5vw 0;}
#companyList .companyListMod .companyDesc p img{float:left;}
#companyList .companyListMod .companyDesc p span{padding-left:2vw;display:block;color:#999;display: -webkit-box;-webkit-box-orient: vertical;
-webkit-line-clamp: 1;
overflow: hidden;}
#companyList .companyListMod .companyPicList{margin-top:15px;}
#companyList .companyPicList .companyImg{float:left;width:32%;height:18vw;overflow:hidden;background-repeat:no-repeat;background-position:center;background-size:100% 100%;}
#companyList .companyPicList .companyImg:nth-child(2){margin:0 2%;}
</style>
<template>
	<div id="companyList">
		<div class="companyListHeader">
			<div class="searchHeader clear" v-if="!centerType">
				<div class="searchBox clear">
					<img height="60%" src="/static/image/search.png" />
					<input type="search" @keyup.enter="subSearch" v-model="searchKey" class=""  :placeholder="$t('message.company.decorationCompany')" />
				</div>
				<div class="toCalculator">
					<router-link to="/placeOrder">
						<img height="100%" src="/static/image/calculator.png" />
					</router-link>
				</div>
		    </div>
		    <div class="companyFilter" v-if="!centerType">
				<div class="companyFilterHead clear">
					<div class="companyFilterMod" v-for="filterBox in companyFilterList" 
					@click="styleFilterShowSwich(filterBox.companyRangeId)">
						{{filterBox.name}}
						<span :data-swich="stylwSwich == filterBox.companyRangeId?'on':'off'" class="triangle"></span>
					</div>
				</div>
				<transition name="filter">
					<div class="filter" v-if="filterShow">
						<ul class="clear">
							<li v-for="(filter,index) in companyFilterList2.subTypeList">
								<a :class="companyFilterNo[companyFilterList2.companyRangeId] == filter.companyTypeId?'select':''" 
								@click="toCompanyFilter(filter.companyTypeId)" :data-id="filter.companyTypeId">
									{{filter.name}}
								</a>
							</li>
						</ul>
					</div>
				</transition>
			</div>
			<Eject @closeEject="closeEject" v-if="ejectShow" :ejectType="ejectType"></Eject>
		</div>
		<div class="companyList">
		    <div v-if="companyList.length != 0" class="companyListCenter" :data-centerType="centerType?'centerType':''">
				<div class="companyListMod" v-for="(company,value) in companyList">
					<router-link :to="'/companyDetails/'+company.companyId">
						<div class="companyLogo">
							<img width="100%" height="100%" :src="company.img" />
						</div>
						<div class="companyDesc">
							<h3 class="clear">
								<span class="companyDescName">{{company.name}}</span>
								<span class="companyDescPic" @click="collection">
									<img v-if="company.collect" :data-id="company.companyId" :data-collect="company.collect" class="collectionImg" width="14" src="/static/image/collectionFinish.png" :data-index="value" />
									<img v-else :data-id="company.companyId" :data-collect="company.collect" class="collectionImg" width="14" src="/static/image/collection.png" :data-index="value" />
								</span>
							</h3>
							<p><img height="100%" src="/static/image/add.png" />
								<span>{{$t("message.company.address")}}&nbsp;:&nbsp;{{company.address}}</span>
							</p>
						</div>
						<div class="companyPicList clear">
							<div v-for="(companyImg,index) in company.subDesignAtlasList" v-if="index<3" 
							class="companyImg" :style="'background-image:url('+companyImg.img+')'">
								
							</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
    </div>
</template>
<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default {
	components:{
		Eject,
	},
	name: 'companyList',
	props:{
		centerType:{
			type:'',
      		url:''
		}
	},
	data() {
	  return {
		stylwSwich:false,//判断menu是否展开，绽开的话等于展开的ID
		filterShow:false,
		ejectShow:false,
		ejectType:{},
		companyFilterNo:{},
		companyFilterList:[],
		companyFilterList2:[],
		companyTypeIds:'',
	  	companyListIndex:1,//当前页数
	  	companyList:[],
	  	companyNum:10,//获取公司数量
	  	lastPage:false,
      	getDataing:false,
      	subDesignAtlas:3,//获取相册数量
	  	group:1,
	  	searchKey:'',
	  	isLogin:this.$swallow.getCookie('yen_u_key_'),
	  	getDataUrl:'/company/listData',
      	ajaxNew:true,
	  }
	},
	mounted() {
		var that = this
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
	},
	methods:{
		closeEject:function(){
			this.filterShow = false
			this.ejectShow = false
			this.stylwSwich = false
			this.$swallow.move()
		},
		styleFilterShowSwich:function(el){//点击一级菜单触发,el为一级菜单ID
			for(var i in this.companyFilterList){//循环一级菜单
				if(this.companyFilterList[i].companyRangeId == el){//获取点击的一级菜单
					this.companyFilterList2 = this.companyFilterList[i]//二级菜单赋值
					if(!this.companyFilterNo[el]){
						this.companyFilterNo[el] = this.companyFilterList2.subTypeList[0].companyTypeId
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
		getDataFilterList:function(){//获取分类
			this.$fetch('/company/type/groupData')
			.then(res => {
				this.companyFilterList = res.data
				if(this.$route.query.menuId && this.$route.query.styleId){
					this.styleFilterShowSwich(this.$route.query.menuId)
					this.toCompanyFilter(this.$route.query.styleId)
				}
				this.getData()
			})

		},
		toCompanyFilter:function(el){//点击二级菜单触发，el为点击的二级菜单ID
			this.$delete(this.companyFilterNo,this.companyFilterList2.companyRangeId)
			this.$set(this.companyFilterNo,this.companyFilterList2.companyRangeId,el)
			this.companyTypeIds = ''
			for(var i in this.companyFilterNo){
				this.companyTypeIds += this.companyFilterNo[i] +','
			}
			this.group = 1
			this.closeEject()
			this.ajaxNew = true
			this.getData()
		},
		isBottom(){
			if(this.getDataing) return
			if(document.body.scrollHeight - document.body.scrollTop <= document.body.clientHeight+10){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
		getData:function(){
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
					'number':this.companyNum,
					'subDesignAtlas':this.subDesignAtlas,
					'searchKey':this.searchKey,
					'companyTypeIds':this.companyTypeIds
				};
			}
			this.$fetch(url,data)
			.then((res)=>{
				if(res.data.length < this.companyNum)this.lastPage = true//判断是否最后一页
				if(this.ajaxNew){
					this.lastPage = false
					this.companyList = res.data
					if(res.data.length == 0){
						this.$layer.msg(this.$t("message.tips.noMore"),{
							title:'tips',
							btn:'OK'
						})
						this.companyList = ''
						this.getDataing = false
						return
					}
				}else{
					this.companyList = this.companyList.concat(res.data)
				}
				if(this.centerType){
					if(this.centerType.type=='collection'){
						for(var i in this.companyList){
							this.companyList[i].collect = 1
						}
					}
				}
				this.group++
				this.getDataing = false
				for(var i = 0;i<this.companyFilterList.length;i++){
					for(var a = 0;a<this.companyFilterList[i].subTypeList.length;a++){
						let arr = this.companyTypeIds.split(",")
						if(arr.indexOf(this.companyFilterList[i].subTypeList[a].companyTypeId) > -1){
							this.companyFilterList[i].name = this.companyFilterList[i].subTypeList[a].name
						}
					}
				}
			})

		},
		subSearch:function(){
			this.companyList = []
			this.group = 0
			this.lastPage = false
			this.getData()
		},
		collection:function(event){
			event.preventDefault()
			var e = event.target.attributes["data-index"].nodeValue
			var thisId = event.target.attributes["data-id"].nodeValue
			var thisCollect = event.target.attributes["data-collect"].nodeValue
			var url;
			if(thisCollect == 1){
				url = '/home/collect/deleteData'
			}else if(thisCollect == 0){
				url = '/home/collect/addData'
			}
			this.$post(url,{
				'tagValue':'Company',
				'relatedId':thisId
			}).then(res => {
				if(res.errcode == '0000'){
					for(var a in this.companyList){
						if(this.companyList[a].companyId == thisId){
							this.$delete(this.companyList[a],'collect')
							this.$set(this.companyList[a],'collect',thisCollect==1?0:1)
						}
					}
				}else{
	  				this.$layer.alert(res.msg,{
						title:'message',
						btn:'OK'
					})
				}
			})
		}
	},
	created(){
		this.getDataFilterList()
		//this.getData()
	},
	watch:{
	}
}
</script>