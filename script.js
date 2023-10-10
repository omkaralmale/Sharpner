var list=document.getElementById('items');
var form=document.getElementById('addForm');
let search=document.getElementById('filter');
search.addEventListener('keyup',SearchItem);
form.addEventListener('submit',addItem);

function addItem(e){
    e.preventDefault();
    var list=document.getElementById('items');
    let item=document.getElementById('item');
    let Description=document.getElementById('Description');

    let newItem=document.createElement("li");
    newItem.className='list-group-item';
    newItem.appendChild(document.createTextNode(item.value));
    newItem.appendChild(document.createTextNode(Description.value));
    var buttonDel=document.createElement('button');
    buttonDel.className='btn btn-danger btn-sm float-right delete';
    buttonDel.appendChild(document.createTextNode('X'));
    newItem.appendChild(buttonDel)
    var buttonEdit=document.createElement('button');
    buttonEdit.className='btn btn-green btn-sm float-right delete';
    buttonEdit.appendChild(document.createTextNode('Edit'));
    newItem.appendChild(buttonEdit)

    list.appendChild(newItem);
}

function SearchItem(e){
    var lists=document.getElementsByTagName("li");
    let valueEntered=e.target.value.toLowerCase();
    // console.log(valueEntered);
   Array.from(lists).forEach((items)=>{
    var item=items.firstChild.textContent;
    var description=items.nextSibling.textContent;
    if((item.toLowerCase().indexOf(valueEntered)!=-1)||(description.toLowerCase().indexOf(valueEntered)!=-1)){
        items.style.display='block';
    }
    else{
        items.style.display='none';
    }
   })
}
