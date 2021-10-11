let currentString = '';
let firstSymbol = false;
let leftOperand = 0;
let rightOperand = 0;
let operation = '';
let zeroFirst = 0;
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
                            decPoint = true;
                            firstSymbol = true;
                            console.log('Line 84 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }

                    }
                    else {
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
                    if (((currentString === '') || (currentString.charAt(0) === '0')) && (btnClicked === '0') && currentString.length <= 1) {
                        if (btnClicked === '0') { //When empty or only 1 digit and it is 0 and the 0 is pressed
                            zeroFirst = 1;
                            firstSymbol = true;
                            // document.getElementById("slt").innerHTML = btnClicked;
                            console.log("zeroFirst is: ", zeroFirst);
                            console.log('Line 115 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("curent character at 0: ", currentString.charAt(0));
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }
                        else {  //When empty or only 1 digit and it is 0 and other than 0 is pressed
                            document.getElementById("slt").innerHTML = btnClicked;
                            zeroFirst = 0;  //The first digit is not 0
                            firstSymbol = true;
                            console.log('Line 115 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("curent character at 0: ", currentString.charAt(0));
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
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
                                console.log("curent character at 0: ", currentString.charAt(0));
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("firstSymbol is: ", firstSymbol);
                                console.log("decPoint is:", decPoint);
                                break;
                            }
                            else {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                firstSymbol = true;
                                zeroFirst = 0;
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("curent character at 0: ", currentString.charAt(0));
                                console.log("firstSymbol is: ", firstSymbol);
                                console.log("decPoint is:", decPoint);
                                break;
                            }
                        }
                        else {
                            if ((btnClicked === '.') && (currentString.length < 12)) {
                                document.getElementById("slt").innerHTML = currentString;
                                console.log("currentString length is: ", currentString.length);
                                console.log('Line 122 - currentString is: ', currentString);
                                console.log("firstSymbol is: ", firstSymbol);
                                console.log("decPoint is:", decPoint);
                                break;
                            }
                            else if (currentString.length < 12) {
                                currentString = document.getElementById("slt").innerHTML = currentString + btnClicked;
                                console.log('Line 126 - currentString is: ', currentString);
                                console.log("currentString length is: ", currentString.length);
                                console.log("curent character at 0: ", currentString.charAt(0));
                                console.log("firstSymbol is: ", firstSymbol);
                                console.log("decPoint is:", decPoint);
                                break;
                            }
                            console.log("currentString length is: ", currentString.length);
                            console.log('Line 122 - currentString is: ', currentString);
                            console.log("firstSymbol is: ", firstSymbol);
                            console.log("decPoint is:", decPoint);
                            break;
                        }
                    }
                case 'AC':
                    currentString = '';
                    document.getElementById("slt").innerHTML = currentString + 0;
                    firstSymbol = false;
                    decPoint = false;
                    zeroFirst = 0;
                    break;
                case 'BKSP':
                    var l = currentString.length;
                    console.log('Line 126 - currentString is: ', currentString);
                    console.log("currentString length is: ", currentString.length);
                    console.log("curent character at 0: ", currentString.charAt(0));
                    console.log("firstSymbol is: ", firstSymbol);
                    if (l === 0) {   //If it is the first key to be pressed
                        currentString = '';
                        console.log(l);
                        console.log('Line 162 - currentString is: ', currentString);
                        break;
                    }
                    else {
                        if (currentString.charAt(l - 1) === '.') {     //If we delete the DEC symbol, have to reset the var to false
                            currentString = currentString.slice(0, (l - 1));
                            document.getElementById("slt").innerHTML = currentString;
                            decPoint = false;
                            l = currentString.length;
                            console.log('Line 126 - currentString is: ', currentString);
                            console.log("currentString length is: ", currentString.length);
                            console.log("curent character at 0: ", currentString.charAt(0));
                            console.log("firstSymbol is: ", firstSymbol);
                            break;
                        }
                        if (currentString.length === 1) {    //When there is only 1 digit left, remove it and put zero
                            currentString = '';
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
                        if (currentString.charAt(0) === 0 && currentString.length === 1) {
                            currentString = '';     //when the only digit is first 0 
                            firstSymbol = false;
                            decPoint = false;
                            document.getElementById("slt").innerHTML = 0;
                            console.log(l);
                            console.log('Line 186 - currentString is: ', currentString);
                            break;
                        }
                        currentString = currentString.slice(0, (l - 1));
                        document.getElementById("slt").innerHTML = currentString;
                        l = currentString.length;
                        console.log('Line 126 - currentString is: ', currentString);
                        console.log("currentString length is: ", currentString.length);
                        console.log("curent character at 0: ", currentString.charAt(0));
                        console.log("firstSymbol is: ", firstSymbol);
                        break;
                    }
            }
            return (btnClicked);
        })
    })
}

btnPressed();