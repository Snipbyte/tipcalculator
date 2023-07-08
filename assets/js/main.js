var tip_percentage = document.getElementById("tip_percentage");
var noOfPersons = document.getElementById("noOfPersons");
var totalBill = document.getElementById("totalBill");
var tipperperosn = document.getElementById("tipperperosn");
var totalperperson = document.getElementById("totalperperson");
var tiptext = document.getElementById("tiptext");
var persontext = document.getElementById("persontext");
var totalBillamount = document.getElementById("totalBillamount");
tip_percentage.addEventListener("change", function () {
    tiptext.innerText = "Tip : " + tip_percentage.value + "%";
    let t = Number(totalBill.value) + (tip_percentage.value / 100) * Number(totalBill.value);
    totalBillamount.innerText = "Total Bill inc Tip: " + t;
    let totalperpersonn = t / noOfPersons.value;
    totalperperson.innerText = "Total per perosn : " + totalperpersonn;
})
noOfPersons.addEventListener("change", function () {
    persontext.innerText = "No of Persons : " + noOfPersons.value;
    let t = Number(totalBill.value) + (tip_percentage.value / 100) * Number(totalBill.value);
    let totalperpersonn = t / noOfPersons.value;
    totalperperson.innerText = "Total per perosn : " + totalperpersonn;
})