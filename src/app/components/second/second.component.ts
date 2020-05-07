import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators  } from '@angular/forms';
// import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  // constructor(private productsService:ProductsService ) { }

  productForm = new FormGroup({
    // type: new FormControl('',[Validators.required]),
    id : new FormControl('',[Validators.required]),
    name : new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity : new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(50)]),
    price : new FormControl('',[Validators.required,Validators.minLength(1),Validators.maxLength(100000)])
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  getAllProduct(){
    return this.productType;
  }


  ngOnInit(): void {
  }

}
