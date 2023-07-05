# Cool JS Calculator

# Cool Calculator using HTML, CSS, and JavaScript

## Introduction

In this project, we will build a stylish calculator using HTML, CSS, and JavaScript. The calculator will have a sleek design and basic functionality.

## Step 1: HTML Structure

First, let's set up the basic HTML structure for our calculator. Create a new HTML file and add the following code:

```HTML
<!DOCTYPE html>
<html>
<head>
  <title>Cool Calculator</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="calculator">
    <input type="text" id="result" readonly>
    <div class="buttons">
      <!-- Calculator buttons will go here -->
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

```

## Step 2: Styling the Calculator

Next, let's add some CSS to style our calculator. Create a new CSS file called `style.css` and add the following code:

```CSS
/* CSS Styles for Calculator */

body {
  background-color: #f4f4f4;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.calculator {
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 300px;
}

input[type="text"] {
  width: 280px;
  height: 50px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 24px;
  padding: 5px 10px;
  margin-bottom: 10px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
}

button {
  background-color: #999;
  color: #fff;
  border: none;
  border-radius: 5px;
  height: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #777;
}

button:active {
  background-color: #555;
}

.del-btn {
    background-color: red;
    color: #fff;
}

.del-btn:hover {
    background-color: darkred;
}

.equal-btn{
    background-color: green;
    color: #fff;
}

.equal-btn:hover {
    background-color: darkgreen;
}

.orange-btn {
    background-color: #f90;
    color: #fff;
}

.orange-btn:hover {
    background-color: #f60;
}

```

## Step 3: Handling Calculator Operations with JavaScript

Now, let's write the JavaScript code to handle the calculator operations. Create a new JavaScript file called `script.js` and add the following code:

```javascript
// Clear the calculator result
function clearResult() {
    document.getElementById("result").value = "";
}

// Delete the last character from the calculator result
function deleteLast() {
    document.getElementById("result").value = 
        document.getElementById("result").value.slice(0, -1);
}

// Append a value to the calculator result
function calculateResult() {
    let result = document.getElementById("result");
    result.value = eval(result.value);
}

// Calculate the result
function appendToResult(value) {
    document.getElementById("result").value += value;
}

```

## Step 4: Adding Buttons to the Calculator

Now that we have our JavaScript functions defined, let's add the buttons to our calculator. Inside the `<div class="buttons">

` element in your HTML file, add the following code for each button:

```html
<button onclick="clearResult()" class="orange-btn">C</button>
<button onclick="deleteLast()" class="del-btn">DEL</button>
<button onclick="appendToResult('9')">9</button>
<button onclick="appendToResult('8')">8</button>
<button onclick="appendToResult('7')">7</button>
<button onclick="appendToResult('/')">/</button>
<button onclick="appendToResult('*')">*</button>
<button onclick="appendToResult('6')">6</button>
<button onclick="appendToResult('5')">5</button>
<button onclick="appendToResult('4')">4</button>
<button onclick="appendToResult('-')">-</button>
<button onclick="appendToResult('+')">+</button>
<button onclick="appendToResult('3')">3</button>
<button onclick="appendToResult('2')">2</button>
<button onclick="appendToResult('1')">1</button>
<button onclick="calculateResult()" class="equal-btn">=</button>
<button onclick="appendToResult('.')">.</button>
<button onclick="appendToResult('0')">0</button>

```

## Step 5: Conclusion

Feel free to contribute to this repository and customize the styles and add more advanced features as per your requirements.

Remember to exercise caution when using the `eval()` function, 
as it can pose security risks if used improperly. 
It's always a good practice to sanitize and validate user input before evaluating it.

Eval Link Documentation -  [https://www.w3schools.com/jsref/jsref_eval.asp](https://www.w3schools.com/jsref/jsref_eval.asp)

---