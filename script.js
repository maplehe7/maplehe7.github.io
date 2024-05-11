name = document.getElementById("name")
email = document.getElementById("email")
amount = document.getElementById("amount")

function sendEmail(){
    var link = "mailto:me@example.com"
    + "?cc=myCCaddress@example.com"
    + "&subject=" + encodeURIComponent("This is my subject")
    + "&body=" + encodeURIComponent(document.getElementById("amount").value)
;
window.location.href = link;


}
