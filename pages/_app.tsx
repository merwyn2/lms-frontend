import '@/styles/globals.css'
import ProtectedRoute from '@/components/ProtectedRoute'

const publicPages = ['/login']

function MyApp({ Component, pageProps, router }) {
  const isPublic = publicPages.includes(router.pathname)
  const getLayout = Component.getLayout || ((page) => page)

  return isPublic ? getLayout(<Component {...pageProps} />)
                  : getLayout(<ProtectedRoute><Component {...pageProps} /></ProtectedRoute>)
}

export default MyApp
