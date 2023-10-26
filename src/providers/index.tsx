import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'

import { App } from '@/app'
import {themes} from '@/app';

export const Providers = () => {
  return (
    <StrictMode>
      <MantineProvider theme={themes.mantineTheme}>
        <App />
      </MantineProvider>
    </StrictMode>
  )
}
