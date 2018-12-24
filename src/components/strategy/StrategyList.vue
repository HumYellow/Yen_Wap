<style type="text/css">
#strategyList .menuFirst{border:1px solid #339966;background:#339966;border-radius:5px;overflow:hidden;width:80%;margin:0 auto;}
#strategyList .menuFirstMod{float:left;width:33.3%;text-align:center;color:#339966;padding:10px 0;font-size:3vw;background:#fff;}
#strategyList .menuFirstMod[data-swich="select"]{color:#fff;background:#339966;}
#strategyList .menuSecond{margin:10px 0;}
#strategyList .menuSecondMod{float:left;width:25%;color:#999999; padding:10px 0;text-align:center;font-size:3.5vw;}
#strategyList .menuSecondMod[data-swich="select"]{color:#339966;}
#strategyList .menuSecondMod img{margin:0 auto 10px;}
#strategyList .strategyListMod{box-shadow: 1px -1px 20px #e9e9e9;padding:3vw;border-radius:10px;margin-bottom:3vw;}
#strategyList .strategyListBox{margin-top:5px;display: flex;justify-content: center;}
#strategyList .strategyListMod h3{font-size:4vw;line-height:8vw;font-weight:400;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;overflow: hidden;}
#strategyList .strategyListImd{width:40%;height:25vw;overflow:hidden;border-radius:10px;}
#strategyList .strategyListDescBox{width:60%;font-size:3.2vw;color:#999;padding:0 0 0 5vw;box-sizing: border-box;}
#strategyList .strategyListDescBox .strategySummary{line-height:3.5vw;overflow:hidden;
	text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;}
