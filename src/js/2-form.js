

const formData = {
    email: "",
    message: ""
};


const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const textarea = form.querySelector("textarea");
const input = form.querySelector("input[type='email']");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", onTextareaInput);
input.addEventListener("input", onEmailInput)

populateText();

    function handleSubmit(event) {

        event.preventDefault();
        const email = input.value.trim();
        const message = textarea.value.trim();

        if (email === "" || message === "") {
            alert("Fill please all fields");
            return;
            }

        const formData = {
        email: email,
        message: message
        };

        console.log("Submit data:",formData)
        event.currentTarget.reset();
        localStorage.removeItem(STORAGE_KEY);
    }

    function onTextareaInput(event) {  
        const value = event.target.value;
        formData.message = value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }  

    function onEmailInput(event) {
        formData.email = event.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    }

    function populateText() {
        const saveData = localStorage.getItem(STORAGE_KEY);
        if (saveData) {
           const { email, message } = JSON.parse(saveData);
           input.value = email || "";
           textarea.value = message || "";
        }
    }






// form.addEventListener("input", (event) => {
//     event.preventDefault();
//     const email = form.elements.email.value.trim();
//     const password = form.elements.password.value.trim();

//     if (email === "" || password === "") {
//         alert("Fill please all fields");
//         return;
//     }

//     const formdata = {
//         email: email,
//         password: password,
//     }

// console.log(formdata);

//     form.reset();
// });