import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";


function _draw() {
    let template = ''
    let trips = ProxyState.trips.sort((a, b) => a.date - b.date)
    trips.forEach(t => template += t.Template)
    document.getElementById('trips').innerHTML = template
}





export class TripsController {
    constructor() {
        ProxyState.on('trips', _draw)
        ProxyState.on('reservations', _draw)

        _draw()
    }


    createTrips() {
        window.event.preventDefault()
        let form = window.event.target
        let newTrips = {
            destination: form.destination.values


        }
        tripsService.createTrips(newTrips)
    }




}