var enter = document.getElementById('enter');
var userInput = document.getElementById('userInput');
var list = document.querySelector('.list');
var remove = document.querySelectorAll('.delete');

var addItem = function(){
    if(userInput.value.length > 0){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(userInput.value + ' '));
        li.className = 'todoItem';
        list.appendChild(li);
        var btn = document.createElement('button');
        btn.appendChild(document.createTextNode('X'));
        btn.className = 'delete';
        li.appendChild(btn);
        var checkbox = document.createElement('INPUT');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.className = 'checkbox';
        li.prepend(checkbox);
        userInput.value = '';
    }
}

enter.addEventListener('click', addItem);

userInput.addEventListener('keypress' ,function(event){
    if(event.key === 'Enter'){
        addItem();
    }
});



list.addEventListener('click', function(cursor){
    if(cursor.target.innerHTML === 'X'){
        cursor.target.parentElement.remove();
    }else if(cursor.target.tagName === 'INPUT'){
        cursor.target.parentElement.classList.toggle('done');
    }
});




