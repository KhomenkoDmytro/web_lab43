let button=document.getElementById("b-1");

button.addEventListener('click', setAlarm);
let data1;
let data2;

function setAlarm(){
    data1=document.getElementById('inp_1').value;
    data2=document.getElementById('inp_2').value;
}
let worked=false;
setInterval(function(){
    let now=new Date;
    let min=now.getMinutes();
    let hours=now.getHours();
    if(data1==hours&&data2==min){
        if(!worked){
        alert("Працюю");
        worked=true;
        }
    }
    else{
        worked=false;
    }
    },1000);
