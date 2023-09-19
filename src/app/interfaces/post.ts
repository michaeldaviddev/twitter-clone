import { User } from "./user";

export interface Post {
  user: User;
  caption: string;
  created_at: string;
}
