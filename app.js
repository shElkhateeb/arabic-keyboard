const keyboard = document.getElementById('keyboard');
const keyboardUp = document.getElementById('keyboard-up');

const shiftButtonOn = document.getElementById('shift-on');
const shiftButtonOff = document.getElementById('shift-off');

const textArea = document.getElementById('textArea');

// Scroll to end of text area
function updateScroll(){
    textArea.scrollTop = textArea.scrollHeight;
}

// Add text to text area
function addText(event){
    // Make sure key is pressed
    if(event.target.tagName === 'BUTTON'){
        // Case shift is unpressed
        // Dispay normal keyboard
        if(event.target === shiftButtonOn) {
            keyboardUp.style.display = 'none';
            keyboard.style.display = 'grid';
        }
        // Case shift is pressed
        else if(event.target === shiftButtonOff) {
            keyboard.style.display = 'none';
            keyboardUp.style.display = 'grid';
        }
        // Case space is pressed
        else if(event.target.className === 'space') {
            textArea.textContent += ' ';
        }
        // Case backspace is pressed
        else if(event.target.className === 'backspace') {
            textArea.textContent = textArea.textContent.slice(0, -1);
        }
        // Case bracket key is pressed
        else if(event.target.className === 'bracket') {
            textArea.textContent += event.target.dataset.char;
        }
        // Case a letter is pressed
        else {
            // Add this letter to text area
                textArea.textContent += event.target.textContent;
        }  
    }
    updateScroll();
}

// Listen for pressing-keyboard event
keyboard.addEventListener('click', addText);
keyboardUp.addEventListener('click', addText);
