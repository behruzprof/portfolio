import { Anchor, Flex, Image, Mark, Text } from '@mantine/core'
import { SectionContainer } from '@/app/components'

export const About = () => {
  return (
    <SectionContainer title='About Me' styles={{ marginTop: '0' }}>
      <Flex
        w='100%'
        justify='space-between'
        align='center'
        gap='sm'
        direction={{ base: 'column', md: 'row' }}
      >
        <Text maw={{ base: '80%', md: '450px' }} miw='290px'>
          Hi, I'm Jarrod! I studied <Mark color='blue'>Full Stack </Mark> at the{' '}
          <Anchor href='https://proweb.uz' target='_blank'>
            Proweb.uz
          </Anchor>{' '}
          learning center, and I'm currently practicing and looking for a job.
          Prior to that, I worked at{' '}
          <Anchor href='https://proweb.uz' target='_blank'>
            Proweb.uz
          </Anchor>{' '}
          &{' '}
          <Anchor href='https://bictory.io/' target='_blank'>
            Bictory.io
          </Anchor>{' '}
          as a Frontend Developer Junior.
          <br />
          <br />I enjoy creating scalable & elegant web/mobile applications that
          have a real world impact. I'm always learning new technologies, either
          through{' '}
          <Anchor
            href='https://devpost.com/whitestar06102005'
            target='_blank'
            underline='never'
          >
            hackathons
          </Anchor>{' '}
          or self-study.
        </Text>
        <Image
          ml={0}
          radius='xs'
          w={{ base: 290, md: 400 }}
          fit='contain'
          alt='me'
          src='https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
        />
      </Flex>
    </SectionContainer>
  )
}
