import { EventEmitter } from "@angular/core";
import { Ingrediant } from "../shared/ingrediant.model";

export class ShoppingService{
    ingrediantsChanged = new EventEmitter<Ingrediant[]>();
    private ingrediants  : Ingrediant[] = [
        new Ingrediant("applels",5),
        new Ingrediant("beary",15),
        new Ingrediant("banana",10)
      ];


      getIngerdiants(){
        return this.ingrediants.slice();
      }

      addIngrediant(ingrediant: Ingrediant){
        this.ingrediants.push(ingrediant);
        this.ingrediantsChanged.emit(this.ingrediants.slice());

      }

      addIngrediants(ingrediants: Ingrediant[]){
        // for(let ingrediant of this.ingrediants){
        //     this.addIngrediant(ingrediant)
        // }

        this.ingrediants.push(...ingrediants);
        this.ingrediantsChanged.emit(this.ingrediants.slice())


      }
}