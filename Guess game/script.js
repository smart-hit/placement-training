var randomnum=(Math.ceil(Math.random()*100));
var count=1;
function checkNumber(){
    var num=document.getElementById("in").value;
    if(num==randomnum){
        document.getElementById("result").textContent="Congratulations You guessed it correct";
    }
   else if(num>randomnum){
        document.getElementById("result").textContent="You guessed a greater number"; 
    }
    else {
        document.getElementById("result").textContent="You guessed a lower number";
    }
    count++;
    document.getElementById("count").innerHTML=count;
}