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