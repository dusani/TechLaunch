//Select all your elements here
var zero = document.querySelector("#zero");
zero.addEventListener("click", function(){
    displayFunction("0");
});
var one = document.querySelector("#one");
    one.addEventListener("click", function(){
        displayFunction("1");
    });

var two = document.querySelector("#two");
    two.addEventListener("click", function(){
        displayFunction("2");
    });

var three = document.querySelector("#three");
    three.addEventListener("click", function(){
        displayFunction("3");
    });
    
var four = document.querySelector("#four");
    four.addEventListener("click", function(){
        displayFunction("4");
    });

var five = document.querySelector("#five");
    five.addEventListener("click", function(){
        displayFunction("5");
    });

var six = document.querySelector("#six");
    six.addEventListener("click", function(){
        displayFunction("6");
    });

var seven = document.querySelector("#seven");
    seven.addEventListener("click", function(){
        displayFunction("7");
    });

var eight = document.querySelector("#eight");
    eight.addEventListener("click", function(){
        displayFunction("8");
    });

var nine = document.querySelector("#nine");
    nine.addEventListener("click", function(){
        displayFunction("9");
    });

var decimal = document.querySelector("#decimal");
var equal = document.querySelector("#equal");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multi = document.querySelector("#multi");
var divide = document.querySelector("#divide");
var display = document.querySelector(".display");


//Set state using a string Ex: state = "add", state ="minus", etc.
//Also define num1 and num2 
var num1;
var num2;
var state;


//Create display function that sets the display of the display div
function displayFunction(num){
    if(display.textContent.length < 9){
        display.textContent += num;
    }
}


//Create converter function that turns the string in the display div into a workable number
function converter(text){
    return parseInt(text);
}



//Create operation function that takes in the state
plus.addEventListener("click",function(event){
    if(state == undefined){
        num1 = converter(display.textContent);
        display.textContent = "";
        state = "plus";
    } else if(state == "plus") {
        num2 = converter(display.textContent);
        display.textContent = (num1 + num2);
    }
})