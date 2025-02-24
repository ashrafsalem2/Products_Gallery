import { Component, inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProductsService } from '../../core/services/products/products.service';
import { IProducts } from '../../shared/interfaces/products/iproducts';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  private readonly _ngxSpinnerService = inject(NgxSpinnerService);
  private readonly _activatedRoute = inject(ActivatedRoute)

  constructor(private _productsService:ProductsService){}
  prod!:IProducts;

  searchText:string = '';
  getSpecificProd():void{
    this._activatedRoute.params.subscribe({
      next: res => {
        console.log(res)
        console.log(res['id'])
        //loading 
    this._ngxSpinnerService.show("loading_spinner");
    setTimeout(() => {
      this._productsService.getSpecificProduct(res['id']).subscribe({
      next:(res)=>{
        console.log(res);
        this.prod = res;
        console.log(this.prod)
        this._ngxSpinnerService.hide("loading_spinner");
      },
      error:(err)=>{
        console.log(err);
        this._ngxSpinnerService.hide("loading_spinner");
      }
    });
    }, 1000);
      }
    })
    
    
  }

  ngOnInit(): void {
    this. getSpecificProd();
  }
}
