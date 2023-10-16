import { AppShell, Container, Anchor, Box, Flex } from '@mantine/core'
import { IconBrandGithub, IconFile } from '@tabler/icons-react'

export const Footer = () => {
  return (
    <AppShell.Footer>
      <Container size='lg' py='md'>
        <Flex justify='center' direction='column' align='center' rowGap='sm'>
          <Anchor
            href='https://github.com/behruzprof'
            underline='hover'
            target='_blank'
          >
            Made with 💙 (and React) by Behruz Bakhtiyorov
          </Anchor>
          <Box>
            <Anchor href='https://github.com' c='#4299e1'>
              <IconBrandGithub />
            </Anchor>
            <Anchor href='https://github.com' c='#4299e1'>
              <IconFile />
            </Anchor>
          </Box>
        </Flex>
      </Container>
    </AppShell.Footer>
  )
}
