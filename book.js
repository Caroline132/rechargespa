let name = document.getElementById('custName');
name.addEventListener("change", function() {
    sessionStorage.setItem("name", name.value);
});

let email = document.getElementById('email');
email.addEventListener("change", function() {
    sessionStorage.setItem("email", email.value);
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

var cbs = document.querySelectorAll('[type="checkbox"]');
[].forEach.call(cbs, function (cb) {
    cb.addEventListener("click", function(){
        const checkboxes = document.querySelectorAll('input[type=checkbox]:checked').value;
        const data = [...document.querySelectorAll('.inp:checked')].map(e => e.value);
        let text = data.toString();
        sessionStorage.setItem("checkbox", text);
    });
});