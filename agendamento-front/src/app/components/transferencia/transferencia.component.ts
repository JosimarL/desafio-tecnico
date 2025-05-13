import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Transferencia } from '../../models/transferencia.model';
import { TransferenciaService } from '../../services/transferencia.service';


@Component({
  selector: 'app-transferencia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './transferencia.component.html'
})

export class TransferenciaComponent implements OnInit {
  transferencia: Transferencia = {
    contaOrigem: '',
    contaDestino: '',
    valor: 0,
    dataTransferencia: ''
  };

  transferencias: Transferencia[] = [];

  mensagemSucesso: string = '';
  mensagemErro: string = '';
  carregando: boolean = false;

  constructor(private service: TransferenciaService) {}

  ngOnInit(): void {
    this.listar();
  }

 listar(): void {
    this.service.listar().subscribe({
      next: (dados) => this.transferencias = dados,
      error: (err) => console.error('Erro ao listar transferências', err)
    });
  }

  agendar(): void {
    this.carregando = true;
    this.service.agendar(this.transferencia).subscribe({
      next: () => {
        this.transferencia = {
          contaOrigem: '',
          contaDestino: '',
          valor: 0,
          dataTransferencia: ''
        };
        this.listar();
        this.mensagemSucesso = 'Transferência agendada com sucesso!';
        this.mensagemErro = '';
        this.carregando = false;
        setTimeout(() => this.mensagemSucesso = '', 3000);
      },
      error: (err: any) => {
        console.error('Erro ao agendar', err);
        this.mensagemErro = 'Erro ao agendar a transferência.';
        this.mensagemSucesso = '';
        this.carregando = false;
        setTimeout(() => this.mensagemErro = '', 3000);
      }
    });
  }

}
