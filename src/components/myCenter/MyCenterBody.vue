<style type="text/css">
.myCenterBody{padding:20px;border:1px solid #eee;}
.myCenterBody .userPic{width:20%;float:left;overflow:hidden;border-radius:50%;}
.myCenterBody .userText{width:75%;float:left;margin-left:5%;padding:20px 0;}
.myCenterBody .userText h3{font-size:16px;height:30px;}
.myCenterBody .userText p{font-size:13px; line-height:24px;}
</style>
<template>
	<div class="myCenterBody clear">
		<div class="userDesc">
			<div class="userPic">
				<img width="100%" src="http://img.to8to.com/headphoto/703.jpg?v=1451038020" />
			</div>
			<div class="userText">
				<h3 class="userName">{{userName}}</h3>
				<p class="userid">业主ID：{{userid}}</p>
				<p class="massage">消息：{{massage}}</p>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	userName:'皮卡丘',
	  	userid:'334455',
	  	massage:'3'
	  }
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>