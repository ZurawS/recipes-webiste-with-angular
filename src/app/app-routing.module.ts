import { RecipeStartComponent } from './components/recipes/recipe-start/recipe-start.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/auth',
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./components/recipes/recipes.module').then(
        (module) => module.RecipesModule
      ),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./components/shopping-list/shopping-list.module').then(
        (module) => module.ShoppingListModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PageTransitionEvent }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
