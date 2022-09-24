var currentDay = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDay);

var hours = document.querySelectorAll('.row');
var currHour =  moment().hours();
var texts = document.querySelectorAll('.description');
var currentList = 0;

var buttons = document.querySelectorAll('.saveBtn');

function logTime(){
        hours.forEach(hour => { // grabs each row and runs the function compareTime for each
        compareTime(hour);
        var todos = localStorage.getItem(hour.childNodes[1].textContent);
        if (todos !== null){
            hour.childNodes[3].value = todos;
        }
    });
}

function compareTime(element){ // for each hour this function compares to the current hour and adds the class according to the parameters of the if else statements

    var time = moment(element.childNodes[1].textContent, 'hA'); // this is grabing the text of the first child of row

    if (time.hours() < currHour){
        element.childNodes[3].classList.add('past');
    } else if (time.hours() === currHour){
        element.childNodes[3].classList.add('present');
    } else 
        element.childNodes[3].classList.add('future');
}

function logText(){
    hours.forEach(text => {
        saveToDo(text);
    });
}

function saveToDo(element){
    localStorage.setItem(element.childNodes[1].textContent, element.childNodes[3].value);
}
logTime();
buttons.forEach(b => b.addEventListener('click', event => saveToDo(event.target.parentNode)));