import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'bc-app',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Bem Vindo ao Barato Coletivo!'

  constructor() { }

  ngOnInit() {
  }

}
