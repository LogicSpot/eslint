## Logicspot (http://logicspot.com) ESLint config file

Default Logicspot ESLint config, with added Prettier warnings for consistant code

Install:
```
npm install eslint-config-logicspot
```

Add to your ESLint config (`.eslintrc` or simular):
```
{
  "extends": ["eslint-config-logicspot"]
}
```

By default this config supports ES6, but to downgrade to an ES5 only prodject, you can use this config instead
```
{
  "extends": ["eslint-config-logicspot/es5"]
}
```
