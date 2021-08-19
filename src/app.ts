import express, {Request,Response, NextFunction, response} from "express";
import todoRoutes from "./routes/Todos";
import { json } from "body-parser";

const app = express();

app.use(json());

app.use((err: Error,req: Request,resp:Response,next:NextFunction) =>{
    resp
    .status(500)
    .json({message: err.message});
});

app.use("/todos",todoRoutes);

app.listen(3000);