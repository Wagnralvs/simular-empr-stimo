import { Component, OnInit } from '@angular/core';
import { SimuladorDadosService } from '../service/simulador-dados.service';
import { tap } from 'rxjs/operators';
import { ConfirmacaoEmprestimo } from '../model/simulacao-model';


@Component({
  selector: 'app-tela-confirmacao',
  templateUrl: './tela-confirmacao.component.html',
  styleUrls: ['./tela-confirmacao.component.css']
})
export class TelaConfirmacaoComponent implements OnInit {

  valorTotalJuros: number;
  numeroParcelas:number;
  valorParcela: number;

  confirmacaoEmprestimo: ConfirmacaoEmprestimo;

  constructor() {}

  ngOnInit() {

   const confirmacao = localStorage.getItem("confirmacao")
   const resultado = JSON.parse(confirmacao)
   this.numeroParcelas = resultado.numeroParcelas;
   this.valorParcela = resultado.valorParcela;
    this.valorTotalJuros = resultado.valorTotalJuros

   }

}
