<style type="text/css">
.strategySidebar{width:25%;float:left; background:#fff; box-sizing: border-box;padding:30px;}
.strategySidebar .strategySidebarTitle{font-size:16px;line-height:25px;padding-bottom:15px;border-bottom:1px solid #e4e4e4;position:relative;}
.strategySidebar .strategySidebarTitle a{color:#666;font-size:12px;position:absolute;right:0;bottom:12px;font-weight:100;}
.strategySidebarBody{padding-top:15px;}
.strategySidebarBody li{line-height:24px;}
</style>
<template>
	<div class="strategySidebar">
		<h3 class="strategySidebarTitle">热门攻略<router-link target="_blank" to="/strategy">more</router-link></h3>
		<div class="strategySidebarBody">
			<ul>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
				<li><router-link target="_blank" to="/strategy">我怎么才能balabala</router-link></li>
			</ul>
		</div>
    </div>
</template>
<script>

export default {
	name: 'strategySidebar',
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