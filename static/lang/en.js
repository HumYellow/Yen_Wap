//en.js
module.exports={
  message: {
	menu:{
		Home:'Home',
		Design:'Design',
		Company:'Company',
		Strategy:'Strategy',
		Guarantee:'Guarantee',
		Calculate:'Calculate',
		Mine:'Mine',
		HoChiMing:'Ho Chi Ming'
	},
	login:{
		login:'Login',
		register:'Register',
		phone:'Phone',
		password:'Password',
		againPassword:'Again password',
		get:'Get',
		getCode:'Get',
		getVerificationCode:'get verification code',
		inputVerificationCode:'input verification code',
		logout:'logout',
		forgetPassword:'Forget password',
		newUse:'New use',
		passwordError:'The password is at least 8 bits  and must contain numbers and letters',
		submit:'Submit',
	},
	register:{
		agreementText1:'I have read and accepted ',
		agreementText2:'《YEN User Service term》',
	},
	tips:{
		titleMsg:'message',
		ok:'OK',
		yes:'yes',
		no:'no',
		contNull:'can not be empty',
		passwordDifferent:'The password is at least 8 bits and must contain numbers and letters',
		success:'success',
		noMore:'No more data for now',
		delectIt:'Are you sure you want to delete it?',
		againLater:'Your network may have problems.please try again later',
	},
    home:{
    	serviceProcess:'Service Process',
    	designScheme:'design scheme',
    	consultingPhone:'Consulting phone',
		image1:'/static/image/homeDesignType_1.jpg',
		image2:'/static/image/homeDesignType_4.jpg',
		image3:'/static/image/homeDesignType_3.jpg',
    },
    placeOrder:{
    	name:'Name',
		phone:'Phone',
		acreage:'Acreage',
		houseType:'house type',
		type:'type',
		newHouse:'New House',
		rebuild:'Rebuild',
		pleaseChoose:'Please choose',
		pleaseEvaluation:'Please input your evaluation',
		uploadPic:'Upload a picture',
		freeApplication:'Free application',
		freeQuotation:'Free quotation',
		addPicMod:'/static/image/myCenter/addPicMod_en.png',
    },
    aboutUs:{
    	inputCompanyName:'Input company name',
    	inputContactName:'Input contact name',
    	inputTelephoneNumber:'Input telephone number'
    },
    design:{
    	collection:'Collection',
    	cancelCollection:'Cancel The Collection',
    	atlasInformation:'Atlas information',
    	designDetails:'Design Details',
    	pictures:'pictures',

    },
    company:{
    	address:'Address',
    	companyProfile:'Company Profile',
    	designCases:'Design cases',
    	designer:'Designer',
    	certificate:'Certificate',
    	registrationInformation:'registration information',
    	companyDetails:'Company Details',
    	time:'Time',
    	decorationCompany:'Decoration Company',
    	companySize:'Company size',
    	companyIntroduction:'Company introduction',
    	decorationService:'Decoration service',
    	freeDesign:'Free design for me',
		businessLicense:'Business license',
    },
    guarantee:{
    	title:'Guarantee'
    },
    strategy:{
    	strategMenu:{
    		prepare:'Prepare',
    		decorating:'Decorating',
    		finish:'Finish',
    	},
    	strategType:{
    		takeRoom:'take room',
    		design:'design',
    		calculator:'calculator',
    		contract:'contract',
    		alter:'alter',
    		waterPower:'water power',
    		waterProof:'water proof',
    		masonry:'masonry',
    		woodwork:'woodwork',
    		paint:'paint',
    		finish:'finish',
    		more:'more',
    		softDc:'softDc',
    		reside:'reside',
    		all:'all',
    	},
    	materialSelectionManual:'Material selection manual',
    	geomanticCulture:'Geomantic culture'
    },
    myCenter:{
    	project:'project',
    	projectId:'project ID',
    	evaluate:'Evaluate',
    	evaluated:'Evaluated',
    	orderNow:'Order Now',
    	auditting:'Auditting',
    	inputPictureDescription:'Input picture description',
    	uploadSize:'Please upload pictures of size not exceeding 2000KB.',
    	noMorePictures:'No more than 20 pictures',
    	myDesign:'My design',
    	step:'Step',
    	step1:{
    		1:{
	  			title:'1.Check decoration needs',
	  			desc:"you haven't submitted the decoration requirements.",
	  			desc2:"you haven't submitted the decoration requirements.",
	  			desc3:"Congratulations, your  requirement  has passed the audit",

	  		},
	  		2:{
	  			title:'2.See your match company',
	  			desc:'After auditing, we can arrange the decoration company for you.',
	  			desc2:'After auditing, we can arrange the decoration company for you.',
	  			desc3:'These companies have accepted your requirement.',
	  		},
	  		3:{
	  			title:'3.Hosting contract',
	  			desc:'You have not signed the contract.',
	  			desc2:'You have not signed the contract.',
	  			desc3:'You have signed the decoration company.',
	  		},
	  		4:{
	  			title:'4.Agree to pay',
	  			desc:'After signing the contract ,you can agree to pay for the first period of construction.',
	  			desc2:'Successful,Please wait for background audit.',
	  			desc3:'Audit successfully.'
	  		}
    	},
    	step2:{
    		1:{
	  			title:'1.Stage one quality testing',
	  			desc:'After the first stage construction,we will start checking.',
	  			desc2:'After the first stage construction,we will start checking.',
	  			desc3:'Quality inspection has been completed.'
	  		},
	  		2:{
	  			title:'2.Agree to pay',
	  			desc:'After you are satisfied with the effect ,you can agree to pay for the second stage construction.',
	  			desc2:'After you are satisfied with the effect ,you can agree to pay for the second stage construction.',
	  			desc3:'Audit successfully.'
	  		}
    	},
    	step3:{
    		1:{
	  			title:'1.Stage two quality testing',
	  			desc:'After the second stage construction,we will start checking.',
	  			desc2:'After the second stage construction,we will start checking.',
	  			desc3:'Quality inspection has been completed.',
	  		},
	  		2:{
	  			title:'2.agree to pay',
	  			desc:'After you are satisfied with the effect ,you can agree to pay for the last stage construction.',
	  			desc2:'After you are satisfied with the effect ,you can agree to pay for the last stage construction.',
	  			desc3:'Audit successfully.',
	  		}
    	},
    	step4:{
    		1:{
	  			title:'1.Last stage quality testing',
	  			desc:'After the last stage construction,we will start checking.',
	  			desc2:'After the last stage construction,we will start checking.',
	  			desc3:'Quality inspection has been completed.'
	  		},
    		2:{
	  			title:'2.Agree to pay',
	  			desc:'After you are satisfied with the effect ,you can agree to pay for the final payment.',
	  			desc2:'After you are satisfied with the effect ,you can agree to pay for the final payment.',
	  			desc3:'Congratulations,your order is completed successfully.'
	  		},
    	},
    	myCenterSidebar:{
    		personalHomePage:'Personal home page',
    		myDesign:'My design',
    		uploadDesignAlbum:'Upload Design Album',
    		myCollection:'My collection',
    		designPicture:'Design picture',
    		decorationCompany:'Decoration company',
    		myInformatio:'My informatio',
    		personalData:'Personal data',
		},
		personalData:{
			phone:'Tel',
			acreage:'Acreage',
			city:'City',
			currentProfilePhoto:'Current profile photo',
			uploadProfilePhoto:'Upload Profile Photo',
			showPhoneText:'Show contact information to other users',
			save:'Save',
			edit:'Edit',
			post:'Post',
			upload:'upload',
			chooseTypeTitle:'Please choose one decoration type',
			chooseStyleTitle:'Please choose one or two decoration styles',
			onlyTwo:'Only two brothers',
		}
	},
	myFooter:{
		termsOfService:'Terms of Service',
		aboutUs:'About Us',
		connectUs:'Connect Us',
		feedback:'Feedback',
		businessCooperation:'Business Cooperation',
		settings:'Settings',
		disclaimer:'Disclaimer: Some of the contents of this website are uploaded by users themselves. If the obligee find that there is misrepresentation of his works, please contact this website in time.',
		feedbackMod:{
			writeDown:'Write down your questions or suggestions',
			myFeedback:'My feedback',
			contactNumber:'Contact number',
			recovered:'Recovered',
			unanswered:'Unanswered',
			haventReceived:"You haven't received any feedback yet."

		},
		uploadAlbum:'Upload album'
	},
	modifyPhone:{
		modifyPhoneTitle:'Modify Binding Mobile Phone',
		verify:'Verify',
		boundPhone:'Please enter your bound phone number.',
		validationCode:'Please enter the validation code',
		getCode:'Get code',
		finish:'Finish',
		newPhone:'Please enter the new phone number',
		validationCode:'Please enter the validation code'
	}

  }
}