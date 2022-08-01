
import { Reservations } from "./Models/Reservations.js"
import { Trips } from "./Models/Trips.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []

  /** @type {import('./Models/Trips').Trips[]} */
  trips = [
    new Trips({
      id: 10,
      place: ' Puerto Vallarta',
      date: '10/5/2022',
      notes: 'Hello World'


    })
  ]
  /** @type {import('./Models/Reservations').Reservations[]} */
  reservations = [
    new Reservations({
      type: 'Flight',
      name: 'Spring break',
      booking: 'MEX145',
      address: '1489 W Party St',
      date: '09/05/27',
      cost: 1000,
      tripsId: 10
    }),
    new Reservations({
      type: 'Rental Car',
      name: 'cruising',
      booking: 'CRS12',
      address: 'same',
      date: '09/06/2022',
      cost: 500,
      tripsId: 10
    })
  ]




}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
