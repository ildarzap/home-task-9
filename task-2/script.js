const user = {
  name: prompt('Введите имя'),
  age: +prompt('Введите возраст'),
  subject: prompt('Введите предмет'),
  grade: prompt('Введите оценку'),
};
console.log(user);
console.log((user.age += 5));
console.log(user);
