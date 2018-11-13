import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  public recipes: Recipe[] = [
    new Recipe('Pasta', 'Spinach Pasta', 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/09/main/one-pot-pasta-spinach-tomatoes-1711p35.jpg'),
    new Recipe('Spegatti', 'Spegatti Green', 'https://www.fifteenspatulas.com/wp-content/uploads/2012/01/greenspaghetti-large.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
