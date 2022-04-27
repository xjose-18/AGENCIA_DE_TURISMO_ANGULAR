import { Component, OnInit } from '@angular/core';
import { DetallePlan } from 'src/app/models/planes.model';
import { DetallePlanService } from 'src/app/services/detalle-plan.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrls: ['./planes.component.css']
})
export class PlanesComponent implements OnInit {

  planes: DetallePlan[] = []
  id: number = 0;
  constructor(
    private detallePlanService: DetallePlanService
  ) { }

  ngOnInit(): void {
    this.detallePlanService.getPlanes().forEach((plan: DetallePlan) => {
      this.planes.push(plan)
    })
  }

  detallePlan(event: any){
    this.id = event.target.id;
    this.detallePlanService.enviar(this.id);
    console.log(this.id)
  }

}
