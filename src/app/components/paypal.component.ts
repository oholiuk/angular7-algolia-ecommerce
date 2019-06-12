import { Component, AfterViewChecked, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
declare let paypal: any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html'
})
export class PayPalComponent implements AfterViewChecked {
  @Input() finalAmount: number;
  addScript: boolean = false;
  paypalLoad: boolean = true;
  
  paypalConfig = {
    env: 'sandbox',
    client: {
      sandbox: environment.paypal
    },
    commit: true,
    payment: (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            { amount: { total: this.finalAmount, currency: environment.paypal.currency } }
          ]
        }
      });
    },
    onAuthorize: (data, actions) => {
      return actions.payment.execute().then((payment) => {
        console.log("Pago Autorizado!");
        // TODO: Next steps for success transacction
      })
    }
  };
 
  ngAfterViewChecked(): void {
    if (!this.addScript) {
      this.addPaypalScript().then(() => {
        paypal.Button.render(this.paypalConfig, '#paypal-checkout-btn');
        this.paypalLoad = false;
      })
    }
  }
  
  addPaypalScript() {
    this.addScript = true;
    return new Promise((resolve, reject) => {
      let scripttagElement = document.createElement('script');    
      scripttagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scripttagElement.onload = resolve;
      document.body.appendChild(scripttagElement);
    })
  }
}
