
//选项卡
//获取
var imgbox=getClass("tupianbox");
var title=getClass("title_li");
//移入事件，设置样式
for(var i=0;i<title.length;i++){
	title[i].aa=i;//给box设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	title[i].onmouseover=function(){
	  for(var j=0;j<imgbox.length;j++){
	  	imgbox[j].style.display="none"
	  	title[j].style.cssText="font-weight:normal;border-bottom:5px solid #333"
	  }
	  imgbox[this.aa].style.display="block";
	  this.style.cssText="font-weight:bold;border-bottom:5px solid #e5004f"
	}
}
var imgbox1=getClass("tupianbox2");
var title1=getClass("title_li1");
for(var i=0;i<title1.length;i++){
	title1[i].aa=i;//给box设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	title1[i].onmouseover=function(){
	  for(var j=0;j<imgbox1.length;j++){
	  	imgbox1[j].style.display="none"
	  	title1[j].style.cssText="font-weight:normal;border-bottom:3px solid #333"
	  }
	  imgbox1[this.aa].style.display="block";
	  this.style.cssText="font-weight:bold;border-bottom:3px solid #e5004f"
	}
}




//得失焦点
var text=getClass("text")[0]
	text.onfocus=function(){
		if(text.value=="夏季美裙趴"){
			text.value="";
		}
	}
	text.onblur=function(){
		if(text.value==""){
		text.value="夏季美裙趴";
		}
	} 

//流动线
var kuang=$(".kuang")
var tops=$(".tops")
var left=$(".left")
var right=$(".right")
var bottom=$(".bottom")
for(var i=0;i<kuang.length;i++){
  kuang[i].index=i;
  kuang[i].onmouseover=function(){
   var ow=this.offsetWidth;
   var oh=this.offsetHeight;
   animate(tops[this.index],{width:ow},300)
   animate(bottom[this.index],{width:ow},300)
   animate(left[this.index],{height:oh},300)
   animate(right[this.index],{height:oh},300)
  }
  kuang[i].onmouseout=function(){
   var ow=this.offsetWidth;
   var oh=this.offsetHeight;
   animate(tops[this.index],{width:0},300)
   animate(bottom[this.index],{width:0},300)
   animate(left[this.index],{height:0},300)
   animate(right[this.index],{height:0},300)
  }
} 

//三张图片的透明度问题
var three=$(".three1")
for (var i=0;i<three.length;i++){
	three[i].index=i;
	three[i].onmouseover=function(){
	 animate(three[this.index],{opacity:0.5},300)
	}
	three[i].onmouseout=function(){
	 animate(three[this.index],{opacity:1},300)
	}
}



 // 每个楼层的中间图片的透明度问题
// 专柜同款透明度图片
var zg=$(".zg")
// alert(zg.length)
for (var i=0;i<zg.length;i++){
	zg[i].index=i;
	zg[i].onmouseover=function(){
	 animate(zg[this.index],{opacity:0.8},300)
	}
	zg[i].onmouseout=function(){
	 animate(zg[this.index],{opacity:1},300)
	}
}



