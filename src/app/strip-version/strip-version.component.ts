import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-strip-version',
  templateUrl: './strip-version.component.html',
  styleUrls: ['./strip-version.component.scss']
})
export class StripVersionComponent implements OnInit {

  stripVersion: FormGroup;
  cardHandler = this.onChange.bind(this);
  cardNumber: any;
  cardExpiry: any;
  cardCvc: any;
  error: any;
  constructor(private f: FormBuilder, private cd: ChangeDetectorRef) { 
    this.stripVersion = this.f.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    const stripe: stripe.Stripe = Stripe('pk_test_9DQ7YDBRqYYLraeQai5GToyC');
    console.log(stripe);
    const elements = stripe.elements();
    this.cardNumber = elements.create('cardNumber');
    this.cardNumber.mount('#card-number');
    this.cardExpiry = elements.create('cardExpiry');
    this.cardExpiry.mount('#card-expiry');
    this.cardCvc = elements.create('cardCvc');
    this.cardCvc.mount('#card-cvc');

    this.cardNumber.addEventListener('change', this.cardHandler);
    this.cardExpiry.addEventListener('change', this.cardHandler);
    this.cardCvc.addEventListener('change', this.cardHandler);
  }

  onChange({ error }) {
    console.log(error);
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }
}
