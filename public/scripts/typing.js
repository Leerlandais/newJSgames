const textToType = document.getElementById("textToType");
const startTyping = document.getElementById('startTyping');
const typeTextarea = document.getElementById("typeTextarea");

startTyping.addEventListener("click", startTypingGame)

window.addEventListener('resize', displayScreenWidth); 

function displayScreenWidth() { 
    const screenwidth = document.getElementById("screenwidth");
    let theWidth = window.innerWidth;                                             
    screenwidth.innerHTML = 'The screen width is: ' + theWidth;
}
displayScreenWidth();

function startTypingGame() {
    typeTextarea.addEventListener("input", checkPlayerInput);
}

function checkPlayerInput() {
    let textArray = textToType.textContent.split("");
    console.log(textArray);
    let checkArray = typeTextarea.value.split("");
    console.log(checkArray);
}