const myForm = document.querySelector("#myform");
const surnameInput = document.querySelector("#surname");
const firstnameInput = document.querySelector("#firstname");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");

const clicked = document.querySelector(".toggle-btn"); 

clicked.addEventListener ("click", function(darkmode) {
    darkmode.preventDefault;
    document.querySelector(".toggle-btn").classList.toggle("active");
    document.querySelector('body').classList.toggle("darkmode");
    document.querySelector("h3").classList.toggle("introdark");
    document.querySelector(".shortline").classList.toggle("introdark");
    
    for (i = 0; i < document.querySelectorAll("label").length; i++ )
    {
    document.querySelectorAll("label")[i].classList.toggle("introdark");
    }
})


/*const darkBtn = document.querySelector("button"); 

darkBtn.addEventListener ("click", function (darkmode) { 
    darkmode.preventDefault(); 
    document.querySelector('body').classList.toggle("darkmode"); 
    
    if (darkBtn.innerHTML === "LIGHT MODE") {
        darkBtn.innerHTML = "DARK MODE";
    } else {
        darkBtn.innerHTML = "LIGHT MODE";
    }
})


btn.addEventListener("click", function (darkmode) {
    darkmode.preventDefault();
    document.querySelector("body").classList.toggle("darkmode");  
})*/





myForm.addEventListener("submit", function(onSubmit) { 
    onSubmit.preventDefault(); 

    if ((surnameInput.value === "" || firstnameInput.value === "") || emailInput.value === "") {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
    } else {
        msg.classList.add("success");
        msg.innerHTML = `Thanks ${surnameInput.value} we will reach out to you soon.`; 
    }
    surnameInput.value = "";
    firstnameInput.value = "";
    emailInput.value = "";
})