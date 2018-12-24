var swallow = {};
swallow.popup = {
	
}

swallow.setCookie = function(name,value,hour,path){
	hour?hour = hour:hour = 2;
	var exp = new Date(),cookieData;
	exp.setTime(exp.getTime() + hour*60*60*1000);
    path = path?";path=" + path : "/"
    cookieData = name + "="+ escape (value) + ";expires=" + exp.toGMTString() + ";path=" + path
	document.cookie = cookieData;
}
swallow.getCookie = function (name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
swallow.isLogin = function(){
	if(swallow.getCookie('yen_u_key_'))return true;
	else return false
}
swallow.delCookie = function(name){
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cval= this.getCookie(name);
	if(cval!=null)
	document.cookie= name + "="+cval+";expires="+exp.toGMTString();
    this.setCookie(name, "", -1)
}
swallow.mo = function(e){e.preventDefault();};
/***滑动限制***/
swallow.stop = function(){
	document.body.style.overflow='hidden';
	document.addEventListener("touchmove",swallow.mo,false);//禁止页面滑动
},
/***取消滑动限制***/
swallow.move = function(){
	document.body.style.overflow='';//出现滚动条
	document.removeEventListener("touchmove",swallow.mo,false);
}
swallow.localStorageSet = function(k,v){
	localStorage.setItem(k,v)
}
swallow.localStorageGet = function(k){
	let v = localStorage.getItem(k)
	return v
}
swallow.localStorageClear = function(){
	localStorage.clear()
}
Array.prototype.indexOf = function(val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};
Array.prototype.remove = function(val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};

export default swallow