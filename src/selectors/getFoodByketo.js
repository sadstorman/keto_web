import { food } from "../data/food"

export const getFoodByKeto = (name = '', value = 'nombre') => {
    if( name === '') {
        return []
    }
    return food.filter( comida => comida[value].includes(name))
}
