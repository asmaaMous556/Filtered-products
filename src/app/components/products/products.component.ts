import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/products';
import {switchMap} from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

category:string;
subcategory:string;
products:product[];
filteredProducts:product[];

  constructor(private ProductService:ProductsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ProductService.getProducts().pipe(switchMap(products=>{
      this.products=products.docs
      console.log(this.products)
      return this.route.queryParamMap
    })).subscribe(params=>{
     
      this.category=params.get('category');
      this.subcategory=params.get('subcategory');
      console.log(this.category);
      console.log(this.subcategory);

     
         if (this.subcategory&& this.category){
          this.filteredProducts=this.products.filter(p=>
           p.category.nameAr===this.category && p.subCategory.nameAr===this.subcategory
           )}

           else if(this.category){
            this.filteredProducts=this.products.filter(p=>
              p.category.nameAr===this.category 
              );
            }
      
      else{
        this.filteredProducts=this.products;
      }
    })  
  }

}


