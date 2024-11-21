const time = prompt('Введите время суток (утро, день, вечер):');
if (typeof time !== 'string' || time === '') {
  alert('Некорректные данные');
} else {
  let result;
  switch (time.toLowerCase()) {
    case 'утро':
      result = 'Кофе';
      break;
    case 'день':
      result = 'Чай';
      break;
    case 'вечер':
      result = 'Горячий шоколад';
      break;
    default:
      result = 'Некорректные данные';
  }
  alert(result);
}
