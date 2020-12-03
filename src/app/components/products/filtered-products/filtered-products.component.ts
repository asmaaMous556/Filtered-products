import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { category } from 'src/app/models/categories';
import { subCategory } from 'src/app/models/products';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-filtered-products',
  templateUrl: './filtered-products.component.html',
  styleUrls: ['./filtered-products.component.css']
})
export class FilteredProductsComponent implements OnInit {

  categories:category[];
  subCategories: subCategory[];
  category:category;
  
  // @Input ('category') category;
    constructor(private categoryService:CategoriesService,private router:Router,private route : ActivatedRoute) {}
  
    ngOnInit(): void {
      this.categoryService.getCategories().subscribe(categories=>{
        this.categories=categories;
        console.log(this.categories);
      });
  
    }
    getSubcategory(categoryName:string){
      
    return  this.categories.map(category=>{
      this.category=category
      if(this.category.nameAr===categoryName){
        this.subCategories=category.subCategories
      }
      return this.category.nameAr
  })
  }
  
  setQueryParam(subcategoryNameAr){
    this.router.navigate([],{
      relativeTo:this.route,
      queryParams:{
        'subcategory': subcategoryNameAr
      },
      queryParamsHandling:'merge',
      skipLocationChange:true
    
    });
  }
    
  

}
