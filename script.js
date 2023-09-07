const textList = ["outgoing.", "creative.", "motivated.", "Theo Laleian."];
const outputElement = document.getElementById("typed-output");
const cursorElement = document.querySelector(".cursor");
let currentStringIndex = 0;
let currentCharIndex = 0;
let deleting = false;

function typeCharacter() {
    const div = document.getElementById('learn-more');
    if (!deleting) {
        if (currentCharIndex < textList[currentStringIndex].length) {
            outputElement.textContent += textList[currentStringIndex][currentCharIndex];
            currentCharIndex++;
            setTimeout(typeCharacter, 100);
        } else {
            if (currentStringIndex === textList.length - 1) {
                cursorElement.style.display = 'none';
                div.style.opacity = '1';
                return;
            }
            setTimeout(() => {
                deleting = true;
                typeCharacter();
            }, 1000);
        }
    } else {
        if (currentCharIndex > 0) {
            outputElement.textContent = outputElement.textContent.slice(0, -1);
            currentCharIndex--;
            setTimeout(typeCharacter, 50);
        } else {
            currentStringIndex++;
            deleting = false;
            setTimeout(typeCharacter, 500);
        }
    }
}

typeCharacter();

document.addEventListener('scroll', function() {
    const div = document.getElementById('alternating-div-2');
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    const percentageVisible = 1 - ((rect.bottom - windowHeight) / rect.height);

    if (percentageVisible >= 0.125) {
        div.style.opacity = '1';
    } else {
        div.style.opacity = '0';
    }
});

