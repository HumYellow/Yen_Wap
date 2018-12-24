import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store.js'

import zero from '@/page/zero'

import home from '@/page/home'
import login from '@/page/login'
import placeOrder from '@/page/placeOrder'
import register from '@/page/register'
import forgetPassword from '@/page/forgetPassword'
import design from '@/page/design'
import designDetails from '@/page/designDetails'
import designTest from '@/page/designTest'

import company from '@/page/company'
import companyDetails from '@/page/companyDetails'
import companyInformation from '@/components/companyDetails/RegistrationInformation'
import myCenterEvaluate from '@/components/myCenter/myCenterHome/MyCenterEvaluate'

import strategy from '@/page/strategy'
import strategyList from '@/page/strategyList'
import strategyDetails from '@/page/strategyDetails'
import guarantee from '@/page/guarantee'

import myCenter from '@/page/myCenter'
import collection from '@/page/collection'
import collectionCompany from '@/components/myCenter/collection/collectionCompany'
import collectionDesign from '@/components/myCenter/collection/collectionDesign'
import myDesignList from '@/page/myDesignList'
import myDesignRevise from '@/page/myDesignRevise'

import personalData from '@/page/personalData'
import personalDataList from '@/components/personalData/personalDataList'
import chooseCity from '@/components/personalData/chooseCity'
import acreage from '@/components/personalData/acreage'
import modifyPhone from '@/components/personalData/modifyPhone'
import modifyPhoneFinish from '@/components/personalData/modifyPhoneFinish'
import chooseType from '@/components/personalData/chooseType'
import chooseStyle from '@/components/personalData/chooseStyle'


import settings from '@/page/settings'
import feedback from '@/page/feedback/feedback'
import feedbackList from '@/page/feedback/feedbackList'
import feedbackOnline from '@/page/feedback/feedbackOnline'
import contactUs from '@/components/myCenter/setUp/contactUs'
import aboutUs from '@/components/myCenter/setUp/aboutUs'
import termsService from '@/components/myCenter/setUp/termsService'
import designerDetails from '@/page/designerDetails'

