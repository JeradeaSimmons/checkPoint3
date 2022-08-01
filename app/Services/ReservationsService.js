import { ProxyState } from "../AppState.js"
import { Reservations } from "../Models/reservations.js"






class ReservationsService {


    deleteReservations(id) {
        ProxyState.reservations = ProxyState.reservations.filter(r => r.id != id)
    }


    createReservations(newReservations) {
        ProxyState.reservations = [...ProxyState.reservations, new Reservations(newReservations)]
    }

}



export const reservationsService = new ReservationsService()