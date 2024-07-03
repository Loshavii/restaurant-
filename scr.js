const modal = document.getElementById("modal");
const contactusbtn = document.getElementById("contactusbtn");
const closebtn = document.getElementById("closebtn");
const contactform = document.getElementById("contactform");

contactusbtn.addEventListener (("click"), () => {
    modal.style.display= "block";});


closebtn.addEventListener (("click"), () => {
    modal.style.display= "none";});

contactform.addEventListener("submit", (e) => { e.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value; 


    if (name===""){
        document.getElementById("name-error").innerHTML = "Name is required";
    }
    else{
        document.getElementById("name-error").innerHTML = "";
    }

    if (address===""){
        document.getElementById("address-error").innerHTML = "address is required";
    }
    else{
        document.getElementById("address-error").innerHTML = "";
    }

    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test (phone)){
        document.getElementById("phone-error").innerHTML = "Phone number must start with +94 and be followed by exactly 9 digitS";
    }
    else{
        document.getElementById("phone-error").innerHTML = "";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test (email)){
        document.getElementById("email-error").innerHTML = "Email is required";
    }
    else{
        document.getElementById("email-error").innerHTML = "";
    }

    if (message.length < 10) {
        document.getElementById("message-error").innerHTML = "message is required";
        }
        else{
            document.getElementById("message-error").innerHTML = "";
    }

    
    if (name !==" " && address !== " " && phoneRegex !== " " && emailRegex !== " " && message !== " "){
        localStorage.setItem('contactData', JSON.stringify(contactData));
        alert('Success! Your message has been sent.');
        document.getElementById('modal').style.display = 'none';
    }
    
})

