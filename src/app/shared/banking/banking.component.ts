import { Component } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.css']
})
export class BankingComponent {

  private poupanca: number = 250000;
  private carteira: number = 500000;

  get getPoupanca(): number {
    return this.poupanca;
  }

  get getCarteira(): number {
    return this.carteira;
  }

  public setSacar(value: string): number {
    const sacar = Number(value);
    return sacar;
  }

  public setDepositar(value: string): number {
    const depositar = Number(value);
    return depositar;
  }
}
