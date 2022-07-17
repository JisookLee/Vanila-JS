const loginInput = document.querySelector("#loginForm input");
const loginForm = document.querySelector("#loginForm");
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onClickbtn(event) {
    // event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
 paintgreeting()
    console.log(loginForm);
}

function paintgreeting(){
    greeting.innerText = `Nice to Meet you, ${savedUsername} 😉`;
greeting.classList.remove(HIDDEN_CLASSNAME)
}


const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onClickbtn);
}else {
    paintgreeting()

}
