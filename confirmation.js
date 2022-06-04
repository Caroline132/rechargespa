// Get booking information 
var name = sessionStorage.getItem("name");
document.getElementById('name').innerText = "Hello, "+name;

var email = sessionStorage.getItem("email");
document.getElementById('emailEntered').innerText = email;

var date = sessionStorage.getItem("date");
document.getElementById('startDateSelected').innerText = date;

var time = sessionStorage.getItem("time");
document.getElementById('timeSelected').innerText = "at "+time;

var service = sessionStorage.getItem("checkbox");
document.getElementById('service').innerText = service;

var expert = sessionStorage.getItem("expert");
document.getElementById('expert').innerText = "with "+expert;