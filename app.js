const keyboard = document.getElementById('keyboard');
const textArea = document.getElementById('textArea');

// Add text to text area
function addText(event){
    // Make sure key is pressed
    if(event.target.tagName === 'BUTTON'){
        // Case space is pressed
        if(event.target.id === 'space') {
            textArea.textContent += ' ';
        }
        // Case shift is pressed
        else if(event.target.id === 'shift') {

        }
        // Case a letter is pressed
        else {
            // Add this letter to text area
            textArea.textContent += event.target.textContent;
        }  
    }
}

// Listen for pressing-keyboard event
keyboard.addEventListener('click', addText);