import { food } from "../data/food"

export const getFoodByName = (name = '', value = 'nombre') => {
    if( name === '' || null) {
        return []
    }
    if( value === undefined ) {
        return []
    }
    return food.filter( comida => comida[value].includes(name))
}

