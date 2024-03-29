import { Anchor, Flex, Image, Mark, Text } from '@mantine/core'

export const About = () => {
  return (
    <Flex
      w='100%'
      justify='center'
      align='center'
      gap='sm'
      direction={{ base: 'column', md: 'row' }}
    >
      <Text maw={{ base: '80%', md: '70%'}} miw='290px'>
        Hi, I'm Behruz! I studied <Mark color='blue'>Full Stack</Mark> at the{' '}
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
        <br />
        I enjoy creating scalable & elegant web/mobile applications that
        have a real-world impact. I'm always learning new technologies, either
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
        src='/about.jpg'
      />
    </Flex>
  )
}
