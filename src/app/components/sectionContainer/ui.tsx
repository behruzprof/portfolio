/* eslint-disable @typescript-eslint/ban-ts-comment */
import { CSSProperties, PropsWithChildren } from 'react'
import { AppShell, Flex, Title } from '@mantine/core'
import { ScrollElement, ScrollElementProps } from 'react-scroll';

import { useFromToAnimate } from '@/app/hooks/useFromToAnimate';
interface SectionContainerProps {
  title: string,
  animationReversed?: boolean
  styles?: CSSProperties
}


export const SectionContainer = ScrollElement(({ title, styles, animationReversed = false, children, ...props }: ScrollElementProps<SectionContainerProps & PropsWithChildren>) => {
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
    // @ts-ignore
    <AppShell.Section styles={{ section: styles }} mt='lg' ref={(el) => { props.parentBindings.domNode = el; }}>
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
