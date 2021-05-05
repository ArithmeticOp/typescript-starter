import buildFastifyApp from "./src/app";

const appOptions = {
  logger: true,
};

const app = buildFastifyApp(appOptions);

app.listen(3000);
