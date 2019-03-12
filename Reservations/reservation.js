export default class Reservation {
    constructor(name, phone, roomType, nPeople, arrivalDate, departureDate) {
        this._name = name;
        this._phone = phone;
        this._roomType = roomType;
        this._nPeople = nPeople;
        this._arrivalDate = arrivalDate;
        this._departureDate = departureDate;
    }

    get name() {
        return this._name; 
    }

    get phone() {
        return this._phone; 
    }
    
    get roomType() {
        return this._roomType;
    }

    get nPeople() {
        return this._nPeople; 
    }

    get arrivalDate() {
        return this._arrivalDate; 
    }

    get departureDate() {
        return this._departureDate; 
    }
}