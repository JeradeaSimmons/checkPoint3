import { generateId } from "../Utils/generateId.js"






export class Reservations {
    constructor(data) {
        this.id = data.id || generateId()
        this.type = data.type,
            this.name = data.name,
            this.booking = data.booking,
            this.address = data.address,
            this.date = new Date(data.date),
            this.cost = data.cost
        this.tripsId = data.tripsId
    }



    get Template() {

        return `
    <section class="row mt-2">
         <div class="col-1"><p>${this.type}</p></div>
         <div class="col-3"> ${this.name} </div>
         <div class="col-2"> ${this.booking} </div>
         <div class="col-3"> ${this.address} </div>
         <div class="col-2"> ${this.date.toLocaleDateString('en-US')} </div>
         <div class="col-1">$ ${this.cost}</div>
       
</section class="border-bottom"> 
<div class="col-1">
<section class="row"> <i class="mdi mdi-delete-forever selectable px-2" onclick="app.reservationsController.deleteReservations('${this.id}')"></i>
</div>
</section>
    


    
    `

    }
}