import { AppShell, Container } from '@mantine/core'
import { useScrollIntoView } from '@mantine/hooks'

import { Footer, Header } from './components'
import { About, Contact, Experience, Landing, Projects } from './sections'

import './styles/index.scss'

export const App = () => {
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60
  })
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <Container size='lg'>
          <Landing
            onClick={() =>
              scrollIntoView({
                alignment: 'center'
              })
            }
          />
          <About ref={targetRef} />
          <Experience />
          <Projects />
          <Contact />
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell>
  )
}
