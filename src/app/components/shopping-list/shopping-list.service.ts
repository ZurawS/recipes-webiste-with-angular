import { Ingredient } from './../../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 10),
    new Ingredient('pear', 2),
  ];

  getIngredients() {
    return this.ingredients;
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach((ingredient) => {
      const getIndexIfExists = this.ingredients.findIndex(
        (ing) => ing.name === ingredient.name
      );

      if (getIndexIfExists > 0) {
        this.ingredients[getIndexIfExists].amount += ingredient.amount;
      } else {
        this.ingredients.push(ingredient);
      }
    });

    this.ingredientsChanged.next(this.ingredients);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
  }
}
