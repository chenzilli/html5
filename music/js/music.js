window.onload=function(){
	var A1=document.getElementsByClassName('A1')[0];
	var A2=document.getElementsByClassName('A2')[0];
	var button=document.getElementsByTagName("span");
	var audio=document.getElementById("audio");
A1.onclick=function(){
		A1.style.backgroundColor="cornflowerblue";
		A2.style.backgroundColor="dimgray";
	}
A2.onclick=function(){
		A1.style.backgroundColor="dimgray ";
		A2.style.backgroundColor="cornflowerblue";
	}
    for(var i=0;i<button.length;i++){
    	(function(i){
    		button[i].onclick=function(){
    		if(button[i].innerHTML=="播放"){
    		button[i].innerHTML="停止";
    		button[i].style.color="azure";
    		audio1.src="music/"+i+".mp3";
    		}
    		else{
    			button[i].innerHTML="播放";
    			button[i].style.color="deepskyblue";
    			audio1.src="";
    		}
    		for(var j=0;j<button.length;j++){
    			(function(j){
    			if(j!=i){
    				button[j].innerHTML="播放";
    				button[j].style.color="deepskyblue";
    			}
    			})(j);
    		}
    	}
    	}
    	)(i);
    }
}