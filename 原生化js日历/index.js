/**
 * 初始化下拉列表
 * 
 * 
 * 
 * 
 */
var selYear = document.getElementById('selYear');
var selMonth = document.getElementById('selMonth');
var divContent = document.getElementById('content');

 function initselects(){
    for(var i = 1919; i < 2119; i++){
        var opt = document.createElement('option');
       opt.innerText=i;
       opt.value=i;
       selYear.appendChild(opt);
    }
    for(var i =1; i<=12; i++){
    var opt = document.createElement('option');
    opt.innerText=i;
    opt.value=i;
    selMonth.appendChild(opt);
    }
 }
 function choosetoday(){
     var d = new Date();

     selYear.value=d.getFullYear();
     selMonth.value=d.getMonth()+1;

 }

function setContent(){
    var year =+selYear.value; //加+隐式类型装换
    var  month =+selMonth.value;
    console.log(year,month)
    divContent.innerHTML="";
    var num=getDayOfWeek()-1;
    for( var i=0; i<num ; i++){
var span = document.createElement('span');
divContent.appendChild(span);
    }
    var d = new Date(year,month,0)

    var num=d.getDate();
    var today=new Date();
    for(var i=1; i<= num;i++) {
        var span = document.createElement('span');
        span.innerText=i;
        if(today.getFullYear()===year&& today.getMonth()+1===month && today.getDate()===i){
            span.className='today';
        }


        divContent.appendChild(span)

    }

    function getDayOfWeek(){
        var d = new Date(year,month-1);
        var num= d.getDay();
        if(num===0){
            num=7;
        }
        
        return num;
   
    }

}
 initselects()
 choosetoday()
 setContent()
 selYear.onchange=function(){
    setContent()
 }
 selMonth.onchange=function(){
    setContent()
 }
 var btn = document.getElementById("btnToday")
  btn.onclick=function(){
    choosetoday();
    setContent();


 }