import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  content = 'Processo seletivo para a vaga de fullstack no Projeto PROADI do Hospital Sírio Libanês de São Paulo.';
}
