var currentDay = moment().format('dddd MMMM Do');
$('#currentDay').text(currentDay);
var hours = document.querySelectorAll('.hour');
var currHour =  moment().hour();


function checkTime(){
    
    if (hours < currHour){
        document.getElementById("hour").classList.add('past');
        document.getElementById("hour").classList.remove('hour');
    } else if (hours = currHour){
        document.getElementById("hour").classList.add('present');
        document.getElementById("hour").classList.remove('hour');
    } else 
        document.getElementById("hour").classList.add('future');
        document.getElementById("hour").classList.remove('hour');
}

document.addEventListener("load", checkTime);