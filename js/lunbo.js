//banner部分开始
var bannerbox=$(".bannerbox")
var btn=$("li",$(".btn")[0])
var num=0;
var bannerbigbox=$(".bannerbigbox")[0]
var leftbtn=$(".leftbtn")[0]
var rightbtn=$(".rightbtn")[0]
var leftbtn1=$(".leftbtn1")[0]
var rightbtn1=$(".rightbtn1")[0]
function change () {
  num++;
  if(num>=btn.length){
    num=0;
  }
  for (var i = 0; i < btn.length; i++) {
    bannerbox[i].style.zIndex=0;
        btn[i].id=""
  };
  bannerbox[num].style.zIndex=3;
  btn[num].id="active";
}
var t=setInterval(change,2000)

bannerbigbox.onmouseover=function(){
  clearInterval(t)
leftbtn.style.display="block"
rightbtn.style.display="block"
} 
bannerbigbox.onmouseout=function(){
  t=setInterval(change,2000)
  leftbtn.style.display="none"
rightbtn.style.display="none"
}
leftbtn.onmouseover=function(){
 leftbtn1.style.display="block"
}
rightbtn.onmouseover=function(){
  rightbtn1.style.display="block"
}
leftbtn.onmouseout=function(){
  leftbtn1.style.display="none"
}
rightbtn.onmouseout=function(){
  rightbtn1.style.display="none"
}
leftbtn.onclick=function(){
  change()
}

rightbtn.onclick=function(){
    num--
    if(num<=-1){
    num=btn.length-1;
  }
  for (var i = 0; i < btn.length; i++) {
    bannerbox[i].style.zIndex=0;
        btn[i].id=""
  };
  bannerbox[num].style.zIndex=3;
  btn[num].id="active";

}
 for (var i = 0; i < btn.length; i++) {
  btn[i].aa=i
  btn[i].onmouseover=function(){
    for (var j = 0; j < btn.length; j++) {
      bannerbox[j].style.zIndex=0
      btn[j].id=""
    };
    bannerbox[this.aa].style.zIndex=3
    this.id="active"
  }
};


//楼层1中间的轮播
var flmiddle=$(".floor-middle")[0]
var dian1=$(".dian1")[0]
var dian2=$(".dian2")[0]
var tuone=$(".tuone")[0]
var tutwo=$(".tutwo")[0]
var zuobtn=$(".zuobtn")[0]
var youbtn=$(".youbtn")[0]
dian2.onclick=function(){
  animate(tutwo,{left:0},200)
  animate(tuone,{left:-390},200)
  dian2.id="active";
  dian1.id="";
}
dian1.onclick=function(){
  animate(tutwo,{left:390},200)
  animate(tuone,{left:0},200)
  dian2.id="";
  dian1.id="active";
}
youbtn.onclick=function(){
  animate(tutwo,{left:0},200)
  animate(tuone,{left:-390},200)
  dian2.id="active";
  dian1.id="";
}
zuobtn.onclick=function(){
  animate(tutwo,{left:390},200)
  animate(tuone,{left:0},200)
  dian2.id="";
  dian1.id="active";
}
flmiddle.onmouseover=function(){
  zuobtn.style.display="block";
  youbtn.style.display="block";
  flmiddle.style.opacity="0.9"
}
flmiddle.onmouseout=function(){
  zuobtn.style.display="none";
  youbtn.style.display="none";
  flmiddle.style.opacity="1"
}

//楼层4中间的轮播
var flmiddle4=$(".floor-middle4")[0]
var dian14=$(".dian14")[0]
var dian24=$(".dian24")[0]
var tuone4=$(".tuone4")[0]
var tutwo4=$(".tutwo4")[0]
var zuobtn4=$(".zuobtn4")[0]
var youbtn4=$(".youbtn4")[0]
dian24.onclick=function(){
  animate(tutwo4,{left:0},200)
  animate(tuone4,{left:-390},200)
  dian24.id="active";
  dian14.id="";
}
dian14.onclick=function(){
  animate(tutwo4,{left:390},200)
  animate(tuone4,{left:0},200)
  dian24.id="";
  dian14.id="active";
}
youbtn4.onclick=function(){
  animate(tutwo4,{left:0},200)
  animate(tuone4,{left:-390},200)
  dian24.id="active";
  dian14.id="";
}
zuobtn4.onclick=function(){
  animate(tutwo4,{left:390},200)
  animate(tuone4,{left:0},200)
  dian24.id="";
  dian14.id="active";
}
flmiddle4.onmouseover=function(){
  zuobtn4.style.display="block";
  youbtn4.style.display="block";
  flmiddle4.style.opacity="0.9"
}
flmiddle4.onmouseout=function(){
  zuobtn4.style.display="none";
  youbtn4.style.display="none";
  flmiddle4.style.opacity="1"
}

