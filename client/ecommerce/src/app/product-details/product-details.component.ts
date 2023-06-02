import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/evironments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

    product:any;

    constructor(private route: ActivatedRoute, private http: HttpClient){

    }

    ngOnInit(): void {
        // this is executed whenever the component loads
        let productID = this.route.snapshot.paramMap.get("id");
        console.log("Product ID is:", productID);

        this.http.get(environment.server + "/products/" + productID).subscribe( productData => {
            console.log('Product data:', productData);
            this.product = productData;
        })
    }

}
