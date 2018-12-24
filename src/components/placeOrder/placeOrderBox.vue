<style type="text/css">
.placeOrderBox{border-radius:10px;box-shadow: 2px -1px 15px #e9e9e9;width:90%;margin:0 auto;padding:5vw 3vw;box-sizing: border-box;position:relative;top:-20px;background:#fff;}

.placeOrderBox .placeOrderCity{height:5vw;}
.placeOrderBox .placeOrderCity img{float:left;margin-right:8px;}
.placeOrderMod{border:1px solid #d2d2d2;border-radius:5px;width:100%;margin:5vw auto;box-sizing: border-box;overflow:hidden;}
.placeOrderMod input.textBox{border:none;outline:none;padding:10px;width:80%;}
.placeOrderBox .selectMod{padding:10px;}
.placeOrderMod .keyName{float:left;width:27%;color:#777;font-size:13px;margin-top:1px;}
.placeOrderMod .formBox{float:left;width:73%;text-align:center;font-size:3.5vw;}
.placeOrderBox select{background:#fff;border:none;float:left;width:24%;box-sizing: border-box;}
.placeOrderBox .radioSelect{margin:0; margin-top:-2px;}
.placeOrderBox .placeBtn{background:#52c092;text-align:center;color:#fff;border-radius:10px; padding:4vw 0;margin-top:7vw;}
</style>
<template>
	<div id="placeOrderBox">
		<img width="100%" src="/static/image/placeOrderBg.jpg" />
		<div class="placeOrderBox">
			<div class="placeOrderCity">
				<img height="100%" src="/static/image/add.png"/>{{$t('message.menu.HoChiMing')}}
			</div>
			<div class="placeOrderMod">
				<input class="textBox" oninput="value=value.replace(/[^\d]/g,'')" :placeholder="$t('message.placeOrder.phone')" v-model="phone" />
			</div>
			<div class="placeOrderMod">
				<input class="textBox" :placeholder="$t('message.placeOrder.name')" v-model="username" />
			</div>
			<div class="placeOrderMod">
				<input class="textBox" oninput="value=value.replace(/[^\d]/g,'')" :placeholder="$t('message.placeOrder.acreage')" v-model="acreage" />㎡
			</div>
			<div class="placeOrderMod">
				<div class="selectMod clear">
					<span class="keyName">{{$t("message.placeOrder.houseType")}}</span>
					<div class="formBox">
						<select v-model="houseType1">
							<option selected value="1">1BR</option>
							<option value="2">2BR</option>
							<option value="3">3BR</option>
							<option value="4">4BR</option>
						</select>
						<select v-model="houseType2">
							<option value="1">1LR</option>
							<option value="2">2LR</option>
							<option value="3">3LR</option>
							<option value="4">4LR</option>
						</select>
						<select v-model="houseType3">
							<option value="1">1KIT</option>
							<option value="2">2KIT</option>
							<option value="3">3KIT</option>
							<option value="4">4KIT</option>
						</select>
						<select v-model="houseType4">
							<option value="1">1WC</option>
							<option value="2">2WC</option>
							<option value="3">3WC</option>
							<option value="4">4WC</option>
						</select>
					</div>
				</div>
			</div>
			<div class="placeOrderMod">
				<div class="selectMod clear">
					<span class="keyName">{{$t("message.placeOrder.type")}}</span>
					<div class="formBox houseType">
						<input v-model="type" class="radioSelect" type="radio" name="houseType" value="1" />
						<span style="margin-right:6vw">{{$t("message.placeOrder.newHouse")}}</span>
						<input v-model="type" class="radioSelect" type="radio" name="houseType" value="2" />
						<span>{{$t("message.placeOrder.rebuild")}}</span>
					</div>
				</div>
			</div>
			<div class="placeBtn" @click="placeBtn">{{$t("message.placeOrder.freeApplication")}}</div>
		</div>
    </div>
</template>
<script>

export default {
	name: '',
	data() {
	  return {
	  	phone:'',
		username:'',
		acreage:'',
		houseType1:'1',
		houseType2:'1',
		houseType3:'1',
		houseType4:'1',
		type:'1',

	  }
	},
	methods:{
		placeBtn:function(){
			var data = {
				'phone':this.phone,
				'name':this.username,
				'acreage':this.acreage,
				'houseType':this.houseType1+','+this.houseType2+','+this.houseType3+','+this.houseType4,
				'type':this.type,
			}
			for(var a in data){
				if(data[a] == ''){
					this.contSub = false
					let nullName;
					if(a == 'userName' && a == 'phone'){
						nullName = this.$t('message.login.phone')
					}else if(a == 'password'){
						nullName = this.$t('message.login.password')
					}else if(a == 'acreage'){
						nullName = this.$t('message.placeOrder.acreage')
					}else if(a == 'houseType'){
						nullName = this.$t('message.placeOrder.houseType')
					}else if(a == 'password'){
						nullName = this.$t('message.placeOrder.type')
					}
					this.$layer.alert(nullName+this.$t('message.tips.contNull'),{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
					return
				}
			}
			this.$post('apply/order',data)
			.then((res)=>{
				if(res.errcode == '0000'){
					this.$layer.msg(res.msg)
					this.$router.back(-1)
				}else{
					this.$layer.alert(res.msg,{
						title:this.$t('message.tips.titleMsg'),
						btn:this.$t('message.tips.ok')
					})
				}
			})
		}
	},
	components: {
	},
	mounted() {
	  
	}
}
</script>