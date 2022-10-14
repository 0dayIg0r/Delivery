import { Product } from "../types/Products"
import { Tenant } from "../types/Tenant"
import { User } from "../types/User"

const temporaryOneProduct: Product = {
    id: 1,
    image: '/tmp/burger.png',
    categoryName: 'Tradicional',
    name: 'Texas Burger',
    price: 25,
    description: ''
}

export const useApi = (tenantSlug?: string) => ({
    getTenant: async () => {
        switch (tenantSlug) {
            case 'TheBurger':
                return {
                    slug: 'TheBurger',
                    name: 'TheBurger',
                    mainColor: '#FB9400',
                    secondColor: '#FFF9F2'
                }
                break
            case 'ThePizza':
                return {
                    slug: 'ThePizza',
                    name: 'ThePizza',
                    mainColor: '#6AB70A',
                    secondColor: '#E0E0E0'
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
    },

    authorizeTken: async (token: string): Promise<User | false> => {
        if(!token) return false

        return {
            name: 'Tester',
            email: 'tester@gmail.com'
        }
    }



})