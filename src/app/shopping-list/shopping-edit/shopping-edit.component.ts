import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static:false}) nameInputRef : ElementRef;
  @ViewChild('amountInput', {static:false}) amountInputRef : ElementRef;



  constructor(private slService:ShoppingService) { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value
    const ingAmount = this.amountInputRef.nativeElement.value
    const newIngrediant = new Ingrediant(ingName,ingAmount)

    this.slService.addIngrediant(newIngrediant)


  }

}
