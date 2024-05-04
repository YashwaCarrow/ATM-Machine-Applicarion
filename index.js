#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Yash ATM");
let myBalance = 40000; //Dollar
let myPin = 4444;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operatersAns = await inquirer.prompt([
        {
            name: "operaters",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast-cash"]
        }
    ]);
    console.log(operatersAns);
    if (operatersAns.operaters === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient amount");
        }
        // =, -=, +=
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:$" + myBalance);
            console.log("Thanks for using Yash ATM hope you liked it.");
        }
    }
    else if (operatersAns.operaters === "check balance") {
        console.log("Your current balance is:$" + myBalance);
        console.log("Thanks for using Yash ATM hope you liked it.");
    }
    else if (operatersAns.operaters === "fast-cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please select option",
                type: "list",
                choices: [1000, 5000, 10000, 25000]
            }
        ]);
        myBalance -= fastCashAns.amount;
        console.log("your remaining balance is:$" + myBalance);
        console.log("Thanks for using Yash ATM hope you liked it.");
    }
}
else {
    console.log("Incorrect pin code");
}
