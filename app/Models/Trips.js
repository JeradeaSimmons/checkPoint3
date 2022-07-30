import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"









export class Trips {
  constructor(data) {
    this.id = data.id || generateId()
    this.destination = data.destination

  }




  get Template() {
    return `
    


        <section class="row border-bottom">
            <div class"col-4"> <h2>${this.destination}</h2></div>
          </section>

            <!-- This would be the Reservations template -->
          
            ${this.Reservations}
         

              <!--  This will be the fillable form section -->
              <section class="row">
              <div class="col-1"><input class="form-control" type="text"
                  name="body" id="body"></div>
              <div class="col-3"><input class="form-control" type="text"
                  name="body" id="body"></div>
              <div class="col-2"><input class="form-control" type="text"
                  name="body" id="body"></div>
              <div class="col-3"><input class="form-control" type="text"
                  name="body" id="body"></div>
              <div class="col-2"><input class="form-control" type="text"
                  name="body" id="body"></div>
              <div class="col-1"><input class="form-control col -1" type="text"
                  name="body"
                  id="body"></div>
            </section>

          <section class="row d-flex mt-2">
            <p class="col-1 offset-11"><button class="btn text-dark btn-light btn-small">ADD</button></p>
          </section>

          <section class="row">
            <div class="col-5">
              <h3>Notes</h3>
              <div class="row">
                <div class="col">
                <p> Fillable form</p>
                </div>
              </div>
            </div>

          </section>

          <section class="row">
            <div class="col-4 offset-8 text-end"><p>$Total</p></div>
          </section>



         

        </section>
        
    
    
    
    
    
    
    `
  }

  get Reservations() {
    let template = ''
    let reservations = ProxyState.reservations.filter(r => r.tripsId == this.id)
    reservations.forEach(r => template += reservations.Template)
    if (template) {
      return template
    } else {
      return '<p> No Reservations Yet</p>'
    }
  }
}