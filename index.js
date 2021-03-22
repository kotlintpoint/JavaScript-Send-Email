/*
Less Secure app settings 

Note: If you have not received email then use the following link.
https://www.google.com/settings/security/lesssecureapps
*/

//index.js  
function sendEmail() {

    let fromValue=document.getElementById("inputFrom").value
    let toValue=document.getElementById("inputTo").value
    let subjectValue=document.getElementById("inputSubject").value
    let bodyValue=document.getElementById("inputBody").value

	Email.send({
	Host: "smtp.gmail.com",
	Username :  "<sender’s email address>",
	Password : "<email password>",
	To : toValue,
	From : fromValue,
	Subject : subjectValue,
	Body : bodyValue,
    UseDefaultCredentials:true
	}).then(
		message => {
            console.log(message)
            alert("mail sent successfully")
        }
	);
}
