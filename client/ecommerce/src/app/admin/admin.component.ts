import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  //Properties and Methods

  constructor(private http: HttpClient){}

  products:any[]=[];
  age = 11;
  address = 1000;
  title = "Good morning, Admin";
  pricePH = "Enter the price here...";
  abcText = "George W Bush";
  priceClass = "redborder";
  productClass = "";
  actor = "actor";



  printHi(){
    console.log('Hi!');
    this.priceClass = "blueborder";
  }

  alertSubmit(){
    alert('Submitted successfully!');
  }

  createCandyBorder(){
    this.productClass = "focusInput";
  }

  removeCandyBorder(){
    this.productClass = "";
  }

  getUsers(){

  }

  deleteUsers(){

  }

  setLiveStatus(id:number, status:boolean){
    console.log(id, status);
    this.http.put<boolean>('http://localhost:4500/setstatus/' + id, { status: status}).subscribe( res => {
      console.log(res);
    })
  }

  ngOnInit(): void {
      this.http.get<any>('http://localhost:4500/products').subscribe( res => {
        console.log(res);
        this.products = res.productData;

      console.log('Local products', this.products);
      })
  }


}
