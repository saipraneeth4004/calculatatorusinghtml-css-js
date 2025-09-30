const input = document.getElementById('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        switch (value) {
            case 'AC':
                input.value = '';
                break;
            case 'DEL':
                input.value = input.value.slice(0, -1);
                break;
            case '=':
                try {
                    // Using Function constructor instead of eval for slightly safer evaluation
                    input.value = new Function(`return ${input.value}`)();
                } catch {
                    input.value = 'Error';
                }
                break;
            default:
                input.value += value;
        }
    });
});
