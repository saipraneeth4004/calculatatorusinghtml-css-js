

const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;
        if (buttonValue === 'AC') {
            input.value = '';
        } else if (buttonValue === 'DEL') {



            
            input.value = input.value.slice(0, -1);

            
        } else if (buttonValue === '=') {
            try {
                input.value = eval(input.value);
            } catch (error) {
                input.value = 'Error';
            }
        } else {
            input.value += buttonValue;
        }
    });
});
