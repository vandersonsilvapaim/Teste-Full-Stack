import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.scss']
})
export class CardBlockComponent implements OnInit {
  titleCard = 'Skills';
  subTitleCard = 'O conhecimento e habilidades tecnica ou capacidade tecnica de'
  + ' forma rápida e eficiente para uma determinada tecnologia ou objetivo, são as aptidões para a vaga.';
  contentCard = 'Vai atuar no desenvolvimento e manutenção de componentes angular'
  + ' voltados para experiência do usuário no front-end, em serviços e recursos'
  + ' reutilizáveis com as melhores práticas de back-end e bancos de dados.'
   + ' Estará envolvido em todas as etapas do desenvolvimento, desde o front-end'
   + ' até o back-end e nas camadas de tecnologia, API Design e DevOps.';
  frontend: string;
  backend: string;
  banco: string;

  constructor() {
  }
  ngOnInit(): void {
    this.frontend = '/assets/img/frontend.png';
    this.backend = '/assets/img/backend.png';
    this.banco = '/assets/img/banco.png';
  }

}
