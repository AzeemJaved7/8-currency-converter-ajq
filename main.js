import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EURO: .79,
    GBP: .5,
    INR: 75,
    PAK: 287
};
// console.log (currency)
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: 'enter from currency',
        type: 'list',
        choices: ["USD", "EURO", "GPB", "INR", "PAK"]
    },
    {
        name: 'to',
        message: 'enter to currency',
        type: 'list',
        choices: ["USD", "EURO", "GPB", "INR", "PAK"]
    },
    {
        name: 'amount',
        message: 'enter your amount',
        type: 'number'
    }
]);
console.log(currency),
    console.log(user_answer);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseamount = amount / fromAmount;
let convertamount = baseamount * toAmount;
console.log(convertamount);
console.log(baseamount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
