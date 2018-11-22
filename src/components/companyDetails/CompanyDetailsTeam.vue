<style type="text/css">
#companyDetailsTeam .teamMod{width:21%;margin:0 2%;float:left;text-align:center;}
#companyDetailsTeam .teamMod .pic{width:100%;border-radius:50%;margin:0 auto;overflow:hidden;}
#companyDetailsTeam .teamMod p{font-size:3vw; line-height:6vw;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;width:100%;}
#companyDetailsTeam .teamMod .name{color:#999;}
#companyDetailsTeam .teamMod .title{color:#333;}
</style>
<template>
	<div id="companyDetailsTeam" v-if="companyDetailsTeam.length > 0" class="companyDetailsTeam companyDetailsMod clear">
		<h3>{{$t("message.company.designer")}}
			<!-- <router-link class="moreTo" to="/">more &gt;</router-link> -->
		</h3>
		<div class="companyDetailsTeamMod clear">
			<div v-for="(team ,index) in companyDetailsTeam" class="teamMod" v-if="index < 4">
				<div class="pic"><img width="100%" :src="team.img" /></div>
				<p class="title">{{team.title}}</p>
				<p class="name">{{team.name}}</p>
			</div>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
		companyDetailsTeam:[]
	  }
	},
	components: {
	},
	mounted() {
	  
	},
	created(){
		this.$fetch('/designer/listData', {companyId:this.$route.params.id})
		.then((res)=>{
			this.companyDetailsTeam = res.data
		})
	},
}
</script>