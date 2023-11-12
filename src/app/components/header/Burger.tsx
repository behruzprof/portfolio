import {
  Burger as MantineBurger,
  Menu,
  MenuItem,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { ActionTheme } from './ActionTheme'
import { Links } from './Links'

export const Burger = () => {
  const [opened, { toggle }] = useDisclosure()


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
        <MantineBurger opened={opened} aria-label='Toggle navigation' />
      </Menu.Target>

      <Menu.Dropdown onClickCapture={toggle}>
        <Links Overlay={MenuItem} />

        <ActionTheme />
      </Menu.Dropdown>
    </Menu>
  )
}
