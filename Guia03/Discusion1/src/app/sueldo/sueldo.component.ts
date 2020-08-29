import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-sueldo',
  templateUrl: './sueldo.component.html',
  styleUrls: ['./sueldo.component.css']
})
export class SueldoComponent implements OnInit {

  sueldo:number;
  ISS:number;
  renta:number;
  AFP:number;
  sueldoNeto:number;

  constructor() { }

  ngOnInit(): void {    
    this.ISS=0;
    this.renta=0;
    this.AFP=0;
    this.sueldoNeto=0;   
  }

  calcularNeto(){

    this.ISS = this.sueldo * 0.073;
    this.AFP= this.sueldo * 0.11;
    this.renta = this.sueldo * 0.051;
    this.sueldoNeto = this.sueldo - (this.ISS+this.AFP+this.renta);
  }

}
