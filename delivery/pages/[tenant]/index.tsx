import { GetServerSideProps } from 'next'
import { useEffect } from 'react'
import { Banner } from '../../components/Banner'
import { ProductItem } from '../../components/ProductItem'
import { SearchInput } from '../../components/SearchInput'
import { useAppContext } from '../../contexts/AppContext'
import { useApi } from '../../libs/useApi'

import styles from '../../styles/Home.module.css'
import { Tenant } from '../../types/Tenant'

const Home = (data: Props) => {
  const { tenant, setTenant } = useAppContext()

  useEffect(()=>{
    setTenant(data.tenant)
  },[])

  const handleSearch = (searchValue: string) => {
    console.log(`Você está digitando ${searchValue}`)
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo(a)👋</div>
            <div className={styles.headerSubTitle}> O que deseja pra hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
              <div className={styles.menuButtonLine} style={{ backgroundColor: tenant?.mainColor }}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput
            mainColor='#FB4900'
            onSearch={handleSearch}
          />
        </div>
      </header>

      <Banner />

      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: '/tmp/burger.png',
            categoryName: 'Tradicional',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />
        <ProductItem
          data={{
            id: 2,
            image: '/tmp/burger.png',
            categoryName: 'Tradicional',
            name: 'Texas Burger',
            price: '25,50'
          }}
          mainColor={data.tenant.mainColor}
          secondColor={data.tenant.secondColor}
        />

      </div>
    </div>
  )
}

export default Home

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