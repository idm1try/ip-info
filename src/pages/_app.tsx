import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

const Website = ({ Component, pageProps, router }: AppProps) => (
  <div>
    <Head>
      <title>IP Info</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content='IP Info' />
      <meta name='author' content='idm1try' />
      <meta name='twitter:title' content='IP Info' />
      <meta name='twitter:site' content='@idm1try' />
      <meta name='twitter:creator' content='@idm1try' />
      <meta property='og:site_name' content='IP Info' />
      <meta name='og:title' content='IP Info' />
      <meta property='og:type' content='website' />
      <link rel='preconnect' href='https://ipinfo.io' />
    </Head>
    <Component {...pageProps} key={router.route} />
  </div>
)

export default Website
