<style>
html{height:100%;}
body{background:#fff;min-height:100%;}
#app{min-height:100vh;}
</style>
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <MyFooter></MyFooter> -->
  </div>
</template>
<script>
import Vue from 'vue'
import {mapGetters,mapActions} from 'vuex' 
import 'swiper/dist/css/swiper.css'

import MyFooter from '@/components/MyFooter'
import './assets/css/main.css'
export default {
  name: 'App',
  components:{
    MyFooter,
  },
  data () {
    return {

    }
  },
  mounted:function(){
    
  },
  methods:{
  }
}
</script> 

