import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { InputField } from '../../components/InputField'
import { useAppContext } from '../../contexts/app'
import { useApi } from '../../libs/useApi'

import styles from '../../styles/Forget.module.css'
import { Tenant } from '../../types/Tenant'

const Forget = (data: Props) => {
    const { tenant, setTenant } = useAppContext()
    const router = useRouter()
    useEffect(() => {
        setTenant(data.tenant)
    }, [])

    const handleSubmit = () => {
        router.push(`/${data.tenant.slug}/success`)
    }

    const [email, setEmail] = useState('')
  
    return (
        <div className={styles.container}>
            <Head>
                <title> Recuperar senha | {data.tenant.name}</title>
            </Head>

            <Header
                color={data.tenant.mainColor}
                backHref={`/${data.tenant.slug}/login`}
            />

            <div className={styles.header}>{data.tenant.name}</div>
            <div className={styles.title}>Esqueceu sua senha?</div>

            <div
                className={styles.subtitle}
                style={{ borderBottomColor: data.tenant.mainColor }}
            >
                Preencha o campo com o  seu e-mail e receba as instruções necessárias para redefinir sua senha.
            </div>
            <div className={styles.line} ></div>
            <div className={styles.formArea} >

                <div className={styles.inputArea} >
                    <InputField
                        color={data.tenant.mainColor}
                        placeholder={'Digite seu e-mail'}
                        value={email}
                        onChange={setEmail}
                    />
                </div>



                <div className={styles.inputArea}>
                    <Button
                        color={data.tenant.mainColor}
                        label='Enviar'
                        onClick={handleSubmit}
                        fill
                    />
                </div>
            </div>


        </div>
    )
}

export default Forget

type Props = {
    tenant: Tenant
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { tenant: tenantSlug } = context.query

    const api = useApi(tenantSlug as string)

    // get tenant
    const tenant = await api.getTenant()

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