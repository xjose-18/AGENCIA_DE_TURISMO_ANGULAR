import { Component, OnInit } from '@angular/core';
import { DetallePlan } from 'src/app/models/planes.model';
import { DetallePlanService } from 'src/app/services/detalle-plan.service';


@Component({
  selector: 'app-detalle-plan',
  templateUrl: './detalle-plan.component.html',
  styleUrls: ['./detalle-plan.component.css']
})
export class DetallePlanComponent implements OnInit {
  private idR: number = 0
  plan: DetallePlan[] = [];

  constructor(
    private detallePlanService: DetallePlanService
  ) { }

  alertt(value:string) {
    alert(value)
  }

  ngOnInit(): void {
    this.detallePlanService.recibir.subscribe(data => {
      this.idR = data;
   });
   console.log(`R ${this.idR}`)

   this.detallePlanService.getPlanes().forEach(plan => {
     if(plan.id == this.idR){
       this.plan.push(plan)
     }
   })
  }
  


}
