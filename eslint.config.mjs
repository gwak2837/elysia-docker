import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import perfectionistNatural from 'eslint-plugin-perfectionist/configs/recommended-natural'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  { ignores: ['out/*'] },
  perfectionistNatural,
  eslintConfigPrettier,
]
