import { ProxyState } from "../AppState.js";
import { Reservations } from "../Models/Reservations.js";
import { Trips } from "../Models/Trips.js";




export function saveState() {
    console.log('saving');
    let data = {
        reservations: ProxyState.reservations,
        trips: ProxyState.trips
    }
    localStorage.setItem('Fernweh Vacations', JSON.stringify(data))

}

export function loadState() {
    console.log('loading');

    let rawData = localStorage.getItem('Fernweh Vacations')
    if (rawData) {
        let data = JSON.parse(rawData)
        ProxyState.trips = data.trips.map(t => new Trips(t))
        ProxyState.reservations = data.reservations.map(r => new Reservations(r))
    }



}