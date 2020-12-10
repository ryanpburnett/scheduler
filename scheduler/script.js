var today = moment();

function date () {
  document.getElementById("currentDay").innerText = ("Today's date is: " + 
  today.format('MM-DD-YYYY'))
}
date()

var currentTime = current_time = moment().format("HH:mm")

var currentTimeNumber = parseInt(currentTime)

console.log(currentTimeNumber)
function setColor(element, color) {
  element.style.backgroundColor = color;
}



if ( 9 < currentTimeNumber) {
  $("#nine").addClass("past")
}else if(9 > currentTimeNumber){
  $("#nine").addClass("future")
}else{
  $("#nine").addClass("present")
}


