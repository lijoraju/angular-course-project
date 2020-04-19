import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Chicken', 1),
    new Ingredient('Tomatoe', 2),
    new Ingredient('Onion', 4),
    new Ingredient('Green Chilly', 3)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
