import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core'
import NextNProgress from 'nextjs-progressbar'
import theme from '~theme/theme'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    {/* <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}> */}
    <NextNProgress />
    <Component {...pageProps} />
    {/* </MantineProvider> */}
  </ChakraProvider>
}

export default MyApp
