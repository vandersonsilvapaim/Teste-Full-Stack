import { Component } from '@angular/core';

@Component({
  selector: 'app-third-block',
  templateUrl: './third-block.component.html',
  styleUrls: ['./third-block.component.scss']
})
export class ThirdBlockComponent  {

  items = [
    { title: 'Angular', content: '5 ou +'},
    { title: 'Java', content: 'EE, JAX-RS(RestEasy), EJB, Maven, Swagger'},
    { title: 'Elasticsearch', content: 'Logstash, Kibana (ELK)  '},
    { title: 'Docker', content: ''},
    { title: 'Keycloak', content: ''},
    { title: 'Nginx', content: 'WildFly, Apache Tomcat'},
    { title: 'Oracle', content: '11g XE'},
    { title: 'MySql', content: ' '},
    { title: 'Liquibase', content: ' '}
  ];

}
