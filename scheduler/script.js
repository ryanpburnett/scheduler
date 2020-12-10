var today = moment();

function date () {
  document.getElementById("currentDay").innerText = ("Today's date is: " + 
  today.format('MM-DD-YYYY'))
}
date()
