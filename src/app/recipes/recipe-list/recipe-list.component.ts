import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model"

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("pizza","dec piiza","https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png"),
    new Recipe("pizza","dec piiza","https://www.pizzahut.co.uk/order/images/icons/logo-300x300.ed09f0955306cb0be42c35092733b5c2.png")

    
  ];



  constructor() { }

  ngOnInit(): void {
  }

}
