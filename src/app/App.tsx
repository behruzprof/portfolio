import { AppShell, Container } from '@mantine/core'

import { Footer, Header } from './components'
import { About, Landing } from './sections'

import './styles/index.scss'

export const App = () => {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <Container size='lg'>
          <Landing />
          <About />
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  )
}