import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/products/iproducts';


@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(private _productsService:ProductsService){}
  prod:IProducts[]=[];

  getAllProd():void{
    this._productsService.getAllProduct().subscribe({
      next:(res)=>{
        console.log(res);
        this.prod = res;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }

  ngOnInit(): void {
    this. getAllProd();
  }
}
