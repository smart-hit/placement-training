function result(){
    var checkedValue = document.querySelector('.messageCheckbox:checked').value;
    if(checkedValue=='+'){
        document.getElementById("para").innerHTML="result ="+sum();
    }
    else if(checkedValue=='-'){
        document.getElementById("para").innerHTML="result ="+diff();
    }
    else if(checkedValue=='*'){
        document.getElementById("para").innerHTML="result ="+multi();
    }
    else if(checkedValue=='/'){
        document.getElementById("para").innerHTML="result ="+divi();
    }
    else{
        document.getElementById("para").innerHTML="Not the valid operant";
    }
}
function sum(){
    "use strict";
var num1=parseInt(document.getElementById("number1").value);
var num2=parseInt(document.getElementById("number2").value);
var ans=num1+num2;
return ans; 
}
function diff(){
    "use strict";
var num1=parseInt(document.getElementById("number1").value);
var num2=parseInt(document.getElementById("number2").value);
var ans=num1-num2;
return ans; 
}
function display(){
    document.getElementById("para").innerHTML="working";
 
}
function multi(){
  var num1=document.getElementById("number1").value;
  var num2=document.getElementById("number2").value;
  var ans=num1*num2;
  return ans;
}
function divi(){
    var num1=document.getElementById("number1").value;
    var num2=document.getElementById("number2").value;
    var ans=num1/num2;
    return ans;
  }
console.log("work");