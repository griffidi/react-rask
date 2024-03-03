import ts from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import eslint from 'eslint';
import prettier from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import webVitals from 'next/core-web-vitals';
import reactJest from 'reach-app/jest';
import react from 'react-app';

const sharedPlugins = {
  ts,
  prettierPlugin,
};

const sharedBrowserGlobals = {
  browser: 'writable',
  node: 'readonly',
  es2022: 'writable',
};

const sharedRules = {
  ...eslint['recommended'],
  ...ts.rules['stylistic-type-checked'],
  ...ts.rules['strict-type-checked'],
  ...prettier.rules,
  'ts/ban-types': 'warn',
  'ts/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: true,
    },
  ],
  'ts/consistent-type-imports': [
    'error',
    {
      prefer: 'type-imports',
      fixStyle: 'inline-type-imports',
    },
  ],
};

const sharedAppRules = {
  ...react,
  ...reactJest,
  ...webVitals,
};

const sharedNodeGlobals = {
  browser: 'readonly',
  node: 'writable',
  es2022: 'writable',
};

const appConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
    ...sharedAppRules,
  },
};

const packagesConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
  },
};

const nodeConfig = {
  plugins: {
    ...sharedPlugins,
  },
  rules: {
    ...sharedRules,
  },
};

export default [
  {
    files: ['apis/node-api/src/**/*.ts', 'apis/node-api/prisma/**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        tsconfigRootDir: 'api/*',
      },
      globals: {
        ...sharedNodeGlobals,
      },
    },
    ...nodeConfig,
  },
  {
    files: ['*.ts'],
    languageOptions: {
      sourceType: 'module',
      ecmaVersion: 2022,
      parser,
      parserOptions: {
        project: true,
        // tsconfigRootDir: import.meta.url,
      },
      globals: {
        ...sharedBrowserGlobals,
      },
    },
    ...appConfig,
  },
];
