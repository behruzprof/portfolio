import { AppShell, Flex, Title } from '@mantine/core'
import { CSSProperties, PropsWithChildren, forwardRef } from 'react'
import { useFromToAnimate } from '@/app/hooks/useFromToAnimate';
interface SectionContainerProps {
  title: string,
  animationReversed?: boolean
  styles?: CSSProperties
}


export const SectionContainer = forwardRef<
  HTMLDivElement,
  SectionContainerProps & PropsWithChildren
>(({ title, styles, animationReversed = false, children }, ref) => {
  const { ref: sectionRef, isOnScreen } = useFromToAnimate<HTMLDivElement>({
    from: {
      x: animationReversed ? "120%" : "-120%",
      y: 0
    },
    to: {
      x: 0,
      duration: 2,
      ease: "back",
    }
  })

  return (
    <AppShell.Section styles={{ section: styles }} mt='lg' ref={ref}>
      <Flex direction='column' align='center' justify='center' rowGap='xl' ref={sectionRef} styles={{
        root: {
          opacity: isOnScreen ? '1' : '0'
        }
      }} >
        <Title order={2} styles={{ root: { textAlign: 'center' } }}>
          {title}
        </Title>
        {children}
      </Flex>
    </AppShell.Section>
  )
})
