document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    const display = calculator.querySelector('.calculator__display');
    const keys = calculator.querySelector('.calculator__keys');

    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            let displayedNum = display.textContent;

            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent;
                } else {
                    display.textContent = displayedNum + keyContent;
                }
            }

            if (action === 'decimal') {
                if (!displayedNum.includes('.')) {
                    display.textContent = displayedNum + '.';
                }
            }

            if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
                calculator.dataset.previousKeyType = 'operator';
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
            }

            if (action === 'calculate') {
                const firstValue = calculator.dataset.firstValue;
                const operator = calculator.dataset.operator;
                const secondValue = displayedNum;
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            if (action === 'clear') {
                display.textContent = '0';
            }

            Array.from(keys.children).forEach(k => k.classList.remove('is-depressed'));
        }
    });

    function calculate(n1, operator, n2) {
        let result = '';
        if (operator === 'add') result = parseFloat(n1) + parseFloat(n2);
        if (operator === 'subtract') result = parseFloat(n1) - parseFloat(n2);
        if (operator === 'multiply') result = parseFloat(n1) * parseFloat(n2);
        if (operator === 'divide') result = parseFloat(n1) / parseFloat(n2);
        return result;
    }
});
