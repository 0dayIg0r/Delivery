import { Button } from '../Button'
import { Tenant } from '../../types/Tenant'
import { useAuthContext } from '../../contexts/auth'
import styles from './styles.module.css'
import { SidebarMenuItem } from '../SidebarMenuItem'
import { useRouter } from 'next/router'

type Props = {
    tenant: Tenant
    open: boolean
    onClose: () => void
}

export const Sidebar = ({ tenant, open, onClose }: Props) => {
    const { user, setToken } = useAuthContext()
    const router = useRouter()
    return (
        <div
            className={styles.container}
            style={{
                width: open ? '100vw' : 0
            }}
        >
            <div className={styles.area}>
                <div className={styles.header}>
                    <div
                        className={styles.loginArea}
                        style={{ borderBottomColor: tenant.mainColor }}
                    >
                        {user &&
                            <div className={styles.userInfo}>
                                <strong>{user.name}</strong>
                                Último pedido há x Semanas
                            </div>
                        }
                        {!user &&
                            <Button
                                color={tenant.mainColor}
                                label='Fazer login'
                                onClick={() => router.push(`/${tenant.slug}/login`)}
                                fill
                            />
                        }

                    </div>
                    <div
                        className={styles.closeBtn}
                        style={{ color: tenant.mainColor }}
                        onClick={onClose}
                    >x</div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.menu}>
                    <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Cardápio'}
                        onClick={onClose}
                        icon='menu'
                    />

                    <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Sacola'}
                        icon='cart'
                        onClick={() => router.push(`/${tenant.slug}/cart`)}
                    />

                    <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Favoritos'}
                        icon='fav'
                        onClick={() => {}}
                        disabled
                    />

                    <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Meus pedidos'}
                        icon='order'
                        onClick={() => router.push(`/${tenant.slug}/orders`)}
                    />

                    <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Configurações'}
                        icon='config'
                        onClick={() => {}}
                        disabled
                    />
                </div>
                <div className={styles.menuButtom}>
                   {user &&  <SidebarMenuItem
                        color={'#6A7D8B'}
                        label={'Sair'}
                        icon='logout'
                        onClick={() => {
                            setToken('')
                            onClose()
                         }}
                    />}
                </div>
            </div>
        </div>
    )
}