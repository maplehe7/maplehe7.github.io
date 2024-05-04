function sendEmail() {
    semail = document.getElementById("email")
    Email.send({
        Host : "mailslurp.mx",
        Username : "teyD3iSWrekSgbAyMFqKAztfsoQlp1Um",
        Password : "8DcCRa9wtNo63z71PHBRpt7J2lGQF4d7",
        To : 'maplehe7@gmail.com',
        From : semail,
        Subject : "donation cbccoc",
        Body : ""
    })
    
    }