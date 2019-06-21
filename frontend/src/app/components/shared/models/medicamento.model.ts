import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export interface Medicamento {
        id: number;
        nome: string;
        fabricante: string;
        validade: number;
        preco: number;
        data_criacao: number;
        data_atualizacao: number;
}


export interface MedicamentoDataDialog {
        titulo: string;
        disabled: boolean;
        medicamento: Medicamento;
}

export class MedicamentoDataSource extends DataSource<any> {
        constructor(private obs: Observable<Medicamento[]>) {
                super();
        }
        connect(): Observable<Medicamento[]> {
                return this.obs;
        }
        disconnect() { }
}

