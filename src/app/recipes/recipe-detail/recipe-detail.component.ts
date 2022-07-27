import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recope.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService : RecipeService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList(){
    // console.log("test add");
    
    this.recipeService.addIngrediantsToShoppingList(this.recipe.ingrediants)
  }

}
