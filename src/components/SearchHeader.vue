<style type="text/css">
.searchHeader{background:#fff;width:100%;height:50px;padding:10px 5vw;box-shadow: 2px 2px 30px #e9e9e9;box-sizing: border-box;}
.searchHeader .searchBox{background:#f6f6f6;height:100%;width:80%;border-radius:20px;float:left;padding:0 3%;}
.searchHeader .searchBox img{float:left;margin-top:7px}
.searchHeader .searchBox input{float:left;border:none;background:#f6f6f6;height:90%;width:80%;padding:0 10px;margin-top:3px;}
.searchHeader .toCalculator{float:right;height:100%;}
</style>
<template>
	<div class="searchHeader clear">
		<div class="searchBox clear">
			<img height="60%" src="/static/image/search.png" />
			<input class="" placeholder="decoration company" />
		</div>
		<div class="toCalculator">
			<router-link to="/placeOrder">
				<img height="100%" src="/static/image/calculator.png" />
			</router-link>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  }
	},
	components: {

	},
	mounted() {
	  
	}
}
</script>