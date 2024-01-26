import {
  AppShell,
  NavLink,
  Box,
  Container,
  Text,
  Flex,
} from '@mantine/core'
import { IconCode } from '@tabler/icons-react'

import { Burger } from './Burger'
import { useCustomMediaQuery } from '@/app/hooks/useCustomMediaQuery'
import { ActionTheme } from './ActionTheme'
import { Links } from './Links'

export const Header = () => {

  const { xs } = useCustomMediaQuery()

  return (
    <AppShell.Header pos='fixed'>
      <Container size='lg'>
        <Flex w='100%' gap='md' justify='space-between' align='center'>
          <Box w={'max-content'}>
            <NavLink
              label={<Text c={'#4299e1'} fw={700} children='BehruzDev71' />}
              href='/'
              rightSection={
                <IconCode size={'1rem'} stroke={1.5} color='#4299e1' />
              }
            />
          </Box>
          {xs ? (
            <Flex align='center' columnGap='sm'>
              <Links />
              <ActionTheme />
            </Flex>
          ) : (
            <Burger />
          )}
        </Flex>
      </Container>
    </AppShell.Header>
  )
}
