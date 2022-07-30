
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
      destination: ' Puerto Vallarta',


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
      id: 10





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
