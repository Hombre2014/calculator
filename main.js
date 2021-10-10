let currentString = '';

function add(a, b) {
    return (a + b);
}

function substract(a, b) {
    return (a - b);
}

function divide(a, b) {
    return (a / b);
}

function multiply(a, b) {
    return (a * b);
}

function exponent(a, b) {
    var result = 1;
    for(var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

function operate(operand, a, b) {
    var result = 0;
    switch(operand) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = substract(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '^':
            result = exponent(a, b);
            break;
    }
    return result;
}

function btnPressed() {
    var buttons = [];
    let btnClicked = '';
    buttons = document.querySelectorAll('.calc-btn');
    buttons.forEach(div => {
        div.addEventListener('click', function () {
            btnClicked = div.dataset.value;
            document.getElementById("slt").innerHTML = btnClicked;
            console.log(btnClicked);
            return(btnClicked);
        })
    })
}

let x = btnPressed();
console.log(x);