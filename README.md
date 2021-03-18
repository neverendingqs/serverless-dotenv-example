# serverless-dotenv-example

This is a simple example to how you can use `dotenv` with the [Serverless
Framework](https://www.serverless.com/) without using a
[plugin](https://github.com/neverendingqs/serverless-dotenv-plugin).

See the example in action by running the following:

```sh
npm i
npm run sls -- package
```

The logs and `.serverless/cloudformation-template-update-stack.json` show env vars being loaded by
`dotenv` as expected.
