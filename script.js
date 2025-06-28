 function calculate(operation) {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        let result;

        if (isNaN(num1) || isNaN(num2)) {
            result = "Please enter valid numbers.";
        } else {
            switch (operation) {
                case 'add':
                    result = num1 + num2;
                    break;
                case 'subtract':
                    result = num1 - num2;
                    break;
                case 'multiply':
                    result = num1 * num2;
                    break;
                case 'divide':
                    result = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by zero.";
                    break;
                case 'remainder':
                    result = num2 !== 0 ? num1 % num2 : "Cannot divide by zero.";
                    break;
                default:
                    result = "Invalid operation";
            }
        }

        document.getElementById("result").innerText = result;
    }

    function changeColor() {
        const colors = ["#f94144", "#f3722c", "#f8961e", "#90be6d", "#43aa8b", "#577590"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.querySelector('.box').style.backgroundColor = randomColor;
    }