import myCenterHome from '@/components/myCenter/MyCenterHome/MyCenterHome'
import myCenterHome2 from '@/components/myCenter/MyCenterBody2'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      meta:{
        type:'home',
       /* keepAlive:true,*/
      },
      component: home
    },
    {
      path:'/login',
      component: login, 
      /*beforeEnter:(to, from, next) => {
        if(from.path == '/myCenter'){
          next(from.path)
        }else{
          next()
        }
      }
*/      
    },
    {
      path:'/placeOrder',
      component: placeOrder
      
    },
    {
      path:'/register',
      component: register
      
    },
    {
      path:'/forgetPassword',
      component: forgetPassword
      
    },
    {
      path: '/design',
      meta:{
        type:'design',
       keepAlive:false,
      },
      component: design
    },
    {
      path: '/designTest',
      meta:{
      },
      component: designTest
    },
    {
      path: '/designDetails/:id',
      name:'designDetails',
      meta:{
        type:'design',
        keepAlive:false,
        collectType:'DesignAtlas'
      },
      component: designDetails
    },
    {
      path:'/company',
      meta:{
        type:'company',
        keepAlive:true,
      },
      component: company
      
    },
    {
      path:'/companyDetails/:id',
      name:'companyDetails',
      meta:{
        type:'company',
        keepAlive:false,
        collectType:'Company'
      },
      component: companyDetails
    },
    {
      path:'/companyInformation/:id',
      name:'companyInformation',
      meta:{
        type:'company',
      },
      component: companyInformation
    },
    {
      path:'/strategy',
      meta:{
        type:'strategy'
      },
      component: strategy
      
    },
    {
      path:'/designerDetails/:id',
      name:'designerDetails',
      meta:{
        type:'designerDetails'
      },
      component: designerDetails
      
    },
    {
      path:'/strategyList/:id',
      meta:{
        type:'strategy'
      },
      component: strategyList
      
    },
    {
      path:'/strategyDetails/:id',
      meta:{
        type:'strategy'
      },
      component: strategyDetails
      
    },
    {
      path:'/guarantee',
      component: guarantee,
      
    },
    {
      path:'/myCenter',
      component: myCenter,
      meta:{
        type:'myCenter'
      },
    },
    {
      path:'/collection',
      component: collection,
      meta:{
        type:'collection',
        requireLogin:true,
      },
    },
    {
      path:'/myDesignList',
      component: myDesignList,
      name:'myDesignList',
      meta:{
        type:'myDesignList',
        requireLogin:true,
      },
      
    },
    {
      path: '/myDesignDetails/:id',
      name:'myDesignDetails',
      meta:{
        type:'design',
        keepAlive:false,
        requireLogin:true,
        collectType:'DesignAtlas'
      },
      component: designDetails
    },
    {
      path:'/myDesignRevise/:id',
      component: myDesignRevise,
      name:'myDesignRevise',
      meta:{
        type:'myDesignRevise',
        requireLogin:true,
        keepAlive:false,
      },
    },
    {
      path:'/personalData',
      component: personalData,
      name:'personalData',
      meta:{
        type:'personalData',
        requireLogin:true,
        keepAlive:false,
      },
      children:[
        {
          path:'/',
          component: personalDataList,
          name:'personalDataList',
          meta:{
            type:'personalDataList',
          }
        },
        {
          path:'chooseCity',
          component: chooseCity,
          name:'chooseCity',
          meta:{
            type:'chooseCity',
          }
        },
        {
          path:'acreage',
          component: acreage,
          name:'acreage',
          meta:{
            type:'acreage',
          }
        },
        {
          path:'acreage',
          component: acreage,
          name:'acreage',
          meta:{
            type:'acreage',
          }
        },
        {
          path:'chooseType',
          component: chooseType,
          name:'chooseType',
          meta:{
            type:'chooseType',
          }
        },
        {
          path:'modifyPhone',
          component: modifyPhone,
          name:'modifyPhone',
          meta:{
            requireLogin:true,
          },
        },
        {
          path:'modifyPhoneFinish',
          component: modifyPhoneFinish,
          name:'modifyPhoneFinish',
          meta:{
            requireLogin:true,
          },
        },
        {
          path:'chooseStyle',
          component: chooseStyle,
          name:'chooseStyle',
          meta:{
            type:'chooseStyle',
          }
        },
      ]
    },
    {
      path:'/myCenterEvaluate',
      component: myCenterEvaluate,
      name:'myCenterEvaluate',
      meta:{
        type:'myCenterEvaluate',
        requireLogin:true,
      },
    },
    {
      path:'/settings',
      component: settings,
      name:'settings',
      meta:{
        type:'settings',
        requireLogin:true,
      }
    },
    {
      path:'/feedback',
      component: feedback,
      name:'feedback',
      meta:{
        type:'feedback',
        requireLogin:true,
      }
    },
    {
      path:'/feedbackList',
      component: feedbackList,
      name:'feedbackList',
      meta:{
        type:'feedbackList',
        requireLogin:true,
      }
    },
    {
      path:'/feedbackOnline/:id',
      component: feedbackOnline,
      name:'feedbackOnline',
      meta:{
        type:'feedbackOnline',
        requireLogin:true,
      }
    },
    {
      path:'/termsService',
      component: termsService,
      name:'termsService',
      meta:{
        type:'termsService',
      }
    },
    {
      path:'/aboutUs',
      component: aboutUs,
      name:'aboutUs',
      meta:{
        type:'aboutUs',
      }
    },
    {
      path:'/contactUs',
      component: contactUs,
      name:'contactUs',
      meta:{
        type:'contactUs',
      }
    },
  
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }

})
  