import { AppShell, Flex, Title } from '@mantine/core'
import { CSSProperties, PropsWithChildren } from 'react'

interface SectionContainer {
  title: string
  styles?: CSSProperties
}

export const SectionContainer = ({
  title,
  styles,
  children
}: SectionContainer & PropsWithChildren) => {
  return (
    <AppShell.Section styles={{ section: styles }}>
      <Flex direction='column' align='center' justify='center' rowGap='xl'>
        <Title order={2} styles={{ root: { textAlign: 'center' } }}>
          {title}
        </Title>
        {children}
      </Flex>
    </AppShell.Section>
  )
}
