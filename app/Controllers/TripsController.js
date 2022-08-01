import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js"



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
        ProxyState.on('trips', saveState)
        ProxyState.on('reservations', saveState)

        loadState()
        _draw()
    }


    createTrips() {
        window.event.preventDefault()
        let form = window.event.target
        let newTrips = {
            place: form.place.value,
            date: form.date.value,
            notes: ''


        }
        tripsService.createTrips(newTrips)
        Pop.toast('Trip Created', 'success')
    }

    async deleteTrips(id) {
        if (await Pop.confirm()) {
            tripsService.deleteTrips(id)
        }
    }

    editTrips(id) {
        let newText = window.event.target.value
        tripsService.editTrips(id, newText)
    }


}