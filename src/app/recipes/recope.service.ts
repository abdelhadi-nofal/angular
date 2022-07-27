import { EventEmitter, Injectable } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";
import { ShoppingService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";


@Injectable()
export class RecipeService{

    recipeSelected = new EventEmitter<Recipe>();


    private recipes: Recipe[] = [
        new Recipe("pizza",
        "dec piiza",
        "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png",
        [new Ingrediant('Meat',1),new Ingrediant('Chesse',3)]),
        new Recipe("pizza2",
        "dec piiza2",
        "https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png",
        [new Ingrediant('Tomato',6),new Ingrediant('Bread',8)])
    
        
      ];

    constructor(private slService: ShoppingService){}

    getRecipe(){
        return this.recipes.slice();
    }

    addIngrediantsToShoppingList(ingrediants: Ingrediant[]){
        this.slService.addIngrediants(ingrediants);
    }


}