let name = document.getElementById('custName');
name.addEventListener("change", function() {
    sessionStorage.setItem("name", name.value);
});

let email = document.getElementById('email');
email.addEventListener("change", function() {
    sessionStorage.setItem("email", email.value);
});

let service = document.getElementById('service');
sessionStorage.setItem("service", "Facial");
service.addEventListener("change", function() {
    sessionStorage.setItem("service", service.value);
});

let expert = document.getElementById('expert');
sessionStorage.setItem("expert", "Jane");
expert.addEventListener("change", function() {
    sessionStorage.setItem("expert", expert.value);
});

let startDate = document.getElementById('startDate');
startDate.addEventListener("change", function() {
    sessionStorage.setItem("date", startDate.value);
});

let bookTime = document.getElementById('bookTime');
bookTime.addEventListener("change", function() {
    sessionStorage.setItem("time", bookTime.value);
});