import type { Preview } from '@storybook/nextjs-vite'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../src/theme'
import { GlobalStyle } from '../src/theme/GlobalStyle'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default preview
