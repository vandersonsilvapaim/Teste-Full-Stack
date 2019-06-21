import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-json-pipe',
  template: `
    <div>
      <fieldset>
        <h3>Requisição a API :</h3>
        <p>Request CURL:</p>
        <pre>{{request}}</pre>
        <p>Response BODY:</p>
        <pre>{{response | json}}</pre>
      </fieldset>
  </div>
`})
export class JsonPipeComponent {
  @Input() request: string;
  @Input() response: string;
}