//楼层5中间的轮播
var flmiddle5=$(".floor-middle5")[0]
var dian15=$(".dian15")[0]
var dian25=$(".dian25")[0]
var tuone5=$(".tuone5")[0]
var tutwo5=$(".tutwo5")[0]
var zuobtn5=$(".zuobtn5")[0]
var youbtn5=$(".youbtn5")[0]
dian25.onclick=function(){
  animate(tutwo5,{left:0},200)
  animate(tuone5,{left:-390},200)
  dian25.id="active";
  dian15.id="";
}
dian15.onclick=function(){
  animate(tutwo5,{left:390},200)
  animate(tuone5,{left:0},200)
  dian25.id="";
  dian15.id="active";
}
youbtn5.onclick=function(){
  animate(tutwo5,{left:0},200)
  animate(tuone5,{left:-390},200)
  dian25.id="active";
  dian15.id="";
}
zuobtn5.onclick=function(){
  animate(tutwo5,{left:390},200)
  animate(tuone5,{left:0},200)
  dian25.id="";
  dian15.id="active";
}
flmiddle5.onmouseover=function(){
  zuobtn5.style.display="block";
  youbtn5.style.display="block";
  flmiddle5.style.opacity="0.9"
}
flmiddle5.onmouseout=function(){
  zuobtn5.style.display="none";
  youbtn5.style.display="none";
  flmiddle5.style.opacity="1"
}

//楼层6中间的轮播
var flmiddle6=$(".floor-middle6")[0]
var dian16=$(".dian16")[0]
var dian26=$(".dian26")[0]
var tuone6=$(".tuone6")[0]
var tutwo6=$(".tutwo6")[0]
var zuobtn6=$(".zuobtn6")[0]
var youbtn6=$(".youbtn6")[0]
dian26.onclick=function(){
  animate(tutwo6,{left:0},200)
  animate(tuone6,{left:-390},200)
  dian26.id="active";
  dian16.id="";
}
dian16.onclick=function(){
  animate(tutwo6,{left:390},200)
  animate(tuone6,{left:0},200)
  dian26.id="";
  dian16.id="active";
}
youbtn6.onclick=function(){
  animate(tutwo6,{left:0},200)
  animate(tuone6,{left:-390},200)
  dian26.id="active";
  dian16.id="";
}
zuobtn6.onclick=function(){
  animate(tutwo6,{left:390},200)
  animate(tuone6,{left:0},200)
  dian26.id="";
  dian16.id="active";
}
flmiddle6.onmouseover=function(){
  zuobtn6.style.display="block";
  youbtn6.style.display="block";
  flmiddle6.style.opacity="0.9"
}
flmiddle6.onmouseout=function(){
  zuobtn6.style.display="none";
  youbtn6.style.display="none";
  flmiddle6.style.opacity="1"
}


//楼层7中间的轮播
var flmiddle7=$(".floor-middle7")[0]
var dian17=$(".dian17")[0]
var dian27=$(".dian27")[0]
var tuone7=$(".tuone7")[0]
var tutwo7=$(".tutwo7")[0]
var zuobtn7=$(".zuobtn7")[0]
var youbtn7=$(".youbtn7")[0]
dian27.onclick=function(){
  animate(tutwo7,{left:0},200)
  animate(tuone7,{left:-390},200)
  dian27.id="active";
  dian17.id="";
}
dian17.onclick=function(){
  animate(tutwo7,{left:390},200)
  animate(tuone7,{left:0},200)
  dian27.id="";
  dian17.id="active";
}
youbtn7.onclick=function(){
  animate(tutwo7,{left:0},200)
  animate(tuone7,{left:-390},200)
  dian27.id="active";
  dian17.id="";
}
zuobtn7.onclick=function(){
  animate(tutwo7,{left:390},200)
  animate(tuone7,{left:0},200)
  dian27.id="";
  dian17.id="active";
}
flmiddle7.onmouseover=function(){
  zuobtn7.style.display="block";
  youbtn7.style.display="block";
  flmiddle7.style.opacity="0.9"
}
flmiddle7.onmouseout=function(){
  zuobtn7.style.display="none";
  youbtn7.style.display="none";
  flmiddle7.style.opacity="1"
}

