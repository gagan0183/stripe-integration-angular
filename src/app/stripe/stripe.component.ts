import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Elements, Element, StripeService, ElementsOptions, StripeInstance } from 'ngx-stripe';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  stripeTest: FormGroup;
  elements: Elements;
  card: Element;

  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  constructor(private fb: FormBuilder, private stripeService: StripeService) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
      name: ['', Validators.required]
    });
    this.stripeService.elements()
      .subscribe(elements => {
        this.elements = elements;
        if(!this.card) {
          this.card = this.elements.create('card', {
            style: {
              base: {
                iconColor: '#666EE8',
                color: '#31325F',
                lineHeight: '40px',
                fontWeight: 300,
                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                fontSize: '18px',
                '::placeholder': {
                  color: '#CFD7E0'
                }
              }
            }
          });
          this.card.mount('#card-element');
        }
      });
  }

  payment() {
    const name = this.stripeTest.get('name').value;
    this.stripeService.createToken(this.card, {name})
      .subscribe(result => {
        if(result.token) {
          console.log(result.token);
        }
        else if(result.error) {
          console.log(result.error);
        }
      });
  }
}