#strategyList .strategyListDescBox .strategyListDesc{height:25px;line-height:25px;display: flex;justify-content: center;align-items: center}
#strategyList .strategyListDescBox .strategyListDesc span.strategyTime{width:80px;}
#strategyList .strategyListDescBox .strategyListDesc span.strategySeen{width:calc(100% - 130px);background:url('/static/image/seenIcon.png') left center no-repeat;background-size:auto 50%;box-sizing: border-box;padding-left:25px;}
#strategyList .strategyListDescBox .strategyListDesc span.strategyShare ,#strategyList .strategyListDescBox .strategyListDesc span.strategyCollection{margin-left:10px;width:15px;}
</style>
<template>
	<div id="strategyList" class="strategyList">
		<div class="strategyListMenu">
			<div class="menuFirst clear">
				<div v-for="(strategyMenu,key) in strategyMenuList" @click="menuFirstSelect(strategyMenu.title)" class="menuFirstMod" :data-swich="menuFirstThis==strategyMenu.title?'select':''">{{strategyMenu.title}}</div>  
			</div>
			<div v-for="(strategyMenu,key) in strategyMenuList" v-if="menuFirstThis==strategyMenu.title" class="menuSecond clear">
				<div class="menuSecondMod" v-for="(strategyMenuMod,index) in strategyMenu.data" :data-swich="strategyMenuMod.id == menuSecondThis?'select':'noselect'" @click="menuSecondSelect(index,strategyMenuMod.id)">
					<img width="30%" :src="strategyMenuMod.id == menuSecondThis?strategyMenuMod.imgSelect:strategyMenuMod.img" />
					{{strategyMenuMod.title}}
				</div>
			</div>
		</div>
		<div v-for="strategy in strategyList" class="strategyListMod">
			<router-link class="clear" :to="'/strategyDetails/'+strategy.id">
				<h3>{{strategy.title}}</h3>
				<div class="strategyListBox">
					<div class="strategyListImd" v-if="strategy.img">
						<img width="100%" :src="strategy.img" />
					</div>
					<div class="strategyListDescBox">
						<div class="strategySummary">
							{{strategy.summary}}
						</div>
						<!-- <div class="strategyListDesc">
							<span class="strategyTime">{{strategy.createTime}}</span>
							<span class="strategySeen">{{strategy.viewCount}}</span>
							<span class="strategyShare">
								<img class="shareImg" width="14" height="14" src="/static/image/share.png" />
							</span>
							<span class="strategyCollection" @click="collectionFn($event,index)">
								<img v-if="strategy.collect" :data-id="imgs.designAtlasId" class="collectionImg" width="14" src="/static/image/collectionFinish.png" />
								<img v-else class="collectionImg" width="14" src="/static/image/collection.png" />
							</span>
						</div> -->
					</div>
				</div>
			</router-link>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	strategyMenuList:[
	  		{
	  			title:this.$t("message.strategy.strategMenu.prepare"),
	  			data:[
		  			{
		  				title:this.$t("message.strategy.strategType.takeRoom"),
		  				img:'/static/image/strategyIcon/front/takeRoom.png',
		  				imgSelect:'/static/image/strategyIcon/front/takeRoom-select.png',
		  				id:'1'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.design"),
		  				img:'/static/image/strategyIcon/front/design.png',
		  				imgSelect:'/static/image/strategyIcon/front/design-select.png',
		  				id:'2'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.calculator"),
		  				img:'/static/image/strategyIcon/front/calculator.png',
		  				imgSelect:'/static/image/strategyIcon/front/calculator-select.png',
		  				id:'3'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.contract"),
		  				img:'/static/image/strategyIcon/front/contract.png',
		  				imgSelect:'/static/image/strategyIcon/front/contract-select.png',
		  				id:'4'
		  			},
		  		]
	  		},{
	  			title:this.$t("message.strategy.strategMenu.decorating"),
	  			data:[
		  			{
		  				title:this.$t("message.strategy.strategType.alter"),
		  				img:'/static/image/strategyIcon/ing/alter.png',
		  				imgSelect:'/static/image/strategyIcon/ing/alter-select.png',
		  				id:'5'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.waterPower"),
		  				img:'/static/image/strategyIcon/ing/waterpower.png',
		  				imgSelect:'/static/image/strategyIcon/ing/waterpower-select.png',
		  				id:'6'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.waterProof"),
		  				img:'/static/image/strategyIcon/ing/waterproof.png',
		  				imgSelect:'/static/image/strategyIcon/ing/waterproof-select.png',
		  				id:'7'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.masonry"),
		  				img:'/static/image/strategyIcon/ing/masonry.png',
		  				imgSelect:'/static/image/strategyIcon/ing/masonry-select.png',
		  				id:'8'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.woodwork"),
		  				img:'/static/image/strategyIcon/ing/woodwork.png',
		  				imgSelect:'/static/image/strategyIcon/ing/woodwork-select.png',
		  				id:'9'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.paint"),
		  				img:'/static/image/strategyIcon/ing/paint.png',
		  				imgSelect:'/static/image/strategyIcon/ing/paint-select.png',
		  				id:'10'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.finish"),
		  				img:'/static/image/strategyIcon/ing/finish.png',
		  				imgSelect:'/static/image/strategyIcon/ing/finish-select.png',
		  				id:'11'
		  			},
		  		]
  			},
  			{
	  			title:this.$t("message.strategy.strategMenu.finish"),
	  			data:[
		  			{
		  				title:this.$t("message.strategy.strategType.softDc"),
		  				img:'/static/image/strategyIcon/after/softDc.png',
		  				imgSelect:'/static/image/strategyIcon/after/softDc-select.png',
		  				id:'12'
		  			},
		  			{
		  				title:this.$t("message.strategy.strategType.reside"),
		  				img:'/static/image/strategyIcon/after/reside.png',
		  				imgSelect:'/static/image/strategyIcon/after/reside-select.png',
		  				id:'13'
		  			},
		  		]
	  		},
	  	],
	  	menuFirstThis:this.$t("message.strategy.strategMenu.prepare"),
	  	menuSecondThis:1,
	  	strategyList:[],
	  	ajaxNew:true,
	  	lastPage:false,
	  	strategyNum:10,//获取公司数量
	  	group:1,
	  	groupNamber:10,
	  	getDataing:false
	  }
	},
	components: {
	},
	mounted() {
		window.addEventListener('scroll', this.isBottom)
		window.addEventListener('touchmove', this.isBottom)
	},
	methods:{
		menuFirstSelect:function(key){
	  		this.menuFirstThis = key
			this.group=1
	  		this.ajaxNew = true
			for(var i =0;i<this.strategyMenuList.length;i++){
				if(this.strategyMenuList[i].title == key){
					this.menuSecondThis = this.strategyMenuList[i].data[0].id
				}
			}
			this.getData()
		},
		menuSecondSelect:function(index,id){
			this.menuSecondThis = id
			this.group=1
			this.ajaxNew = true
			this.getData()

		},
		getData:function(){
			if(this.getDataing)return
			this.getDataing = true
			this.$fetch('/article/listData',{
				'pageNo':this.group,
				'number':this.groupNamber,
				'tag':this.menuSecondThis
			})
			.then((res)=>{
				if(res.data.length < this.strategyNum)this.lastPage = true
				this.ajaxNew?this.strategyList = res.data:this.strategyList = this.strategyList.concat(res.data)
				
				this.group++
				this.getDataing = false
			})

		},
		isBottom(){
			if(document.body.scrollHeight - document.body.scrollTop <= document.body.clientHeight+30){
				if(!this.lastPage){
					this.ajaxNew = false
					this.getData()
				}
			}
		},
		collectionFn:function(){

		}
	},
	created(){
		this.getData()
	},
}
</script>