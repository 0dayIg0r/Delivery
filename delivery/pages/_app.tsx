import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as AppContextProvider } from '../contexts/app'
import { Provider as AuthContexProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContexProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContexProvider>
  )

}

export default MyApp
