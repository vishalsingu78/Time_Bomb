var timeout=document.getElementById("timer");

var count=10;
var intervalid=setInterval(function(){
    count=count-1;
    timeout.textContent=count;
    if(count == 0){
        timeout.textContent="U got failed !";
        timeout.style.color="red";
        document.getElementById("imgbom").src="./photos/boomblasted.png";
        clearInterval(intervalid);
    }
},1000);

function defusebom(){
    var uservalue=document.getElementById("usertext").value;
    if((uservalue =="defuse"||uservalue =="Defuse") && count>0){
        document.getElementById("imgbom").src="./photos/defusedbombscsfly.png";
        timeout.textContent="Successfully Defused";
        timeout.style.color="green";
        document.getElementById("usertext").value="";
        clearInterval(intervalid);
    }
}
