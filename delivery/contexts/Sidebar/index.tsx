import { Button } from '../../components/Button'
import { Tenant } from '../../types/Tenant'
import { useAuthContext } from '../auth'
import styles from './styles.module.css'

type Props = {
    tenant: Tenant
    open: boolean
    onClose: () => void
}

export const Sidebar = ({ tenant, open, onClose }: Props) => {
    const { user } = useAuthContext()
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
                                onClick={() => { }}
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
                    ....
                </div>
            </div>
        </div>
    )
}