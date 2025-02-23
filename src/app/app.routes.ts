import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';

export const routes: Routes = [
    {path:'', redirectTo:'products', pathMatch:'full'},
    {path:'', component:BlankComponent, children:[
        {path:'products', loadComponent:()=>import('./pages/products/products.component').then((c)=>c.ProductsComponent), title:"Products"},
        {path:'details', loadComponent:()=>import('./pages/details/details.component').then((c)=>c.DetailsComponent), title:"Details"},
        {path:'**', loadComponent:()=>import('./pages/notfound/notfound/notfound.component').then((c)=>c.NotfoundComponent), title:"Not Found Page"}
    ]},
];
