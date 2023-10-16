import {
  Anchor,
  Burger,
  Menu,
  useComputedColorScheme,
  useMantineColorScheme
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { IconSun, IconMoon } from '@tabler/icons-react'

export const NavMenu = () => {
  const [opened, { toggle }] = useDisclosure()
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true
  })

  const isDark = computedColorScheme === 'dark'

  return (
    <Menu
      shadow='md'
      width='200px'
      opened={opened}
      position='bottom-end'
      offset={13}
      onChange={toggle}
    >
      <Menu.Target>
        <Burger opened={opened} aria-label='Toggle navigation' />
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item>
          <Anchor>About me</Anchor>
        </Menu.Item>
        <Menu.Item>
          <Anchor>Experience</Anchor>
        </Menu.Item>
        <Menu.Item>
          <Anchor>Projects</Anchor>
        </Menu.Item>
        <Menu.Item>
          <Anchor>Contact</Anchor>
        </Menu.Item>
        <Menu.Item onClick={() => setColorScheme(isDark ? 'light' : 'dark')}>
          {isDark ? (
            <IconSun size='23px' color='#4299e1' />
          ) : (
            <IconMoon size='23px' color='#4299e1' />
          )}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  )
}
