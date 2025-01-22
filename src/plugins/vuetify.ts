/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import LuxonAdapter from '@date-io/luxon'

// Composables
import { createVuetify } from 'vuetify'
import { VBtn } from 'vuetify/components/VBtn'
import { md1 } from 'vuetify/blueprints'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  aliases: {
    MyButton: VBtn,
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant : 'flat',
    },
    MyButton: {
      color: 'secondary',
      variant: 'tonal'
    },
    VCard: {
      MyButton: { color: 'secondary' },
      VBtn: { color: 'primary' },
    }
  },
  theme: {
    defaultTheme: 'dark',
  },
  date: {
    locale: {
      en: 'en-GB',
    },
    adapter: LuxonAdapter,
  },
  blueprint: md1,
  locale: {
    locale: 'en',
  },
});

declare module 'vuetify' {
  namespace DateMode {
    interface Adapter extends LuxonAdapter {}
  }
}
