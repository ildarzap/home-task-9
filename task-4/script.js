const shoppingList = ['яблоки', 'бананы', 'молоко', 'сыр', 'хлеб', 'шоколад'];

shoppingList.unshift('мясо');
console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.splice(2, 1, 'чай', 'кофе');
console.log(shoppingList);
