import { food } from "../data/food"

export const getFoodByKeto = (name = '') => {
    if( name === '') {
        return []
    }
    return food.filter( comida => comida.keto.includes(name))
}
