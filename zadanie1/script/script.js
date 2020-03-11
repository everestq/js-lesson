'use strict';

let money = +prompt("Ваш бюджет на месяц?", ""),
  time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let rash1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  priceRash1 = prompt("Во сколько обойдется?", ""),
  rash2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
  priceRash2 = prompt("Во сколько обойдется?", "");

appData.expenses.rash1 = priceRash1;
appData.expenses.rash2 = priceRash2;

budgetOneDay = alert("Бюджет на один день= " + appData.budget / 30);