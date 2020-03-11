'use strict';

let money,
  time,
  rash1,
  rash2,
  budgetOneDay,
  expenses,
  optionalExpenses,
  appData;

money = +prompt("Ваш бюджет на месяц?", "");
time = prompt("Введите дату в формате YYYY-MM-DD", "");


rash1 = prompt("Введите обязательную статью расходов в этом месяце", "");
priceRash1 = +prompt("Во сколько обойдется?", "");

rash2 = prompt("Введите обязательную статью расходов в этом месяце", "");
priceRash2 = +prompt("Во сколько обойдется?", "");

budgetOneDay = alert("Бюджет на один день= " + money / 30);

expenses = {
  priceRash1: priceRash2,
};

optionalExpenses = {

};

appData = {
  budget: money,
  timeData: time,
  rash: expenses,
  optRash: optionalExpenses,
  income: "",
  savings: false,
};