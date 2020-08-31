import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Combustible } from '../combustible'
@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.css']
})
export class CombustibleComponent implements OnInit {
  tipoG=['','Regular','Especial','Diesel'];
  combustible = new Combustible('',0,0);
  enviar =false;
    constructor() { }
  
    ngOnInit() {
    }
    onSubmit(){
      this.enviar=true;
    }
}
