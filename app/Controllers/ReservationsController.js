import { reservationsService } from "../Services/ReservationsService.js"






export class ReservationsController {
    constructor() {

    }


    createReservations(tripsId) {
        window.event.preventDefault()
        let form = window.event.target
        let newReservations = {
            type: form.type.value,
            name: form.name.value,
            booking: form.booking.value,
            address: form.address.value,
            date: form.date.value,
            cost: form.cost.value,
            tripsId: tripsId
        }
        reservationsService.createReservations(newReservations)
    }













}