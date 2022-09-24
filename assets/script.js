var currentDay = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDay);
var hours = document.querySelectorAll('.row');
var currHour =  moment().hours();

function logTime(){
        hours.forEach(hour => { // grabs each row and runs the function compareTime for each
        compareTime(hour);
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

logTime();