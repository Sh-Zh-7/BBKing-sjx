const fs = require('fs');
const readline = require('readline');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database(':memory:');
const fileStream = fs.createReadStream('bible.txt');
const lineReader = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity
});

db.serialize(async () => {
  // 创建bible表格
  db.run("CREATE TABLE bible (ID INTEGER PRIMARY KEY, sayings TEXT)");
  // 把txt中的内容插入到bible表中
  const stmt = db.prepare("INSERT INTO bible VALUES (?, ?)");
  let index = 0;
  for await (const line of lineReader) {
    stmt.run(index, line);
    ++index;
  }
  stmt.finalize();
  // 持久化
  const backup = db.backup('bible.db');
  backup.step(-1, function(err) {
    if (err) throw err;
    backup.finish(function(err) {
      if (err) throw err;
    });
  });
});
