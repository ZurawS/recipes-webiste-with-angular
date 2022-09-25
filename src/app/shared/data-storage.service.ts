import { AuthService } from './../auth/auth.service';
import { RecipeService } from './../components/recipes/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../components/recipes/recipe.model';
import { exhaustMap, map, take, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  private recipeUrl: string =
    'https://recipe-book-angular-2927c-default-rtdb.europe-west1.firebasedatabase.app/recipes.json';

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.recipeUrl, recipes).subscribe((res) => console.log(res));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.recipeUrl).pipe(
      map((recipes) =>
        recipes.map((recipe) => ({
          ...recipe,
          ingredients: recipe.ingredients ?? [],
        }))
      ),
      tap((recipes) => this.recipeService.setRecipes(recipes))
    );
  }
}
