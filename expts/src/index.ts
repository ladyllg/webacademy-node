import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validEnv";
import { engine } from "express-handlebars";
import router from "./router/router";
import { logger } from "./logger";
import sass from "node-sass-middleware";

var morgan = require("morgan");

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;

//Log
app.use(logger("completo"));

// Roteamento
app.use(router);

// Middleware de arquivos estáticos
app.use(express.static("public"));
app.use("/css", express.static(`${__dirname}/../../public/css`));
app.use("/js", [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`),
]);

// Middleware do SASS
app.use(
    sass({
        src: `${__dirname}/../../public/scss`,
        dest: `${__dirname}/../../public/css`,
        outputStyle: "compressed",
        prefix: "/css",
    })
);

// views
app.engine(
    "handlebars",
    engine({
        layoutsDir: `${__dirname}/views/layouts`,
        defaultLayout: "main",
    })
);
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);

// helpers
app.engine(
    "handlebars",
    engine({
        helpers: require(`${__dirname}/views/helpers/helpers.ts`),
    })
);

app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});
