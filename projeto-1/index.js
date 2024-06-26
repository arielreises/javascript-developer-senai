function calculator() {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);

    let total = 0;
    let selectedOperation = document.querySelector('input[name="sign-area"]:checked').value;

    switch (selectedOperation) {
        case 'addition':
            total = num1 + num2;
            break;
        case 'subtraction':
            total = num1 - num2;
            break;
        case 'multiplication':
            total = num1 * num2;
            break;
        case 'division':
            if (num2 === 0) {
                document.getElementById('result').innerHTML = 'Error: Division by zero';
                return;
            }
            total = num1 / num2;
            break;
        case 'power':
            total = Math.pow(num1, num2);
            break;
        case 'root':
            if (num1 < 0) {
                document.getElementById('result').innerHTML = 'Error: Negative number for root';
                return;
            }
            total = Math.pow(num1, 1 / num2);
            break;
        case 'percentage':
            total = (num1 * num2) / 100;
            document.getElementById('result').innerHTML = 'Result: ' + total + '%';
            return;
        default:
            document.getElementById('result').innerHTML = 'Error: Invalid operation';
            return;
    }

    document.getElementById('result').innerHTML = 'Result: ' + total;
}
