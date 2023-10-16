import {
  AppShell,
  NavLink,
  Box,
  Container,
  Text,
  useMantineColorScheme,
  useComputedColorScheme,
  Flex,
  Anchor,
  ActionIcon
} from '@mantine/core'
import { IconCode, IconSun, IconMoon } from '@tabler/icons-react'
import { NavMenu } from './NavMenu'
import { useCustomMediaQuery } from '@/app/hooks/useCustomMediaQuery'

export const Header = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true
  })
  const { xs } = useCustomMediaQuery()

  const isDark = computedColorScheme === 'dark'

  return (
    <AppShell.Header>
      <Container size='lg' display={'flex'}>
        <Flex w='100%' gap='md' justify='space-between' align='center'>
          <Box w={'max-content'}>
            <NavLink
              label={<Text c={'#4299e1'} fw={700} children='BehruzProf' />}
              href='/'
              rightSection={
                <IconCode size={'1rem'} stroke={1.5} color='#4299e1' />
              }
            />
          </Box>
          {xs ? (
            <Flex align='center' columnGap='sm'>
              <Anchor>About me</Anchor>
              <Anchor>Experience</Anchor>
              <Anchor>Projects</Anchor>
              <Anchor>Contact</Anchor>
              <ActionIcon
                onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
                variant='subtle'
                size='xl'
                aria-label='Toggle color scheme'
              >
                {isDark ? <IconSun size='23px' /> : <IconMoon size='23px' />}
              </ActionIcon>
            </Flex>
          ) : (
            <NavMenu />
          )}
        </Flex>
      </Container>
    </AppShell.Header>
  )
}
