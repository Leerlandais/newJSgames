const bigGrid = 210;                                             
const bigGridFind = document.getElementById("typingField");
const typingGridArray = [];
const startTypingGame = document.getElementById("startTypingGame");
let dropWord;
let wordsToType = [
    "glimmer", "victory", "journey", "dynamic", "captain", "complex", "network", "awesome", "freedom", "weather", "initial", "captivate", "butterfly", "overcome", "sentence", "proposal", "favourite", "creative", "function", "language", "spectrum", "computer", "conquest", "reliable", "research", "strength", "question", "critical", "evidence", "solution", "incident", "practice", "campaign", "standard", "capacity", "positive", "magnetic", "language", "feedback", "elementary", "discipline", "persistent", "influence", "psychology", "confidence", "celebration", "adventure", "enthusiasm", "entertainment", "efficiency", "generation", "consequence", "population", "reflection", "foundation", "discrimination", "restaurant", "investment", "comprehensive", "development", "disappointment", "examination", "introduction", "performance", "protection", "intervention", "experience", "contribution", "negotiation", "opportunity", "communication", "application", "information", "independence", "recognition", "possibility", "discussion", "relationship", "environment", "significance", "organisation", "competition", "preparation", "alternative", "celebration", "determination", "recognition", "independence", "conversation", "explanation", "understanding", "appreciation", "restaurant", "competition", "association", "combination", "preparation", "interpretation"];
let wordsLeftToType = wordsToType;

for (let i = 0; i < bigGrid; i++) {                                    
    const placeDivs = document.createElement("div");                   
    placeDivs.classList.add("typingGrid");                              
    placeDivs.id = (i);
    placeDivs.textContent = placeDivs.id;                                                
    bigGridFind.appendChild(placeDivs);                                
    typingGridArray.push(placeDivs.id);                                                                                                        
}

startTypingGame.addEventListener("click", function(){
    startTypingGame.style.display = "none";
    pickRandomWord();

});


function pickRandomWord () {
    let pickWord = Math.floor(Math.random() * wordsLeftToType.length);
    dropWord = wordsLeftToType[pickWord];
    pickWord = "";
    dropBrick(dropWord);
}

function dropBrick (dropThis) {
    const dropNewInterval = setInterval(() => {
        pickRandomWord();
    }, 25000);
    let dropSpot = Math.floor(Math.random() * 6);
    let dropArea = document.getElementById(dropSpot);
    //   dropArea.style.border = "solid";
    //  dropArea.textContent = dropThis;
    
    const dropInterval = setInterval(() => {
        if (dropArea == null) {
            clearInterval(dropInterval);
            clearInterval(dropNewInterval);
            gameOver();
            return;
        }
        dropArea.style.border = "none";
        dropArea.textContent = "";
        dropSpot += 7;
        dropArea = document.getElementById(dropSpot);
        if (dropArea == null) { // Check if dropArea is null again inside the loop
            clearInterval(dropInterval);
            clearInterval(dropNewInterval);
            gameOver();
            return;
        }
        dropArea.textContent = dropThis;
    }, 2500);
    document.addEventListener("keydown", (event) => {      
        console.log (dropWord[0]);
        dropLet = dropWord[0]
        let keyCheck = event.code;
        keyCheck === "KeyW" ? keyCheck = "KeyZ" : 
            keyCheck === "KeyZ" ? keyCheck = "KeyW" :
                keyCheck === "Semicolon" ? keyCheck = "KeyM" :
                    keyCheck === "KeyA" ? keyCheck = "KeyQ" :
                        keyCheck === "KeyQ" ? keyCheck = "KeyA" :
                            keyCheck === "KeyM" ? keyCheck = "Semicolon" : keyCheck = keyCheck;
        keyCheck = keyCheck[3].toLowerCase();
        keyCheck == dropLet ? console.log("match") : console.log("bad");
        
   //     event === dropWord[0] ? dropWord.style.color = "green" : dropWord.style.color = "red"; 
    });
    }


function gameOver() {
    alert('you lose');
    startTypingGame.style.display = "block";
}

