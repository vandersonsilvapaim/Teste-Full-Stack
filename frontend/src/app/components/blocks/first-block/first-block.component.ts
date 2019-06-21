import { Component } from '@angular/core';

@Component({
  selector: 'app-first-block',
  templateUrl: './first-block.component.html',
  styleUrls: ['./first-block.component.scss']
})
export class FirstBlockComponent {
  titleOne = 'Teste Full Stack';
  // tslint:disable-next-line:max-line-length
  contentOne = 'Este teste tem como objetivo facilitar a avaliação e seleção dos candidatos que melhor atendem às competências definidas para vaga.';

}
