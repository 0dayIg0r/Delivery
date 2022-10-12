import { Product } from "../types/Products"
import { Tenant } from "../types/Tenant"

const temporaryOneProduct: Product = {
    id: 1,
    image: '/tmp/burger.png',
    categoryName: 'Tradicional',
    name: 'Texas Burger',
    price: 25,
    description: ''
}

export const useApi = (tenantSlug: string) => ({
    getTenant: async() => {
        switch (tenantSlug) {
            case 'TheBurger':
                return {
                    slug: 'TheBurger',
                    name: 'TheBurger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
                break
            case 'ThePizza':
                return {
                    slug: 'ThePizza',
                    name: 'ThePizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
                }

                break
            default: return false
        }
    },

    getAllProducts: async () => {
        let products = []

        for (let q = 0; q < 4; q++) {
            products.push(temporaryOneProduct)
        }
        return products

    },

    getProduct: async (id: string) => {
        return temporaryOneProduct
    }

})