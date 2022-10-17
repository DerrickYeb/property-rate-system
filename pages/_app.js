import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import NextNProgress from 'nextjs-progressbar'
import { SessionProvider } from 'next-auth/react'
import RouteGuard from '~modules/Authentication/RouteGuard'
import theme from '~theme/theme'
import '../styles/globals.css'
import Auth from 'src/services/Auth'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus>
      <ChakraProvider theme={theme}>
        {/* <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}> */}
        <NextNProgress />
        {/* <RouteGuard>  */}
        {
          Component.auth ?? (
            <Auth>
          <Component {...pageProps} />
            </Auth>
)
        }
        {/* </RouteGuard> */}
        {/* </MantineProvider> */}
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
