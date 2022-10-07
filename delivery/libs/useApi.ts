
export type getTenantResponse = {
    name: string,
    mainColor: string,
    secondColor: string
}
export const useApi = () => ({
    getTenant: (tenantSlug: string): boolean | getTenantResponse =>{
        switch(tenantSlug){
            case 'TheBurger':
                return{
                    name: 'TheBurger',
                    mainColor: '#FF0000',
                    secondColor: '#00FF00'
                }
                break
            case 'ThePizza':
                return{
                    name: 'ThePizza',
                    mainColor: '#0000FF',
                    secondColor: '#FF0000'
            }
            
            break
            default: return false
        }
    }
})