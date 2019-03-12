export default class Movement {
    constructor(tableMovements, tableStats) {
        this._tableMovements = tableMovements;
        this._tableStats = tableStats;

        this._id = 1;
        this._numWithdraws = 0;
        this._numDeposits = 0;
        this._numMovements = 0;
        this._totalDeposit = 0;
        this._totalWithdraw = 0;
        this._balance = 0;
    }

    addMovement(movement) {
        let row = this._tableMovements.insertRow(-1);
        let cellID = row.insertCell(0);
        let cellAccount = row.insertCell(1);
        let cellDepositW = row.insertCell(2);
        let cellDate = row.insertCell(3);

        cellID.innerHTML = this._id; 
        cellAccount.innerHTML = movement.account;
        cellDepositW.innerHTML = `$${movement.depositW}`; 
        cellDate.innerHTML = movement.date;  

        if(Number(movement.depositW) > 0) {
            this._numDeposits++;
            this._totalDeposit = this._totalDeposit + Number(movement.depositW);
        } else if(Number(movement.depositW) < 0) {
            this._numWithdraws++;
            this._totalWithdraw = this._totalWithdraw + Number(movement.depositW);
        }

        this._id++;

        this._numMovements = this._numDeposits + this._numWithdraws;
        this._balance = this._totalDeposit + this._totalWithdraw;

        
        this._tableStats.rows[1].cells[1].innerHTML = this._numDeposits;
        this._tableStats.rows[2].cells[1].innerHTML = `$${this._totalDeposit}`;
        this._tableStats.rows[3].cells[1].innerHTML = this._numWithdraws;
        this._tableStats.rows[4].cells[1].innerHTML = `$${this._totalWithdraw}`;
        this._tableStats.rows[5].cells[1].innerHTML = this._numMovements;
        this._tableStats.rows[6].cells[1].innerHTML = `$${this._balance}`;
    }
}