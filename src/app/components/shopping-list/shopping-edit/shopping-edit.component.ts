import { Subscription } from 'rxjs';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  isEditMode: boolean = false;
  editedItemIdex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIdex = index;
        this.isEditMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  onSubmit(form: NgForm) {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);
    if (this.isEditMode)
      this.shoppingListService.updateIngredient(
        this.editedItemIdex,
        newIngredient
      );
    else this.shoppingListService.addNewIngredient(newIngredient);

    this.onClear();
  }

  onClear() {
    this.isEditMode = false;
    this.shoppingListForm.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIdex);
    this.onClear();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
