import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  userLoginOn:boolean=false; //El usuario al entrar por primera vez no va a estar autentificado
  


  constructor () {
    
  }

  ngOnInit(): void {
      
  }

  

}
