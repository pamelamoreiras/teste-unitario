import { Component } from '@angular/core';

//Model
import { Investiments } from '../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public investiments: Array<Investiments> = [ 
    {
      name: "Itaú",
      value: 100
    },
    {
      name: "Banco do Brasil",
      value: 100
    },
    {
      name: "Nubank",
      value: 100
    },
    {
      name: "Inter",
      value: 100
    },
  ]
}
