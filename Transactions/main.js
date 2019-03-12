import Movement from "./movement.js";
import Transaction from "./transaction.js";

class Main {
    constructor() {
        this._movement = new Movement(document.querySelector("#movements"), document.querySelector("#stats"));
        document.querySelector("#bttnPerform").addEventListener("click", () => {
        let account = 20156603;
        let depositW = document.querySelector("#depositW").value;
        let date = new Date();

        let transaction = new Transaction(account, depositW, date);

        this._movement.addMovement(transaction);
        })
    }
}

let m = new Main()