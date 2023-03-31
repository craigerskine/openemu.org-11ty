// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// twind
import { install, injectGlobal } from '@twind/core';
import presetAutoprefix from '@twind/preset-autoprefix';
import presetTailwind from '@twind/preset-tailwind';
import presetLineClamp from '@twind/preset-line-clamp';
import presetTypography from '@twind/preset-typography';

install({
  presets: [presetAutoprefix(), presetTailwind(), presetLineClamp(), presetTypography()],
  darkMode: 'class',
  hash: false,
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    extend: {
      colors: ({ theme }) => ({
        gray: theme('colors.neutral'),
        blue: {
          50: '#F6F8FA',
          100: '#EEF0F6',
          200: '#D4DAE7',
          300: '#BAC4D9',
          400: '#8697BD',
          500: '#526BA0',
          600: '#4A6090',
          700: '#3E5078',
          800: '#314060',
          900: '#28344E',
        },
      }),
      fontFamily: ({ theme }) => ({
        sans: 'Inter,'+ theme('fontFamily.sans'),
      }),
      boxShadow: {
        'btn': 'inset 0 1px 0 rgba(255,255,255,.33), inset 0 -1px 0 rgba(0,0,0,.33)',
        'img': '0 -1px 0 rgba(255,255,255,.33), 0 0 0 1px #000, 0 -2px 0 #000, 0 1px 10px rgba(0,0,0,.75)',
        'prefs': '0 0 0 1px rgba(0,0,0,.2), 0 0 40px rgba(0,0,0,.75)',
        'ring': 'inset 0 1px 0 rgba(255,255,255,0.25), inset 0 0 0 4px #9C2931, inset 0 0 0 5px rgba(0,0,0,0.5), inset 0 0 12px #000, 0 0 6px #000',
      },
    },
  },
  rules: [
    [ 'text-shadow-btn', { 'text-shadow': '0 -1px 0 rgba(0,0,0,.33)' }, ],
    [ 'btn-', ({ $$ }) => `py-1.5 px-3 bg-${$$}-700 text-${$$}-50 font-semibold bg-gradient-to-b from-white/25 via-transparent inline-flex items-center gap-1.5 rounded-md shadow-btn text-shadow-btn motion-safe:(transition) hover:(bg-${$$}-500)` ],
  ],
});

injectGlobal({
  'html': { '@apply': 'bg-gray-900' },
  'body': { '@apply': '!block' },
  '.explode .controller-sms': { '@apply': '-left-[750px]' },
  '.explode .controller-gb': { '@apply': '-left-[532px]' },
  '.explode .controller-snes': { '@apply': '-right-[228px]' },
  '.explode .controller-gba': { '@apply': '-right-[505px]' },
  '.explode .controller-md': { '@apply': '-right-[764px]' },
  '[x-cloak]': { '@apply': 'hidden', },
});

// alpinejs
import Alpine from 'alpinejs';
import intersect from '@alpinejs/intersect';
import focus from '@alpinejs/focus';
Alpine.plugin(intersect);
Alpine.plugin(focus);
window.Alpine = Alpine;
Alpine.start();