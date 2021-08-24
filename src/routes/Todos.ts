import { Router } from "express";
import {
    createTodo
    , getTodos
    , updateTodos
    , deleteTodos
} from "../controllers/Todo";

const router = Router();

router.post("/", createTodo);

router.get("/", getTodos);

router.patch("/:id", updateTodos);

router.delete("/:id", deleteTodos);

export default router;