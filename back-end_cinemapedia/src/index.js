import express from "express";
import cors from 'cors';
import RouterGeneral from "./routes/index.routes.js";

const app = express();

const corsOptions = {
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(RouterGeneral);

app.listen(8000, '0.0.0.0', () => {
    console.log("Servidor en linea");
});