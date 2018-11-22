<style type="text/css">
.myCenterSidebar{float:left; width:20%;}
.myCenterSidebar .goBackCenter{padding:20px; border-left:3px solid #0cb46a;background:#f8f8f8;color:#0cb46a;text-align:center;}
.myCenterSidebar .linkList{border-left:1px solid #e8e8e8;}
.myCenterSidebar .linkList a{display:block; padding:20px 0;text-align:center;font-size:13px;}
</style>
<template>
	<div class="myCenterSidebar">
		<div class="goBackCenter" id="goBackCenter">返回个人中心</div>
		<ul class="linkList">
			<li><router-link to="/myCenter">拉拉1</router-link></li>
			<li><router-link to="/myCenter/myCenterHome2">拉拉2</router-link></li>
		</ul>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	userName:'皮卡丘',
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>
