import { ProxyState } from "../AppState.js"
import { Reservations } from "../Models/reservations.js"






class ReservationsService {





    createReservations(newReservations) {
        ProxyState.reservations = [...ProxyState.reservations, new Reservations(newReservations)]
    }

}



export const reservationsService = new ReservationsService