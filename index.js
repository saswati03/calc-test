//Theme-changer
let checkbox = document.querySelector('input[name="theme"]');

checkbox.addEventListener('change', function() {
    // Change the theme of the website
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");
    }
    else{
        document.documentElement.setAttribute("data-theme", "light");
    }
});

let outputScreen = document.getElementById("output-screen");
var firstNumber = false;
let partialValue = 0;

function display(num){
    if(!firstNumber){
        firstNumber = true;
        partialValue = outputScreen.value;
    }
    else{
        partialValue = outputScreen.value;
        outputScreen.value +=num;
    }
}

function percentageCalculate(){
    try{
        outputScreen.value = eval(outputScreen.value)/100;
    }
    catch(err){
        alert("Invalid");
    }
}

function Calculate(){
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputScreen.value="";
}
function del(){
    outputScreen.value = outputScreen.value.slice(0,-1);
}