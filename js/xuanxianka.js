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


