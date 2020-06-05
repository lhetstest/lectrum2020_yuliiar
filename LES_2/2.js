// Перепишите `if..else` с использованием нескольких операторов `?`. 
// Для читаемости — оформляйте код в несколько строк.

////////////////// Задание //////////////////
// var message;
// let login = null;

// if (login == 'Pitter') {
//   message = 'Hi';
// } else if (login == 'Owner') {
//   message = 'Hello';
// } else if (login == '') {
//   message = 'unknown';
// } else {
//   message = '';
// }

////////////////// Решение //////////////////


let login = 'Other';
(login == 'Pitter') ? message = "Hi" :
(login == 'Owner') ? message = 'Hello' : 
(login == '') ? message = 'unknown' : message = ''

console.log(message);
