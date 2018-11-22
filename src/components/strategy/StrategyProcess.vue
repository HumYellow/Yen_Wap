<style type="text/css">
/* .processMod .processModBg ,.processMod a .icon{background:url("../../../static/image/strategyProcess.png") no-repeat;} */
.processMod{float:left;width:33%;}
.processMod:nth-child(2){margin:0 .5%;}
.processMod .processModBg{background-size:100% auto;height:204px;border-top:none;}
.processMod:nth-child(2) .processModBg{background-position:0 -207px;}
.processMod:nth-child(3) .processModBg{background-position:0 -415px;}

.processMod:nth-child(1){background-color:#fefff4;}
.processMod:nth-child(2){background-color:#f9fffc;}
.processMod:nth-child(3){background-color:#f5fcff;}

.processMod a{border-left:1px solid;border-bottom:1px solid;display:block; float:left;box-sizing: border-box;text-align:center;color:#999;font-size:14px;}
.processMod:nth-child(1) a:hover{color:#ABB357;}
.processMod:nth-child(2) a:hover{color:#449D6F;}
.processMod:nth-child(3) a:hover{color:#4397a4;}
.processMod a:last-child{border-right:1px solid;}
.processMod:nth-child(1) a{width:25%;border-color:#edeee5;padding:53px 0;}
.processMod:nth-child(2) a{width:25%;border-color:#dfece7;padding:15px 0;}
.processMod:nth-child(2) a:nth-child(5){border-right:1px solid #dfece7;}
.processMod:nth-child(3) a{width:50%;border-color:#dbe5e6;padding:53px 0;}

.processMod a .icon{width:16px;height:16px;margin:0 auto 15px;}
.processMod:nth-child(1) a:nth-child(2) .icon{background-position:-48px -603px;}
.processMod:nth-child(1) a:nth-child(3) .icon{background-position:-65px -603px;}
.processMod:nth-child(1) a:nth-child(4) .icon{background-position:-82px -603px;}
.processMod:nth-child(1) a:nth-child(5) .icon{background-position:-99px -603px;}

.processMod:nth-child(2) a:nth-child(2) .icon{background-position:-116px -603px;}
.processMod:nth-child(2) a:nth-child(3) .icon{background-position:-134px -603px;}
.processMod:nth-child(2) a:nth-child(4) .icon{background-position:-151px -603px;}
.processMod:nth-child(2) a:nth-child(5) .icon{background-position:-170px -603px;}
.processMod:nth-child(2) a:nth-child(6) .icon{background-position:-185px -603px;}
.processMod:nth-child(2) a:nth-child(7) .icon{background-position:-205px -603px;}
.processMod:nth-child(2) a:nth-child(8) .icon{background-position:-222px -603px;}
.processMod:nth-child(2) a:nth-child(9) .icon{background-position:-242px -603px;}

.processMod:nth-child(3) a:nth-child(2) .icon{background-position:-265px -628px;}
.processMod:nth-child(3) a:nth-child(3) .icon{background-position:-285px -603px;}

</style>
<template>
	<div class="strategyProcess strategyMod clear">
		<div class="strategyTitle">
			<h3>装修流程</h3>
		</div>
		<div class="process clear">
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>收房</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>设计</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>预算</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>合同</div>
				</router-link>
			</div>
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>拆改</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>水电</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>放水</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>泥瓦</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>木工</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>油漆</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>竣工</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>更多</div>
				</router-link>
			</div>
			<div class="processMod clear">
				<div class="processModBg"></div>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>软装</div>
				</router-link>
				<router-link to="/strategyList/1">
					<div class="icon"></div><div>入住</div>
				</router-link>
			</div>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	desc:{
	  	}
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>