/**
 * Задача 1.
 *
 * Создайте объект `person` c одним свойством `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */


// Решение
const person = {
  get salary(){
    const now = new Date();
    const nowDays = now.getDay();
    const allDays = new Date(now.getFullYear(), now.getMonth()+1, 0).getDate();
    const result = (allDays -nowDays) >20 ? 'good salary': 'bad salary';
    return result
  }
};

const answer = person.salary; // good salary
console.log(answer);
exports.person = person;
