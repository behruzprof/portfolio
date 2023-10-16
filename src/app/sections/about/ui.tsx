import { Anchor, AppShell, Flex, Image, Mark, Text, Title } from '@mantine/core'

export const About = () => {
  return (
    <AppShell.Section>
      <Title
        order={2}
        mb='xl'
        styles={{
          root: {
            textAlign: 'center'
          }
        }}
      >
        About Me
      </Title>

      <Flex
        w='100%'
        justify='space-between'
        align='center'
        gap='sm'
        direction={{ base: 'column', md: 'row' }}
      >
        <Text
          maw={{ base: '80%', md: '450px' }}
          miw='300px'
          styles={{
            root: {}
          }}
        >
          Hi, I'm Jarrod! I studied <Mark color='blue'>Full Stack </Mark> at the{' '}
          <Anchor href='https://proweb.uz' target='_blank'>
            Proweb.uz
          </Anchor>
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
          w={400}
          fit='contain'
          src='https://images.unsplash.com/photo-1688920556232-321bd176d0b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80'
        />
      </Flex>
    </AppShell.Section>
  )
}
