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
</style>
<template>
	<div class="designFilter">
		<div class="designFilterHead clear">
			<div class="designHead">{{$t("message.menu.Design")}}</div>

			<div class="designFilterMod" v-for="filterBox in designFilterList" 
			@click="styleFilterShowSwich(filterBox.designRangeId)">
				{{filterBox.name}}
				<span :data-swich="stylwSwich == filterBox.designRangeId?'on':'off'" class="triangle "></span>
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
</template>

<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'designFilter',
	components:{
		Eject,
	},
	data(){
		return{
			stylwSwich:false,//判断menu是否展开，绽开的话等于展开的ID
			filterShow:false,
			ejectShow:false,
			ejectType:{},
			designFilterNo:{},
			designFilterList:[],
			designFilterList2:[],
		}
	},
	computed:{
	},
	methods:{
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
			this.$swallow.stop()
		},
		getDesignFilterList:function(){
			this.$fetch('/design/type/groupData')
			.then(res => {
				this.designFilterList = res.data
			})

		},
		toDesignFilter:function(el){//点击二级菜单触发，el为点击的二级菜单ID
			this.$delete(this.designFilterNo,this.designFilterList2.designRangeId)
			this.$set(this.designFilterNo,this.designFilterList2.designRangeId,el)
		}
		
	},
	mounted:function(){
		this.getDesignFilterList()
	},
}</script>