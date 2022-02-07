//task1
for(var i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    });
}

//task2
var today = new Date();
  var day = today.getDay();
  var daysofweek = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  const answer1=document.createElement('p');
  
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var prepand = (hour >= 12)? " PM":" AM";
  hour = (hour >= 12)? hour - 12: hour;
 
answer1.innerHTML="Today is : " + daysofweek[day] + ".<br> Current Time is: "+hour + prepand + " : " + minute + " : " + second;

const task2=document.querySelector('.task2');
task2.append(answer1);


//task3
function reversenum() {
    var a,temp=0;
    value1=Number(document.getElementById("task3_input").value);
    while(value1>0){
    a=value1%10;
value1=parseInt(value1/10);
temp=temp*10+a;
}
alert(temp)
}

//task4
function factorial() {
    n=Number(document.getElementById("task4_input").value);
  var result = n;
  const n1=n;
  if (n === 0 || n === 1){

    alert(1) ; 
}
else{
  while (n > 1) { 
    n--;
    result *= n;
  }
  alert("("+n1+"!)="+result);
}
}
//task 5
function larger_num(){
    num1=Number(document.getElementById("task5_num1").value);
     num2=Number(document.getElementById("task5_num2").value);
     if(num1>num2){
        alert("Larger Number between "+num1+" and "+num2+" is "+num1);

     }
     else if(num1==num2){
        alert(num1+" and "+num2+" are equal");
     }
     else{
         alert("Larger Number between "+num1+" and "+num2+" is "+num2);
     }

}
//task6
    function ArrayToString(){
    var  task6_arr = ["Red", "Green", "White", "Black"];
    for(var i=0;i<task6_arr.length;i++){
            task6_arr.toString();
            
            var plus=task6_arr.join('+');
    }
    document.querySelector('.task6').innerHTML =task6_arr+"<br>"+plus;
}


//task7
function GetMonth(){
    var month="";
    var month2="";
    var monthes=["January","February","March","April","May","Jun","July","August","September","October","November","Desember"];
    var date1=new Date("10/11/2009");
    var date2=new Date("11/13/2014");
    for(var i=0;i<=12;i++){
    if(i==date1.getMonth()){
        month+=monthes[i];
    }
    if(i==date2.getMonth()){
        month2+=monthes[i]
    }
 }
    document.querySelector('.task7').innerHTML =month+"<br>"+month2;
 }

 //task8
 function isUpper(aChar=prompt("Enter a string:"))
   {    
      var myChar = aChar.charCodeAt(0);
   
      if((myChar > 64) && (myChar <  91))
      {
         answer="Uppercase!";
      }
      else
            answer="Not an Uppercase!";
   document.querySelector('.task8').innerHTML =answer;
   }


//task9
//drawing Start
var canvas = document.getElementById("SmileyId");
 var context = canvas.getContext("2d");
 var cw=canvas.width;
 var ch=canvas.height;
 var rr=Math.min(cw,ch);
 var cx=rr/2;
 var cy=rr/2;
 //circle
 context.fillStyle = "yellow";
 context.beginPath();
 context.arc(cx, cy, Math.floor(rr*0.25), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 context.lineWidth = 2;
 context.stroke();
 context.fillStyle = "black";
 //left eye
 context.beginPath();
 context.arc(Math.floor(rr*0.41), Math.round(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 //rigth eye
 context.beginPath();
 context.arc(Math.ceil(rr*0.59), Math.floor(rr*0.4), Math.round(rr*0.03), 0, 2*Math.PI);
 context.closePath();
 context.fill();
 //mouth
 context.beginPath();
 context.arc(cx, Math.round(rr*0.52), Math.round(rr*0.13), Math.PI, 2*Math.PI, true);
 context.closePath();
 context.fill();
//drawing End
//task10
function Replace(){
    var end=document.getElementById("string-6").childNodes[0].nodeValue;
    document.getElementById("string-6").innerHTML = document.getElementById("string-1").childNodes[0].nodeValue;
    document.getElementById("string-1").innerHTML = document.getElementById("string-3").childNodes[0].nodeValue;
document.getElementById("string-3").innerHTML = document.getElementById("string-2").childNodes[0].nodeValue;
document.getElementById("string-2").innerHTML = document.getElementById("string-5").childNodes[0].nodeValue;
document.getElementById("string-5").innerHTML = document.getElementById("string-4").childNodes[0].nodeValue;
document.getElementById("string-4").innerHTML = end;
var a=document.getElementById("string-1").innerHTML;
var b=document.getElementById("string-2").innerHTML;
var c=document.getElementById("string-3").innerHTML;
var d=document.getElementById("string-4").innerHTML;
var e=document.getElementById("string-5").innerHTML;
var f=document.getElementById("string-6").innerHTML;
console.log(a+"\n"+b+"\n"+c+"\n"+d+"\n"+e+"\n"+f);

}
//task11
function color() {
    var myNodelist = document.querySelectorAll(".element");
    
    for (let i = 0; i < myNodelist.length; i++) {
        myNodelist[i].style.color = "green";
        if(i<3){
            myNodelist[i].style.color = "red";
        }
    }
}
//task12
function list_to_do(){
    var list = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];
    for(var i=0;i<5;i++){
     var newLi = document.createElement('li');
     newLi.className="tasks";
    
  newLi.innerHTML = list[i];

  todolist.appendChild(newLi);
}
}
//task13
function hrline(){
var p_tag = document.querySelectorAll('p');
for(var i=0;i<p_tag.length;i++){
var newNode = document.createElement('hr');
p_tag[i].appendChild(newNode);
}
}   
//task14
function remove_and_replace(){
    for (let r of document.body.querySelectorAll("div")) {
            if (r.textContent.startsWith("Cola 1.5 l"))
                r.remove();
            if (r.textContent.startsWith("Chocolate bar")) {
                let newChild = document.createElement("span");
                newChild.className = "qty";
                newChild.textContent = "x 4";
                r.replaceChild(newChild, r.firstElementChild);
                r.replaceChild(document.createTextNode("Canned Fish"), r.firstChild); // Исправлено
            }
        }
}
//task15
function create_to_dolist(){
    var ul = document.createElement('ul');
    document.body.appendChild(ul);
     while (true) {
    var newLi = prompt("Введите текст для пункта списка", "");

    if (newLi === null || newLi===0) {
       break;
    }

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(newLi));
    ul.appendChild(li);
}
}



