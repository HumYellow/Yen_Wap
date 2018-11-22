<style type="text/css">
.myCenterSchedule{padding-bottom:70px;}
.myCenterSchedule h3{border-left:3px solid #0cb46a;margin:20px 0;padding-left:10px;}
.myCenterSchedule .myCenterScheduleMod h4{padding:20px 30px;border:1px solid #f4f4f4;border-top:3px solid #0cb46a;border-bottom-color:#fff;display:inline-block;position:relative;bottom:-1px;color:#0cb46a; font-weight:100;}
.myCenterSchedule .scheduleBox{border:1px solid #eee;}
.myCenterSchedule .scheduleDesc{padding:20px;background:#fff;border:1px solid #eee;}
.myCenterSchedule .scheduleDescMod{color:#999; text-align:left;font-size:3.2vw;}
.myCenterSchedule .scheduleDescMod span{color:#000;}

.scheduleCneter{}
.scheduleList{float:left;width:30%;}
.scheduleShowCenter{width:100%;}
.scheduleShowCenter .scheduleShowCenterBox{padding:20px 0;}
.scheduleShowCenter .scheduleShowCenterBox .selectBox{width:20px;height:20px;border-radius:50%;display:block;float:left;margin-right:10px;background: url('/static/image/myCenter/scheduleShow.png') center no-repeat;background-size:100% 100%;}
.scheduleShowCenter .scheduleShowCenterBox[data-state=select] .selectBox{
	background-image: url('/static/image/myCenter/scheduleShowSelect.png');}
.scheduleShowCenter .stateBox{width:15%;float:left;height:20px; line-height:20px;}
.scheduleShowCenter .textBox{width:80%;margin-left:5%;float:left}
.scheduleShowCenter .textBox h5{margin-bottom:10px;}
.schedulePage{border-bottom:1px solid #dfdfdf}
.schedulePage span{padding:20px 0;display:block;float:left;width:25%;box-sizing: border-box;text-align:center;}
.schedulePage span.select{border-bottom:1px solid #0cb46a;color:#3fbb87;}
.schedulePage span.nowStage{background: url('/static/image/add.png') no-repeat;background-position:5px center;background-size:auto 30%;}
.scheduleShow{margin:0 3%;}
.scheduleShow li{padding:10px 0; margin:5px 0;}
.scheduleShow li.select{background:#0cb46a;color:#fff;}

.myCenterSchedule .projectBtn{padding:5px 10px;font-size:13px; display:inline-block;}
.myCenterSchedule .projectBtn[data-swich=select]{border:1px solid #f4f4f4;border-top:3px solid #0cb46a;border-bottom-color:#fff;}
.myCenterScheduleMod .companyList{width:100%;margin-top:10px;}
.myCenterScheduleMod .companyListBox{float:left;width:33%;text-align:center;}
.myCenterScheduleMod .companyListBox a{display:block;}
.myCenterScheduleMod .companyPicBox{height:16vw;overflow:hidden;}
.myCenterScheduleMod .companyListBox p{margin-top:10px;font-size:3.5vw;}
.presentationPicBox{margin-top:10px;}


.scheduleShowCenterBox .agreeToPayBtn{margin-top:30px; height:30px;position:relative;}
.scheduleShowCenterBox .agreeToPayBtn a ,.scheduleShowCenterBox .agreeToPayBtn span{border-radius:5px; color:#fff;display:block; width:50%; text-align:center;height:30px; line-height:30px;}
.scheduleShowCenterBox .agreeToPayBtn input{position:absolute;width:50%;height:30px;left:0;top:0;opacity:0;}
.scheduleShowCenterBox .agreeToPayBtn .agree{background:#3fbb87;}
.scheduleShowCenterBox .agreeToPayBtn .auditting{background:#a2a2a2;}
.myCenterSchedule .noProject{margin:60px auto;width:50%;}
.myCenterSchedule .noProject a{background:#0cb46a;color:#fff;width:100%;height:30px;line-height:30px;text-align:center;display:block;border-radius:5px;margin-top:30px;}
.scheduleShowCenter .evaluateBtn{padding:8px 25px;border-radius:5px;color:#fff;}
.scheduleShowCenter a.evaluateBtn{background:#3FBB87;}
.scheduleShowCenter span.evaluateBtn{background:#a2a2a2;}
</style>
<template>
	<div v-if="this.scheduleDesc" class="myCenterSchedule clear">
		<div v-if="JSON.stringify(this.scheduleDesc) != '{}'" class="myCenterScheduleMod">
			<div class="scheduleBox">
				<div class="scheduleDesc clear">
					<div class="scheduleDescMod">{{$t("message.myCenter.project")}}：<span>{{scheduleDesc.id}}</span></div>
				</div>
				<div class="scheduleCneter">
					<div class="schedulePage clear">
						<span v-for="(stageSelectMod ,index) in stageSelectNum" :class="[(index == stage?'select':''),(index == nowStage?'nowStage':'')]" @click="stageSelect(index);">{{$t("message.myCenter.step")}}{{stageSelectMod}}</span>
					</div>
					<div class="scheduleShow clear">
						<div class="scheduleShowCenter">
							<div :data-state="scheduleMod.tagId < step || (scheduleMod.tagId == step && scheduleDesc.fewStepStatus != 'verify')?'select':''" class="scheduleShowCenterBox clear" v-for="(scheduleMod,index) in schedule[stage]">
								<div class="stateBox">
									<span class="selectBox"></span>
									{{index+1}}
								</div>
								<div class="textBox">
									<h5>{{scheduleMod.title}}</h5>
									<div v-if="scheduleMod.tagId <= step && scheduleDesc.fewStepStatus != 'verify'">{{scheduleMod['desc3']}}</div>
									<div v-if="scheduleMod.tagId <= step && scheduleDesc.fewStepStatus == 'verify'">{{scheduleMod['desc2']}}</div>
									<div v-if="scheduleMod.tagId > step">{{scheduleMod['desc']}}</div>
									<div v-if="key == 'fewStep'+scheduleMod.tagId"
									 	v-for="(value ,key) in scheduleDesc.orderDetailMap" 
									 	class="companyList clear">
										<div v-if="key == 'fewStep2'" v-for="company in value" class="companyListBox">
											<router-link :to="'/companyDetails/'+company.companyId">
												<div class="companyPicBox">
													<img width="100%" :src="company.companyImg" />
												</div>
												<p>{{company.companyName}}</p>
											</router-link>
										</div>
										<div class="presentationPicBox" v-if="key == 'fewStep3' || key == 'fewStep4' || key == 'fewStep5'|| key == 'fewStep6' || key == 'fewStep7' || key == 'fewStep8' || key == 'fewStep9'">
											<img width="100%" :src="value.img" />
										</div>
									</div>
									<div v-if="(scheduleMod.tagId == step && scheduleDesc.fewStepStatus == 'verify') || (scheduleMod.tagId == step+1 && agreeToPayBtn)" class="agreeToPayBtn">
										<a v-if="!agreeToPayState" class="agree" @click="agreeToPay">
											{{$t("message.myCenter.step1.4.title")}}
										</a>
										<input v-if="!agreeToPayState && scheduleMod.tagId != '9' && scheduleMod.tagId != '10'" @change="fileImage" type="file" accept="image/jpeg,image/x-png,image/gif" value="Agree to pay" id=""  />

										<span v-if="agreeToPayState" class="auditting">{{$t("message.myCenter.auditting")}}</span>
									</div>
									<div class="mt20" v-if="(scheduleMod.tagId == 4 || scheduleMod.tagId == 6 || scheduleMod.tagId == 8 || scheduleMod.tagId == 10) && scheduleMod.tagId<=scheduleDesc.fewStep && scheduleDesc.fewStepStatus != 'verify'">
										<span v-if="scheduleDesc.commentStepList.indexOf(stage+1) > -1" class="evaluateBtn">{{$t("message.myCenter.evaluated")}}</span>
										<router-link v-else class="evaluateBtn" 
										:to="{path:'/myCenterEvaluate',
										 query: {orderId:scheduleDesc.orderId,tagValue:stage+1}}">
											{{$t("message.myCenter.evaluate")}}
										</router-link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="noProject" v-else>
			<img width="100%" src="/static/image/myCenter/noProject.png" />
			<router-link to="/placeOrder">
				{{$t("message.myCenter.orderNow")}}
			</router-link>
		</div>
    </div>
</template>
<script>
export default {
	name: '',
	data() {
	  return {
	  	scheduleDesc:false,
	  	stageSelectNum:['1','2','3','4'],
	  	nowStage:2,//当前进行的大选项
	  	stage:2,//当前选中的大选项
	  	step:0,//当前小选项
	  	nowState:'',//当前步骤的状态
	  	agreeToPayState:false,//当前步骤审核状态
	  	agreeToPayBtn:false,
	  	projectList:'',
	  	scheduleCurrent:{},
	  	schedule:[
	  		[{
	  			title:this.$t("message.myCenter.step1.1.title"),
	  			modId:'1',
	  			tagId:'1',
	  			desc:this.$t("message.myCenter.step1.1.desc"),
	  			desc2:this.$t("message.myCenter.step1.1.desc2"),
	  			desc3:this.$t("message.myCenter.step1.1.desc3"),

	  		},{
	  			title:this.$t("message.myCenter.step1.2.title"),
	  			modId:'1',
	  			tagId:'2',
	  			desc:this.$t("message.myCenter.step1.2.desc"),
	  			desc2:this.$t("message.myCenter.step1.2.desc2"),
	  			desc3:this.$t("message.myCenter.step1.2.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step1.3.title"),
	  			modId:'1',
	  			tagId:'3',
	  			desc:this.$t("message.myCenter.step1.3.desc"),
	  			desc2:this.$t("message.myCenter.step1.3.desc2"),
	  			desc3:this.$t("message.myCenter.step1.3.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step1.4.title"),
	  			modId:'1',
	  			tagId:'4',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step1.4.desc"),
	  			desc2:this.$t("message.myCenter.step1.4.desc2"),
	  			desc3:this.$t("message.myCenter.step1.4.desc3")
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step2.1.title"),
	  			modId:'2',
	  			tagId:'5',
	  			desc:this.$t("message.myCenter.step2.1.desc"),
	  			desc2:this.$t("message.myCenter.step2.1.desc2"),
	  			desc3:this.$t("message.myCenter.step2.1.desc3")
	  		},{
	  			title:this.$t("message.myCenter.step2.2.title"),
	  			modId:'2',
	  			tagId:'6',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step2.2.desc"),
	  			desc2:this.$t("message.myCenter.step2.2.desc2"),
	  			desc3:this.$t("message.myCenter.step2.2.desc3")
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step3.1.title"),
	  			modId:'3',
	  			tagId:'7',
	  			desc:this.$t("message.myCenter.step3.1.desc"),
	  			desc2:this.$t("message.myCenter.step3.1.desc2"),
	  			desc3:this.$t("message.myCenter.step3.1.desc3"),
	  		},{
	  			title:this.$t("message.myCenter.step3.2.title"),
	  			modId:'3',
	  			tagId:'8',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step3.2.desc"),
	  			desc2:this.$t("message.myCenter.step3.2.desc2"),
	  			desc3:this.$t("message.myCenter.step3.2.desc3"),
	  		}],
	  		[{
	  			title:this.$t("message.myCenter.step4.1.title"),
	  			modId:'4',
	  			tagId:'9',
	  			desc:this.$t("message.myCenter.step4.1.desc"),
	  			desc2:this.$t("message.myCenter.step4.1.desc2"),
	  			desc3:this.$t("message.myCenter.step4.1.desc3")
	  		},{
	  			title:this.$t("message.myCenter.step4.2.title"),
	  			modId:'4',
	  			tagId:'10',
	  			agreeToPayBtn:true,
	  			desc:this.$t("message.myCenter.step4.2.desc"),
	  			desc2:this.$t("message.myCenter.step4.2.desc2"),
	  			desc3:this.$t("message.myCenter.step4.2.desc3")
	  		}],
	  	],
	  }
	},
	components: {
	},
	created(){
		this.getProject()
	},
	methods:{
		stageSelect:function(select){
			this.stage = select
			if(this.stage == this.nowStage){

			}else{
				
			}
		},
		stepSelect:function(select){
			/*this.step = select*/
		},
		getProject:function(id){
			this.$fetch('/home/order/detail/listData')
			.then((res)=>{
				this.scheduleDesc = res.data
				if(!this.scheduleDesc) return
				this.agreeToPayBtn = false
				this.scheduleDesc.fewStepStatus == 'verify'?this.agreeToPayState = true:this.agreeToPayState = false
				this.step = this.agreeToPayState?this.scheduleDesc.fewStep:this.scheduleDesc.fewStep;
				if(this.step == '3' || this.step == '5' || this.step == '7' || this.step == '9')this.agreeToPayBtn = true
				if(this.step <=4){
					this.nowStage = 0
					this.stage = 0
				}else if(this.step > 4 && this.step <= 6){
					this.nowStage = 1
					this.stage = 1
				}else if(this.step > 7 && this.step <= 8){
					this.nowStage = 2
					this.stage = 2
				}else if(this.step > 8 && this.step <= 11){
					this.nowStage = 3
					this.stage = 3
				}
				
				/* for(var a in res.data.orderDetailMap){
				 	let mod
				 	if(a == 1){
				 		mod = this.schedule[a-1][2]
				 	}else{
				 		mod = this.schedule[a-1][0]
				 	}
				 	this.$set(mod , 'desc' ,res.data.orderDetailMap[a].postscript)
				}*/
			})

		},
		agreeToPay:function(url,img){
			var data = {
				'id':this.scheduleDesc.id,
				'imgs':img,
			}
			if(this.step == 9){
				url = '/home/order/lastPaidFinish'
			}
			this.$post(url,data)
			.then((res)=>{
				this.projectList = res.data
				this.getProject()
			})
		},
		fileImage:function(e){//上传图片
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
            	this.$layer.alert('Please upload pictures of size not exceeding 2000KB.',{
					title:'tips',
					btn:'OK'
				})
            }else{         
				var file = e.target.files[0];      
				var param = new window.FormData(); //创建form对象
				param.append('file',file);//通过append向form对象添加数据
				param.append('clazz','order')
		        that.$postImg('/picture/upload',param)
				.then((res)=>{
					if(this.step == 3){
						this.agreeToPay('/home/order/agreePaid',res.data.file)
					}else if(this.step == 5){
						this.agreeToPay('/home/order/earlyPaid',res.data.file)
					}else if(this.step == 7){
						this.agreeToPay('/home/order/metaphasePaid',res.data.file)
						
					}else if(this.step == 9){
						this.agreeToPay('/home/order/lastPaidFinish',res.data.file)
						
					}
				})
				//

            };
        },
        }
	}
</script>