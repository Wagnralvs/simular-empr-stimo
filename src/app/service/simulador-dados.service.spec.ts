/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SimuladorDadosService } from './simulador-dados.service';

describe('Service: SimuladorDados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SimuladorDadosService]
    });
  });

  it('should ...', inject([SimuladorDadosService], (service: SimuladorDadosService) => {
    expect(service).toBeTruthy();
  }));
});
