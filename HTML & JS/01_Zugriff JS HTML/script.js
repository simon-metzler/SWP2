function plus(){

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) + parseInt(num2);

    document.getElementById("result").innerHTML = "Result:" + result;

}

function minus(){

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) - parseInt(num2);

    document.getElementById("result").innerHTML = "Result:" + result;

}

function multiplied(){

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) * parseInt(num2);

    document.getElementById("result").innerHTML = "Result:" + result;

}

function divided(){

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;

    let result = parseInt(num1) / parseInt(num2);

    document.getElementById("result").innerHTML = "Result:" + result;

}
