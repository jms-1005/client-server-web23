import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface'

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {
  products:any[] = [];

  tempProducts: any[] = [
    {
      id: 1,
      name: "product 1",
      description: 'Hi... new product 1'
    },
    {
      id: 2,
      name: "product 2",
      description: 'Product 22'
    },
    {
      id: 3,
      name: "product 3",
      description: 'Product 23'
    }
  ]

  constructor(private http:HttpClient){

  }

  // Every time the component loads (on load) trigger HTTP call
  // We wait for the server to send the response through a subscription (Promise, Observables, Sockets)
  // Once received, we can parse the JSON and bind it to HTML

  ngOnInit(): void {
      //anything written inside the ngOnInit will be executed whenever the component is initialized
      this.http.get<Product>("http://localhost:4500/products").subscribe(response => {
          console.log(response.productData);
          this.products = response.productData;
      });
  }

}