//楼层8中间的轮播
var flmiddle8=$(".floor-middle8")[0]
var dian18=$(".dian18")[0]
var dian28=$(".dian28")[0]
var tuone8=$(".tuone8")[0]
var tutwo8=$(".tutwo8")[0]
var zuobtn8=$(".zuobtn8")[0]
var youbtn8=$(".youbtn8")[0]
dian28.onclick=function(){
  animate(tutwo8,{left:0},200)
  animate(tuone8,{left:-390},200)
  dian28.id="active";
  dian18.id="";
}
dian18.onclick=function(){
  animate(tutwo8,{left:390},200)
  animate(tuone8,{left:0},200)
  dian28.id="";
  dian18.id="active";
}
youbtn8.onclick=function(){
  animate(tutwo8,{left:0},200)
  animate(tuone8,{left:-390},200)
  dian28.id="active";
  dian18.id="";
}
zuobtn8.onclick=function(){
  animate(tutwo8,{left:390},200)
  animate(tuone8,{left:0},200)
  dian28.id="";
  dian18.id="active";
}
flmiddle8.onmouseover=function(){
  zuobtn8.style.display="block";
  youbtn8.style.display="block";
  flmiddle8.style.opacity="0.9"
}
flmiddle8.onmouseout=function(){
  zuobtn8.style.display="none";
  youbtn8.style.display="none";
  flmiddle8.style.opacity="1"
}



// 双下标轮播  左右1
 var content=getClass("mahuan")
 var zuobtnd=getClass("gengdan")[0]
 var youbtnd=getClass("gengdan1")[0]
for(var i=1;i<content.length;i++){
  content[i].style.left="170px"
}
var now=0;//在可视区域里的向左走
var next=0;//右侧往可视区域中走
function moveLeft1(){//时间函数
  next++;
  if(next>=content.length){
    next=0;
  }
  animate(content[now],{left:-170},500)//调用动画函数
  content[next].style.left="170px";//将左侧的图片直接移动到右侧
  animate(content[next],{left:0},500)
  content[now].style.zIndex=0
  content[next].style.zIndex=2
  now=next;
 }
zuobtnd.onclick=function(){
  moveLeft1()
}
youbtnd.onclick=function(){
   next--;
  if(next<=-1){//能够回退，只能回到第一张
    next=content.length-1;//回退的都是它的前一张
  }
  animate(content[now],{left:170},500)//调用动画函数
  content[next].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(content[next],{left:0},500)
  content[now].style.zIndex=0
  content[next].style.zIndex=2
  now=next;
}

// 双下标轮播  左右2
 var CLNZ=getClass("CLNZ")
 var CLNZ1=getClass("CLNZ1")[0]
 var CLNZ2=getClass("CLNZ2")[0]
for(var i=1;i<CLNZ.length;i++){
  CLNZ[i].style.left="170px"
}
var now2=0;//在可视区域里的向左走
var next2=0;//右侧往可视区域中走
function moveLeft2(){//时间函数
  next2++;
  if(next2>=CLNZ.length){
    next2=0;
  }
  animate(CLNZ[now2],{left:-170},500)//调用动画函数
  CLNZ[next2].style.left="170px";//将左侧的图片直接移动到右侧
  animate(CLNZ[next2],{left:0},500)
    now2=next2;
 }
CLNZ1.onclick=function(){
  moveLeft2()
}
CLNZ2.onclick=function(){
   next2--;
  if(next2<=-1){//能够回退，只能回到第一张
    next2=CLNZ.length-1;//回退的都是它的前一张
  }
  animate(CLNZ[now2],{left:170},500)//调用动画函数
  CLNZ[next2].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(CLNZ[next2],{left:0},500)
    now2=next2;
}

// 双下标轮播  左右3
 var JPNZ=getClass("JPNZ")
 var JPNZ1=getClass("JPNZ1")[0]
 var JPNZ2=getClass("JPNZ2")[0]
