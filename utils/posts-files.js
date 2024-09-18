import fs from "fs";
import { postDirectory } from "./posts-directory";

export function getPostsFiles() {
  return fs.readdirSync(postDirectory);
}
