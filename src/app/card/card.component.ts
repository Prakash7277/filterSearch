import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  products=[
    {
      name:"i phone",
      price:150000, 
      image:"https://www.igyaan.in/wp-content/uploads/2022/07/Xiaomi-12s-Ultra.jpg",
      category:"mobile"
    },
    {
      name:"samsung",
      price:150000, 
      image:"https://www.igyaan.in/wp-content/uploads/2022/07/Xiaomi-12s-Ultra.jpg",
      category:"mobile"
    },
    {
      name:"onida",
      price:550000, 
      image:"https://truvison.com/wp-content/uploads/2016/10/60-inch.jpg",
      category:"tv"
    },
    {
      name:"oneplus",
      price:540000, 
      image:"https://truvison.com/wp-content/uploads/2016/10/60-inch.jpg",
      category:"tv"
    },
    {
      name:"samsung",
      price:450000, 
      image:"https://www.airconditionercalgary.ca/wp-content/uploads/2022/04/Best-AC-Brand-calgary.jpg",
      category:"ac"
    },
    {
      name:"LG",
      price:150000, 
      image:"https://www.airconditionercalgary.ca/wp-content/uploads/2022/04/Best-AC-Brand-calgary.jpg",
      category:"ac"
    },
    {
      name:"I phone",
      price:15000, 
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLT06l8TAu8shoJ-R3b_7Bzh9ZCiLHP3GP965pM69dw&s",
      category:"mobile"
    }
   


  ]
   
  filtered_products =this.products
  doFilter(category:string)
  {
    if(category.toLowerCase()=="all")
    {
      this.filtered_products=this.products
    }
    else
    {
      this.filtered_products=this.products.filter(product=> product.category.
      toLowerCase()==category.toLowerCase())
    }
  }
  search_by=""

  get search_by_value()
  {
    return this.search_by;
  }

  set search_by_value(product_name)
  {
    this.search_by=product_name
    this.filtered_products= this.products.filter(product =>product.name.toLowerCase().
    includes (this.search_by.toLowerCase()))
  }

   


  cardWidth='15';
  fontSize='18px';
  cardBorder='2px solid black';
  fontStyle={
    "color":"red",
    'font-family':'Lucida',
    'font-weight':500,
  }
}
