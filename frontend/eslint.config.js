import vue from 'eslint-plugin-vue'
import tailwindcss from 'eslint-plugin-tailwindcss'
import globals from 'globals'

export default [
  {
    files: ['**/*.js', '**/*.vue'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      vue,
      tailwindcss,
    },
    rules: {
      'vue/no-unused-vars': 'error',
      'vue/script-setup-uses-vars': 'error',
      'tailwindcss/no-custom-classname': 'warn',
      'no-undef': 'error',
    },
  },
  {
    files: ['vite.config.ts'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    rules: {
      'no-undef': 'off',
    },
  },
]
