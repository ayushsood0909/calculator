
let scr = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            scr.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            scr.value = screenValue;
        }
        else if (buttonText == '=') {
            scr.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            scr.value = screenValue;
        }

    })
}
