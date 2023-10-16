import { useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

export const useCustomMediaQuery = () => {
  const theme = useMantineTheme()

  const xl = useMediaQuery(`(min-width: ${theme.breakpoints.xl})`)
  const lg = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`)
  const md = useMediaQuery(`(min-width: ${theme.breakpoints.md})`)
  const sm = useMediaQuery(`(min-width: ${theme.breakpoints.sm})`)
  const xs = useMediaQuery(`(min-width: ${theme.breakpoints.xs})`)

  return {
    xl,
    lg,
    md,
    sm,
    xs
  }
}
