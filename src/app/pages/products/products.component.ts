import { Component, inject, NgModule, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/products/iproducts';
import { NgxSpinnerService } from 'ngx-spinner';
import { SearchPipe } from '../../shared/pipes/search/search.pipe';
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [SearchPipe, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{

  private readonly _ngxSpinnerService = inject(NgxSpinnerService);
  constructor(private _productsService:ProductsService){}
  prodList:IProducts[]=[];

  searchText:string = '';
  getAllProd():void{
    //loading 
    this._ngxSpinnerService.show("loading_spinner");
    setTimeout(() => {
      this._productsService.getAllProduct().subscribe({
      next:(res)=>{
        console.log(res);
        this.prodList = res;
        this._ngxSpinnerService.hide("loading_spinner");
      },
      error:(err)=>{
        console.log(err);
        this._ngxSpinnerService.hide("loading_spinner");
      }
    });
    }, 1000);
    
  }

  ngOnInit(): void {
    this. getAllProd();
  }
}
