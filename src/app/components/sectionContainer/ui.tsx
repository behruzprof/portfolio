import { AppShell, Flex, Title } from '@mantine/core'
import { CSSProperties, PropsWithChildren, forwardRef } from 'react'

interface SectionContainerProps {
  title: string
  styles?: CSSProperties
}

export const SectionContainer = forwardRef<
  HTMLDivElement,
  SectionContainerProps & PropsWithChildren
>(({ title, styles, children }, ref) => {
  return (
    <AppShell.Section styles={{ section: styles }} mt='lg' ref={ref}>
      <Flex direction='column' align='center' justify='center' rowGap='xl'>
        <Title order={2} styles={{ root: { textAlign: 'center' } }}>
          {title}
        </Title>
        {children}
      </Flex>
    </AppShell.Section>
  )
})
