import { readLines } from "https://deno.land/std/io/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("bible.db");
db.query(`
  CREATE TABLE IF NOT EXISTS bible (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    sayings TEXT NOT NULL
  )
`);

const filename = path.join(Deno.cwd(), "bible.txt");
const fileReader = await Deno.open(filename);
for await (const line of readLines(fileReader)) {
  db.query("INSERT INTO bible (sayings) VALUES (?)", [line]);
}

db.close();
