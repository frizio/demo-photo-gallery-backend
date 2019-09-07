import express from "express";

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 4000);

export default app;