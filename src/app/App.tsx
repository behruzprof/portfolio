import { AppShell, Container } from '@mantine/core'

import './styles/index.scss'
import { Footer, Header } from './components'
import { Landing } from './sections'

export const App = () => {
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <Container size='lg'>
          <Landing />
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  )
}
