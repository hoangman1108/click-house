const ClickHouse = require('@apla/clickhouse')
const fs = require('fs');

const ch = new ClickHouse({
  host: "localhost",
  dataObjects: true,
  readonly: false,
  queryOptions: {
    database: "SM",
  },
});

const pathFile = './user_info.csv';
const newPathFile = './user_info_new.csv';


let csvContent = fs.readFileSync(pathFile).toString().split('\n');
csvContent.shift();
csvContent = csvContent.join('\n');

fs.writeFileSync(newPathFile, csvContent);


// done
const readableStream = fs.createReadStream(newPathFile)
const writableStream = ch.query('INSERT INTO SM.users FORMAT CSV', (_err, _result) => {
  fs.unlinkSync(newPathFile);
})
readableStream.pipe(writableStream);

