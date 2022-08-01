import { ProxyState } from "../AppState.js"
import { Trips } from "../Models/Trips.js"








class TripsService {

    createTrips(newTrips) {
        ProxyState.trips = [...ProxyState.trips, new Trips(newTrips)]
    }
    deleteTrips(id) {
        ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
    }

    editTrips(id, newText) {
        let trips = ProxyState.trips.find(t => t.id == id)
        trips.notes = newText
        ProxyState.trips = ProxyState.trips
    }

}











export const tripsService = new TripsService()