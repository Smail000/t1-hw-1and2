import type { Task } from "@/entities/task/model/task.types";
import { createContext } from "react";

export const TaskContext = createContext<Task[]>([]);