for(var i=1;i<JPNZ.length;i++){
  JPNZ[i].style.left="170px"
}
var now3=0;//在可视区域里的向左走
var next3=0;//右侧往可视区域中走
function moveLeft3(){//时间函数
  next3++;
  if(next3>=JPNZ.length){
    next3=0;
  }
  animate(JPNZ[now3],{left:-170},500)//调用动画函数
  JPNZ[next3].style.left="170px";//将左侧的图片直接移动到右侧
  animate(JPNZ[next3],{left:0},500)
    now3=next3;
 }
JPNZ1.onclick=function(){
  moveLeft3()
}
JPNZ2.onclick=function(){
   next3--;
  if(next3<=-1){//能够回退，只能回到第一张
    next3=JPNZ.length-1;//回退的都是它的前一张
  }
  animate(JPNZ[now3],{left:170},500)//调用动画函数
  JPNZ[next3].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(JPNZ[next3],{left:0},500)
    now3=next3;
}


// 双下标轮播  左右4
var ssxx=getClass("SSXX")
 var ssxx1=getClass("SSXX1")[0]
 var ssxx2=getClass("SSXX2")[0]
for(var i=1;i<ssxx.length;i++){
  ssxx[i].style.left="170px"
}
var now4=0;//在可视区域里的向左走
var next4=0;//右侧往可视区域中走
function moveLeft4(){//时间函数
  next4++;
  if(next4>=ssxx.length){
    next4=0;
  }
  animate(ssxx[now4],{left:-170},500)//调用动画函数
  ssxx[next4].style.left="170px";//将左侧的图片直接移动到右侧
  animate(ssxx[next4],{left:0},500)
    now4=next4;
 }
ssxx1.onclick=function(){
  moveLeft4()
}
ssxx2.onclick=function(){
   next4--;
  if(next4<=-1){//能够回退，只能回到第一张
    next4=ssxx.length-1;//回退的都是它的前一张
  }
  animate(ssxx[now4],{left:170},500)//调用动画函数
  ssxx[next4].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(ssxx[next4],{left:0},500)
    now4=next4;
}

// 双下标轮播  左右5
var CLXB=getClass("CLXB")
 var CLXB1=getClass("CLXB1")[0]
 var CLXB2=getClass("CLXB2")[0]
for(var i=1;i<CLXB.length;i++){
  CLXB[i].style.left="170px"
}
var now5=0;//在可视区域里的向左走
var next5=0;//右侧往可视区域中走
function moveLeft5(){//时间函数
  next5++;
  if(next5>=CLXB.length){
    next5=0;
  }
  animate(CLXB[now5],{left:-170},500)//调用动画函数
  CLXB[next5].style.left="170px";//将左侧的图片直接移动到右侧
  animate(CLXB[next5],{left:0},500)
    now5=next5;
 }
CLXB1.onclick=function(){
  moveLeft5()
}
CLXB2.onclick=function(){
   next5--;
  if(next5<=-1){//能够回退，只能回到第一张
    next5=CLXB.length-1;//回退的都是它的前一张
  }
  animate(CLXB[now5],{left:170},500)//调用动画函数
  CLXB[next5].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(CLXB[next5],{left:0},500)
    now5=next5;
}

// 双下标轮播  左右6
var MRHF=getClass("MRHF")
 var MRHF1=getClass("MRHF1")[0]
 var MRHF2=getClass("MRHF2")[0]
for(var i=1;i<MRHF.length;i++){
  MRHF[i].style.left="170px"
}
var now6=0;//在可视区域里的向左走
var next6=0;//右侧往可视区域中走
function moveLeft6(){//时间函数
  next6++;
  if(next6>=MRHF.length){
    next6=0;
  }
  animate(MRHF[now6],{left:-170},500)//调用动画函数
  MRHF[next6].style.left="170px";//将左侧的图片直接移动到右侧
  animate(MRHF[next6],{left:0},500)
    now6=next6;
 }
MRHF1.onclick=function(){
  moveLeft6()
}
MRHF2.onclick=function(){
   next6--;
  if(next6<=-1){//能够回退，只能回到第一张
    next6=MRHF.length-1;//回退的都是它的前一张
  }
  animate(MRHF[now6],{left:170},500)//调用动画函数
  MRHF[next6].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(MRHF[next6],{left:0},500)
    now6=next6;
}

// 双下标轮播  左右7
var HWYD=getClass("HWYD")
 var HWYD1=getClass("HWYD1")[0]
 var HWYD2=getClass("HWYD2")[0]
