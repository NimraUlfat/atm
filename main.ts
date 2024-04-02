import inquirer from "inquirer";

let totalBalance = 10000; 

let myBalance = 10000; // Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin code",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log("Correct pin code!!!");

    console.log(`Your total balance is "${totalBalance}"`);

    let atmQuestion = await inquirer.prompt(
        [
            {
                name: "account type",
                message: "enter your account type",
                type: "list",
                choices: ["current account",
                        "saving account",
                ]
            }
        ]
    );

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices: ["withdraw","check balance","fast cash","Exit"]
            }
        ]
    );

    console.log(operationAns);

    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number"
                }
            ]
        );

        myBalance -= amountAns.amount;

console.log(`Your remaining balance is  ${myBalance}`)

    } else if (operationAns.operation === "check balance"){
        console.log(`your balance is ${myBalance}`)
    }
} 

else {
    console.log("Incorrect pin number")
}