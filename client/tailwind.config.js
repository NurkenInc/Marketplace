/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,ts,tsx}',
    './src/components/**/*.{html,js,ts,tsx}',
    './src/pages/*.{html,js,ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          '.navbar': {
            'background-color': '#1e293b',
            'color': '#c084fc'
          },
          '.custom-table': {
            'tbody': {
              'tr': {
                'background': '#1e293b',
                'color': '#c084fc',
                'td': {
                  'button': {
                    'background': '#1c304f'
                  }
                }
              }
            }
          },
          '.transactions': {
            'background-color': '#111827',
            'color': '#c084fc'
          }
        }
      }
    ]
  }
}
