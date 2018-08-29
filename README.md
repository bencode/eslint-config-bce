# eslint-config-bce

Eslint config for nodejs/es6

- based on [eslint-config-airbnb-base](https://github.com/airbnb/javascript)
- add some friendly [rules](rules.js) that from practice.

## Usage


1. Install

```shell
npm install --save-dev eslint eslint-config-bce
```

2. add config to `.eslintrc`

```js
{
  extends: 'eslint-config-bce',
  rules: {
    // custom rules
  }
}
```


3. add `lint` command in project's package.json


```json
{
 "scripts": {
   "lint": "eslint src"
 }
}
```

4. run

```shell
npm run lint
npm run lint --fix   # lint and auto fix
```

***Browser or React project lint refer to [eslint-config-bcd-react](https://github.com/bencode/bcd-react)***
