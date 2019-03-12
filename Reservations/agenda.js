export default class Agenda {
    constructor(tableAgenda, tableReservations) {
        this._tableAgenda = tableAgenda;
        this._tableReservations = tableReservations;

        this._numReservations = 0; 
    }

    addReservation(reservation) {
        let row = this._tableAgenda.insertRow(-1);
        let cellName = row.insertCell(0);
        let cellPhone = row.insertCell(1);
        let cellRoom = row.insertCell(2);
        let cellPeople = row.insertCell(3);
        let cellArrival = row.insertCell(4);
        let cellDeparture = row.insertCell(5);

        cellName.innerHTML = reservation.name;
        cellPhone.innerHTML = reservation.phone;
        cellRoom.innerHTML = reservation.roomType;
        cellPeople.innerHTML = reservation.nPeople;
        cellArrival.innerHTML = reservation.arrivalDate;
        cellDeparture.innerHTML = reservation.departureDate;

        this._numReservations++;

        this._tableReservations.rows[0].cells[1].innerHTML = this._numReservations;
    }
}