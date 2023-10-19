import { AppShell, Container } from '@mantine/core'
import { useScrollIntoView } from '@mantine/hooks'

import { Footer, Header, SectionContainer } from './components'
import { About, Contact, Experience, Landing, Projects } from './sections'

import './styles/index.scss'

export const App = () => {
  const { scrollIntoView, targetRef: aboutRef } = useScrollIntoView<HTMLDivElement>({
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
          <SectionContainer title='About Me' styles={{ marginTop: '0' }} ref={aboutRef}>
            <About />
          </SectionContainer>
          <SectionContainer title='Experience' animationReversed>
            <Experience />
          </SectionContainer>
          <SectionContainer title='Featured Projects'>
            <Projects />
          </SectionContainer>
          <SectionContainer title='Contact Me' styles={{ marginBottom: '50px' }} animationReversed>
            <Contact />
          </SectionContainer>
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell >
  )
}
