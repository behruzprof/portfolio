import { SectionContainer } from '@/app/components'
import { Button, Flex, Text } from '@mantine/core'
import { IconMail } from '@tabler/icons-react'

export const Contact = () => {
  return (
    <SectionContainer title='Contact Me' styles={{ marginBottom: '50px' }}>
      <Flex direction='column' align='center' rowGap='lg' maw='500px'>
        <Text ta='center'>
          Whether it's a job opportunity, an invite to coffee, or feedback on my
          portfolio, my inbox is open!
        </Text>
        <Button variant='gradient' w='max-content' leftSection={<IconMail />}>
          SendEmail
        </Button>
      </Flex>
    </SectionContainer>
  )
}
