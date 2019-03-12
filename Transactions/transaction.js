export default class Transaction {
    constructor(account, depositW, date) {
        this._account = account;
        this._depositW = depositW; 
        this._date = date;
    }
    
    get account() {
        return this._account;
    }

    get depositW() {
        return this._depositW;
    }

    get date() {
        return this._date;
    }
}