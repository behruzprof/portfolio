import { AppShell, Button, Flex, Mark, Text, Title } from '@mantine/core'
import { IconArrowDown } from '@tabler/icons-react'
import { useFromToAnimate } from '@/app/hooks/useFromToAnimate'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'
import { scroller } from 'react-scroll'


export const Landing = () => {
  const { ref: titleRef } = useFromToAnimate<HTMLHeadingElement>()
  const { ref: textRef } = useFromToAnimate<HTMLHeadingElement>({
    from: {
      x: 200,
      y: 100
    }
  })
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      gsap.timeline({ repeat: -1, yoyo: true }).to(buttonRef.current, {
        y: 20,
        duration: 0.3,
        ease: 'power1.inOut'
      })
    }
  }, [])

  return (

    <AppShell.Section h='98vh' py='20px'>
      <Flex w='100%' h='100%' justify='center' align='center'>
        <Flex
          w='450px'
          justify='center'
          direction='column'
          align='center'
          rowGap='xs'
        >
          <Title
            order={1}
            styles={{
              root: {
                textAlign: 'center'
              }
            }}
            ref={titleRef}
          >
            Hi, I'm <Mark color='blue'>Frontend Developer.</Mark>
          </Title>
          <Text
            ref={textRef}
            mt={'md'}
            variant='gradient'
            size='xl'
            gradient={{ from: 'blue', to: 'cyan', deg: 294 }}
          >
            Learn More
          </Text>
          <Button
            ref={buttonRef}
            variant='subtle'
            onClick={() => scroller.scrollTo('about-me', {
              offset: -70,
              smooth: true
            })}
          >
            <IconArrowDown />
          </Button>
        </Flex>
      </Flex>
    </AppShell.Section>
  )
}
