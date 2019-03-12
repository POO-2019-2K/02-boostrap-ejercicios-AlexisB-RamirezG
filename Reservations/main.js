import Reservation from "./reservation.js";
import Agenda from "./agenda.js";

class Main {
    constructor() {
        this._agenda = new Agenda(document.querySelector("#agenda"), document.querySelector("#reservations"));
        document.querySelector("#btnAdd").addEventListener("click", () => {
            let name = document.querySelector("#name").value;
            let phone = document.querySelector("#phone").value;
            let roomType = document.querySelector("#roomType").value;
            let nPeople = document.querySelector("#nPeople").value;
            let arrivalDate = document.querySelector("#arrivalDate").value;
            let departureDate = document.querySelector("#departureDate").value;

            let reservation = new Reservation(name, phone, roomType, nPeople, arrivalDate, departureDate);

            this._agenda.addReservation(reservation);
        });
    }
}

let m = new Main();