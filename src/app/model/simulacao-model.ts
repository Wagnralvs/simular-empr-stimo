import { CallTracker } from "assert";


export class SimulacaoModel {
    constructor(
        public nome: string ,
        public valorDesejado: number,
        public numeroParcelas: number,

    ) {
        this.nome = nome ;
        this.valorDesejado = valorDesejado;
        this.numeroParcelas = numeroParcelas
    }
}

export interface Proposta {
  id: number,
  valorParcela : number,
  numeroParcela: number,
  totalComJuros: number,
}

export class ConfirmacaoEmprestimo{
  constructor(
    public valorTotalJuros: number,
    public numeroParcelas: number,
    public valorParcela: number
  ){
    this.valorTotalJuros = valorTotalJuros;
    this.numeroParcelas = numeroParcelas;
    this.valorParcela = valorParcela;
  }

}
