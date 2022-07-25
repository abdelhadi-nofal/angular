import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants  : Ingrediant[] = [
    new Ingrediant("applels",5),
    new Ingrediant("beary",15),
    new Ingrediant("banana",10)
  ];






  constructor() { }

  ngOnInit(): void {
  }

}
