import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta
      name='theme-color'
      content='#171717'
      media='(prefers-color-scheme: dark)'
    />
    <meta
      name='theme-color'
      content='#fafafa'
      media='(prefers-color-scheme: light)'
    />
    <meta name='description' content='View info for your ip or search it' />
    <link rel='icon' type='image/png' sizes='96x96' href='/favicon.png' />
    <link rel='apple-touch-icon' sizes='180x180' href='apple-touch-icon.png' />
    <meta name='robots' content='follow, index' />
    <meta property='og:type' content='website' />
    <meta property='og:title' content='IP Info' />
    <meta property='og:site_name' content='IP Info' />
    <meta
      property='og:description'
      content='View info for your ip or search it'
    />
    <meta property='og:locale' content='en_US' />
    <meta property='og:url' content='https://ip.idm1try.ru/' />
    <link rel='canonical' href='https://ip.idm1try.ru/' />
    <meta
      property='og:image'
      content='https://idm1try.ru/api/og?heading=IP+Info'
    />
    <meta
      name='twitter:image'
      content='https://idm1try.ru/api/og?heading=IP+Info'
    />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:title' content='IP Info' />
    <meta name='twitter:site' content='@idm1try' />
    <meta name='twitter:creator' content='@idm1try' />
    <meta name='darkreader-lock' />
    <link rel='preconnect' href='https://ipinfo.io' />
    <title>IP Info</title>
  </Head>
)

export default Meta
