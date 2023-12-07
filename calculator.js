function clearResult() {
    document.getElementById('result').value = '';
}

function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function calculate() {
    const expression = document.getElementById('result').value;
    const result = eval(expression);
    document.getElementById('result').value = result;
}