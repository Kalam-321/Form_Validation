var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");
const submitButton = document.getElementById("submit");

function validateName() {
    var name = document.getElementById("contact-name").value;
    if (name.length == 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '&#9989;';
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contact-phone").value;
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone No is required';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone No should be 10 digits';
        return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Only digits please';
        return false;
    }
    phoneError.innerHTML = '&#9989;';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contact-email").value;
    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Aa-z\._\-[0-9]*[@][A-Za-z]*[\.][A-Za-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
    }
    emailError.innerHTML = '&#9989;';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contact-message").value;
    const required = 30;
    var left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters are required';
        return false;
    }
    messageError.innerHTML = '&#9989;';
    return true;
}

function validateForm()
{
    
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage())
    {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix the error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
    submitError.style.display = 'block';
    submitError.style.color = 'black';
    submitError.innerHTML = 'Form submitted successfully &#9989;';
    setTimeout(function(){submitError.style.display='none'},1500);
    return true;
}

submitButton.addEventListener("click",(e)=>{

    e.preventDefault();
    let validation = validateForm();
    if(validation)
    {
        setTimeout(function() {
            location.reload();
        }, 1000);
    }
})