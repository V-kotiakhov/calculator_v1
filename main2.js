const inputCalc = document.querySelector('.number');
resultOut = document.querySelector('.out');

function input(x) {
    inputCalc.value += x;
}

function result() {
    if (eval(inputCalc.value) == undefined) {
        resultOut.value = "Введите число!";
        inputOut.value = "0.00";
    } else if (eval(inputCalc.value) == Infinity) {
        resultOut.value = "Делить на 0 нельзя!";
        inputOut.value = "0.00";
    }
    resultOut.value = eval(inputCalc.value);
    inputOut.value = eval(inputCalc.value);
}

function backspace() {
    inputCalc.value = inputCalc.value.substring(0, inputCalc.value.length - 1);
}

function clin() {
    inputCalc.value = "";
    resultOut.value = "0.00";
}




