import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"









export class Trips {
  constructor(data) {
    this.id = data.id || generateId()
    this.place = data.place
    this.date = new Date(data.date)
    this.notes = data.notes


  }




  get Template() {
    return `
    


        <section class="row border-bottom">
            <div class"col-4"> <h2>${this.place} | ${this.date.toLocaleDateString('en-US')}</h2></div>
          </section>

         
         

            <!-- This would be the Reservations template -->
           <section>
            ${this.Reservations}
           </section>
            <form class="row" onsubmit="app.reservationsController.createReservations('${this.id}')">
            
            <div class="col-1"><select class="form-control" required name="type"
                id="type">
                <option value="Flight"> Flight</option>
                <option value="Rental-Car">Rental Car</option>
                <option value="Hotel">Hotel</option>
                <option value="Misc">Misc.</option>
              </select>Type</div>
            <div class="col-3"><input class="form-control" required type="text"
                name="name" id="name">Name</div>
            <div class="col-2"><input class="form-control" required type="text"
                name="booking" id="booking">Confirmation</div>
            <div class="col-3"><input class="form-control" required type="text"
                name="address" id="address">Address</div>
            <div class="col-2"><input class="form-control" required type="date"
                name="date" id="date">Date</div>
            <div class="col-1"><input class="form-control" required type="number"
                name="cost" id="cost">Cost</div>
            <section class="row d-flex mt-2">
              <button class="col-1 offset-11"><a class="btn text-dark btn-light
                  btn-small">ADD</a></button>
            </section>
            
          </form>




          <section class="row">
          <a class"col-4">
          <label class="form-label fw-bold">Notes</label>
          

          <textarea rows="3" class="form-control" onblur="app.tripsController.editTrips('${this.id}')">${this.notes}</textarea>
           </a>
           
          </section>

          <section class="row">
            <div class="col-4 offset-8 text-end"><p>Total: $${this.TripsTotal}</p></div>
          </section>


         <section class="row">
          <i class="mdi mdi-delete-forever selectable px-2" onclick="app.tripsController.deleteTrips('${this.id}')"></i>
          </section>
        </section>
        
    
    
    
    
    
    
    `
  }

  get Reservations() {
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripsId == this.id)
    reservations.forEach(r => template += r.Template)
    ProxyState.reservations.sort((a, b) => a.date - b.date)
    if (template) {

      return template
    } else {
      return '<p> No Reservations Yet</p>'

    }
  }




  get TripsTotal() {
    let total = 0
    let reservations = ProxyState.reservations.filter(r => r.tripsId == this.id)
    reservations.forEach(r => total += r.cost)
    return total
  }

}