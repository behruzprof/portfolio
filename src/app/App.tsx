import { AppShell } from '@mantine/core'

import './styles/index.scss'
import { Footer, Header } from './components'

export const App = () => {
  return (
    <AppShell>
      <Header />
      <Footer />
    </AppShell>
  )
}
