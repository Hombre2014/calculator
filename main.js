let currentString = '';
let firstSymbol = false;
let leftOperand = 0;
let rightOperand = 0;
let operation = '';
let decPoint = false;


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
    for (var i = 0; i < b; i++) {
        result *= a;
    }
    return result;
}

function operate(operand, a, b) {
    var result = 0;
    switch (operand) {
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
            switch (btnClicked) {
                case '.':
                    if (firstSymbol === false) {
                        currentString = document.getElementById("slt").innerHTML = '0.';
                        firstSymbol = true;
                        decPoint = true;
                        console.log('Line 68 - currentString is: ', currentString);
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
                        break;
                    }
                    else if ((currentString.length < 12) && (decPoint === false) && (firstSymbol === true)) {
                        currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                        decPoint = true;
                        firstSymbol = true;
                        console.log('Line 77 - currentString is: ', currentString);
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
                        break;
                    }
                    else {
                        document.getElementById("slt").innerHTML = currentString;
                        console.log('Line 84 - currentString is: ', currentString);
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
                    }
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '0':
                    if (((currentString === '') || (currentString.charAt(0) === '0')) && (btnClicked === '0')) {
                        // currentString = btnClicked;
                        document.getElementById("slt").innerHTML = btnClicked;
                        firstSymbol = true;
                        console.log('Line 100 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
                    }
                    else {
                        if (currentString.length < 12 && (decPoint === false)) {
                            currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                            firstSymbol = true;
                            console.log('Line 109 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }
                        else {
                            if ((btnClicked === '.') && (currentString.length < 12)) {
                                document.getElementById("slt").innerHTML = currentString;
                            }
                            else if (currentString.length < 12) {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                            }
                            console.log("currentString length is: ", currentString.length);
                            console.log('Line 122 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                        }
                    }
            }
            return (btnClicked);
        })
    })
}

btnPressed();