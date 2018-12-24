<style type="text/css">
.filterBox{text-align:center; color:#000;background:#fff;line-height:60px;z-index:10000;position:relative;}
.filterBox li{display:inline-block; padding:0 10px;}
.filterBox .filter-enter-active, .filterBox .filter-leave-active {
  transition: opacity .4s;
}
.filterBox .filter-enter, .filterBox .filter-leave-to /* .contactWhole-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<template>
	<div class="filterBox">
		<transition name="filter">
			<div class="filter" v-if="filterShow">
				<ul class="clear">
					<li v-for="filter in filterList">
						<router-link to="/">{{filter.text}}</router-link>
					</li>
				</ul>
			</div>
		</transition>
		<Eject @closeEject="closeEject" v-if="ejectShow"></Eject>
	</div>
</template>

<script type="text/javascript">
import Eject from '@/components/public/eject/Eject'
export default{
	name:'myHeader',
	props:{
		filterList:'',
		filterShow:true,

	},
	components:{
		Eject
	},
	data(){
		return{
			ejectShow:false,
		}
	},
	computed:{
		pathBuild:function(){
			for(let i in this.path){
				this.path[i] = '/'+this.lang+'/'+i
			}
			return this.path;
		}
	},
	methods:{
		menuShowSwitch:function(){
			this.menuShow?this.menuShow = false:this.menuShow = true
			this.ejectShow?this.ejectShow = false:this.ejectShow = true
			this.$swallow.stop()
		},
		closeEject:function(){
			this.ejectShow = false
			this.$swallow.move()
		}
	},
	mounted:function(){
		
	},
	watch:{
		'filterShow':function(){
			this.ejectShow = this.filterShow
		}
	}
}</script>