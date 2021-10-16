const PI = 3.1415926535;
let btnClicked = '';
let currentString = '';
let upperString = '';
let firstSymbol = false;
let leftOperand = '';
let lOpNotEqls0 = true;
let rightOperand = '';
let operation = '';
let result = '';
let zeroFirst = 0;
let decPoint = false;

function resetVar() {
    firstSymbol = false;
    lOpNotEqls0 = true;
    decPoint = false;
    currentString = '';
    upperString = '';
    leftOperand = '';
    rightOperand = '';
    operation = '';
    result = ''; //Changed to '' instead of 0!
    zeroFirst = 0;
}

function divideByZero() {
    upperString = document.getElementById("flt").innerHTML = "You're breaking my heart. Just don't!";
    document.getElementById("slt").innerHTML = "It is Undefined!";
}

function clearScreen() {
    var string = document.getElementById("flt").innerHTML;
    if ((string.charAt(0) == 'Y' || string.endsWith('=')) && (btnClicked !== 'ADD' && btnClicked !== 'SUBS' && btnClicked !== 'DIV' && btnClicked !==  'MLTP' && btnClicked !== 'EXP'))
    {
        document.getElementById("flt").innerHTML = ''; //To clear the Undefined!
        currentString = '';
        document.getElementById("slt").innerHTML = currentString + 0;
        resetVar();
    }
}

function normalize(f, val) {
    var m = Math.pow(10, val);
    return parseInt(f * m, 10) / m;
}

function add(a, b) {
    var res = a + b;
    if (res == 0) {
        lOpNotEqls0 = false;
        return (normalize(a + b, 8));
    }
    else {
        return (normalize(a + b, 8));
    }
}

function substract(a, b) {
    var res = a - b;
    if (res == 0) {
        lOpNotEqls0 = false;
        return normalize(res, 7);
    }
    else {
        return normalize(res, 7);
    }
}

function divide(a, b) {
    return (normalize(a / b, 10));
}

function multiply(a, b) {
    var res = a * b;
    if (res == 0) {
        lOpNotEqls0 = false;
        return (normalize(a * b, 7));
    }
    else {
        return (normalize(a * b, 7));
    }
}

function exponent(a, b) {
    return (Math.pow(a, b));
}

function precise(x) {
    return (Number.parseFloat(x).toPrecision(7));
}

function operate(operand, a, b) {
    var answer = 0;
    switch (operand) {
        case 'ADD':
            answer = add(a, b);
            break;
        case 'SUBS':
            answer = substract(a, b);
            break;
        case 'DIV':
            answer = divide(a, b);
            break;
        case 'MLTP':
            answer = multiply(a, b);
            break;
        case 'EXP':
            answer = exponent(a, b);
            break;
    }
    return answer;
}

