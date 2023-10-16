import { AppShell, Button, Flex, Mark, Text, Title } from '@mantine/core'
import { IconArrowDown } from '@tabler/icons-react'

export const Landing = () => {
  return (
    <AppShell.Section h='98vh' py='20px'>
      <Flex w='100%' h='100%' justify='center' align='center'>
        <Flex
          w='450px'
          justify='center'
          direction='column'
          align='center'
          rowGap='xs'
        >
          <Title
            order={1}
            styles={{
              root: {
                textAlign: 'center'
              }
            }}
          >
            Hi, I'm Behruz Bakhtiyorov, a{' '}
            <Mark color='blue'>Frontend developer.</Mark>
          </Title>
          <Text
            mt={'md'}
            variant='gradient'
            size='xl'
            gradient={{ from: 'blue', to: 'cyan', deg: 294 }}
          >
            Learn More
          </Text>
          <Button variant='subtle'>
            <IconArrowDown />
          </Button>
        </Flex>
      </Flex>
    </AppShell.Section>
  )
}
