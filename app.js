window.addEventListener('scroll', (event)=>{
    let scroll=this.scrollY;
    console.log(scroll);

    if(scroll>1150){
        let barcplus=document.getElementById("barcplus");
        let barhtml=document.getElementById("barhtml");
        let barcss=document.getElementById("barcss");
        let barjs=document.getElementById("barjs");
        let pscircle=document.getElementById("pscircle");
        let mscircle=document.getElementById("mscircle");
        barcplus.classList.add("barcplus");
        barhtml.classList.add("barhtml");
        barcss.classList.add("barcss");
        barjs.classList.add("barjs");
        pscircle.classList.add("pscircle");
        mscircle.classList.add("mscircle");
    }
})

document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.phone = document.getElementById('phone');
    fields.message = document.getElementById('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
}

function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
   }

   function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }

   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.email, isNotEmpty);
    valid &= fieldValidation(fields.phone, isNotEmpty);
    valid &= fieldValidation(fields.message, isNotEmpty);
    
   
    return valid;
   }

   class User {
    constructor(firstName, lastName, email,phone, message) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.message = message;
    }
   }

   function sendContact(){
    if(isValid()){
        let usr=new User(firstName.value,lastName.value,email.value,phone.value,message.value);
        alert(`${user.firstName} Thanks`)
    }
    else{
        alert("Error")
    }
   }