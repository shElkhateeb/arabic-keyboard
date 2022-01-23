const keyboard = document.getElementById('keyboard');
const textArea = document.getElementById('textArea');

// Add text to text area
function addText(event){
    if(event.target.tagName === 'BUTTON'){
        if(event.target.id == 'space') {
            textArea.textContent += ' ';
        }
        else {
            textArea.textContent += event.target.textContent;
        }  
    }
}

// Listen for pressing keyboard event
keyboard.addEventListener('click', addText);