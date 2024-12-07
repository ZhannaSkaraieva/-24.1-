"use strict";



console.log('Завдання #1. ....................................');
/* Розробити функцію, яка використовує метод reduce масиву для обчислення суми усіх елементів масиву чисел.
 Функція повинна приймати масив чисел та повертати їх суму.*/
// Використання функції
// const exampleArray = [1, 2, 3, 4, 5]
// const sum = sumArray(exampleArray)
// console.log('Сума елементів масиву:', sum) // Виведення суми
/* reduce(): Застосовує функцію до аккумулятора та кожного елемента масиву (зліва направо) для зведення масиву до одного значення. */


function sumArray(numbers) {
  return numbers.reduce((accumulator, number) => accumulator + number, 0); //задаем 0 - accumulator потомучто если не задать , то 
}                                                                          //буде по дефолту undefined, но в переводе в бул.зн.=0
const exampleArray = [1, 2, 3, 4, 5]
const sum = sumArray(exampleArray)
console.log('Сума елементів масиву:', sum)



console.log('Завдання #2. ....................................');
/* Розробити функцію, яка використовує метод map масиву для створення нового масиву, в якому кожен елемент буде вдвічі більшим за елементи вхідного масиву чисел.*/
//function doubleArrayElements(numbers) {
// code here
//}
// Використання функції
// const exampleArray = [1, 2, 3, 4, 5]
// const doubledArray = doubleArrayElements(exampleArray)
// console.log('Подвоєні елементи масиву:', doubledArray) // Виведення подвоєних елементів

function doubleArrayElements(numbers) {
  return numbers.map ((number) => number * 2);
}
const exampleArray1 = [1, 2, 3, 4, 5]
const doubledArray = doubleArrayElements(exampleArray1)
console.log('Подвоєні елементи масиву:', doubledArray)



console.log('Завдання #3. ....................................');
/*Розробити клас `SkillsManager`, що відповідає за управління списком навичок. Клас повинен включати:
 * 1. Конструктор:
 * - Ініціалізує порожній масив `skills`, який буде використовуватися для зберігання навичок.
 * 2. Метод `addSkill(skill)`:
 * - Приймає один аргумент `skill` (рядок).
 * - Перевіряє, чи аргумент є рядком і має мінімум два символи.
 * - Якщо умови виконані, додає `skill` до масиву `skills` і повертає додану навичку.
 * - Якщо умови не виконані (навичка не є рядком або має менше двох символів), повертає `null`.
 * 3. Метод `getAllSkills()`:
 *   - Повертає поточний масив усіх навичок, збережених у класі.
 *
 * Загальні вимоги:
 * - Клас має бути модульним і здатним до використання в інших частинах програми, тому він повинен бути експортований.
 * - Клас має забезпечувати легке управління навичками, включаючи додавання нових навичок та отримання списку всіх наявних навичок.
 * - Код має бути написаний з урахуванням принципів чистого коду, забезпечуючи читабельність та легкість підтримки.*/
//class SkillsManager {
  // code here
//}
// const skillsManager = new SkillsManager()
//
// console.log(skillsManager.addSkill('JavaScript'))
// console.log(skillsManager.addSkill('CSS'))
// console.log(skillsManager.getAllSkills())

class SkillsManager {
  constructor() { 
    this.skills = []; //создаем пустой массив
  }
  addSkill(skill) {
    if (typeof skill === 'string' && skill.length > 2) {
      this.skills.push(skill);
      return skill;
    } else {return null;}
  }
  getAllSkills() {
    return this.skills;
  }
}
const skillsManager = new SkillsManager()

console.log(skillsManager.addSkill('JavaScript'))
console.log(skillsManager.addSkill('CSS'))
console.log(skillsManager.getAllSkills())





console.log('Завдання #4. ....................................');
/*
 * Задача: Калькулятор дат.
 * Завдання: Створити модуль на JavaScript, який імплементує функцію-конструктор DateCalculator для створення об'єктів, здатних керувати датами. Калькулятор дат має надавати такі можливості:
 * Додавання днів: Метод addDays приймає кількість днів як аргумент і додає цю кількість до поточної дати об'єкта.
 * Віднімання днів: Метод subtractDays приймає кількість днів як аргумент і віднімає цю кількість від поточної дати об'єкта.
 * Отримання результату: Метод getResult повертає поточну дату об'єкта у форматі "YYYY-MM-DD".
 *
 * Критерії перевірки:
 * В модулі має бути визначена функція-конструктор DateCalculator, яка ініціалізує об'єкт з початковою датою.
 * Мають бути реалізовані та доступні методи addDays, subtractDays, та getResult для екземплярів DateCalculator.
 * Об'єкти DateCalculator мають створюватися за допомогою ключового слова new і використання функції-конструктора.
 */


//function DateCalculator(initialDate) {

  //this.addDays = function(days) {
    // code here
  //}

  //this.subtractDays = function(days) {
    // code here
  //}

  //this.getResult = function() {
    // code here
  //}
//}

// Демонстрація використання
// const dateCalculator = new DateCalculator('2023-01-01')
// dateCalculator.addDays(5)
// console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів
//
// dateCalculator.subtractDays(3)
// console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів

function DateCalculator(initialDate) {
  this.newDate = new Date(initialDate);

  this.addDays = function (days) {
    this.newDate.setDate(this.newDate.getDate() + days);
  }
  this.subtractDays = function (days) {
    this.newDate.setDate(this.newDate.getDate() - days);
  }

  this.getResult = function () {
    //1 вариант
    //return this.newDate.toDateString();
    
    //2 вариант
    //return this.newDate.toISOString().split('T')[0];
    //new Date().toISOString() Повертає дату у форматі ISO 8601: YYYY-MM-DDTHH:mm:ss.sssZ
    //.split('T')Розбиває рядок на дві частини: Перша частина — це дата: YYYY-MM-DD.Друга частина — це час: HH:mm:ss.sssZ.
    //[0] Забирає першу частину масиву, тобто дату.

    const year = this.newDate.getFullYear();
    const month = String(this.newDate.getMonth() + 1).padStart(2, "0");
    //Метод padStart() заполняет текущую строку другой строкой (несколько раз, если нужно)
    //так, что итоговая строка достигает заданной длины.Заполнение осуществляется в начале(слева) текущей строки.
    const day = String(this.newDate.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`;
  }
}

const dateCalculator = new DateCalculator('2023-01-01')


dateCalculator.addDays(5)
console.log(dateCalculator.getResult()) // Виводить нову дату після додавання днів

dateCalculator.subtractDays(3)
console.log(dateCalculator.getResult()) // Виводить нову дату після віднімання днів







//export { doubleArrayElements, sumArray, SkillsManager, DateCalculator }