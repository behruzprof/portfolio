import { AppShell, Container } from '@mantine/core'

import { Footer, Header, SectionContainer } from './components'
import { About, Contact, Experience, Landing, Projects } from './sections'

import './styles/index.scss'

export const App = () => {

  return (
    <AppShell styles={{ root: { overflow: 'hidden' } }}>
      <Header />
      <AppShell.Main>
        <Container size='lg'>
          <Landing />
          <SectionContainer name='about-me' title='About Me' styles={{ marginTop: '0' }}>
            <About />
          </SectionContainer>
          <SectionContainer name='experience' title='Experience' animationReversed>
            <Experience />
          </SectionContainer>
          <SectionContainer name='projects' title='Featured Projects'>
            <Projects />
          </SectionContainer>
          <SectionContainer name='contact-me' title='Contact Me' styles={{ marginBottom: '50px' }} animationReversed>
            <Contact />
          </SectionContainer>
        </Container>
      </AppShell.Main>
      <Footer />
    </AppShell >
  )
}
