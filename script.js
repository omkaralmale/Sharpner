var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
//form submit event
form.addEventListener('submit', addItem);

//remove 
itemList.addEventListener('click',removeItem)
// add item
function addItem(e){
    e.preventDefault();
    // get input value
    var val=document.getElementById('item');
    
    var li=document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(val.value));
    //create delete button
    var buttonDel=document.createElement('button');
    buttonDel.className='btn btn-danger btn-sm float-right delete';
    buttonDel.appendChild(document.createTextNode('X'));
    li.appendChild(buttonDel)
    var Edit=document.createElement('button');
    Edit.className='btn btn-danger btn-sm float-right delete';
    Edit.appendChild(document.createTextNode('Edit'));
    li.appendChild(Edit)
    itemList.appendChild(li)
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm("Sure")){
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}