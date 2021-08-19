import express, {Request,Response, NextFunction, response} from "express";
import todoRouters from "./routes/Todos";

const app = express();
app.use((err: Error,req: Request,resp:Response,next:NextFunction) =>{
    resp
    .status(500)
    .json({message: err.message});
});
app.use("/todos",todoRouters);


app.listen(3000);