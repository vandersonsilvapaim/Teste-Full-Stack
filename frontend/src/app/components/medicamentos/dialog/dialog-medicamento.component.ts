import { AlertService } from './../../shared/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { MedicamentoDataDialog } from '../../shared';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { parse } from 'querystring';
const moment = _moment;
export const MY_FORMATS = {
        parse: {
                dateInput: 'DD/ MM/ YYYY',
        },
        display: {
                dateInput: 'DD/ MM/ YYYY',
                monthYearLabel: 'MM YYYY',
                dateA11yLabel: 'DD/ MM/ YYYY',
                monthYearA11yLabel: 'MM YYYY',
        },
};

@Component({
        selector: 'element-dialog-medicamento',
        templateUrl: './dialog-medicamento.component.html',
        styleUrls: ['./dialog-medicamento.component.scss'],
        providers: [
                { provide: MAT_DATE_LOCALE, useValue: 'it' },
                { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
                { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
        ]
})
export class DialogMedicamentoComponent implements OnInit, OnDestroy {

        private isLive: boolean;
        medicamento_entidade: FormGroup;
        medicamento_audit: FormGroup;

        constructor(public dialogRef: MatDialogRef<DialogMedicamentoComponent>,
                @Inject(MAT_DIALOG_DATA) protected data: MedicamentoDataDialog,
                private alertService: AlertService,
                protected _formBuilder: FormBuilder) { }

        close() {
                this.dialogRef.close();
        }

        save() {
                // tslint:disable-next-line:triple-equals
                if (this.medicamento_entidade.status == 'VALID' || this.medicamento_entidade.status == 'DISABLED') {
                        // tslint:disable-next-line:prefer-const
                        let _entidade = this.medicamento_entidade.value;
                        _entidade['validade'] = new Date(_entidade['validade']).getTime();
                        this.dialogRef.close(_entidade);
                } else {
                        this.alertService.showToaster('Ainda há campos de preenchimento obrigatório ...');
                }
        }

        ngOnInit() {
                this.isLive = true;

                this.medicamento_entidade = this._formBuilder.group({
                        id: [this.data.medicamento.id],
                        nome: [this.data.medicamento.nome, [Validators.required]],
                        fabricante: [this.data.medicamento.fabricante, Validators.required],
                        validade: [new Date(this.data.medicamento.validade), Validators.required],
                        preco: [this.data.medicamento.preco, Validators.required],
                        data_criacao: [this.data.medicamento.data_criacao],
                        data_atualizacao: [this.data.medicamento.data_atualizacao]
                });

                if (this.data.disabled) {
                        this.medicamento_entidade.disable();
                }

                this.medicamento_audit = this._formBuilder.group({
                        data_criacao: [this.parse(this.data.medicamento.data_criacao)],
                        data_atualizacao: [this.parse(this.data.medicamento.data_atualizacao)]
                });

                this.medicamento_audit.disable();
        }
        parse(timestamp): string {
                const data = new Date(timestamp),
                        dia = data.getDate().toString(),
                        diaF = (dia.length === 1) ? '0' + dia : dia,
                        mes = (data.getMonth() + 1).toString(),
                        mesF = (mes.length === 1) ? '0' + mes : mes,
                        anoF = data.getFullYear();
                return diaF + '/' + mesF + '/' + anoF;
        }

        ngOnDestroy(): void {
                this.isLive = false;
        }

}
