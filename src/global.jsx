import '@/styles'
import { Head } from 'minista'
import Sidebar from '@/layouts/Sidebar'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import MobileTabBar from '@/layouts/MobileTabBar'
import appleTouchIcon from '@/assets/favicons/apple-touch-icon.png'
import favicon32 from '@/assets/favicons/favicon-32x32.png'
import favicon16 from '@/assets/favicons/favicon-16x16.png'
import manifest from '@/assets/favicons/site.webmanifest'

export default (props) => {
  const { children, title, url } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>GamesMark | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="manifest" href={manifest} />
      </Head>
      <div className="app-layout">
        <Sidebar url={url} />
        <div className="app-layout__main">
          <Header />
          <Content>{children}</Content>
        </div>
      </div>
      <MobileTabBar url={url} />
    </>
  )
}
