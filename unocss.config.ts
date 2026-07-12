import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  shortcuts: [
    ['flex-center', 'flex items-center justify-center'],
    ['flex-between', 'flex items-center justify-between'],
    ['flex-col-center', 'flex flex-col items-center justify-center'],
    ['btn', 'px-4 py-2 rounded-lg cursor-pointer transition-all duration-200'],
    ['btn-primary', 'btn bg-cyan-400 text-white hover:bg-cyan-300 shadow-lg shadow-cyan-400/30'],
    ['card', 'clay-card'],
  ],
  theme: {
    colors: {
      primary: '#06b6d4',
      cyan: {
        50: '#ecfeff',
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      cyber: {
        blue: '#00f0ff',
        pink: '#ff00ff',
        purple: '#8b5cf6',
        neon: '#39ff14',
      },
    },
  },
  rules: [],
})