import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Proposta, SimulacaoModel } from '../model/simulacao-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SimuladorDadosService } from '../service/simulador-dados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  formulario: FormGroup;
  propostaResultado = false;
  private proposta: Proposta ;
  private simulacaoModel: SimulacaoModel;

  valorParcela = null;
  numeroParcelas = null;
  valorTotalJuros= null ;

  visualizarPopUp = false;

  constructor(private fb : FormBuilder , private service: SimuladorDadosService) {
    // this.pegarDados();

  }

  ngOnInit(): void {
   this.formulario = this.fb.group({
     nome:  [null ,[Validators.required , Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]  ],
     valorDesejado: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
     numeroParcelas: [null, [Validators.required, Validators.pattern(/^[0-9]\d*$/)]],
   })
  }

  onSubmit(){
 const nome: string = this.formulario.get('nome')?.value;
 const valorDesejado: number = this.formulario.get('valorDesejado')?.value;
 const numeroParcelas: number = this.formulario.get('numeroParcelas')?.value;

 this.simulacaoModel = new SimulacaoModel(nome ,valorDesejado,  numeroParcelas)
 this.service.enviarDados(this.simulacaoModel);
 this.pegarDados()
}

pegarDados(){
  let proposta: Proposta[] = [];
  let ultimaProposta;

  this.service.pegarDados().pipe(
     tap(result =>{
      proposta = result ;
      ultimaProposta = proposta.pop();

      this.proposta = ultimaProposta;
      this.valorTotalJuros = this.proposta.totalComJuros;
      this.valorParcela = this.proposta.valorParcela;
      this.numeroParcelas = this.proposta.numeroParcela;

      this.propostaResultado = true
    })
  ).subscribe()

}
abrirPopUp(){
 this.visualizarPopUp = true;
}
}
