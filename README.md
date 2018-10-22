# react-form

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

**`react-form` provides tools to manage forms in React.js app. This library is based on [`formik`](https://github.com/jaredpalmer/formik/) and provides components for use with [Polaris](https://polaris.shopify.com).**

## 🔥 Highlights

* Declarative composability
* Build on top of [`formik`](https://github.com/jaredpalmer/formik/)
* Validation and error messages management
* [Strictly-typed](https://www.typescriptlang.org/)

## 📟  Demos
* [Polaris typescript app](examples/polaris-typescript-app) ➡️ [See it !](https://xenodochial-hypatia-4937cc.netlify.com/)
* [Polaris web app](examples/polaris-web-app)

## 💻  How to use

Install as project dependency:

```shell
$ yarn add react-form-polaris
```

Now you can use it to manager your forms without pain:
```js
import * as React from 'react'
import { Form, TextField } from 'react-form-polaris'

function App() {
  return (
    <Form initialValues={{}} onSubmit={console.log}>
      <TextField name="name" label="Say me name" />
    </Form>
  )
}
```

## 🕺 Contribute

**Want to hack on `react-form`? Awesome! We welcome contributions from anyone and everyone. :rocket:**

1. Fork this repository to your own GitHub account and then clone it to your local device
2. Install dependencies using Yarn: `yarn`
3. Ensure that the tests are passing using `yarn test`
4. Send a pull request 🙌

Remember to add tests for your change if possible.
️
## 👋 Questions

If you have any questions, feel free to open an issue.
