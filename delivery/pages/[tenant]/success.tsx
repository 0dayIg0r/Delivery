import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Icon } from '../../components/icon'
import { InputField } from '../../components/InputField'
import { useAppContext } from '../../contexts/AppContext'
import { useApi } from '../../libs/useApi'

import styles from '../../styles/Success.module.css'
import { Tenant } from '../../types/Tenant'

const Success = (data: Props) => {
    const { tenant, setTenant } = useAppContext()
    const router = useRouter()


    const handleSubmit = () => {
        router.push(`/${data.tenant.slug}/login`)
    }


    return (
        <div className={styles.container}>
            <Head>
                <title> Verifique seu e-mail | {data.tenant.name}</title>
            </Head>

            <Header
                color={data.tenant.mainColor}
                backHref={`/${data.tenant.slug}/forget`}
            />

            <div className={styles.iconArea}>
                <Icon
                icon='mailSent'
                color={data.tenant.mainColor}
                width={99}
                height={81}
                />
            </div>

            <div className={styles.title}>Verifique seu e-mail</div>

            <div className={styles.subtitle}>
                Enviamos instruções para recuperação de senha para o seu e-mail
            </div>

            <div className={styles.inputArea}>
                <Button
                    color={data.tenant.mainColor}
                    label='Fazer Login'
                    onClick={handleSubmit}
                    fill
                />
            </div>
        </div>



    )
}

export default Success

type Props = {
    tenant: Tenant
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { tenant: tenantSlug } = context.query

    const api = useApi()

    // get tenant
    const tenant = await api.getTenant(tenantSlug as string)

    if (!tenant) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            tenant
        }
    }
}