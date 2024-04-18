// # Завдання 1

// Напиши функцію `countProps(obj)`, яка рахує кількість властивостей в об'єкті.
// Функція повертає число - кількість властивостей.

const countProps = function (obj) {
  // твій код
  let i = 0;
  for(const value in obj) {
    console.log(value);
    i++;
  }
  return i;
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
 console.log(countProps({})); // 0

 console.log(countProps({ name: 'Mango', age: 2 }));// 2

 console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 50 })); // 3

// # Завдання 2

// Напиши функцію `findBestEmployee(employees)`, яка приймає об'єкт співробітників
// і повертає ім'я найпродуктивнішого (який виконав більше всіх задач).
// Співробітники і кількість виконаних завдань містяться як властивості об'єкта в
// форматі `"ім'я":"кількість задач"`.

const findBestEmployee = function (employees) {
  let max = 0;
  let message = "hello";
  // твій код
    for(const key in employees) {
      console.log(key);
      console.log(employees[key]);
      if(max < employees[key]) {
        max = employees[key];
        console.log(max);
        console.log(`${max} ${key}`);
        message = `${max} + ${key}}`
      };
    };
    return message ;
  }

  /*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 20,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
