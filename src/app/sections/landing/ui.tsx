import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { AppShell, Button, Flex, Mark, Text, Title } from '@mantine/core'
import { IconArrowDown } from '@tabler/icons-react'
interface LandingProps {
  onClick: () => void
}

gsap.registerPlugin({})

export const Landing = ({ onClick }: LandingProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 20,
        yoyo: true,
        repeat: -1
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
          >
            Hi, I'm Behruz Bakhtiyorov, a{' '}
            <Mark color='blue'>Frontend developer.</Mark>
          </Title>
          <Text
            mt={'md'}
            variant='gradient'
            size='xl'
            gradient={{ from: 'blue', to: 'cyan', deg: 294 }}
          >
            Learn More
          </Text>
          <Button ref={buttonRef} variant='subtle' onClick={onClick}>
            <IconArrowDown />
          </Button>
        </Flex>
      </Flex>
    </AppShell.Section>
  )
}