for(var i=1;i<HWYD.length;i++){
  HWYD[i].style.left="170px"
}
var now7=0;//在可视区域里的向左走
var next7=0;//右侧往可视区域中走
function moveLeft7(){//时间函数
  next7++;
  if(next7>=HWYD.length){
    next7=0;
  }
  animate(HWYD[now7],{left:-170},500)//调用动画函数
  HWYD[next7].style.left="170px";//将左侧的图片直接移动到右侧
  animate(HWYD[next7],{left:0},500)
    now7=next7;
 }
HWYD1.onclick=function(){
  moveLeft7()
}
HWYD2.onclick=function(){
   next7--;
  if(next7<=-1){//能够回退，只能回到第一张
    next7=HWYD.length-1;//回退的都是它的前一张
  }
  animate(HWYD[now7],{left:170},500)//调用动画函数
  HWYD[next7].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(HWYD[next7],{left:0},500)
    now7=next7;
}

// 双下标轮播  左右8
var NYPS=getClass("NYPS")
 var NYPS1=getClass("NYPS1")[0]
 var NYPS2=getClass("NYPS2")[0]
for(var i=1;i<NYPS.length;i++){
  NYPS[i].style.left="170px"
}
var now8=0;//在可视区域里的向左走
var next8=0;//右侧往可视区域中走
function moveLeft8(){//时间函数
  next8++;
  if(next8>=NYPS.length){
    next8=0;
  }
  animate(NYPS[now8],{left:-170},500)//调用动画函数
  NYPS[next8].style.left="170px";//将左侧的图片直接移动到右侧
  animate(NYPS[next8],{left:0},500)
    now8=next8;
 }
NYPS1.onclick=function(){
  moveLeft8()
}
NYPS2.onclick=function(){
   next8--;
  if(next8<=-1){//能够回退，只能回到第一张
    next8=NYPS.length-1;//回退的都是它的前一张
  }
  animate(NYPS[now8],{left:170},500)//调用动画函数
  NYPS[next8].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(NYPS[next8],{left:0},500)
    now8=next8;
}

// 双下标轮播  左右9
var KAYT=getClass("KAYT")
 var KAYT1=getClass("KAYT1")[0]
 var KAYT2=getClass("KAYT2")[0]
for(var i=1;i<KAYT.length;i++){
  KAYT[i].style.left="170px"
}
var now9=0;//在可视区域里的向左走
var next9=0;//右侧往可视区域中走
function moveLeft9(){//时间函数
  next9++;
  if(next9>=KAYT.length){
    next9=0;
  }
  animate(KAYT[now9],{left:-170},500)//调用动画函数
  KAYT[next9].style.left="170px";//将左侧的图片直接移动到右侧
  animate(KAYT[next9],{left:0},500)
    now9=next9;
 }
KAYT1.onclick=function(){
  moveLeft9()
}
KAYT2.onclick=function(){
   next9--;
  if(next9<=-1){//能够回退，只能回到第一张
    next9=KAYT.length-1;//回退的都是它的前一张
  }
  animate(KAYT[now9],{left:170},500)//调用动画函数
  KAYT[next9].style.left="-170px";//将左侧的图片直接移动到右侧
  animate(KAYT[next9],{left:0},500)
    now9=next9;
}


//左右的实的小箭头
var zuoshijian=$(".zuoshijian")
// alert(zuoshijian.length)
var youshijian=$(".youshijian")
// alert(youshijian.length)
var hei=$(".hei")
var hei1=$(".hei1")
var huishi=$(".huishi")
var huishi1=$(".huishi1")
for (var i = 0; i < zuoshijian.length; i++) {
  zuoshijian[i].index=i
  zuoshijian[i].onmouseover=function(){
    hei[this.index].style.display="block"
    huishi[this.index].style.display="none"
  }
  zuoshijian[i].onmouseout=function(){
    hei[this.index].style.display="none"
    huishi[this.index].style.display="block"
  }
};
for (var i = 0; i < youshijian.length; i++) {
  youshijian[i].index=i
  youshijian[i].onmouseover=function(){
    hei1[this.index].style.display="block"
    huishi1[this.index].style.display="none"
  }
  youshijian[i].onmouseout=function(){
    hei1[this.index].style.display="none"
    huishi1[this.index].style.display="block"
  }
};
