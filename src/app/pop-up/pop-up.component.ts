import { Component, Input, OnInit } from '@angular/core';
import { SimuladorDadosService } from '../service/simulador-dados.service';
import { Router } from '@angular/router';
import { ConfirmacaoEmprestimo } from '../model/simulacao-model';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  @Input() visualizarPopUp: boolean;
  @Input() valorTotalJuros: number;
  @Input() numeroParcelas: number;
  @Input() valorParcela: number;

  confirmacaoEmprestimo: ConfirmacaoEmprestimo;
  constructor(  private router: Router) { }

  ngOnInit() {
  }
  close(){
    this.visualizarPopUp = false;
  }

  confirmarContratacao(){

    this.confirmacaoEmprestimo = new ConfirmacaoEmprestimo(
            this.valorTotalJuros, this.numeroParcelas, this.valorParcela)
    const confirmacao = JSON.stringify(this.confirmacaoEmprestimo);

    localStorage.setItem('confirmacao', confirmacao );
    this.visualizarPopUp= false;
    this.router.navigate(["/confirmacao"])

  }
}


