module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: [
    'dist',
    '.eslintrc.cjs',
    'tailwind.config.cjs',
    'postcss.config.cjs',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // TypeScript에서 타입 import 스타일을 지정
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
      },
    ],
    // import 순서 규칙
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        // 오름차순 정렬, 대소문자 구분 하지 않음
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always',
      },
    ],
    // import 규칙
    'sort-imports': [
      'error',
      {
        // 대문자 무시
        ignoreCase: true,
        // 변수나 함수의 순서가 import 정렬에 영향을 미치지 않음
        ignoreDeclarationSort: true,
        // 멤버 정렬 무시
        ignoreMemberSort: false,
        // 그룹화
        allowSeparatedGroups: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function'] },
    ],
    'arrow-body-style': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        some: ['id'],
      },
    ],
    'no-alert': 'off',
  },
};
