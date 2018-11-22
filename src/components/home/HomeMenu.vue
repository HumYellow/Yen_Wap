<style type="text/css">
#homeMenu{ margin:30px auto;}
#homeMenu .homeMenuBox{width:25%;float:left;text-align:center;}
#homeMenu .homeMenuBox img{margin:0 auto;}
#homeMenu .homeMenuBox p{margin-top:4px;font-size:4vw; line-height:5vw;}
</style>
<template>
	<div id="homeMenu" class="clear">
		<router-link to="/placeOrder" class="homeMenuBox">
			<img width="50%" src="/static/image/homeCalculate.png" />
			<p>{{$t("message.menu.Calculate")}}</p>
		</router-link>
		<router-link to="/strategy" class="homeMenuBox">
			<img width="50%" src="/static/image/homeStrategy.png" />
			<p>{{$t("message.menu.Strategy")}}</p>
		</router-link>
		<router-link to="/company" class="homeMenuBox">
			<img width="50%" src="/static/image/homeCompany.png" />
			<p>{{$t("message.menu.Company")}}</p>
		</router-link>
		<router-link to="/guarantee" class="homeMenuBox">
			<img width="50%" src="/static/image/homeGuarantee.png" />
			<p>{{$t("message.menu.Guarantee")}}</p>
		</router-link>
	</div>
</template>

<script>

export default {
	name: 'homeMenu',
	data() {
	  return {
	    
	  }
	},
	components: {
	},
	mounted(){
	},
	created(){
	}
}
</script>