
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfirmacaoEmprestimo, Proposta, SimulacaoModel } from '../model/simulacao-model';
import { Observable, Subject, of,  } from 'rxjs';
import { tap, takeLast  } from 'rxjs/operators'



@Injectable({
  providedIn: 'root'
})
export class SimuladorDadosService {

Api = "http://localhost:3000/simulacao";
proposta:Proposta
private visulizarContratacao$: Subject<ConfirmacaoEmprestimo>;

constructor(private http:HttpClient) {
  this.visulizarContratacao$ = new Subject();
 }
 pegarContratacao():Observable<ConfirmacaoEmprestimo>{
  return this.visulizarContratacao$.asObservable();
}

receberContratacao(confirmacaoEmprestimo:ConfirmacaoEmprestimo){
this.visulizarContratacao$.next(confirmacaoEmprestimo)
}
enviarDados(dados:SimulacaoModel){
  // mock para API
  const valorTotalJuros: number = dados.valorDesejado * 1.06;
  const valorParcela: number = valorTotalJuros/ dados.numeroParcelas;

 const boby = {
  "valorParcela" : valorParcela,
  "numeroParcela": dados.numeroParcelas ,
  "totalComJuros": valorTotalJuros,
 }
 JSON.stringify(boby);

  this.http.post(this.Api, boby).subscribe(
    (result) => {console.log(JSON.stringify(result))},
    (error) =>{alert(error)}
  )
}

pegarDados():Observable<any>{

 return this.http.get<Proposta[]>(this.Api).pipe(
   tap(result =>  result),
 )
}

}


