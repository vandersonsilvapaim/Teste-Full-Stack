import { DialogMedicamentoComponent } from './dialog/dialog-medicamento.component';
import { AlertService } from './../shared/services/alert.service';
import { Medicamento, MedicamentoDataSource, MedicamentoDataDialog } from './../shared/models/medicamento.model';
import { tap, catchError, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { mergeMap } from 'Rx';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class MedicamentosComponent implements OnInit, OnDestroy {

  private _this;
  private URL = 'http://localhost:80/medicamentos';
  private isLive: boolean;
  request = '';
  response;
  nome: string;
  medicamento: Medicamento;
  columnsToDisplay = ['nome', 'fabricante', 'Preco', 'start'];
  expandedElement: Medicamento | null;
  dataSource: MedicamentoDataSource | null;
  dataDialog: MedicamentoDataDialog | null;

  constructor(public http: HttpClient,
    private alertService: AlertService,
    public dialog: MatDialog) {
    this._this = this;
  }

  ngOnInit() {
    this.isLive = true;
  }

  ngOnDestroy(): void {
    this.isLive = false;
  }

  find() {
    this.dataSource = null;
    this.dataSource = new MedicamentoDataSource(this.get());
  }

  get() {
    this.alertService.showToaster('Busacando Medicamentos ...');
    const HEADER_KEY = 'Accept';
    const HEADER_VALUE = 'application/json;charset=UTF-8';
    let _URL = this.URL;

    const HTTP_OPTIONS = { headers: new HttpHeaders({ HEADER_KEY: HEADER_VALUE }) };

    if (this.nome) {
      _URL = `${this.URL}/find?nome=${this.nome}`;
    }

    this.request = `curl -i -X GET -H "${HEADER_KEY}:${HEADER_VALUE}" "${_URL}"`;

    return this.http.get<Medicamento[]>(_URL, HTTP_OPTIONS)
      .pipe(
        tap((m) => { this.response = m; }),
        catchError(this.handleError('Busca dos Medicamentos', []))
      );

  }

  adicionarDialog(): void {
    this.dataDialog = {
      titulo: 'Adicionar medicamento',
      disabled: false,
      medicamento: <Medicamento>{}
    };
    this.openDialog().subscribe((val) => { this.add(val); });
  }

  removerDialog(_medicamento): void {
    this.dataDialog = {
      titulo: 'Remover medicamento',
      disabled: true,
      medicamento: _medicamento
    };
    this.openDialog().subscribe((val) => { this.delete(val); });
  }

  atualizarDialog(_medicamento): void {
    this.dataDialog = {
      titulo: 'Atualizar medicamento',
      disabled: false,
      medicamento: _medicamento
    };
    this.openDialog().subscribe((val) => { this.update(val); });
  }

  private openDialog() {
    // tslint:disable-next-line:prefer-const
    let dialogRef = this.dialog.open(DialogMedicamentoComponent, { width: '500px', data: this.dataDialog });
    return dialogRef.afterClosed().pipe(takeWhile((val) => {
      return val != null;
    }));
  }

  // getById(id: number): Observable<Medicamento> {
  //   const HEADER_KEY = 'Accept';
  //   const HEADER_VALUE = 'application/json;charset=UTF-8';
  //   const HTTP_OPTIONS = { headers: new HttpHeaders({ HEADER_KEY: HEADER_VALUE }) };
  //   const _URL = `${this.URL}/${id}`;
  //   return this.http.get<Medicamento>(_URL, HTTP_OPTIONS)
  //     .pipe(
  //       tap(_ => this.alertService.showToaster(`Buscando medicamento id=${id}`)),
  //       catchError(this.handleError<Medicamento>(`Busca do Medicamento id=${id}`))
  //     );
  // }

  update(medicamento: Medicamento) {
    this.alertService.showToaster(`Atualizando o medicamento : ${medicamento.nome} `);
    const HEADER_KEY1 = 'Accept';
    const HEADER_KEY2 = 'Content-Type';
    const HEADER_VALUE = 'application/json;charset=UTF-8';
    const _URL = `${this.URL}/${medicamento.id}`;
    let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.append(HEADER_KEY1, HEADER_VALUE);
    _headers = _headers.append(HEADER_KEY2, HEADER_VALUE);
    const HTTP_OPTIONS = { headers: _headers };

    this.request = `curl -i -X PUT -d '` +
      `'` + `"${medicamento.toString()}" '` +
      `-H "${HEADER_KEY1}:${HEADER_VALUE}"  -H "${HEADER_KEY2}:${HEADER_VALUE}" "${_URL}"`;

    this.http.put<Medicamento>(_URL, medicamento, HTTP_OPTIONS)
      .pipe(
        tap((_m) => {
          this.alertService.showToaster(`Medicamento ${medicamento.nome} atualizado ...`);
          this.response = _m;
        }),
        catchError(this.handleError<Medicamento>('Atualização do Medicamento'))
      ).subscribe();
  }

  add(medicamento: Medicamento) {
    this.alertService.showToaster(`Adicionando o medicamento w/ ${medicamento.nome}`);
    const HEADER_KEY1 = 'Accept';
    const HEADER_KEY2 = 'Content-Type';
    const HEADER_VALUE = 'application/json;charset=UTF-8';
    let _headers: HttpHeaders = new HttpHeaders();
    _headers = _headers.append(HEADER_KEY1, HEADER_VALUE);
    _headers = _headers.append(HEADER_KEY2, HEADER_VALUE);
    const HTTP_OPTIONS = { headers: _headers };

    this.request = `curl -i -X POST -d '` +
      `'` + `"${medicamento.toString()}" '` +
      `-H "${HEADER_KEY1}:${HEADER_VALUE}"  -H "${HEADER_KEY2}:${HEADER_VALUE}" "${this.URL}"`;

    this.http.post<Medicamento>(this.URL, medicamento, HTTP_OPTIONS)
      .pipe(
        tap((_m) => {
          this.alertService.showToaster(`Medicamento ${medicamento.nome} adicionado ...`);
          this.response = _m;
        }),
        catchError(this.handleError<Medicamento>('Adição do Medicamento '))
      ).subscribe();
  }

  delete(medicamento: Medicamento) {
    this.alertService.showToaster(`Removendo o medicamento : ${medicamento.nome}`);
    const HEADER_KEY = 'Accept';
    const HEADER_VALUE = 'application/json;charset=UTF-8';
    const HTTP_OPTIONS = { headers: new HttpHeaders({ HEADER_KEY: HEADER_VALUE }) };
    const _URL = `${this.URL}/${medicamento.id}`;
    this.request = `curl -i -X DELETE -H "${HEADER_KEY}:${HEADER_VALUE}" "${_URL}"`;
    return this.http.delete<Medicamento>(_URL, HTTP_OPTIONS).pipe(
      tap((_m) => {
        this.alertService.showToaster(`Medicamento ${medicamento.nome} removido ...`);
        this.response = _m;
      }),
      catchError(this.handleError<Medicamento>('Deleção do Medicamento '))
    ).subscribe();
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.alertService.showToaster(`${operation} falhou: ${error.message}`);
      return of(result as T);
    };
  }

}
