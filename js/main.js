//DOM elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    todo = document.getElementById('todo');

const showAmPm = true;

//show time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12 hour format
    hour = hour % 12 || 12;

    // output time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

//Add 0
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//setbackground & greetings
function setbackground() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 6) {
        doument.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
    else if (hour < 12) {
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = 'Good Morning';
        document.body.style.color = 'white';
    }
    else if (hour < 18) {
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = 'Good Afternoon';
        document.body.style.color = 'white';
    }
    else {
        document.body.style.backgroundImage = "url('../img/evening.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';
    }
}

//get name
function getName(){
    if (localStorage.getItem('name') == null){
        name.textContent = '[Enter Name]';
    }
    else{
        name.textContent = localStorage.getItem('name');
    }
}

//set name
function setName(e){
    if(e.type == 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }
    else{
        localStorage.setItem('name',e.target.innerText);
    }
}

function getToDo(){
    if (localStorage.getItem('todo') == null){
        todo.textContent = '[Enter Todo]';
    }
    else{
        todo.textContent = localStorage.getItem('todo');
    }
}

//set todo
function setToDo(e){
    if(e.type == 'keypress'){
        //make sure enter is pressed
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('todo',e.target.innerText);
            todo.blur();
        }
    }
    else{
        localStorage.setItem('todo',e.target.innerText);
    }
}

name.addEventListener('keypress',setName);
name.addEventListener('blur',setName);
todo.addEventListener('keypress',setToDo);
todo.addEventListener('blur',setToDo);

//run
showTime();
setbackground();
getName();
getToDo();