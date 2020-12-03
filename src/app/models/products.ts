import { category } from './categories';

export interface doc{
    docs:product[]
}
export interface product{
    id:number,
    itemPrice:number,
    name:string,
    category:category,
    subCategory:subCategory

}

export interface subCategory{
    category:number,
    id:number,
    name:string,
    nameAr:string,
    nameEn:string,
    

} 