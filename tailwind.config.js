/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
const fontvs = require('./font-vs')
const { fontFamily } = require('tailwindcss/defaultTheme')

// console.log(fontvs)
module.exports = {
  darkMode: 'class',
  safelist: [
    "text-[20px]",
    ...fontvs,
    //
    // {
    //     pattern: /font-vs-(0|1)-(100|200|300|400|500|600|700)-(-25|0|200)-(20|24|40|48)/,
    //     // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    // },
    // {
    //     pattern: /text-(xs|sm|md|lg|xl|2xl|3xl|4xl|5xl)/,
    //     // variants: ['lg', 'hover', 'focus', 'lg:hover'],
    // },

  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
    './helpers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontSize: {
      'body-small': ['12px', {
        lineHeight: '16px',
        letterSpacing: '0.4',
      }],
      'body-medium': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.25',
      }],
      'body-large': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.5',
      }],
      'label-small': ['11px', {
        lineHeight: '16px',
        letterSpacing: '0.5',
      }],
      'label-medium': ['12px', {
        lineHeight: '16px',
        letterSpacing: '0.5',
      }],
      'label-large': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.1',
      }],
      'title-small': ['14px', {
        lineHeight: '20px',
        letterSpacing: '0.1',
      }],
      'title-medium': ['16px', {
        lineHeight: '24px',
        letterSpacing: '0.15',
      }],
      'title-large': ['22px', {
        lineHeight: '28px',
        letterSpacing: '0',
      }],
      'headline-small': ['24px', {
        lineHeight: '32px',
        letterSpacing: '0',
      }],
      'headline-medium': ['28px', {
        lineHeight: '36px',
        letterSpacing: '0',
      }],
      'headline-large': ['32px', {
        lineHeight: '40px',
        letterSpacing: '0',
      }],
      'display-small': ['36px', {
        lineHeight: '44px',
        letterSpacing: '0',
      }],
      'display-medium': ['45px', {
        lineHeight: '52px',
        letterSpacing: '0',
      }],
      'display-large': ['57px', {
        lineHeight: '64px',
        letterSpacing: '0',
      }],
      'page-title': ['72px', {
        lineHeight: '80px',
        letterSpacing: '0',
      }],
    },
    screens: {
      'sm': '600px',
      'md': '840px',
      'lg': '1240px',
      'xl': '1440px',
      '2xl': '1440px',
    },
    extend: {
      fontFamily: {
        primary: ['var(--iran-yekan)', ...fontFamily.sans],
        serif: ['var(--iran-yekan)', ...fontFamily.serif],
      },
      container: {
        padding: {
          DEFAULT: '0.5rem',
          sm: '0.75rem',
          md: '2rem',
          lg: '3rem',
        }
      },
      colors: {

        'primary-light': 'rgb(var(--primary-light) / <alpha-value>)',
        'on-primary-light': 'rgb(var(--on-primary-light) / <alpha-value>)',
        'primary-container-light': 'rgb(var(--primary-container-light) / <alpha-value>)',
        'on-primary-container-light': 'rgb(var(--on-primary-container-light) / <alpha-value>)',
        'primary-fixed-light':'rgb(var(--primary-fixed-light-light) / <alpha-value>)',
        'on-primary-fixed-light':'rgb(var(--on-primary-fixed-light) / <alpha-value>)',
        "primary-fixed-dim-light": 'rgb(var(--primary-fixed-dim-light) / <alpha-value>)',
        "on-primary-fixed-variant-light": 'rgb(var(--on-primary-fixed-variant-light) / <alpha-value>)',

        'secondary-light': 'rgb(var(--secondary-light) / <alpha-value>)',
        'on-secondary-light': 'rgb(var(--on-secondary-light) / <alpha-value>)',
        'secondary-container-light': 'rgb(var(--secondary-container-light) / <alpha-value>)',
        'on-secondary-container-light': 'rgb(var(--on-secondary-container-light) / <alpha-value>)',
        "secondary-fixed-light": 'rgb(var(--secondary-fixed-light) / <alpha-value>)',
        "on-secondary-fixed-light": 'rgb(var(--on-secondary-fixed-light) / <alpha-value>)',
        "secondary-fixed-dim-light": 'rgb(var(--secondary-fixed-dim-light) / <alpha-value>)',
        "on-secondary-fixed-variant-light": 'rgb(var(--on-secondary-fixed-variant-light) / <alpha-value>)',

        'tertiary-light': 'rgb(var(--tertiary-light) / <alpha-value>)',
        'on-tertiary-light': 'rgb(var(--on-tertiary-light) / <alpha-value>)',
        'tertiary-container-light': 'rgb(var(--tertiary-container-light) / <alpha-value>)',
        'on-tertiary-container-light': 'rgb(var(--on-tertiary-container-light) / <alpha-value>)',
        "tertiary-fixed-light": 'rgb(var(--tertiary-fixed-light) / <alpha-value>)',
        "on-tertiary-fixed-light": 'rgb(var(--on-tertiary-fixed-light) / <alpha-value>)',
        "tertiary-fixed-dim-light": 'rgb(var(--tertiary-fixed-dim-light) / <alpha-value>)',
        "on-tertiary-fixed-variant-light": 'rgb(var(--on-tertiary-fixed-variant-light) / <alpha-value>)',

        'background-light': 'rgb(var(--background-light) / <alpha-value>)',
        'on-background-light': 'rgb(var(--on-background-light) / <alpha-value>)',

        'outline-light': 'rgb(var(--outline-light) / <alpha-value>)',
        "outline-variant-light": 'rgb(var(--outline-variant-light) / <alpha-value>)',

        'inverse-surface-light': 'rgb(var(--inverse-surface-light) / <alpha-value>)',
        'inverse-on-surface-light': 'rgb(var(--inverse-on-surface-light) / <alpha-value>)',
        'inverse-primary-light': 'rgb(var(--inverse-primary-light) / <alpha-value>)',
        "shadow-light": 'rgb(var(--shadow-light) / <alpha-value>)',
        "surface-tint-light": 'rgb(var(--surface-tint-light) / <alpha-value>)',

        "scrim-light": 'rgb(var(--scrim-light) / <alpha-value>)',
        'surface-light': 'rgb(var(--surface-light) / <alpha-value>)',
        'on-surface-light': 'rgb(var(--on-surface-light) / <alpha-value>)',
        'surface-variant-light': 'rgb(var(--surface-variant-light) / <alpha-value>)',
        'on-surface-variant-light': 'rgb(var(--on-surface-variant-light) / <alpha-value>)',
        "surface-container-highest-light": 'rgb(var(--surface-container-highest-light) / <alpha-value>)',
        "surface-container-high-light": 'rgb(var(--surface-container-high-light) / <alpha-value>)',
        "surface-container-light": 'rgb(var(--surface-container-light) / <alpha-value>)',
        "surface-container-low-light": 'rgb(var(--surface-container-low-light) / <alpha-value>)',
        "surface-container-lowest-light": 'rgb(var(--surface-container-lowest-light) / <alpha-value>)',
        "surface-dim-light": 'rgb(var(--surface-dim-light) / <alpha-value>)',
        "surface-bright-light": 'rgb(var(--surface-bright-light) / <alpha-value>)',




        'primary-dark': 'rgb(var(--primary-dark) / <alpha-value>)',
        'on-primary-dark': 'rgb(var(--on-primary-dark) / <alpha-value>)',
        'primary-container-dark': 'rgb(var(--primary-container-dark) / <alpha-value>)',
        'on-primary-container-dark': 'rgb(var(--on-primary-container-dark) / <alpha-value>)',
        'primary-fixed-dark':'rgb(var(--primary-fixed-dark) / <alpha-value>)',
        'on-primary-fixed-dark':'rgb(var(--on-primary-fixed-dark) / <alpha-value>)',
        "primary-fixed-dim-dark": 'rgb(var(--primary-fixed-dim-dark) / <alpha-value>)',
        "on-primary-fixed-variant-dark": 'rgb(var(--on-primary-fixed-variant-dark) / <alpha-value>)',

        'secondary-dark': 'rgb(var(--secondary-dark) / <alpha-value>)',
        'on-secondary-dark': 'rgb(var(--on-secondary-dark) / <alpha-value>)',
        'secondary-container-dark': 'rgb(var(--secondary-container-dark) / <alpha-value>)',
        'on-secondary-container-dark': 'rgb(var(--on-secondary-container-dark) / <alpha-value>)',
        "secondary-fixed-dark": 'rgb(var(--secondary-fixed-dark) / <alpha-value>)',
        "on-secondary-fixed-dark": 'rgb(var(--on-secondary-fixed-dark) / <alpha-value>)',
        "secondary-fixed-dim-dark": 'rgb(var(--secondary-fixed-dim-dark) / <alpha-value>)',
        "on-secondary-fixed-variant-dark": 'rgb(var(--on-secondary-fixed-variant-dark) / <alpha-value>)',

        'tertiary-dark': 'rgb(var(--tertiary-dark) / <alpha-value>)',
        'on-tertiary-dark': 'rgb(var(--on-tertiary-dark) / <alpha-value>)',
        'tertiary-container-dark': 'rgb(var(--tertiary-container-dark) / <alpha-value>)',
        'on-tertiary-container-dark': 'rgb(var(--on-tertiary-container-dark) / <alpha-value>)',
        "tertiary-fixed-dark": 'rgb(var(--tertiary-fixed-dark) / <alpha-value>)',
        "on-tertiary-fixed-dark": 'rgb(var(--on-tertiary-fixed-dark) / <alpha-value>)',
        "tertiary-fixed-dim-dark": 'rgb(var(--tertiary-fixed-dim-dark) / <alpha-value>)',
        "on-tertiary-fixed-variant-dark": 'rgb(var(--on-tertiary-fixed-variant-dark) / <alpha-value>)',

        "error-dark": 'rgb(var(--error-dark) / <alpha-value>)',
        "error-container-dark": 'rgb(var(--error-container-dark) / <alpha-value>)',
        "on-error-dark": 'rgb(var(--on-error-dark) / <alpha-value>)',
        "on-error-container-dark": 'rgb(var(--on-error-container-dark) / <alpha-value>)',

        'background-dark': 'rgb(var(--background-dark) / <alpha-value>)',
        'on-background-dark': 'rgb(var(--on-background-dark) / <alpha-value>)',
        "outline-dark": 'rgb(var(--outline-dark) / <alpha-value>)',
        'inverse-surface-dark': 'rgb(var(--inverse-surface-dark) / <alpha-value>)',
        'inverse-on-surface-dark': 'rgb(var(--inverse-on-surface-dark) / <alpha-value>)',
        'inverse-primary-dark': 'rgb(var(--inverse-primary-dark) / <alpha-value>)',
        "shadow-dark": 'rgb(var(--shadow-dark) / <alpha-value>)',
        "surface-tint-dark": 'rgb(var(--surface-tint-dark) / <alpha-value>)',
        "outline-variant-dark": 'rgb(var(--outline-variant-dark) / <alpha-value>)',
        "scrim-dark": 'rgb(var(--scrim-dark) / <alpha-value>)',
        'surface-dark': 'rgb(var(--surface-dark) / <alpha-value>)',
        'on-surface-dark': 'rgb(var(--on-surface-dark) / <alpha-value>)',
        'surface-variant-dark': 'rgb(var(--surface-variant-dark) / <alpha-value>)',
        'on-surface-variant-dark': 'rgb(var(--on-surface-variant-dark) / <alpha-value>)',
        "surface-container-highest-dark": 'rgb(var(--surface-container-highest-dark) / <alpha-value>)',
        "surface-container-high-dark": 'rgb(var(--surface-container-high-dark) / <alpha-value>)',
        "surface-container-dark": 'rgb(var(--surface-container-dark) / <alpha-value>)',
        "surface-container-low-dark": 'rgb(var(--surface-container-low-dark) / <alpha-value>)',
        "surface-container-lowest-dark": 'rgb(var(--surface-container-lowest-dark) / <alpha-value>)',
        "surface-dim-dark": 'rgb(var(--surface-dim-dark) / <alpha-value>)',
        "surface-bright-dark": 'rgb(var(--surface-bright-dark) / <alpha-value>)',
      },
      boxShadow: {
        'slider': '0 10px 40px 0 rgba(0, 0, 0, 0.1)'
      },
      opacity: {
        '4': '0.04',
      },
      width: {
        495: '495px'
      },
      height: {
        380: '380px',
        351: "351px",
        158: "158px",
        495: '495px',
        600: '600px',
        'inventory-img': 'calc(100vh - 8rem - 104px)',
      },
      zIndex: {
        '999': 999,
        '1001': 1001,
        '1009': 1009
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    plugin(function ({matchUtilities,addUtilities, theme}) {
      // const fillV=[0,1]
      // const wghtV=[100,200,300,400,500,600,700]
      // const gradeV=[-25,0,200]
      // const opsV=[20,24,40,48]
      // const res = {}
      // wghtV.map((w,indexw)=>
      //     opsV.map((o,indexO)=>
      //         gradeV.map((g,indexG)=>
      //             fillV.map((f,indexF)=> {
      //                 res[`font-vs-${f}-${w}-${g}-${o}`] = {fontVariationSettings: `'FILL' ${f}, 'wght' ${w}, 'GRAD' ${g}, 'opsz' ${o}`}
      //                 // res.push(`font-vs-[${f}-${w}-${g}-${o}]`)
      //             })
      //         )
      //     )
      // )
      // console.log(res)
      // addUtilities(res)
      matchUtilities(
          {
            'font-vs': (value) => {
              const arr = value.split(" ")
              return {
                fontVariationSettings: "'FILL'" + arr[0] + ",'wght'" + arr[1] + ",'GRAD'" + arr[2] + ",'opsz'" + arr[3],
              }

            },
          },
          // Default values.
          // `flattenColorPalette` required to support native Tailwind color classes like `red-500`, `amber-300`, etc.
          // In most cases you may just pass `theme('config-key')`, where `config-key` could be any (`spacing`, `fontFamily`, `foo`, `bar`)
          // { values: flattenColorPalette(theme('colors')) }

      )
    }),

  ],
  // , require('tailwind-scrollbar-hide')
}
