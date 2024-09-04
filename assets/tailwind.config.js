// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin")
const fs = require("fs")
const path = require("path")

module.exports = {
  content: [
    "./js/**/*.js",
    "../lib/baseline_phoenix_web.ex",
    "../lib/baseline_phoenix_web/**/*.*ex"
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          25: '#FCFCFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#EAECF0',
          300: '#D0D5DD',
          400: '#98A2B3',
          500: '#667085',
          600: '#475467',
          700: '#344054',
          800: '#1D2939',
          900: '#101828',
        },
        primary: {
          25: '#FCFFFC',
          50: '#EFFFF4',
          100: '#E3FAE8',
          200: '#B9EEC4',
          300: '#7BD992',
          400: '#2BC05B',
          500: '#03AA43',
          600: '#168D3F',
          700: '#0B7032',
          800: '#0A5127',
          900: '#003316',
        },
        error: {
          25: '#FFFBFA',
          50: '#FEF3F2',
          100: '#FEE4E2',
          200: '#FECDCA',
          300: '#FDA29B',
          400: '#F97066',
          500: '#F04438',
          600: '#D92D20',
          700: '#B42318',
          800: '#912018',
          900: '#7A271A',
        },
        warning: {
          25: '#FFFCF5',
          50: '#FFFAEB',
          100: '#FEF0C7',
          200: '#FEDF89',
          300: '#FEC84B',
          400: '#FDB022',
          500: '#F79009',
          600: '#DC6803',
          700: '#B54708',
          800: '#93370D',
          900: '#7A2E0E',
        },
        success: {
          25: '#F6FEF9',
          50: '#ECFDF3',
          100: '#D1FADF',
          200: '#A6F4C5',
          300: '#6CE9A6',
          400: '#32D583',
          500: '#12B76A',
          600: '#039855',
          700: '#027A48',
          800: '#05603A',
          900: '#054F31',
        },
        blue: {
          25: '#F5FAFF',
          50: '#EFF8FF',
          100: '#D1E9FF',
          200: '#B2DDFF',
          300: '#84CAFF',
          400: '#53B1FD',
          500: '#2E90FA',
          600: '#1570EF',
          700: '#175CD3',
          800: '#1849A9',
          900: '#194185',
        },
        indigo: {
          25: '#F5F8FF',
          50: '#EEF4FF',
          100: '#E0EAFF',
          200: '#C7D7FE',
          300: '#A4BCFD',
          400: '#8098F9',
          500: '#6172F3',
          600: '#444CE7',
          700: '#3538CD',
          800: '#2D31A6',
          900: '#2D3282',
        },
        purple: {
          25: '#FAFAFF',
          50: '#F4F3FF',
          100: '#EBE9FE',
          200: '#D9D6FE',
          300: '#BDB4FE',
          400: '#9B8AFB',
          500: '#7A5AF8',
          600: '#6938EF',
          700: '#5925DC',
          800: '#4A1FB8',
          900: '#3E1C96',
        },
        pink: {
          25: '#FEF6FB',
          50: '#FDF2FA',
          100: '#FCE7F6',
          200: '#FCCEEE',
          300: '#FAA7E0',
          400: '#F670C7',
          500: '#EE46BC',
          600: '#DD2590',
          700: '#C11574',
          800: '#9E165F',
          900: '#851651',
        },
        rose: {
          25: '#FFF5F6',
          50: '#FFF1F3',
          100: '#FFE4E8',
          200: '#FECDD6',
          300: '#FEA3B4',
          400: '#FD6F8E',
          500: '#F63D68',
          600: '#E31B54',
          700: '#C01048',
          800: '#A11043',
          900: '#89123E',
        },
        orange: {
          25: '#FFFAF5',
          50: '#FFF6ED',
          100: '#FFEAD5',
          200: '#FDDCAB',
          300: '#FEB273',
          400: '#FD853A',
          500: '#FB6514',
          600: '#EC4A0A',
          700: '#C4320A',
          800: '#9C2A10',
          900: '#7E2410',
        },
      },
      fontSize: {
        // label
        'l-sm': ['0.625rem', { lineHeight: '1rem' }],       // 10px, 16px
        'l-md': ['0.75rem', { lineHeight: '1.125rem' }],    // 12px, 18px
        'l-lg': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px, 20px
        //body
        'bd-sm': ['0.75rem', { lineHeight: '1.125rem' }],     // 12px, 18px
        'bd-md': ['0.875rem', { lineHeight: '1.25rem' }],     // 14px, 20px
        'bd-lg': ['1rem', { lineHeight: '1.5rem' }],          // 16px, 24px
        'bd-2xl': ['1.125rem', { lineHeight: '1.75rem' }],    // 18px, 28px
        //title
        't-sm': ['0.875rem', { lineHeight: '1.25rem' }],    // 14px, 20px
        't-md': ['1rem', { lineHeight: '1.5rem' }],         // 16px, 24px
        't-lg': ['1.375rem', { lineHeight: '1.75rem' }],    // 22px, 28px
        //headline
        'h-sm': ['1.25rem', { lineHeight: '1.875rem' }], // 20px, 30px
        'h-md': ['1.5rem', { lineHeight: '2rem' }],      // 24px, 32px
        'h-lg': ['1.875rem', { lineHeight: '2.375rem' }],// 30px, 38px
        //display
        'd-sm': ['2.25rem', { lineHeight: '2.75rem' }],   // 36px, 44px
        'd-md': ['3rem', { lineHeight: '3.75rem' }],      // 48px, 60px
        'd-lg': ['3.75rem', { lineHeight: '4.5rem' }],    // 60px, 72px
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
    plugin(({ addVariant }) => addVariant("phx-click-loading", [".phx-click-loading&", ".phx-click-loading &"])),
    plugin(({ addVariant }) => addVariant("phx-submit-loading", [".phx-submit-loading&", ".phx-submit-loading &"])),
    plugin(({ addVariant }) => addVariant("phx-change-loading", [".phx-change-loading&", ".phx-change-loading &"])),

    // Embeds Heroicons (https://heroicons.com) into your app.css bundle
    // See your `CoreComponents.icon/1` for more information.
    //
    // plugin(function ({ matchComponents, theme }) {
    //   let iconsDir = path.join(__dirname, "../deps/heroicons/optimized")
    //   let values = {}
    //   let icons = [
    //     ["", "/24/outline"],
    //     ["-solid", "/24/solid"],
    //     ["-mini", "/20/solid"],
    //     ["-micro", "/16/solid"]
    //   ]
    //   icons.forEach(([suffix, dir]) => {
    //     fs.readdirSync(path.join(iconsDir, dir)).forEach(file => {
    //       let name = path.basename(file, ".svg") + suffix
    //       values[name] = { name, fullPath: path.join(iconsDir, dir, file) }
    //     })
    //   })
    //   matchComponents({
    //     "hero": ({ name, fullPath }) => {
    //       let content = fs.readFileSync(fullPath).toString().replace(/\r?\n|\r/g, "")
    //       let size = theme("spacing.6")
    //       if (name.endsWith("-mini")) {
    //         size = theme("spacing.5")
    //       } else if (name.endsWith("-micro")) {
    //         size = theme("spacing.4")
    //       }
    //       return {
    //         [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
    //         "-webkit-mask": `var(--hero-${name})`,
    //         "mask": `var(--hero-${name})`,
    //         "mask-repeat": "no-repeat",
    //         "background-color": "currentColor",
    //         "vertical-align": "middle",
    //         "display": "inline-block",
    //         "width": size,
    //         "height": size
    //       }
    //     }
    //   }, { values })
    // })
  ]
}
