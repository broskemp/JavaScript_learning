function UserChoice(){
  let choice = document.getElementById('operation').value;
  if (choice === "add"){
    Addition();
  } else if (choice === "sub"){
    Subtraction();
  } else if (choice === "multi"){
    Multiplication();
  } else if (choice === "div"){
    Division();
}}

function Addition() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 + number2
  let result = document.getElementById('result')
  result.innerHTML = answer
}

function Subtraction() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 - number2
  let result = document.getElementById('result')
  result.innerHTML = answer
}

function Multiplication() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 * number2
  let result = document.getElementById('result')
  result.innerHTML = answer
}

function Division() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  if (number2 == 0) {
            alert("Cannot divide by zero!!");
            return "Cannot divide by zero!!";
        }
  let answer = number1 / number2
  let result = document.getElementById('result')
  result.innerHTML = answer
}

let button = document.querySelector('button')
button.onclick = UserChoice