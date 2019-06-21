import { MatDrawer } from '@angular/material';
import { Component, HostListener, ViewChild } from '@angular/core';
import { AlertService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @ViewChild('sidenav') public sidenav: MatDrawer;

  public octocat = '/assets/img/octocat.png';

  menuItems: Array<Object> = [
    {
      label: 'Inicio',
      content: 'title',
      link: '#'
    },
    {
      label: 'Missão backend',
      content: 'title',
      link: '#'
    },
    {
      label: 'Missão frontend',
      content: 'title',
      link: '#'
    },
  ];

  constructor(private alertService: AlertService) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.sidenav.toggle();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.sidenav.close();
  }

  medicamentos() {
    this.alertService.showToaster('Bem vindo ao CRUD de Medicamentos !');
  }
}
