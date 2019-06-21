import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styles: [`
  button {
    position: fixed;
    bottom: 10px;
    float: right;
    right: 5px;
    z-index: 10;
    font-size: 11px;
  }`]
})

export class HomeComponent {

  onToTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

}
