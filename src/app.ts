import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";
import path from "path";
import cors from 'cors';

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// ROUTE
app.use('/api', indexRoutes);

// Folder for uploaded images
app.use( '/uploads', express.static(path.resolve('uploads')) );

export default app;