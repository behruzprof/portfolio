import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

export const ActionTheme = () => {
    const { setColorScheme } = useMantineColorScheme()
    const computedColorScheme = useComputedColorScheme('dark', {
        getInitialValueInEffect: true
    })

    const isDark = computedColorScheme === 'dark'
    return (
        <ActionIcon
            onClick={() => setColorScheme(isDark ? 'light' : 'dark')}
            variant='subtle'
            size='xl'
            aria-label='Toggle color scheme'
        >
            {isDark ? <IconSun size='23px' /> : <IconMoon size='23px' />}
        </ActionIcon>
    )
}
