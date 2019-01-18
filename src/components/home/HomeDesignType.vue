<style type="text/css">
#homeDesignType{padding:0 1vw;}
#homeDesignType .typeLeft ,#homeDesignType .typeRight{float:left;width:50%;box-sizing: border-box;padding:0 1vw;}
#homeDesignType a{overflow:hidden;border-radius:10px;display:block;display: flex;align-items: center}
#homeDesignType .typeLeft a{height:36vw;}
#homeDesignType .typeRight a{height:17vw;}
#homeDesignType .typeRight a:nth-child(2){margin-top:2vw;}
</style>
<template>
	<div id="homeDesignType" class="clear">
		<div class="typeLeft">
			<router-link to="/design">
				<img width="100%" :src="$t('message.home.image1')" />
			</router-link>
		</div>
		<div class="typeRight">
			<router-link :to="{path: '/design', query:{menuId:'4',styleId:'13'}}">
				<img width="100%" :src="$t('message.home.image2')" />
			</router-link>
			<router-link :to="{path: '/design', query:{menuId:'4',styleId:'14'}}" class="">
				<img width="100%" :src="$t('message.home.image3')" />
			</router-link>
		</div>
	</div>
</template>

<script>

export default {
	name: 'homeDesignType',
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