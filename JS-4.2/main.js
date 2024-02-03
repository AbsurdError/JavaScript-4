// Урок 5

// 1.1

function calculateSum() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    
    var num1 = parseFloat(input1.value);
    var num2 = parseFloat(input2.value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        var result = document.getElementById("result");
        result.textContent = "Сумма: " + sum;
    } else {
        alert("Вы забыли числа");
    }
}

// 1.2

function calculateSquare(){
    var input3 = document.getElementById("input3");
    var num3 = parseFloat(input3.value);
    if (!isNaN(num3)){
        var square = num3 * num3;
        var result2 = document.getElementById("result2");
        result2.textContent = `Квадрат числа ${num3} равен: ${square}`;
    }else{
        alert("Вы не ввели число");
    }
}

// 1.3

function calculateSum2() {
    var num4 = parseFloat(document.getElementById("paragraph1").textContent);
    var num5 = parseFloat(document.getElementById("paragraph2").textContent);
    if (!isNaN(num4) && !isNaN(num5)) {
        var sum2 = num4 + num5;
        var result3 = document.getElementById("result3");
        result3.textContent = `Сумма: ${sum2}`;
    } else {
        alert("Ошибка: Вы ввели неверные значения либо забыли их.");
    }
}

// 1.4

document.addEventListener("DOMContentLoaded", function() {
    var squareable = document.querySelectorAll('.squareable-paragraph');
    squareable.forEach(function(paragraph) {
        paragraph.addEventListener("click", function() {

            var value = parseFloat(paragraph.textContent);
            if (!isNaN(value)) {
                var squaredValue = value * value;
                paragraph.textContent = squaredValue;
            } else {
                alert("Некоректное значение.");
            }
        });
    });
});

// 1.5

function squareValue(input) {
    var inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        input.value = inputValue * inputValue;
    } else {
        alert("Введите числовое значение");
    }
}

// 2.1

function calculateSum3(){
    var sum3 = 0;
    for (var i = 1; i <= 100; i++){
        sum3 += i
    }
    document.getElementById('sum-result').innerHTML = `Сумма чисел от 1 до 100 ровна: ${sum3}`;
}

// 2.2

function calculateSum4() {
    var input5 = document.getElementById("input5");
    var input6 = document.getElementById("input6");
    
    var num6 = parseFloat(input5.value);
    var num7 = parseFloat(input6.value);
    
    if (!isNaN(num6) && !isNaN(num7)) {
        var sum4 = num6 + num7;
        var result4 = document.getElementById("result4");
        result4.textContent = "Сумма: " + sum4;
    } else {
        alert("Вы забыли числа");
    }
}

// 2.3

function countParagraphs() {
    var paragraphs = document.getElementsByTagName('h4');
    document.getElementById('result5').innerHTML = 'Количество абзацев: ' + paragraphs.length;
}

// 2.4

function numberСharacters(){
    var str = document.getElementById('input7').value;
    input7 = str.length;
    document.getElementById('result6').innerHTML = 'Количество символов: ' + input7;

}

// 3.1

function calculateFactorial() {
    var input8 = document.getElementById('inputNum').value;
    if (input8 >= 0) {
        var factorial = 1;
        for (var j = 1; j <= input8; j++) {
            factorial *= j;
        }
        document.getElementById('result7').innerHTML = 'Факториал числа ' + input8 + ' равен ' + factorial;
    } else {
        document.getElementById('result7').innerHTML = 'Факториал можно вычислить только из положительного числа';
    }
}

// 3.2

function comparingNumbers(){
    var input8 = document.getElementById("input8");
    var input9 = document.getElementById("input9");
    
    var num8 = parseFloat(input8.value);
    var num9 = parseFloat(input9.value);
    if (num8 > num9){
        var result8 = document.getElementById("result8");
        result8.textContent = "Первое число больше: " + num8;
    }else if (num8 < num9){
        var result8 = document.getElementById("result8");
        result8.textContent = "Второе число больше: " + num9;
    }else if (num8 == num9){
        var result8 = document.getElementById("result8");
        result8.textContent = "Числа равны ";
    }else{
        var result8 = document.getElementById("result8");
        result8.textContent = "Вы ввели некоректное значение";
    }
}

// 3.3

function calculateSum() {
    var input9 = document.getElementById('inputNumber').value;
    if (!isNaN(input9)) {
        var num10 = input9.toString().split('');
        var sum5 = num10.reduce(function (acc, num10) {
            return acc + parseInt(num10);
        }, 0);
        document.getElementById('result9').innerHTML = 'Сумма цифр числа ' + input9 + ' равна ' + sum5;
    } else {
        document.getElementById('result9').innerHTML = 'Вы введи некорекное значение, пожалуйста, введите число';
    }
}

// 3.4

function reverseWord() {
    var inputWord = document.getElementById('inputWord').value;
    var reversedWord = inputWord.split('').reverse().join('');
    document.getElementById('result10').innerHTML = 'Перевернутое слово: ' + reversedWord;
}

// 3.5

function fillParagraphs() {
    var paragraphs = document.querySelectorAll('h5');
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].innerHTML = i + 1;
    }
}

// 3.6

function calculateFactorial2() {
    var input10 = document.getElementById('inputNum2').value;
    if (input10 >= 0) {
        var factorial2 = 1;
        for (var n = 1; n <= input10; n++) {
            factorial2 *= n;
        }
        document.getElementById('result11').innerHTML = 'Факториал числа ' + input10 + ' равен ' + factorial2;
    } else {
        document.getElementById('result11').innerHTML = 'Факториал можно вычислить только из положительного числа';
    }
}