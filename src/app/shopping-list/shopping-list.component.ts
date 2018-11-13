import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  public ingredients:Ingredient[] = [
    new Ingredient('Raw Pasta', 12),
    new Ingredient('Raw Spegatti',10)
  ];
  constructor() { }

  ngOnInit() {
  }

}
