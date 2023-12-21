import { v4 as uuidv4 } from 'uuid';

class Recipe {
    constructor(name, ingredients) {
        this.id = uuidv4();
        this.name = name;
        this.ingredients = ingredients;
        this.isUnlocked = false;
    }

    unlock() {
        this.isUnlocked = true;
    }

    toJson() {
        return {
            id: this.id,
            name: this.name,
            ingredients: this.ingredients.map(ingredient => ingredient.id)
        }
    }
}

export default Recipe;