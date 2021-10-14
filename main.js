const PI = 3.1415926535;
let currentString = '';
let upperString = '';
let firstSymbol = false;
let leftOperand = '';
let lOpNotEqls0 = true;
let rightOperand = '';
let operation = '';
let result = 0;
let zeroFirst = 0;
let decPoint = false;


function resetVar() {
    firstSymbol = false;
    lOpNotEqls0 = true;
    decPoint = false;
    currentString = '';
    leftOperand = '';
    rightOperand = '';
    operation = '';
    result = 0;
    zeroFirst = 0;
}

function clearScreen() {
    var string = document.getElementById("flt").innerHTML;
    if (string.charAt(0) == 'Y') {
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
    return (normalize(a + b, 10));
}

function substract(a, b) {
    var res = a - b;
    if (res == 0) {
        lOpNotEqls0 = false;
        return res;
    }
    else {
        return (a - b);
    }
    // return (Number((normalize(a - b, 9).toFixed(9)).toString()));
}

function divide(a, b) {
    return (normalize(a / b, 6));
}

function multiply(a, b) {
    return (normalize(a * b, 6));
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
    let btnClicked = '';
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
                        console.log('Line 69 - currentString is: ', currentString);
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
                        break;
                    }
                    else if ((currentString.length < 12) && (decPoint === false) && (firstSymbol === true)) {
                        if (zeroFirst == 1) {  //When the first digit is 0 and no DEC used so far.
                            currentString = document.getElementById("slt").innerHTML = 0 + btnClicked;
                            decPoint = true;
                            console.log("zeroFirst is: ", zeroFirst);
                            console.log('Line 69 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }
                        else {
                            currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                            decPoint = true;    //When the first digit is other than 0 and no DEC is used
                            firstSymbol = true;
                            console.log('Line 84 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }

                    }
                    else {  // Prevent of typing multiple DEC, when there is one already
                        document.getElementById("slt").innerHTML = currentString;
                        console.log('Line 93 - currentString is: ', currentString);
                        console.log("firstSymbol is: ", firstSymbol);
                        console.log("decPoint is:", decPoint);
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
                            // lOpNotEqls0 = false;
                            firstSymbol = true; //When display is 0 and pressing 0 again - do nothing.
                            currentString = document.getElementById("slt").innerHTML = btnClicked; //! added after adding + operatioin to diplay
                            //second operand if it starts with 0!
                            console.log("zeroFirst is: ", zeroFirst);
                            console.log('Line 115 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("Right Operand is: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
                            break;
                        }
                        else {  //When empty or only 1 digit and it is 0 and other than 0 is pressed
                            document.getElementById("slt").innerHTML = btnClicked;
                            zeroFirst = 0;  //The first digit is not 0
                            firstSymbol = true;
                            console.log('Line 115 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("Right Operand is: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
                            break;
                        }
                    }
                    else {
                        if (currentString.length < 12 && (decPoint === false)) {
                            if ((currentString.charAt(0) == 0) && (currentString.length == 1)) {
                                currentString = document.getElementById("slt").innerHTML = btnClicked;
                                firstSymbol = true;
                                zeroFirst = 0;
                                console.log("currentString length is: ", currentString.length);
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("Right Operand is: ", rightOperand);
                                console.log("Left Operand is: ", leftOperand);
                                break;
                            }
                            else {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                firstSymbol = true;
                                zeroFirst = 0;
                                console.log("Code comes here: ")
                                console.log('Line 126 - currentString is e 6: ', currentString);
                                console.log("Result is: ", result);
                                console.log("operation is: ", operation);
                                console.log("Right Operand is: ", rightOperand);
                                console.log("Left Operand is: ", leftOperand);
                                break;
                            }
                        }
                        else {
                            if ((btnClicked == '.') && (currentString.length < 12)) {
                                document.getElementById("slt").innerHTML = currentString;
                                console.log("currentString length is: ", currentString.length);
                                console.log('Line 122 - currentString is: ', currentString);
                                console.log("Right Operand is: ", rightOperand);
                                console.log("Left Operand is: ", leftOperand);
                                break;
                            }
                            else if (currentString.length < 12) {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("Right Operand is: ", rightOperand);
                                console.log("Left Operand is: ", leftOperand);
                                break;
                            }
                            console.log("currentString length is: ", currentString.length);
                            console.log('Line 122 - currentString is: ', currentString);
                            console.log("Right Operand is: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
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
                    console.log('Line 126 - currentString is: ', currentString);
                    console.log("currentString length is: ", currentString.length);
                    console.log("curent character at 0: ", currentString.charAt(0));
                    console.log("firstSymbol is: ", firstSymbol);
                    if (l === 0) {   //If it is the first key to be pressed - do nothing
                        currentString = '';
                        console.log(l);
                        console.log('Line 162 - currentString is: ', currentString);
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
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("curent character at 0: ", currentString.charAt(0));
                            console.log("firstSymbol is: ", firstSymbol);
                            break;
                        }
                        if ((currentString.length == 1) || (currentString.length == 2 && currentString.charAt(0) == '-')) {
                            currentString = ''; //When there is only 1 digit left or 2 symbols and the first is NEG '-' remove it and put zero
                            document.getElementById("slt").innerHTML = 0;
                            firstSymbol = false;
                            decPoint = false;
                            l = currentString.length;
                            zeroFirst = 0;
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("curent character at 0: ", currentString.charAt(0));
                            console.log("firstSymbol is: ", firstSymbol);
                            break;
                        }
                        if (currentString.charAt(0) == 0 && currentString.length == 1) {
                            currentString = '';     //when the only digit is first 0 
                            firstSymbol = false;
                            decPoint = false;
                            document.getElementById("slt").innerHTML = 0;
                            console.log(l);
                            console.log('Line 186 - currentString is: ', currentString);
                            break;
                        }
                        currentString = currentString.slice(0, (l - 1));    //normal deletion of a last digit
                        document.getElementById("slt").innerHTML = currentString;
                        l = currentString.length;
                        console.log('Line 126 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        break;
                    }
                case 'NEG':
                    clearScreen();
                    if (Number(currentString) > 0) {
                        currentString = document.getElementById("slt").innerHTML = '-' + currentString;
                        console.log('Line 126 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        break;
                    }
                    else if (Number(currentString) < 0) {
                        currentString = currentString.substr(1, currentString.length - 1);
                        currentString = document.getElementById("slt").innerHTML = currentString;
                        console.log('Line 126 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        break;
                    }
                    else {
                        document.getElementById("slt").innerHTML = '0';
                        console.log('Line 126 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        break;
                    }
                case 'ADD':
                    clearScreen();
                    if (leftOperand == '' && lOpNotEqls0) { //If this is the first press of +
                        upperString = document.getElementById("flt").innerHTML = currentString + ' +';
                        leftOperand = Number(currentString);
                        console.log("+ is pressed for a first time!");
                        console.log('Line 300 - currentString is: ', currentString);
                        console.log("Right Operand is: ", rightOperand);
                        console.log("Left Operand is: ", leftOperand);
                        operation = 'ADD';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation == 'DIV') {
                            console.log('Line 313 - currentString is: ', currentString);
                            console.log("Right Operand is: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
                            upperString = document.getElementById("flt").innerHTML = "You're breaking my heart. Just don't!";
                            document.getElementById("slt").innerHTML = "It is Undefined!";
                            break;
                        }
                        else {
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'ADD';
                            upperString = document.getElementById("flt").innerHTML = result + ' +';
                            leftOperand = result;
                            console.log("Left Operand is: ", leftOperand);
                            console.log("Right Operand is 0: ", rightOperand);
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("Result is: ", result);
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("Result is: ", result);
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
                    if (leftOperand == '' && lOpNotEqls0) { //If this is the first press of -
                        console.log("lOpNotEqls0 e ", lOpNotEqls0);
                        upperString = document.getElementById("flt").innerHTML = currentString + ' -';
                        leftOperand = Number(currentString);
                        console.log("- is pressed for a first time!");
                        console.log('Line 351 - currentString is: ', currentString);
                        console.log("Left Operand is: ", leftOperand);
                        operation = 'SUBS';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation == 'DIV') {
                            console.log('Line 358 - currentString is: ', currentString);
                            console.log("Right Operand is 0: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
                            console.log("Result is: ", result);
                            console.log("Operation is: ", operation);
                            upperString = document.getElementById("flt").innerHTML = "You're breaking my heart. Just don't!";
                            document.getElementById("slt").innerHTML = "It is Undefined!";
                            break;
                        }
                        else {
                            console.log("I am here line 375");
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'SUBS';
                            upperString = document.getElementById("flt").innerHTML = result + ' -';
                            leftOperand = result;
                            console.log('Line 375 - currentString is: ', currentString);
                            console.log("Right Operand is 0: ", rightOperand);
                            console.log("Left Operand is: ", leftOperand);
                            console.log("Result is: ", result);
                            console.log("Operation is: ", operation);
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
                case 'MLTP':
                    clearScreen();
                    if (leftOperand == '' && lOpNotEqls0) { //If this is the first press of *
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
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation == 'DIV') {
                            upperString = document.getElementById("flt").innerHTML = "You're breaking my heart. Just don't!";
                            document.getElementById("slt").innerHTML = "It is Undefined!";
                            break;
                        }
                        else {
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'MLTP';
                            upperString = document.getElementById("flt").innerHTML = result + ' *';
                            leftOperand = result;
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("Result is: ", result);
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("Result is: ", result);
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
                    if (leftOperand == '' && lOpNotEqls0) { //If this is the first press of /
                        upperString = document.getElementById("flt").innerHTML = currentString + ' /';
                        leftOperand = Number(currentString);
                        if(leftOperand == 0) {
                            lOpNotEqls0 = false;
                        }
                        console.log("Left Operand is: ", leftOperand);
                        console.log("Right Operand is: ", rightOperand);
                        console.log('Line 483 - currentString is: ', currentString);
                        operation = 'DIV';
                        currentString = '';
                        firstSymbol = false;
                        decPoint = false;
                        zeroFirst = 0;
                        break;
                    }
                    else if ((leftOperand !== '') && (rightOperand == '')) { //When there is already left operand
                        rightOperand = Number(currentString);
                        if (rightOperand === 0 && operation == 'DIV') {
                            console.log("Right Operand is 0: ", rightOperand);
                            console.log('Line 126 - currentString is: ', currentString);
                            upperString = document.getElementById("flt").innerHTML = "You're breaking my heart. Just don't!";
                            document.getElementById("slt").innerHTML = "It is Undefined!";
                            break;
                        }
                        else {
                            result = operate(operation, leftOperand, rightOperand);
                            operation = 'DIV';
                            upperString = document.getElementById("flt").innerHTML = result + ' /';
                            leftOperand = result;
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("Result is: ", result);
                            if (result.toString().length > 12) {
                                result = result.toExponential();
                                result = precise(result.toString());
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("Result is: ", result);
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
                case 'EQL':
                    clearScreen();
            }
            return (btnClicked);
        })
    })
}

btnPressed();