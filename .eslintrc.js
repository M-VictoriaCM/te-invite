module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    // Aquí puedes añadir reglas personalizadas o sobrescribir las existentes
    'vue/multi-word-component-names': 'off', // Desactiva el requerimiento de nombres multi-palabra
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/html-indent': ['error', 2], // Indentación de 2 espacios para HTML
    'vue/script-indent': ['error', 2], // Indentación de 2 espacios para JS
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      }
    }]
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off' // Desactiva indentación para archivos .vue (usamos vue/script-indent)
      }
    }
  ]
}