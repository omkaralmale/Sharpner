var newDiv=document.createElement("div");
// newDiv.innerHTML="Hello";
newDiv.className="new module";
newDiv.id="divNew";
newDiv.setAttribute('title','hello div');
//crate text node to div
var DivText=document.createTextNode("Hello");
//add text to div
newDiv.appendChild(DivText);
var title=document.querySelector("header .container");
var h1=document.querySelector("header h1");
title.insertBefore(newDiv,h1);

var newDiv1=document.createElement("div");
// newDiv.innerHTML="Hello";
newDiv1.className="new module";
newDiv1.id="divNew";
newDiv1.setAttribute('title','hello div1');
//crate text node to div
var DivText1=document.createTextNode("Hello");
//add text to div
newDiv1.appendChild(DivText1);
var title1=document.querySelector("#items");
var li=document.querySelector(".list-group-item");
title1.insertBefore(newDiv1,li);