import { Tenant } from "../types/Tenant"

export type getTenantResponse = {
    name: string,
    mainColor: string,
    secondColor: string
}
export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | Tenant =>{
        switch(tenantSlug){
            case 'TheBurger':
                return{
                    slug:'TheBurger',
                    name: 'TheBurger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
                break
            case 'ThePizza':
                return{
                    slug:'ThePizza',
                    name: 'ThePizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
            }
            
            break
            default: return false
        }
    }
})