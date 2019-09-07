import express from "express";
import morgan from "morgan";

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(morgan('dev'));

export default app;