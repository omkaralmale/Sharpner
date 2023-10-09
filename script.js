var title=document.getElementById("header-title");
title.style.border="2px solid black";
var item=document.getElementsByClassName("list-group");
// item.forEach(element => {
//     element.style="color:green";
// });
item[2].style='fontWeight=bold';
for(let i=0; i<item.length;i++){
    item[i].style='color:red ';
}
