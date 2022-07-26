import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../shared/ingrediant.model';
import { ShoppingService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants  : Ingrediant[];






  constructor(private slService: ShoppingService) { }

  ngOnInit(): void {
    this.ingrediants= this.slService.getIngerdiants()
    this.slService.ingrediantsChanged.subscribe(
      (ingrediants : Ingrediant[]) =>{
        this.ingrediants= ingrediants
      }
    )

  }



}
