 "use strict"
 
let  onClickTask1 =  ()  => { 
  alert("Вас приветствует учебный центр");
  const name = prompt("введите имя"); // const, let – соблюдают блочную область видимости. var – игнорирует блочную область видимости
  alert("добро пожаловать на курсы, " + name);
  const x = confirm("хотите стать web-дизайнером?"); // встроенный метод в двигле js
  if (x) {
    console.log(typeof null)
    alert("Учите стили CSS");
  } else {
    alert("Упускаете время!");
  }
}

function onClickTask2() {
  const num1 = 10;
  const num2 = 5;
  const sumNumbers = num1 + num2;
  console.log("Сумма двух чисел:", sumNumbers);

  const str1 = "10";
  const str2 = "5";
  const sumStrings = str1 + str2 ;
  console.log("Сумма двух строк:", sumStrings);
  
  const num3 = 22;
  const str3 = "5";
  const sumNumberString = num3 + str3 ;
  document.write("Сумма числа и строки:  " + sumNumberString);

  const str4 = "22";
  const num4 = 5;
  const sumStringNumber = str4 + num4;
  document.write("Сумма строки и числа: " + sumStringNumber);
  console.log(typeof null)
  alert("Результатом сложения строки и числа всегда будет строка.");
}

    function onClickTask3() {
      const x = 5;
      const y = 2;
      const num5 = (15 * y * 5 * x) / 15 + 400;
      const num6 = ((10 * y) / x + (6 * x) / y - 40) * 6;

      const number = num5 % num6; // Находим остаток от деления
    
    
      alert(
           "Значение первого выражения: " + num5 +
           "\nЗначение второго выражения: " + num6 +
           "\nОстаток от деления: " + number);
      }

      function onClickTask4() {     
      const number10 = prompt("Введите любое число:"); 
      
      if (
        (number10 < 20 || number10 > 40) && number10 != 15 && number10 % 5 == 0)
         {
        alert("Правильное значение");
      } else {
        alert("Не правильное значение");

      }
    }

    function onClickTask4_1() {
      const number12 = prompt("Введите любое число:");

      if (
        (number12 < 40 || number12 > 80) && number12 != 41 && number12 % 6 == 0
      ) {
        alert("Правильное значение");
      } else {
        alert("Не правильное значение");
      }
    }
    function onClickTask5() {

      const num13 = prompt("Введите первое число:");
      const num14 = prompt("Введите второе число:");
      if (num13 > num14) {
        alert("1-ое число больше 2-го");
      } else {
        if (num13 == num14) {
          alert("1-ое число равно 2-ому");
        } else {
          alert("1-ое число меньше 2-ого");
        }
      }
    }
    function onClickTask6() {
      let f = prompt("Введите число в месяце (30)");
      
      while (f > 7) {
        f = f - 7;
      }

    
      switch (f) {
        case 1:
          alert("Понедельник");
          break;
        case 2:
          alert("Вторник");
          break;
        case 3:
          alert("Среда");
          break;
        case 4:
          alert("Четверг");
          break;
        case 5:
          alert("Пятница");
          break;
        case 6:
          alert("Суббота");
          break;
        case 7:
          alert("Воскресенье");
          break;
      }
    }
    function onClickTask7() {
      const a = 0b01; //двоичная с 0b
      const b = 0o174; // восмеричная с 0o
      const z = 0x12f; // 16-ная с 0x
      alert(a);
      alert(b);
      alert(z);
    }
    function onClickTask8() {

      try {
        
        prompt("привет");
        alert(idk); // из-за того что переменная не объявленна, возникает ошибка и эту ошибку перехватывает catch
      } catch {
        alert("ошибка ");
      }
    }

function onClickTask9() {
  const numberA = prompt("Введите число a:");  // numberA = 5
  const numberB = prompt("Введите число b:");  // numberB = 4 

  let createdTable = "<table border='1'>";

  for (let a = 1; a <= numberA; a++) {       // НАЧАЛО      УСЛОВИЕ      ШАГ   
      createdTable += "<tr>";
      for (let b = 1; b <= numberB; b++) {
          createdTable += "<td style='width: 75px; height: 25px'>" + a*b + "</td>";
      }
      createdTable += "</tr>";
  }

  document.write(createdTable + "</table>");
}

function onClickTask10() {
  let value0 = +prompt("Введите число a:"); // 1
  let value1 = +prompt("Введите число b:"); // 2

  let createdTable = "<table border='1'> <tr> <td> Радиус </td> <td> Площадь круга </td> <td> Длина окружности </td> </tr>";

  let i = value0;
  while (i < value1) {
      createdTable += "<tr> <td>" + i + "</td> <td>" + Math.round(Math.PI * i**2) + "</td> <td>" + Math.round(2 * Math.PI * i) + "</td> </tr>";
      i += 0.3;
  }

  document.write(createdTable + "</table>");                       
}

function onClickTask11() {
  let value0 = +prompt("Введите дробное число:"); // 2 
  let value1 = +prompt("Введите целое число:");   // 3

  let createdTable = "<table border='1'> <tr> <td> Число </td> <td> Метод </td> <td> Результат </td> <td> Описание метода </td> </tr>";

  for (let v = 0; v <= 1; v++) {
      let ValueEDK = 0;
      switch (v) {
          case 0:
              ValueEDK = value0; break;
          case 1:
              ValueEDK = value1; break;
      }
      
      for (let i = 0; i < 4; i++) {
          createdTable += "<tr>";
          switch (i) {
              case 0:
                  createdTable += "<td>" + ValueEDK + "</td>" + "<td> toString(16) </td>" + "<td>" + ValueEDK.toString(16) + "</td>" 
                  + "<td> Строковое представление числа в 16-ричной системе счисления </td>";
                  break;
              case 1:
                  createdTable += "<td>" + ValueEDK + "</td>" + "<td> toExponential(2) </td>" + "<td>" + ValueEDK.toExponential(2) + "</td>"
                  + "<td> Представляет указанное число в экспоненциальной форме, а после точки указывается два знака </td>";
                  break;
              case 2:
                  createdTable += "<td>" + ValueEDK + "</td>" + "<td> toPrecision(2) </td>" + "<td>" + ValueEDK.toPrecision(2) + "</td>"
                  + "<td> Представляет число с заданным общим количеством значащих цифр, 2 означает, что первое целое и дробное число впишутся в это число </td>";
                  break;
              case 3:
                  createdTable += "<td>" + ValueEDK + "</td>" + "<td> toFixed(2) </td>" + "<td>" + ValueEDK.toFixed(2) + "</td>"
                   + "<td> Представляет число в форме с фиксированным количеством цифр после запятой, 2 - сколько цифр после запятой следует указывать </td>";
                  break;
          }
          createdTable += "</tr>";    
      }
  }

  document.write(createdTable + "</table>");
}

