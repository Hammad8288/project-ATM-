#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinAns = await inquirer.prompt([{
        name: "pin",
        type: "number",
        message: "Please Enter Your Pin Number"
    }]);
//  1234    ===   1234 
if (pinAns.pin === myPin) {
    console.log("Correct Pin Code");
    let operationAns = await inquirer.prompt([{
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([{
                name: "withdrawMethod",
                type: "list",
                message: " Please Select A Withdraw Method ",
                choices: ["Fast Cash", "Enter Amount "]
            }]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let fastCashAns = await inquirer.prompt([{
                    name: "FastCash",
                    type: "list",
                    message: "Please Select A Amount You Want To Withdraw",
                    choices: ["1000", "3000", "5000", "10000"]
                }]);
            if (fastCashAns.FastCash > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= fastCashAns.FastCash
                    .log(`${fastCashAns.FastCash} Withdraw Successful`);
                console.log(`Your remaining Balance is ${myBalance}`);
            }
            ;
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount ") {
            let amountAns = await inquirer.prompt([{
                    name: "amount",
                    type: "number",
                    message: "Enter Your Amount"
                }]);
            if (amountAns.amount > myBalance) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw Sucessful`);
                console.log(`Your remaining Balance is ${myBalance}`);
            }
            ;
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Current Is ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Code");
}
;
