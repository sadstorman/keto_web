import { food } from "../data/food"

export const getFoodByName = (name = '', value = 'nombre') => {
    if( name === '') {
        return []
    }
    name = name.toLocaleLowerCase()
    return food.filter( comida => comida[value].toLocaleLowerCase().includes(name))
}

