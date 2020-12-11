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


// 9:00
if ( 9 < currentTimeNumber) {
  $("#nine").addClass("past")
}else if(9 > currentTimeNumber){
  $("#nine").addClass("future")
}else{
  $("#nine").addClass("present")
}

localStorage.setItem('apptNine', 'null');

function appt9() {
  localStorage.setItem('apptNine', document.getElementById("textNine").value);
}

document.getElementById("nineSave").addEventListener("click", appt9)

// 10:00

if ( 10 < currentTimeNumber) {
  $("#ten").addClass("past")
}else if(10 > currentTimeNumber){
  $("#ten").addClass("future")
}else{
  $("#ten").addClass("present")
}

localStorage.setItem('apptTen', 'null');

function appt10() {
  localStorage.setItem('apptTen', document.getElementById("textTen").value);
}

document.getElementById("tenSave").addEventListener("click", appt10)

// 11:00

if ( 11 < currentTimeNumber) {
  $("#eleven").addClass("past")
}else if(11 > currentTimeNumber){
  $("#eleven").addClass("future")
}else{
  $("#eleven").addClass("present")
}

localStorage.setItem('apptEleven', 'null');

function appt11() {
  localStorage.setItem('apptEleven', document.getElementById("textEleven").value);
}

document.getElementById("elevenSave").addEventListener("click", appt11)

// 12:00

if ( 12 < currentTimeNumber) {
  $("#twelve").addClass("past")
}else if(12 > currentTimeNumber){
  $("#twelve").addClass("future")
}else{
  $("#twelve").addClass("present")
}

localStorage.setItem('apptTwelve', 'null');

function appt12() {
  localStorage.setItem('apptTwelve', document.getElementById("textTwelve").value);
}

document.getElementById("twelveSave").addEventListener("click", appt12)

// 1:00

if ( 1 < currentTimeNumber) {
  $("#one").addClass("past")
}else if(1 > currentTimeNumber){
  $("#one").addClass("future")
}else{
  $("#one").addClass("present")
}

localStorage.setItem('apptOne', 'null');

function appt1() {
  localStorage.setItem('apptOne', document.getElementById("textOne").value);
}

document.getElementById("oneSave").addEventListener("click", appt1)

// 2:00

if ( 2 < currentTimeNumber) {
  $("#two").addClass("past")
}else if(2 > currentTimeNumber){
  $("#two").addClass("future")
}else{
  $("#two").addClass("present")
}

localStorage.setItem('apptTwo', 'null');

function appt2() {
  localStorage.setItem('apptTwo', document.getElementById("textTwo").value);
}

document.getElementById("twoSave").addEventListener("click", appt2)

// 3:00

if ( 3 < currentTimeNumber) {
  $("#three").addClass("past")
}else if(3 > currentTimeNumber){
  $("#three").addClass("future")
}else{
  $("#three").addClass("present")
}

localStorage.setItem('apptThree', 'null');

function appt3() {
  localStorage.setItem('apptThree', document.getElementById("textThree").value);
}

document.getElementById("threeSave").addEventListener("click", appt3)

// 4:00

if ( 4 < currentTimeNumber) {
  $("#four").addClass("past")
}else if(4 > currentTimeNumber){
  $("#four").addClass("future")
}else{
  $("#four").addClass("present")
}

localStorage.setItem('apptFour', 'null');

function appt4() {
  localStorage.setItem('apptFour', document.getElementById("textFour").value);
}

document.getElementById("fourSave").addEventListener("click", appt4)

// 5:00

if ( 5 < currentTimeNumber) {
  $("#five").addClass("past")
}else if(5 > currentTimeNumber){
  $("#five").addClass("future")
}else{
  $("#five").addClass("present")
}

localStorage.setItem('apptFive', 'null');

function appt5() {
  localStorage.setItem('apptFive', document.getElementById("textFive").value);
}

document.getElementById("fiveSave").addEventListener("click", appt5)

// var hour = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]

// var text = "";

// for(i = 0; i < hour.length; i++) {
//   text = hour[i] + "<br>"
// }