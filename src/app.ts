import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(morgan('dev'));

// ROUTE
app.use('/routes', indexRoutes);

export default app;