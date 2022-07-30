import { ProxyState } from "../AppState.js"
import { Trips } from "../Models/Trips.js"








class TripsService {

    createTrips(newTrips) {
        ProxyState.trips = [...ProxyState.trips, new Trips(newTrips)]
    }


}











export const tripsService = new TripsService()