function Addition() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 + number2
  let result = document.getElementById('result')
  result.p = answer
}

function Subtraction() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 - number2
  let result = document.getElementById('result')
  result.p = answer
}

function Multiplication() {
  let number1 = parseFloat(document.getElementById('num1').value);
  let number2 = parseFloat(document.getElementById('num2').value);

  let answer = number1 * number2
  let result = document.getElementById('result')
  result.p = answer
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
  result.p = answer
}