//遮罩、楼层,右侧滚动条出现
//获取
//获取
var dao=getClass("menglei");
var zhezhao=getClass("zhezhao");
var floor=$(".floor")
var rightdao=$(".rightdao")[0]
var flagdown="1"//定义开关
var flagup="1"
// alert(floor.length)
//移入事件，设置样式
for(var i=0;i<dao.length;i++){
	dao[i].aa=i;//给dao设置aa属性，设置属性不需要定义，直接用 即可以记录图片的下标，在定义事件之前写
	dao[i].onmouseover=function(){
		zhezhao[this.aa].style.display="block"//this指的是触发了当前的事件，指向dao,然后设置aa找到它的属性
	}//this.aa指当前元素的下标
	dao[i].onmouseout=function(){
		zhezhao[this.aa].style.display="none"
	}
}
document.documentElement.scrollTop=1;
var obj;
if(document.documentElement.scrollTop){
   obj=document.documentElement;
}else{
   obj=document.body;
}  
var now=0;
window.onscroll=function(){
	if(obj.scrollTop>=800){
		if(flagdown==1){
			animate(rightdao,{width:50,height:550})
			flagdown=2;
		}
		flagup=1
	}else{
		animate(rightdao,{width:0,height:0})
		flagup=2
	}
	flagdown=1
for(var i=0; i<floor.length;i++){//遍历楼层或者按钮
 	// console.log(floor[i].offsetTop)
    if(floor[i].offsetTop<=obj.scrollTop+180){
    //offsetTop表示元素到文档顶部的距离；
    //scrollTop表示文档超出可视窗口的距离
    	for(var j=0;j<zhezhao.length;j++){
         zhezhao[j].style.display="none"
    	}
 		zhezhao[i].style.display="block"
 		now=i//在滑动到相应位置的按钮时，按钮亮起来了。但是把鼠标移动到别的位置的时候，当前的按钮还会一直亮着，不受影响
 	}
 	   }

	var anxu=$(".anxu")
	var clienth=document.documentElement.clientHeight
	for(var i=0;i<anxu.length;i++){
		if(anxu[i].offsetTop<(clienth+obj.scrollTop-300)&&!anxu[i].flag){
			anxu[i].flag=true//开关只是说明加载一次后不再发生
			var imgss=$("img",anxu[i])
			for(var j=0;j<imgss.length;j++){
				imgss[j].src=imgss[j].getAttribute("url")
				//把图片的url属性（自定义的）给了src属性
			}
		}
	}


 	}

 	for(var i=0;i<dao.length;i++){
	dao[i].index=i;
    dao[i].onclick=function(){
		now=this.index
	 // obj.scrollTop=floor[this.index].offsetTop
	 animate(obj,{scrollTop:floor[this.index].offsetTop-50})
	 }
 }


//移动图片
var banright=$(".bannerrightbox")[0]
banright.onmouseover=function(){
	animate(banright,{right:10},300)
	 // banright.style.cssText="position:absolute;right:10px";
}
banright.onmouseout=function(){
	animate(banright,{right:0},300)
	 // banright.style.cssText=""
}

//移动变红色图标
var fangzi1=$(".fangzi1")[0]
var weixin1=$(".weixin1")[0]
var shouji1=$(".shouji1")[0]
var A=$(".A")[0]
var B=$(".B")[0]
var wxewm=$(".wxewm")[0]
var sjewm=$(".sjewm")[0]
var xiajianA=$(".xiajianA")[0]
var xiajian1B=$(".xiajian1B")[0]
var yin=$(".yin")
yin[0].onmouseover=function(){
	fangzi1.style.display="block"
}
yin[1].onmouseover=function(){
	weixin1.style.display="block"
	xiajianA.style.display="block"
	wxewm.style.display="block"
    A.style.background="white"
}
yin[2].onmouseover=function(){
	shouji1.style.display="block"
	xiajian1B.style.display="block"
	sjewm.style.display="block"
	B.style.background="white"
}
yin[0].onmouseout=function(){
	fangzi1.style.display="none"
}
yin[1].onmouseout=function(){
	weixin1.style.display="none"
	xiajianA.style.display="none"
	wxewm.style.display="none"
	A.style.background=""
}
yin[2].onmouseout=function(){
	shouji1.style.display="none"
	xiajian1B.style.display="none"
	sjewm.style.display="none"
	B.style.background=""
}

//左侧的banner划过效果
var small=$(".small")
var dayuhao=$(".dayuhao")
var tub=$(".tub")
var ycboxaa=$(".ycboxaa")[0]
for (var i = 0; i < small.length; i++) {
    small[i].index=i
    small[i].onmouseover=function(){
    dayuhao[this.index].style.display="none"
	tub[this.index].style.display="block"
		small[this.index].style.background="#ED145B"
		ycboxaa.style.display="block"
		ycboxaa.onmouseover=function(){
			ycboxaa.style.display="block"
			small[0].style.background="#ED145B"
			tub[0].style.display="block"
			dayuhao[0].style.display="none"
		}
		ycboxaa.onmouseout=function(){
			ycboxaa.style.display="none"
			small[0].style.background=""
			tub[0].style.display="none"
			dayuhao[0].style.display="block"
		}
	}
	small[i].onmouseout=function(){
	tub[this.index].style.display="none"
		dayuhao[this.index].style.display="block"
		ycboxaa.style.display="none"
		small[this.index].style.background=""
	}
};
//banner侧导航出现与隐藏

