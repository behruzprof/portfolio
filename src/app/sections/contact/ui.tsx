import { Button, Flex, Text } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'

export const Contact = () => {
  return (
      <Flex direction='column' align='center' rowGap='lg' maw='500px'>
        <Text ta='center'>
          Whether it's a job opportunity, an invite to coffee, or feedback on my
          portfolio, my inbox is open!
        </Text>
        <Button
          component='a'
          href='mailto:whitestar06102005@gmail.com'
          variant='gradient'
          w='max-content'
          leftSection={<IconMail />}
        >
          SendEmail
        </Button>
      </Flex>
  )
}
