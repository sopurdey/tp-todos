import { Todo } from "./todo";

export interface Users {
  users: User[];
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  todos: Todo[];
}
