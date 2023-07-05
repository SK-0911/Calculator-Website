function clearResult() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    document.getElementById("result").value =
        document.getElementById("result").value.slice(0, -1);
}

function calculateResult() {
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

function appendToResult(value) {
    document.getElementById("result").value += value;
}