function btnPressed() {
    var buttons = [];
    buttons = document.querySelectorAll('.calc-btn');
    buttons.forEach(div => {
        div.addEventListener('click', function () {
            btnClicked = div.dataset.value;
            switch (btnClicked) {
                case '.':
                    clearScreen();
                    if (firstSymbol === false) {    //If the first symbol is DEC
                        currentString = document.getElementById("slt").innerHTML = 0 + btnClicked;
                        firstSymbol = true;
                        decPoint = true;
                        break;
                    }
                    else if ((currentString.length < 12) && (decPoint === false) && (firstSymbol === true)) {
                        if (zeroFirst == 1) {  //When the first digit is 0 and no DEC used so far.
                            currentString = document.getElementById("slt").innerHTML = 0 + btnClicked;
                            decPoint = true;
                            break;
                        }
                        else {
                            currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                            decPoint = true;    //When the first digit is other than 0 and no DEC is used
                            firstSymbol = true;
                            break;
                        }
                    }
                    else {  // Prevent of typing multiple DEC, when there is one already
                        document.getElementById("slt").innerHTML = currentString;
                        break;
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
                    clearScreen();
                    if (((currentString == '') || (currentString.charAt(0) == '0')) && (btnClicked == '0') && currentString.length <= 1) {
                        if (btnClicked == '0') { //When empty or only 1 digit and it is 0 and the 0 is pressed
                            zeroFirst = 1;
                            firstSymbol = true; //When display is 0 and pressing 0 again - do nothing.
                            currentString = document.getElementById("slt").innerHTML = btnClicked; //! added after adding + operatioin to display
                            break;  //second operand if it starts with 0!
                        }
                        else {  //When empty or only 1 digit and it is 0 and other than 0 is pressed
                            document.getElementById("slt").innerHTML = btnClicked;
                            zeroFirst = 0;  //The first digit is not 0
                            firstSymbol = true;
                            break;
                        }
                    }
                    else {
                        if (currentString.length < 12 && (decPoint === false)) {
                            if ((currentString.charAt(0) == 0) && (currentString.length == 1)) {
                                currentString = document.getElementById("slt").innerHTML = btnClicked;
                                firstSymbol = true;
                                zeroFirst = 0;
                                break;
                            }
                            else {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                firstSymbol = true;
                                zeroFirst = 0;
                                break;
                            }
                        }
                        else {
                            if ((btnClicked == '.') && (currentString.length < 12)) {
                                document.getElementById("slt").innerHTML = currentString;
                                break;
                            }
                            else if (currentString.length < 12) {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                break;
                            }
                            break;
                        }
                    }
                case 'AC':
                    currentString = '';
                    document.getElementById("slt").innerHTML = currentString + 0;
                    document.getElementById("flt").innerHTML = '';
                    resetVar();
                    break;
                case 'BKSP':
                    clearScreen();
                    var l = currentString.length;
                    if (l === 0) {   //If it is the first key to be pressed - do nothing
                        currentString = '';
                        break;
                    }
                    else {  //There is already some numbers entered.
                        if (currentString.charAt(l - 1) == '.') {     //If we delete the DEC symbol, have to reset the var decPoint to false
                            currentString = currentString.slice(0, (l - 1));
                            document.getElementById("slt").innerHTML = currentString;
                            decPoint = false;
                            l = currentString.length;
                            if (currentString.charAt(1) == '0' && currentString.charAt(0) == '-') {
                                decPoint = false; //When there is only '-0' left on display remove it after deleting DEC point and put 0.
                                currentString = '';
                                firstSymbol = false;
                                zeroFirst = 0;
                                document.getElementById("slt").innerHTML = '0';
                                break;
                            }
                            break;
                        }
                        if ((currentString.length == 1) || (currentString.length == 2 && currentString.charAt(0) == '-')) {
                            currentString = ''; //When there is only 1 digit left or 2 symbols and the first is NEG '-' remove it and put zero
                            document.getElementById("slt").innerHTML = 0;
                            firstSymbol = false;
                            decPoint = false;
                            l = currentString.length;
                            zeroFirst = 0;
                            break;
                        }
                        if (currentString.charAt(0) == 0 && currentString.length == 1) {
                            currentString = '';     //when the only digit is first 0 
                            firstSymbol = false;
                            decPoint = false;
                            document.getElementById("slt").innerHTML = 0;
                            break;
                        }
                        currentString = currentString.slice(0, (l - 1));    //normal deletion of a last digit
                        document.getElementById("slt").innerHTML = currentString;
                        l = currentString.length;
                        break;
                    }
                case 'NEG':
                    if (upperString.endsWith('=') || result !== '') {
                        console.log("UpperString: ", upperString);
                        console.log("currentString: ", currentString);
                        console.log("Result: ", result);
                        if (result > 0) {
                            currentString = document.getElementById("slt").innerHTML = '-' + result;
                            upperString = document.getElementById("flt").innerHTML = '-' + result;
                            leftOperand = '-' + result;
                            result = Number(leftOperand);
                            currentString = '';
                            firstSymbol = true;
                            lOpNotEqls0 = true;
                            decPoint = false;
                            rightOperand = '';
                            operation = '';
                            zeroFirst = 0;
                            break;
                        }
                        else if (result < 0) {
                            currentString = document.getElementById("slt").innerHTML = Math.abs(result);
                            document.getElementById("slt").innerHTML = currentString;
                            upperString = document.getElementById("flt").innerHTML = currentString;
                            leftOperand = currentString;
                            result = Number(leftOperand);
                            currentString = '';
                            firstSymbol = true;
                            lOpNotEqls0 = true;
                            decPoint = false;
                            rightOperand = '';
                            operation = '';
                            zeroFirst = 0;
                            break;
                        }
                        else {
                            document.getElementById("slt").innerHTML = '0';
                            leftOperand = currentString;
                            firstSymbol = true;
                            lOpNotEqls0 = false;
                            decPoint = false;
                            rightOperand = '';
                            operation = '';
                            zeroFirst = 1;
                            break;
                        }
                    }
                    else if (Number(currentString) > 0 && (result === '' )) { //remove from condition && operation !== ''
                        currentString = document.getElementById("slt").innerHTML = '-' + currentString;
                        console.log(leftOperand, operation, currentString);
                        firstSymbol = true;
                        lOpNotEqls0 = true;
                        decPoint = false;
                        rightOperand = '';
                        // operation = '';
                        zeroFirst = 0;
                        break;
                    }
                    else if (Number(currentString) < 0 && (result === '' )) { //remove from condition && operation !== ''
                        currentString = currentString.substr(1, currentString.length - 1);
                        console.log(leftOperand, operation, currentString);
                        currentString = document.getElementById("slt").innerHTML = currentString;
                        firstSymbol = true;
                        lOpNotEqls0 = true;
                        decPoint = false;
                        rightOperand = '';
                        // operation = '';
                        zeroFirst = 0;
                        break;
                    }
                    else {
                        document.getElementById("slt").innerHTML = '0';
                        console.log("currentString", currentString);
                        firstSymbol = true;
                        lOpNotEqls0 = true;
                        decPoint = false;
                        // currentString = '';
                        rightOperand = '';
                        operation = '';
                        zeroFirst = 0;
                        break;
                    }
                case 'ADD':
                    clearScreen();
                    if (leftOperand === '' && lOpNotEqls0) { //If this is the first press of +
                        upperString = document.getElementById("flt").innerHTML = currentString + ' +';
                        leftOperand = Number(currentString);
                        operation = 'ADD';
                        console.log("operation: ", operation);
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand === '')) { //When there is already left operand
                        if (currentString === '') {
                            upperString = document.getElementById("flt").innerHTML = result + ' +';
                            operation = 'ADD';
                            break;
                        }
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation === 'DIV') {
                            divideByZero();
                            break;
                        }
                        else {
                            leftOperand = Number(leftOperand);
                            operation = 'ADD';
                            result = operate(operation, leftOperand, rightOperand);
                            // operation = 'ADD';
                            upperString = document.getElementById("flt").innerHTML = result + ' +';
                            leftOperand = Math.round(result);
                            if (result.toString().length > 12) {
                                result = Math.round(result.toExponential());
                            }
                            document.getElementById("slt").innerHTML = result;
                            rightOperand = '';
                            currentString = '';
                            firstSymbol = false;
                            decPoint = false;
                            zeroFirst = 0;
                            break;
                        }
                    }
                case 'SUBS':
                    clearScreen();
                    if (leftOperand === '' && lOpNotEqls0) { //If this is the first press of -
                        upperString = document.getElementById("flt").innerHTML = currentString + ' -';
                        leftOperand = Number(currentString);
                        operation = 'SUBS';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        if (currentString === '') {
                            upperString = document.getElementById("flt").innerHTML = result + ' -';
                            operation = 'SUBS';
                            break;
                        }
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation === 'DIV') {
                            divideByZero();
                            break;
                        }
                        else {
                            leftOperand = Number(leftOperand);
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'SUBS';
                            upperString = document.getElementById("flt").innerHTML = result + ' -';
                            leftOperand = result; //Check it out if needs Math.round!
                            if (result.toString().length > 12) {
                                result = Number(result);
                                result = result.toExponential();
                                result = precise(result.toString());
                            }
                            document.getElementById("slt").innerHTML = result;
                            rightOperand = '';
                            currentString = '';
                            firstSymbol = false;
                            decPoint = false;
                            zeroFirst = 0;
                            break;
                        }
                    }
                case 'MLTP':
                    clearScreen();
                    if (leftOperand === '' && lOpNotEqls0) { //If this is the first press of *
                        upperString = document.getElementById("flt").innerHTML = currentString + ' *';
                        leftOperand = Number(currentString);
                        operation = 'MLTP';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        if (currentString === '') {
                            upperString = document.getElementById("flt").innerHTML = result + ' *';
                            operation = 'MLTP';
                            break;
                        }
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation === 'DIV') {
                            divideByZero();
                            break;
                        }
                        else {
                            rightOperand = Number(currentString);
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'MLTP';
                            upperString = document.getElementById("flt").innerHTML = result + ' *';
                            leftOperand = result;
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                            }
                            document.getElementById("slt").innerHTML = result;
                            rightOperand = '';
                            currentString = '';
                            firstSymbol = false;
                            decPoint = false;
                            zeroFirst = 0;
                            break;
                        }
                    }
                case 'DIV':
                    clearScreen();
                    if (leftOperand === '' && lOpNotEqls0) { //If this is the first press of /
                        upperString = document.getElementById("flt").innerHTML = currentString + ' /';
                        leftOperand = Number(currentString);
                        if (leftOperand == 0) {
                            lOpNotEqls0 = false;
                        }
                        operation = 'DIV';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand === '')) { //When there is already left operand    
                        if (currentString === '') {
                            upperString = document.getElementById("flt").innerHTML = result + ' /';
                            operation = 'DIV';
                            break;
                        }
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation === 'DIV') {
                            divideByZero();
                            break;
                        }
                        else {
                            rightOperand = Number(currentString);
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'DIV';
                            upperString = document.getElementById("flt").innerHTML = result + ' /';
                            leftOperand = result;
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                            }
                            document.getElementById("slt").innerHTML = result;
                            rightOperand = '';
                            currentString = '';
                            firstSymbol = false;
                            decPoint = false;
                            zeroFirst = 0;
                            break;
                        }
                    }
                case 'EXP':
                    clearScreen();
                    if (leftOperand === '' && lOpNotEqls0) { //If this is the first press of ^
                        upperString = document.getElementById("flt").innerHTML = currentString + ' ^';
                        leftOperand = Number(currentString);
                        operation = 'EXP';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        if (currentString === '') {
                            upperString = document.getElementById("flt").innerHTML = result + ' ^';
                            operation = 'EXP';
                            break;
                        }
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation === 'DIV') {
                            divideByZero();
                            break;
                        }
                        else {
                            rightOperand = Number(currentString);
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'EXP';
                            upperString = document.getElementById("flt").innerHTML = result + ' ^';
                            leftOperand = result;
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                            }
                            document.getElementById("slt").innerHTML = result;
                            rightOperand = '';
                            currentString = '';
                            firstSymbol = false;
                            decPoint = false;
                            zeroFirst = 0;
                            break;
                        }
                    }
                case 'EQL':
                    clearScreen();
                    if (leftOperand !== '' && operation !== '') {
                        if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                            rightOperand = Number(currentString);
                            console.log("CurrentString: ", currentString);
                            console.log("leftOperand: ", leftOperand);
                            console.log("rightOperand: ", rightOperand);
                            console.log("operation: ", operation);
                            if (rightOperand === 0 && operation === 'DIV') {
                                console.log("CurrentString: ", currentString);
                                console.log("leftOperand: ", leftOperand);
                                console.log("rightOperand: ", rightOperand);
                                console.log("operation: ", operation);
                                divideByZero();
                                break;
                            }
                            else {
                                rightOperand = Number(currentString);
                                leftOperand = Number(leftOperand);
                                // operation = operation;
                                console.log("operation: ", operation);
                                console.log("operation: ", operation, leftOperand, rightOperand);
                                result = operate(operation, leftOperand, rightOperand);
                                var currentOp = '';
                                switch (operation) {
                                    case 'ADD':
                                        currentOp = '+';
                                        break;
                                    case 'SUBS':
                                        currentOp = '-';
                                        break;
                                    case 'MLTP':
                                        currentOp = '*';
                                        break;
                                    case 'DIV':
                                        currentOp = '/';
                                        break;
                                    case 'EXP':
                                        currentOp = '^';
                                        break;
                                }
                                upperString = document.getElementById("flt").innerHTML = leftOperand + ' ' + currentOp + ' ' + rightOperand + ' =';
                                console.log("upperString: ", upperString);
                                console.log("CurrentString: ", currentString);
                                if (result.toString().length > 12) {
                                    result = result.toExponential();
                                    result = precise(result.toString());
                                }
                                document.getElementById("slt").innerHTML = result;
                                console.log("result: ", result);
                                rightOperand = '';
                                currentString = '';
                                leftOperand = result;
                                console.log("leftOperand: ", leftOperand);
                                console.log("CurrentString: ", currentString);
                                firstSymbol = false;
                                decPoint = false;
                                zeroFirst = 0;
                                break;
                            }
                        }
                    }
                default: {
                    btnClicked = btnClicked;
                }
            }
            return (btnClicked);
        })
    })
}

btnPressed();