window.onload=function(){
	var list=document.getElementById('id1').getElementsByTagName('li');
    list[0].onclick=function(){
           firststart();
    }
    list[1].onclick=function(){
           secondstart();
    }
    list[2].onclick=function(){
           thirdstart();
    }
    list[3].onclick=function(){
           fourthstart();
    }
    list[4].onclick=function(){
           firthstart();
    }
}
function firststart(){
	var imge=document.getElementById('header').getElementsByTagName('img');
	var list1=document.getElementById('id2');
	var list2=document.getElementById('id3');
	var list3=document.getElementById('id4');
	var list4=document.getElementById('id5');
	var list5=document.getElementById('id6');
    list1.style.display="block";
    list2.style.display="none";
    list3.style.display="none";
    list4.style.display="none";
    list5.style.display="none";
    for(var j=0;j<4;j++){
    	imge[j].style.display="block";
        imge[j].style.width="400px";
        imge[j].style.height="200px";
    }
}
function secondstart(){
	var imge=document.getElementById('header').getElementsByTagName('img');
	var list1=document.getElementById('id2');
	var list2=document.getElementById('id3');
	var list3=document.getElementById('id4');
	var list4=document.getElementById('id5');
	var list5=document.getElementById('id6');
    list1.style.display="none";
    list2.style.display="block";
    list3.style.display="none";
    list4.style.display="none";
    list5.style.display="none";
    for(var j=0;j<4;j++){
    	imge[j].style.display="none";
    }
    imge[0].style.display="block";
    imge[0].style.width="800px";
    imge[0].style.height="400px";
}
function thirdstart(){
    var imge=document.getElementById('header').getElementsByTagName('img');
	var list1=document.getElementById('id2');
	var list2=document.getElementById('id3');
	var list3=document.getElementById('id4');
	var list4=document.getElementById('id5');
	var list5=document.getElementById('id6');
    list1.style.display="none";
    list2.style.display="none";
    list3.style.display="block";
    list4.style.display="none";
    list5.style.display="none";
    for(var j=0;j<4;j++){
    	imge[j].style.display="none";
    }
    imge[1].style.display="block";
    imge[1].style.width="800px";
    imge[1].style.height="400px";
}
function fourthstart(){
    var imge=document.getElementById('header').getElementsByTagName('img');
	var list1=document.getElementById('id2');
	var list2=document.getElementById('id3');
	var list3=document.getElementById('id4');
	var list4=document.getElementById('id5');
	var list5=document.getElementById('id6');
    list1.style.display="none";
    list2.style.display="none";
    list3.style.display="none";
    list4.style.display="block";
    list5.style.display="none";
    for(var j=0;j<4;j++){
    	imge[j].style.display="none";
    }
    imge[2].style.display="block";
    imge[2].style.width="800px";
    imge[2].style.height="400px";
}
function firthstart(){
    var imge=document.getElementById('header').getElementsByTagName('img');
	var list1=document.getElementById('id2');
	var list2=document.getElementById('id3');
	var list3=document.getElementById('id4');
	var list4=document.getElementById('id5');
	var list5=document.getElementById('id6');
    list1.style.display="none";
    list2.style.display="none";
    list3.style.display="none";
    list4.style.display="none";
    list5.style.display="block";
    for(var j=0;j<4;j++){
    	imge[j].style.display="none";
    }
    imge[3].style.display="block";
    imge[3].style.width="800px";
    imge[3].style.height="400px";
}