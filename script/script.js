$(document).ready(function(){

const now = moment().format('LLLL');
$("#currentDay").text(now);

//************************* FORM ******************************/
var hour = [ "9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var task = ["task0", "task1", "task2", "task3", "task4", "task5", "task6", "task7", "task8" ];
var save = ["save0", "save1", "save2", "save3", "save4", "save5", "save6", "save7", "save8" ];
var workHr = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var mTime = JSON.parse(moment().format("HH"));

$( "<form/>", {
    "class": "row",
    click: function() {
        $( this ).toggleClass( "test" );
    }
    }).appendTo( "div#scheduler" );

 for (var i=0; i<task.length; i++){
    $( "<div/>", {
        "class": "hour col-2",
        text: hour[i]
      }).appendTo( "form" );   
    
    $( "<textarea/>", {
        "id": task[i],
        "class": "task",
        "rows": "3",
        "maxlength": "356",
        "name": workHr[i]  
    }).appendTo( "form" );

    $( "<button/>", {
        "id": save[i],
        "class": "save",
        "type": "submit"
    }).appendTo( "form" );
 }

 $("<span>").appendTo("textarea"); //each textarea has a span, only one
  
for (var j=0; j<9; j++){
    var timeSlot=document.getElementById(task[j]).name;       
    console.log(timeSlot);
    if (timeSlot<mTime){
        (document.getElementById(task[j])).style.backgroundColor="#dbfef4";
    }else if (timeSlot>mTime){
        (document.getElementById(task[j])).style.backgroundColor="#c5d7f8";
    }else{
        (document.getElementById(task[j])).style.backgroundColor="white";
    }
}
//************************* DATA ********************************/ 
$(".save").attr('disabled', true);              

$("#task0").keyup(function(){
    if($("#task0").val().length !=0){
        $("#save0.save").attr("disabled", false);    
        $("#save0.save").attr("onclick");        
    }else{
        $("#save0.save").attr("disabled",true);
    }
});

$("#task1").keyup(function(){
    if($("#task1").val().length !=0){
        $("#save1.save").attr('disabled', false);            
    }else{
        $("#save1.save").attr('disabled',true);
    }
});
$("#task2").keyup(function(){
    if($("#task2").val().length !=0){
        $("#save2.save").attr('disabled', false);            
    }else{
        $("#save2.save").attr('disabled',true);
    }
});
$("#task3").keyup(function(){
    if($("#task3").val().length !=0){
        $("#save3.save").attr('disabled', false);            
    }else{
        $("#save3.save").attr('disabled',true);
    }
});
$("#task4").keyup(function(){
    if($("#task4").val().length !=0){
        $("#save4.save").attr('disabled', false);            
    }else{
        $("#save4.save").attr('disabled',true);
    }
});
$("#task5").keyup(function(){
    if($("#task5").val().length !=0){
        $("#save5.save").attr('disabled', false);            
    }else{
        $("#save5.save").attr('disabled',true);
    }
});
$("#task6").keyup(function(){
    if($("#task6").val().length !=0){
        $("#save6.save").attr('disabled', false);            
    }else{
        $("#save6.save").attr('disabled',true);
    }
});
$("#task7").keyup(function(){
    if($("#task7").val().length !=0){
        $("#save7.save").attr('disabled', false);            
    }else{
        $("#save7.save").attr('disabled',true);
    }
});
$("#task8").keyup(function(){
    if($("#task8").val().length !=0){
        $("#save8.save").attr('disabled', false);            
    }else{
        $("#save8.save").attr('disabled',true);
    }
});

//************************* local Storage   ********************************/

var taskElName = ["#task0", "#task1", "#task2", "#task3", "#task4", "#task5", "#task6", "#task7", "#task8" ];
 var saveElName = ["#save0", "#save1", "#save2", "#save3", "#save4", "#save5", "#save6", "#save7", "#save8" ];

var task0Input = document.querySelector("#task0");
var task1Input = document.querySelector("#task1");
var task2Input = document.querySelector("#task2");
var task3Input = document.querySelector("#task3");
var task4Input = document.querySelector("#task4");
var task5Input = document.querySelector("#task5");
var task6Input = document.querySelector("#task6");
var task7Input = document.querySelector("#task7");
var task8Input = document.querySelector("#task8");
var task9Input = document.querySelector("#task9");

var saveBtn0 = document.querySelector("#save0");
var saveBtn1 = document.querySelector("#save1");
var saveBtn2 = document.querySelector("#save2");
var saveBtn3 = document.querySelector("#save3");
var saveBtn4 = document.querySelector("#save4");
var saveBtn5 = document.querySelector("#save5");
var saveBtn6 = document.querySelector("#save6");
var saveBtn7 = document.querySelector("#save7");
var saveBtn8 = document.querySelector("#save8");
var saveBtn9 = document.querySelector("#save9");

var task0Span = document.querySelector("textarea#task0");
var task1Span = document.querySelector("textarea#task1");
var task2Span = document.querySelector("textarea#task2");
var task3Span = document.querySelector("textarea#task3");
var task4Span = document.querySelector("textarea#task4");
var task5Span = document.querySelector("textarea#task5");
var task6Span = document.querySelector("textarea#task6");
var task7Span = document.querySelector("textarea#task7");
var task8Span = document.querySelector("textarea#task8");

saveBtn0.addEventListener("click", function(event){
    event.preventDefault();
    var item0 = {am9: task0Input.value.trim()};   
    localStorage.setItem("item0", JSON.stringify(item0));
    var displayItem0 = JSON.parse(localStorage.getItem("item0"));
    task0Span.textContent = displayItem0.am9;
});

saveBtn1.addEventListener("click", function(event){
    event.preventDefault();
    var item1 = {am10: task1Input.value.trim()};
    localStorage.setItem(item1, JSON.stringify(item1));
    var displayItem1 = JSON.parse(localStorage.getItem("item1"));
    task1Span.textContent = displayItem1.am10;
});
saveBtn2.addEventListener("click", function(event){
    event.preventDefault();
    var item2 = {am11: task2Input.value.trim()};   
    localStorage.setItem("item2", JSON.stringify(item2));
    var displayItem2 = JSON.parse(localStorage.getItem("item2"));
    task2Span.textContent = displayItem2.am11;
});
saveBtn3.addEventListener("click", function(event){
    event.preventDefault();
    var item3 = {pm12: task3Input.value.trim()};
    localStorage.setItem("item3", JSON.stringify(item3));
    var displayItem3 = JSON.parse(localStorage.getItem("item3"));
    task3Span.textContent = displayItem3.pm12;
});
saveBtn4.addEventListener("click", function(event){
    event.preventDefault();
    var item4 = {pm1: task4Input.value.trim()};   
    localStorage.setItem("item4", JSON.stringify(item4));
    var displayItem4 = JSON.parse(localStorage.getItem("item4"));
    task4Span.textContent = displayItem4.pm1;
});
saveBtn5.addEventListener("click", function(event){
    event.preventDefault();
    var item5 = {pm2: task5Input.value.trim()};
    localStorage.setItem("item5", JSON.stringify(item5));
    var displayItem5 = JSON.parse(localStorage.getItem("item5"));
    task5Span.textContent = displayItem5.pm2;
});
saveBtn6.addEventListener("click", function(event){
    event.preventDefault();
    var item6 = {pm3: task6Input.value};   
    localStorage.setItem("item6", JSON.stringify(item6));
    var displayItem6 = JSON.parse(localStorage.getItem("item6"));
    task6Span.textContent = displayItem6.pm3;
});
saveBtn7.addEventListener("click", function(event){
    event.preventDefault();
    var item7 = {pm4: task7Input.value.trim()};
    localStorage.setItem("item7", JSON.stringify(item7));
    var displayItem7 = JSON.parse(localStorage.getItem("item7"));
    task7Span.textContent = displayItem1.pm4;
});
saveBtn8.addEventListener("click", function(event){
    event.preventDefault();
    var item8 = {pm5: task8Input.value.trim()};
    localStorage.setItem("item8", JSON.stringify(item8));
    var displayItem8 = JSON.parse(localStorage.getItem("item8"));
    task8Span.textContent = displayItem1.pm5;
});



});// end of jquery 






















