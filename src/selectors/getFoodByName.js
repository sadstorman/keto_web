import { food } from "../data/food"

export const getFoodByName = (name = '') => {
    if( name === '') {
        return []
    }
    name = name.toLocaleLowerCase()
    return food.filter( comida => comida.nombre.toLocaleLowerCase().includes(name))
}

