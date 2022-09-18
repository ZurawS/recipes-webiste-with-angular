import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  constructor(
    name: string,
    description: string,
    imagePath: string,
    public ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
  }
}
